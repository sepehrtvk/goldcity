import { catchError, map, Observable, tap } from "rxjs";
import { ajax, AjaxError, AjaxRequest, AjaxResponse } from "rxjs/ajax";
import { AppConfig } from "../common/app-config";
import querystring from "querystring";

export default class Api {
  bodyType = "url-encoded";
  parseResponseToJSON = false;

  constructor(configApi) {
    if (configApi && configApi.bodyType) this.bodyType = configApi.bodyType;
    if (configApi && configApi.parseResponseToJSON)
      this.parseResponseToJSON = configApi.parseResponseToJSON;
  }

  getBaseUrl() {
    if (AppConfig.api.server.port) {
      return `${
        AppConfig.api.server.url + ":" + AppConfig.api.server.port + "/"
      }`;
    } else {
      return `${AppConfig.api.server.url + "/"}`;
    }
  }
  createUrl(method, params, query) {
    // let url = new UrlAssembler(this.getBaseUrl()).template(method);
    let url = this.getBaseUrl() + method.toString();
    if (params !== undefined && params !== null) url = url.param(params);
    if (query !== undefined && query !== null) url = url.query(query);
    let str = url.toString();
    return str;
  }

  generateHeaders() {
    const token = localStorage.getItem("access_token");
    const headers = {};
    if (token) headers.authorization = `Bearer ${token}`;
    return {
      ...headers,
      "Content-Type":
        this.bodyType == "json"
          ? "application/json"
          : "application/x-www-form-urlencoded",
      Accept: "*/*",
      // "Accept-Encoding": "gzip, deflate, br",
      // Connection: "keep-alive",
      // "x-requested-with": "XMLHttpRequest",
    };
  }
  appendHeaders(headers) {
    const generalHeaders = this.generateHeaders();
    if (generalHeaders) {
      if (headers) return { ...headers, ...generalHeaders };
      else return generalHeaders;
    }
  }
  processRequest(request) {
    return request.pipe(
      map((response) => ({
        response: response.response,
        request: response.request,
        headers: response.xhr.getAllResponseHeaders(),
      })),
      catchError((errorResponse) => {
        if (errorResponse.status == 401) {
          localStorage.removeItem("isAuth");
          localStorage.removeItem("access_token");
          window.location.reload();
        }

        if (
          errorResponse.status == 500 ||
          errorResponse.status == 422 ||
          errorResponse.status == 403
        )
          throw new Error("خطای پیش بینی نشده از سمت سرور.");
        else if (errorResponse.status == 0)
          throw new Error("لطفا مجددا تلاش کنید.");
        else throw errorResponse;
      })
    );
  }

  post(method, config, responseHeaders) {
    const headers = this.appendHeaders(config.headers);
    const qBody = querystring.stringify(config.body);
    return this.processRequest(
      ajax({
        method: "POST",
        url: this.createUrl(method),
        body: this.bodyType == "json" ? config.body : qBody,
        headers: headers,
      })
    ).pipe(
      tap((r) => {
        if (config && config.request != undefined) {
          for (var k in r.request) config.request[k] = r.request[k];
        }
        if (responseHeaders != undefined) {
          const hds = r.headers.split("\n");
          for (var k in hds) {
            const keyValues = hds[k].split(": ");
            if (keyValues.length == 2)
              responseHeaders.push({
                key: keyValues[0].trim(),
                value: keyValues[1].trim(),
              });
          }
        }
      }),
      map((r) => r.response),
      catchError((error) => {
        if (error.status == 401) {
          //TODO : logout
        }
        if (error.response) {
          const msg = error.response.detail;
          // .map((er) => er.errorMessage)
          // .join("\n");
          throw new Error(msg);
        }
        if (error?.response?.message) throw new Error(error.response.message);
        if (error?.message) throw new Error(error.message);
        throw new Error("Unhandled Error!");
      })
    );
  }

  get(method, config, responseHeaders) {
    const headers = this.appendHeaders(config?.headers);
    return this.processRequest(
      ajax({
        method: "GET",
        url: this.createUrl(method, config?.params, config?.query),
        headers: headers,
        responseType: "json",
      })
    ).pipe(
      map((r) =>
        this.parseResponseToJSON ? JSON.parse(r.response) : r.response
      ),
      catchError((error) => {
        if (error?.response?.errors) {
          const msg = error.response.errors
            .map((er) => er.errorMessage)
            .join("\n");
          throw new Error(msg);
        }
        if (error?.response?.message) throw new Error(error.response.message);
        if (error?.message) throw new Error(error.message);
        throw new Error("Unhandled Error!");
      })
    );
  }
}

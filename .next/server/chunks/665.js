"use strict";
exports.id = 665;
exports.ids = [665];
exports.modules = {

/***/ 1665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8391);



const SellAndBuyPrice = ({ goldPrice, getValues })=>{
    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getValues({
            price,
            amount
        });
    }, [
        price,
        amount
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-3 d-flex align-items-center justify-content-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "amount",
                        className: "form-label mb-0 ms-3 fw-bold",
                        children: "مبلغ"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: price && (0,_common_Localization__WEBPACK_IMPORTED_MODULE_2__/* .toLocaleCurrencyString */ .lX)(price),
                        type: "text",
                        className: "form-control text-center",
                        id: "amount",
                        style: {
                            width: 200
                        },
                        onChange: (e)=>{
                            const valueKey = e.target.value.replaceAll("٬", "");
                            const value = (0,_common_Localization__WEBPACK_IMPORTED_MODULE_2__/* .convertNumbersToEnglish */ .ZF)(valueKey);
                            const re = /^[0-9\b]+$/;
                            if (value === "" || re.test(value)) {
                                setPrice(value);
                                const number = +value / goldPrice;
                                if ((0,_common_Localization__WEBPACK_IMPORTED_MODULE_2__/* .isFloat */ .Q7)(number)) {
                                    setAmount(number.toFixed(8).toString());
                                } else {
                                    setAmount(number.toString());
                                }
                            }
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "me-2",
                        children: "ریال"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-3 d-flex align-items-center justify-content-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "amount",
                        className: "form-label mb-0 ms-2 fw-bold",
                        children: "مقدار"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: amount,
                        onChange: (e)=>{
                            const value = e.target.value;
                            const re = /^[0-9\b]+$/;
                            if (value === "" || re.test(value)) {
                                setAmount(value);
                                setPrice((+value * goldPrice).toString());
                            }
                        },
                        type: "text",
                        className: "form-control text-center",
                        style: {
                            width: 200
                        },
                        id: "amount"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "me-2",
                        children: "گرم"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SellAndBuyPrice);


/***/ })

};
;
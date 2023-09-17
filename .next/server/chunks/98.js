"use strict";
exports.id = 98;
exports.ids = [98];
exports.modules = {

/***/ 6874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/goldPhoto.390e01c4.jpeg","height":1121,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAcACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAvQF//8QAHxAAAQIGAwAAAAAAAAAAAAAAAgMRAAEFEhMUFSJx/9oACAEBAAE/AAGqcorMklNfZ6FkFrfHj//EABgRAAMBAQAAAAAAAAAAAAAAAAECEQAh/9oACAECAQE/AFULYT07/8QAGBEAAgMAAAAAAAAAAAAAAAAAAhEAASH/2gAIAQMBAT8AImsqf//Z","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ 1839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ getAllGoldItem),
  Z: () => (/* binding */ getAllGoldList)
});

;// CONCATENATED MODULE: ./Data/GOLD_LIST.json
const GOLD_LIST_namespaceObject = JSON.parse('{"d":[{"id":"1","title":"شمش طلای 100 گرمی","weight":"100","price":"2370070400","saleman":"گلدیس","ayar":"740","ojrat":"0"},{"id":"2","title":"شمش طلای 10 گرمی","weight":"10","price":"2370070400","saleman":"گلدیس","ayar":"740","ojrat":"0"},{"id":"3","title":"شمش طلای 20 گرمی","weight":"20","price":"2370070400","saleman":"گلدیس","ayar":"740","ojrat":"0"},{"id":"4","title":"شمش طلای 30 گرمی","weight":"30","price":"2370070400","saleman":"گلدیس","ayar":"740","ojrat":"0"}]}');
;// CONCATENATED MODULE: ./Data/index.js

const getAllGoldList = ()=>{
    return GOLD_LIST_namespaceObject.d;
};
const getAllGoldItem = (itemId)=>{
    return GOLD_LIST_namespaceObject.d.find((item)=>item.id == itemId);
};


/***/ })

};
;
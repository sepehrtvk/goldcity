"use strict";
exports.id = 391;
exports.ids = [391];
exports.modules = {

/***/ 8391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q7: () => (/* binding */ isFloat),
/* harmony export */   ZF: () => (/* binding */ convertNumbersToEnglish),
/* harmony export */   gL: () => (/* binding */ toLocaleNumberString),
/* harmony export */   lX: () => (/* binding */ toLocaleCurrencyString)
/* harmony export */ });
/* unused harmony exports convertNumbersToPersian, commaSeperatorForPrice */
// import PN from 'persian-number';
const toLocaleCurrencyString = (price, displayCurrency, displayToman)=>{
    if (!price && price !== 0) {
        return "---";
    }
    price = Math.ceil(price);
    return new Intl.NumberFormat("fa-IR", {
        style: "decimal",
        minimumFractionDigits: 0
    }).format(price) + (displayCurrency ? displayToman ? " تومان" : " ریال" : "");
};
const toLocaleNumberString = (number, useGrouping)=>{
    if (!useGrouping) {
        useGrouping = false;
    }
    if (!number && number !== 0) {
        return "---";
    }
    return new Intl.NumberFormat("fa-IR", {
        style: "decimal",
        minimumFractionDigits: 0,
        useGrouping
    }).format(number);
};
//change persian numbers to english
var persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g
];
const arabicNumbers = [
    /٠/g,
    /١/g,
    /٢/g,
    /٣/g,
    /٤/g,
    /٥/g,
    /٦/g,
    /٧/g,
    /٨/g,
    /٩/g
];
const englishNumbers = (/* unused pure expression or super */ null && ([
    /0/g,
    /1/g,
    /2/g,
    /3/g,
    /4/g,
    /5/g,
    /6/g,
    /7/g,
    /8/g,
    /9/g
]));
const convertNumbersToEnglish = function(str) {
    if (typeof str === "string") {
        for(var i = 0; i < 10; i++){
            str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
    }
    return str;
};
var persianNumbersArray = (/* unused pure expression or super */ null && ([
    "۰",
    "۱",
    "۲",
    "۳",
    "۴",
    "۵",
    "۶",
    "۷",
    "۸",
    "۹"
]));
const convertNumbersToPersian = function(str) {
    if (typeof str === "string") {
        for(var i = 0; i < 10; i++){
            str = str.replace(englishNumbers[i], persianNumbersArray[i]).replace(arabicNumbers[i], persianNumbersArray[i]);
        }
    }
    return str;
};
// export const convertAmountToWords = (amount) => {
//   return Math.floor(+amount / 10)
//     ? PN.convert(Math.floor(+amount / 10)) + ' تومان '
//     : '';
// };
const commaSeperatorForPrice = (amount)=>{
    const persianNum = amount.split("٬").join("").replace("٬", "");
    let isnum = /^\d+$/.test(convertNumbersToEnglish(persianNum));
    if (persianNum && isnum) return convertNumbersToEnglish(persianNum);
    else return 0;
};
const isFloat = (n)=>{
    return Number(n) === n && n % 1 !== 0;
};


/***/ })

};
;
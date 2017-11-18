webpackJsonp([1],{

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($, toastr) {
Object.defineProperty(exports, "__esModule", { value: true });
//debugger;
__webpack_require__(2);
__webpack_require__(3);
var helpers_1 = __webpack_require__(4);
var md5 = __webpack_require__(5);
var h1 = document.createElement('h1');
h1.innerText = helpers_1.sayHelloTo('Javascript - Developer - P10');
var p = document.createElement('p');
p.innerHTML = '"<strong>JHIKHUKJ</strong>" em md5:<strong>' + md5('JHIKHUKJ') + '</strong>';
document.body.appendChild(h1);
document.body.appendChild(p);
console.log($('body h1').html());
toastr.info('Mensagem informativa.', 'Informação');

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(1)))

/***/ })

},[6]);
//# sourceMappingURL=app.bundle.js.map
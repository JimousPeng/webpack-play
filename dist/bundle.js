/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/add-content.js":
/*!****************************!*\
  !*** ./src/add-content.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n    document.write('hello world01236 !')\n});\n\n//# sourceURL=webpack:///./src/add-content.js?");

/***/ }),

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*CommonJs*/\r\nconsole.log('running 测试112', module.l)\r\n// var name = 'calculator.js'\r\n// exports.name = 'calculator123',\r\n// exports.add = function(a, b) {\r\n//     return a * b;\r\n// }\r\nmodule.exports = {\r\n    name: 'calculator',\r\n    add: function(a,b) {\r\n        return a + b;\r\n    }\r\n}\r\n// console.log('running 测试1123', module.loaded)\r\n// var count = 0;\r\n// module.exports = {\r\n//     count: count,\r\n//     add: function(a, b) {\r\n//         count += 1;\r\n//         return a + b;\r\n//     }\r\n// }\r\n\r\n\r\n\r\n/*ES6*/\r\n// export default {\r\n//     name: 'calculator',\r\n//     add: function(a,b) {\r\n//         return a + b;\r\n//     }\r\n// }\r\n// export { name }\r\n// export let count = 0;\r\n// export const name = 'calculator';\r\n// const add = function(a, b) { return a + b; }\r\n// export default {\r\n//     add\r\n// }\n\n//# sourceURL=webpack:///./src/calculator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-content */ \"./src/add-content.js\");\n\ndocument.write('jimous,hhh.<br />');\nObject(_add_content__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n// 在导入一个模块时，对CommonJS来说获取的是一份导出值的拷贝，而在ES6 Module中则是值的动态映射，并且这个映射是只读的。\n\n/**CommonJs */\n// var name = 'index.js';\n// const calcurator = require('./calculator.js');\n// console.log(name, calcurator)\n// const add = require('./calculator.js').add;\n// const sum = add(2, 3);\n// console.log('sum', sum);\n// const moduleName = require('./calculator.js').name;\n// console.log('end')\n// var count = require('./calculator.js').count;\n// var add = require('./calculator.js').add;\n// console.log(count); //0\n// add(2,3)\n// console.log(count); //0\n// count += 1;\n// console.log(count); //1\n// require('./foo.js')\n\n\n\n\n/**ES6 */\n// import { name, add as count } from './calculator.js';\n// console.log(name, count, '看看module')\n// const sum = count(2, 3);\n// console.log(sum)\n// import myCalculator, { name } from './calculator.js';\n// let a = myCalculator.add(2, 3);\n// console.log(a, name)\n// import * as myCont from './calculator.js';\n// console.log(myCont.default)\n// import foo from './foo.js'\n// console.log(9)\n// foo('index.js')\n\n\n\n// 模块打包原理\nconst calculator = __webpack_require__(/*! ./calculator */ \"./src/calculator.js\");\nconst sum = calculator.add(2, 3);\nconsole.log('sum', sum)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
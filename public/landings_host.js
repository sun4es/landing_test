//////////////////////////////////////////////////////////////////
//                                                               //
//                                                               //
//                                                               //
//            Этот файл сгенерирован автоматически!              //
//                                                               //
//              НЕ ПЫТАЙТЕСЬ ЕГО МОДИФИЦИРОВАТЬ!                 //
//                                                               //
//           Все ваши изменения будут утеряны после              //
//           последующей компиляции исходных файлов.             //
//                                                               //
//                                                               //
//////////////////////////////////////////////////////////////////

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
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/js/modules/web/entries/landings_host.js":
/*!********************************************************!*\
  !*** ./static/js/modules/web/entries/landings_host.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landings_transport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../landings/transport */ \"./static/js/modules/web/landings/transport.js\");\n\n\nvar host = {};\n\nhost.init = function (url, compatible) {\n  if (!this.iframe) {\n    var iframe = document.createElement('iframe');\n    iframe.className = 'frame';\n    iframe.webkitallowfullscreen = true;\n    iframe.mozallowfullscreen = true;\n    iframe.allowfullscreen = true;\n    iframe.allow = 'geolocation; microphone; camera; autoplay;';\n\n    if (!compatible || navigator.userAgent.match(/iPad|iPhone|iPod/) && !window.MSStream) {\n      iframe.scrolling = 'no';\n    }\n    this.iframe = iframe;\n\n    this.__onViewportResize = this.onViewportResize.bind(this);\n    window.addEventListener('resize', this.__onViewportResize);\n\n    var wrapper = document.querySelector('.wrapper');\n    wrapper.appendChild(iframe);\n    this.wrapper = wrapper;\n  }\n\n  var viewportSize = getViewportSize();\n  url += (~url.indexOf('?') ? '&' : '?') + 'viewportWidth=' + viewportSize.width + '&viewportHeight=' + viewportSize.height;\n\n  this.iframe.src = url;\n  this.transport = new _landings_transport__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.iframe.contentWindow, api);\n};\n\nhost.call = function (name, params) {\n  return host.transport.call(name, params);\n};\n\nfunction getViewportSize() {\n  var documentElement = document.documentElement;\n  return {\n    width: documentElement.clientWidth,\n    height: documentElement.clientHeight\n  };\n};\n\nfunction getScroll() {\n  return {\n    x: window.pageXOffset,\n    y: window.pageYOffset\n  };\n}\n\nhost.onViewportResize = function () {\n  this.call('resize', getViewportSize());\n};\n\nvar rectSet = false;\n\nvar api = {};\n\napi.setSize = function (_ref) {\n  var width = _ref.width,\n      height = _ref.height;\n\n  host.iframe.style.cssText += ';width:' + width + 'px;height:' + height + 'px;min-width:100%;min-height:100%;';\n  if (!rectSet) {\n    host.wrapper.style.width = '';\n    host.wrapper.style.height = '';\n  }\n};\n\napi.resetSize = function () {\n  var _host$iframe$getBound = host.iframe.getBoundingClientRect(),\n      width = _host$iframe$getBound.width,\n      height = _host$iframe$getBound.height;\n\n  host.wrapper.style.cssText += ';width:' + width + 'px;height:' + height + 'px;';\n  host.iframe.style.cssText += ';width:0;height:0;min-height:0;min-width:0;';\n};\n\napi.setRect = function (_ref2) {\n  var width = _ref2.width,\n      height = _ref2.height,\n      x = _ref2.x,\n      y = _ref2.y;\n\n  if (!rectSet) {\n    rectSet = true;\n\n    var scroll = api.getScroll();\n    host.lastScroll = scroll;\n    api.setScroll({ x: 0, y: 0 });\n\n    host.wrapper.style.cssText += ';width:' + width + 'px;height:' + height + 'px;overflow:hidden;';\n    host.wrapper.scrollTop = y !== undefined ? y : scroll.y;\n    host.wrapper.scrollLeft = x !== undefined ? x : scroll.x;\n  }\n};\n\napi.unsetRect = function () {\n  rectSet = false;\n\n  host.wrapper.style.cssText += ';width:auto;height:auto;overflow:visible;';\n  host.wrapper.scrollTop = 0;\n  host.wrapper.scrollLeft = 0;\n  api.setScroll(host.lastScroll);\n};\n\napi.setTitle = function (title) {\n  return document.title = title;\n};\n\napi.getViewportSize = function () {\n  return getViewportSize();\n};\n\napi.getScroll = function () {\n  return getScroll();\n};\n\napi.setScroll = function (scroll) {\n  var currentScroll = getScroll();\n  window.scrollTo((scroll.hasOwnProperty('x') ? scroll : currentScroll).x, (scroll.hasOwnProperty('y') ? scroll : currentScroll).y);\n};\n\napi.onLoad = function (pageSize) {\n  api.setSize(pageSize);\n};\n\nvar preventDefault = function preventDefault(e) {\n  return e.preventDefault();\n};\n\napi.disableScroll = function () {\n  var _getViewportSize = getViewportSize(),\n      width = _getViewportSize.width,\n      height = _getViewportSize.height;\n\n  var style = ';overflow:hidden;width:' + width + 'px;height:' + height + 'px;';\n  document.documentElement.style.cssText += style;\n  document.body.style.cssText += style;\n\n  document.body.addEventListener('touchstart', preventDefault);\n  document.body.addEventListener('touchmove', preventDefault);\n};\n\napi.enableScroll = function () {\n  var body = document.body;\n  var documentElement = document.documentElement;\n  documentElement.style.overflow = body.style.overflow = '';\n  documentElement.style.width = body.style.width = '';\n  documentElement.style.height = body.style.height = '';\n\n  document.body.removeEventListener('touchstart', preventDefault);\n  document.body.removeEventListener('touchmove', preventDefault);\n};\n\nwindow.host = host;\n/* harmony default export */ __webpack_exports__[\"default\"] = (host);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvanMvbW9kdWxlcy93ZWIvZW50cmllcy9sYW5kaW5nc19ob3N0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3N0YXRpYy9qcy9tb2R1bGVzL3dlYi9lbnRyaWVzL2xhbmRpbmdzX2hvc3QuanM/ZmM2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhbnNwb3J0IGZyb20gJy4vLi4vbGFuZGluZ3MvdHJhbnNwb3J0JztcblxuY29uc3QgaG9zdCA9IHt9O1xuXG5ob3N0LmluaXQgPSBmdW5jdGlvbih1cmwsIGNvbXBhdGlibGUpIHtcbiAgaWYgKCF0aGlzLmlmcmFtZSkge1xuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIGlmcmFtZS5jbGFzc05hbWUgPSAnZnJhbWUnO1xuICAgIGlmcmFtZS53ZWJraXRhbGxvd2Z1bGxzY3JlZW4gPSB0cnVlO1xuICAgIGlmcmFtZS5tb3phbGxvd2Z1bGxzY3JlZW4gPSB0cnVlO1xuICAgIGlmcmFtZS5hbGxvd2Z1bGxzY3JlZW4gPSB0cnVlO1xuICAgIGlmcmFtZS5hbGxvdyA9ICdnZW9sb2NhdGlvbjsgbWljcm9waG9uZTsgY2FtZXJhOyBhdXRvcGxheTsnO1xuXG4gICAgaWYgKCFjb21wYXRpYmxlIHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkfGlQaG9uZXxpUG9kLykgJiYgIXdpbmRvdy5NU1N0cmVhbSkpIHtcbiAgICAgIGlmcmFtZS5zY3JvbGxpbmcgPSAnbm8nO1xuICAgIH1cbiAgICB0aGlzLmlmcmFtZSA9IGlmcmFtZTtcblxuICAgIHRoaXMuX19vblZpZXdwb3J0UmVzaXplID0gdGhpcy5vblZpZXdwb3J0UmVzaXplLmJpbmQodGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX19vblZpZXdwb3J0UmVzaXplKTtcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICB0aGlzLndyYXBwZXIgPSB3cmFwcGVyO1xuICB9XG5cbiAgY29uc3Qgdmlld3BvcnRTaXplID0gZ2V0Vmlld3BvcnRTaXplKCk7XG4gIHVybCArPSAofnVybC5pbmRleE9mKCc/JykgPyAnJicgOiAnPycpICsgJ3ZpZXdwb3J0V2lkdGg9JyArIHZpZXdwb3J0U2l6ZS53aWR0aCArICcmdmlld3BvcnRIZWlnaHQ9JyArIHZpZXdwb3J0U2l6ZS5oZWlnaHQ7XG5cbiAgdGhpcy5pZnJhbWUuc3JjID0gdXJsO1xuICB0aGlzLnRyYW5zcG9ydCA9IG5ldyBUcmFuc3BvcnQodGhpcy5pZnJhbWUuY29udGVudFdpbmRvdywgYXBpKTtcbn07XG5cbmhvc3QuY2FsbCA9IChuYW1lLCBwYXJhbXMpID0+IGhvc3QudHJhbnNwb3J0LmNhbGwobmFtZSwgcGFyYW1zKTtcblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRTaXplKCkge1xuICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiBkb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgaGVpZ2h0OiBkb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xuICByZXR1cm4ge1xuICAgIHg6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICB5OiB3aW5kb3cucGFnZVlPZmZzZXQsXG4gIH07XG59XG5cbmhvc3Qub25WaWV3cG9ydFJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNhbGwoJ3Jlc2l6ZScsIGdldFZpZXdwb3J0U2l6ZSgpKTtcbn07XG5cbmxldCByZWN0U2V0ID0gZmFsc2U7XG5cbmNvbnN0IGFwaSA9IHt9XG5cbmFwaS5zZXRTaXplID0gKHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XG4gIGhvc3QuaWZyYW1lLnN0eWxlLmNzc1RleHQgKz0gYDt3aWR0aDoke3dpZHRofXB4O2hlaWdodDoke2hlaWdodH1weDttaW4td2lkdGg6MTAwJTttaW4taGVpZ2h0OjEwMCU7YDtcbiAgaWYgKCFyZWN0U2V0KSB7XG4gICAgaG9zdC53cmFwcGVyLnN0eWxlLndpZHRoID0gJyc7XG4gICAgaG9zdC53cmFwcGVyLnN0eWxlLmhlaWdodCA9ICcnO1xuICB9XG59O1xuXG5hcGkucmVzZXRTaXplID0gKCkgPT4ge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIH0gPSBob3N0LmlmcmFtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgaG9zdC53cmFwcGVyLnN0eWxlLmNzc1RleHQgKz0gYDt3aWR0aDoke3dpZHRofXB4O2hlaWdodDoke2hlaWdodH1weDtgO1xuICBob3N0LmlmcmFtZS5zdHlsZS5jc3NUZXh0ICs9IGA7d2lkdGg6MDtoZWlnaHQ6MDttaW4taGVpZ2h0OjA7bWluLXdpZHRoOjA7YDtcbn07XG5cbmFwaS5zZXRSZWN0ID0gKHsgd2lkdGgsIGhlaWdodCwgeCwgeSwgfSkgPT4ge1xuICBpZiAoIXJlY3RTZXQpIHtcbiAgICByZWN0U2V0ID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNjcm9sbCA9IGFwaS5nZXRTY3JvbGwoKTtcbiAgICBob3N0Lmxhc3RTY3JvbGwgPSBzY3JvbGw7XG4gICAgYXBpLnNldFNjcm9sbCh7IHg6IDAsIHk6IDAsIH0pO1xuXG4gICAgaG9zdC53cmFwcGVyLnN0eWxlLmNzc1RleHQgKz0gYDt3aWR0aDoke3dpZHRofXB4O2hlaWdodDoke2hlaWdodH1weDtvdmVyZmxvdzpoaWRkZW47YDtcbiAgICBob3N0LndyYXBwZXIuc2Nyb2xsVG9wID0geSAhPT0gdW5kZWZpbmVkID8geSA6IHNjcm9sbC55O1xuICAgIGhvc3Qud3JhcHBlci5zY3JvbGxMZWZ0ID0geCAhPT0gdW5kZWZpbmVkID8geCA6IHNjcm9sbC54O1xuICB9XG59O1xuXG5hcGkudW5zZXRSZWN0ID0gKCkgPT4ge1xuICByZWN0U2V0ID0gZmFsc2U7XG5cbiAgaG9zdC53cmFwcGVyLnN0eWxlLmNzc1RleHQgKz0gYDt3aWR0aDphdXRvO2hlaWdodDphdXRvO292ZXJmbG93OnZpc2libGU7YDtcbiAgaG9zdC53cmFwcGVyLnNjcm9sbFRvcCA9IDA7XG4gIGhvc3Qud3JhcHBlci5zY3JvbGxMZWZ0ID0gMDtcbiAgYXBpLnNldFNjcm9sbChob3N0Lmxhc3RTY3JvbGwpO1xufVxuXG5hcGkuc2V0VGl0bGUgPSB0aXRsZSA9PlxuICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuXG5hcGkuZ2V0Vmlld3BvcnRTaXplID0gKCkgPT5cbiAgZ2V0Vmlld3BvcnRTaXplKCk7XG5cbmFwaS5nZXRTY3JvbGwgPSAoKSA9PlxuICBnZXRTY3JvbGwoKTtcblxuYXBpLnNldFNjcm9sbCA9IHNjcm9sbCA9PiB7XG4gIGNvbnN0IGN1cnJlbnRTY3JvbGwgPSBnZXRTY3JvbGwoKTtcbiAgd2luZG93LnNjcm9sbFRvKFxuICAgIChzY3JvbGwuaGFzT3duUHJvcGVydHkoJ3gnKSA/IHNjcm9sbCA6IGN1cnJlbnRTY3JvbGwpLngsXG4gICAgKHNjcm9sbC5oYXNPd25Qcm9wZXJ0eSgneScpID8gc2Nyb2xsIDogY3VycmVudFNjcm9sbCkueVxuICApO1xufVxuXG5hcGkub25Mb2FkID0gcGFnZVNpemUgPT4ge1xuICBhcGkuc2V0U2l6ZShwYWdlU2l6ZSk7XG59XG5cbmNvbnN0IHByZXZlbnREZWZhdWx0ID0gZSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XG5cbmFwaS5kaXNhYmxlU2Nyb2xsID0gKCkgPT4ge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIH0gPSBnZXRWaWV3cG9ydFNpemUoKTtcbiAgY29uc3Qgc3R5bGUgPSBgO292ZXJmbG93OmhpZGRlbjt3aWR0aDoke3dpZHRofXB4O2hlaWdodDoke2hlaWdodH1weDtgO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBzdHlsZTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5jc3NUZXh0ICs9IHN0eWxlO1xuXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHByZXZlbnREZWZhdWx0KTtcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCk7XG59XG5cbmFwaS5lbmFibGVTY3JvbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgZG9jdW1lbnRFbGVtZW50LnN0eWxlLndpZHRoID0gYm9keS5zdHlsZS53aWR0aCA9ICcnO1xuICBkb2N1bWVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYm9keS5zdHlsZS5oZWlnaHQgPSAnJztcblxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBwcmV2ZW50RGVmYXVsdCk7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudERlZmF1bHQpO1xufVxuXG53aW5kb3cuaG9zdCA9IGhvc3Q7XG5leHBvcnQgZGVmYXVsdCBob3N0OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./static/js/modules/web/entries/landings_host.js\n");

/***/ }),

/***/ "./static/js/modules/web/landings/transport.js":
/*!*****************************************************!*\
  !*** ./static/js/modules/web/landings/transport.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Transport = function () {\n  function Transport(targetWindow, api) {\n    var _this = this;\n\n    _classCallCheck(this, Transport);\n\n    this.callId = 0;\n    this.callbacks = {};\n    this.targetWindow = targetWindow;\n    this.api = api;\n    window.addEventListener('message', function (e) {\n      return _this.onMessage(e);\n    });\n  }\n\n  Transport.prototype.post = function post(data) {\n    this.targetWindow.postMessage(JSON.parse(JSON.stringify(data)), '*');\n  };\n\n  Transport.prototype.call = function call(name, params) {\n    var _this2 = this;\n\n    return new Promise(function (resolve, reject) {\n      var id = _this2.callId++;\n      _this2.callbacks[id] = function (error, value) {\n        if (error) {\n          reject(error);\n        }\n        resolve(value);\n        delete _this2.callbacks[id];\n      };\n      _this2.post({ method: { id: id, name: name, params: params } });\n    });\n  };\n\n  Transport.prototype.onMessage = function onMessage(_ref) {\n    var data = _ref.data;\n\n    if (data.hasOwnProperty('method')) {\n      var method = data.method;\n\n      if (method.hasOwnProperty('value')) {\n        this.processResponse(method);\n      } else {\n        this.processRequest(method);\n      }\n    }\n  };\n\n  Transport.prototype.processResponse = function processResponse(method) {\n    var id = method.id,\n        error = method.error,\n        value = method.value;\n\n    if (this.callbacks.hasOwnProperty(id)) {\n      this.callbacks[id].call(this, error, value);\n    }\n  };\n\n  Transport.prototype.processRequest = function processRequest(method) {\n    var _this3 = this;\n\n    var name = method.name,\n        params = method.params;\n\n    if (this.api.hasOwnProperty(name)) {\n      return new Promise(function (resolve) {\n        return resolve(_this3.api[name].call(_this3, params));\n      }).then(function (value) {\n        return _this3.return(method, value);\n      }, function (error) {\n        return _this3.return(method, undefined, error);\n      });\n    }\n  };\n\n  Transport.prototype.return = function _return(method, value, error) {\n    this.post({ method: _extends({}, method, { value: value || null, error: error }) });\n  };\n\n  return Transport;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Transport);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvanMvbW9kdWxlcy93ZWIvbGFuZGluZ3MvdHJhbnNwb3J0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3N0YXRpYy9qcy9tb2R1bGVzL3dlYi9sYW5kaW5ncy90cmFuc3BvcnQuanM/NWY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUcmFuc3BvcnQge1xuXG4gIGNvbnN0cnVjdG9yKHRhcmdldFdpbmRvdywgYXBpKSB7XG4gICAgdGhpcy5jYWxsSWQgPSAwO1xuICAgIHRoaXMuY2FsbGJhY2tzID0ge307XG4gICAgdGhpcy50YXJnZXRXaW5kb3cgPSB0YXJnZXRXaW5kb3c7XG4gICAgdGhpcy5hcGkgPSBhcGk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBlID0+IHRoaXMub25NZXNzYWdlKGUpKTtcbiAgfVxuXG4gIHBvc3QoZGF0YSkge1xuICAgIHRoaXMudGFyZ2V0V2luZG93LnBvc3RNZXNzYWdlKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpLCAnKicpO1xuICB9XG5cbiAgY2FsbChuYW1lLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgaWQgPSB0aGlzLmNhbGxJZCsrO1xuICAgICAgdGhpcy5jYWxsYmFja3NbaWRdID0gKGVycm9yLCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICBkZWxldGUgdGhpcy5jYWxsYmFja3NbaWRdO1xuICAgICAgfTtcbiAgICAgIHRoaXMucG9zdCh7IG1ldGhvZDogeyBpZCwgbmFtZSwgcGFyYW1zLCB9fSk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1lc3NhZ2UoeyBkYXRhIH0pIHtcbiAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnbWV0aG9kJykpIHtcbiAgICAgIGNvbnN0IHsgbWV0aG9kIH0gPSBkYXRhO1xuICAgICAgaWYgKG1ldGhvZC5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICB0aGlzLnByb2Nlc3NSZXNwb25zZShtZXRob2QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9jZXNzUmVxdWVzdChtZXRob2QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3NSZXNwb25zZShtZXRob2QpIHtcbiAgICBjb25zdCB7IGlkLCBlcnJvciwgdmFsdWUsIH0gPSBtZXRob2Q7XG4gICAgaWYgKHRoaXMuY2FsbGJhY2tzLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgdGhpcy5jYWxsYmFja3NbaWRdLmNhbGwodGhpcywgZXJyb3IsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcm9jZXNzUmVxdWVzdChtZXRob2QpIHtcbiAgICBjb25zdCB7IG5hbWUsIHBhcmFtcyB9ID0gbWV0aG9kO1xuICAgIGlmICh0aGlzLmFwaS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT5cbiAgICAgICAgcmVzb2x2ZSh0aGlzLmFwaVtuYW1lXS5jYWxsKHRoaXMsIHBhcmFtcykpXG4gICAgICApLnRoZW4odmFsdWUgPT4gdGhpcy5yZXR1cm4obWV0aG9kLCB2YWx1ZSksIGVycm9yID0+IHRoaXMucmV0dXJuKG1ldGhvZCwgdW5kZWZpbmVkLCBlcnJvcikpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKG1ldGhvZCwgdmFsdWUsIGVycm9yKSB7XG4gICAgdGhpcy5wb3N0KHsgbWV0aG9kOiB7IC4uLm1ldGhvZCwgdmFsdWU6IHZhbHVlIHx8IG51bGwsIGVycm9yIH19KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc3BvcnQ7Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./static/js/modules/web/landings/transport.js\n");

/***/ }),

/***/ 63:
/*!**************************************************************!*\
  !*** multi ./static/js/modules/web/entries/landings_host.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/kphp/akanov/redesign/static/js/modules/web/entries/landings_host.js */"./static/js/modules/web/entries/landings_host.js");


/***/ })

/******/ });
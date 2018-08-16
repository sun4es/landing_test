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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/js/modules/web/entries/landings_api.js":
/*!*******************************************************!*\
  !*** ./static/js/modules/web/entries/landings_api.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landings_transport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../landings/transport */ \"./static/js/modules/web/landings/transport.js\");\n\n\nvar api = {};\nvar host = new _landings_transport__WEBPACK_IMPORTED_MODULE_0__[\"default\"](window.top, api);\n\nvar landing = {\n  api: api,\n  host: host\n};\n\nvar getPageSize = function getPageSize() {\n  var html = document.documentElement;\n  var body = document.body;\n\n  var width = Math.max(body.scrollWidth, html.scrollWidth, body.offsetWidth, html.offsetWidth, body.clientWidth, html.clientWidth);\n  var height = Math.max(body.scrollHeight, html.scrollHeight, body.offsetHeight, html.offsetHeight, body.clientHeight, html.clientHeight);\n\n  return { width: width, height: height };\n};\n\nvar getContainersSize = function getContainersSize(selectors) {\n  var width = 0;\n  var height = 0;\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = selectors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var selector = _step.value;\n\n      var container = document.querySelector(selector);\n      if (container) {\n        var rect = container.getBoundingClientRect();\n        width = Math.max(rect.left + rect.width, width);\n        height = Math.max(rect.top + rect.height, height);\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return { width: width, height: height };\n};\n\nlanding.setTitle = function (title) {\n  return host.call('setTitle', title);\n};\n\nlanding.getViewportSize = function () {\n  return host.call('getViewportSize');\n};\n\nlanding.getScroll = function () {\n  return host.call('getScroll');\n};\n\nlanding.setScroll = function (x, y) {\n  return host.call('setScroll', { x: x, y: y });\n};\n\nlanding.setSize = function (size) {\n  host.call('setSize', size);\n};\n\nlanding.setRect = function (rect) {\n  return host.call('setRect', rect);\n};\n\nlanding.unsetRect = function () {\n  return host.call('unsetRect');\n};\n\nlanding.resetSize = function () {\n  host.call('resetSize');\n};\n\nlanding.updateSize = function (selectors) {\n  return requestAnimationFrame(function () {\n    var size = selectors ? getContainersSize(selectors) : getPageSize();\n    landing.setSize(size);\n  });\n};\n\nwindow.addEventListener('DOMContentLoaded', function (e) {\n  return host.call('onLoad', getPageSize());\n});\nwindow.addEventListener('resize', function () {\n  return landing.updateSize();\n});\n\nwindow.landing = landing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (landing);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0aWMvanMvbW9kdWxlcy93ZWIvZW50cmllcy9sYW5kaW5nc19hcGkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3RhdGljL2pzL21vZHVsZXMvd2ViL2VudHJpZXMvbGFuZGluZ3NfYXBpLmpzP2RjMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYW5zcG9ydCBmcm9tICcuLy4uL2xhbmRpbmdzL3RyYW5zcG9ydCc7XG5cbmNvbnN0IGFwaSA9IHt9O1xuY29uc3QgaG9zdCA9IG5ldyBUcmFuc3BvcnQod2luZG93LnRvcCwgYXBpKTtcblxuY29uc3QgbGFuZGluZyA9IHtcbiAgYXBpLFxuICBob3N0LFxufTtcblxuY29uc3QgZ2V0UGFnZVNpemUgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1heChcbiAgICBib2R5LnNjcm9sbFdpZHRoLCBodG1sLnNjcm9sbFdpZHRoLFxuICAgIGJvZHkub2Zmc2V0V2lkdGgsIGh0bWwub2Zmc2V0V2lkdGgsXG4gICAgYm9keS5jbGllbnRXaWR0aCwgaHRtbC5jbGllbnRXaWR0aFxuICApO1xuICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heChcbiAgICBib2R5LnNjcm9sbEhlaWdodCwgaHRtbC5zY3JvbGxIZWlnaHQsXG4gICAgYm9keS5vZmZzZXRIZWlnaHQsIGh0bWwub2Zmc2V0SGVpZ2h0LFxuICAgIGJvZHkuY2xpZW50SGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodFxuICApO1xuXG4gIHJldHVybiB7IHdpZHRoLCBoZWlnaHQsIH07XG59XG5cbmNvbnN0IGdldENvbnRhaW5lcnNTaXplID0gKHNlbGVjdG9ycykgPT4ge1xuICBsZXQgd2lkdGggPSAwO1xuICBsZXQgaGVpZ2h0ID0gMDtcbiAgZm9yIChjb25zdCBzZWxlY3RvciBvZiBzZWxlY3RvcnMpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICBjb25zdCByZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgd2lkdGggPSBNYXRoLm1heChyZWN0LmxlZnQgKyByZWN0LndpZHRoLCB3aWR0aCk7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1heChyZWN0LnRvcCArIHJlY3QuaGVpZ2h0LCBoZWlnaHQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0LCB9O1xufVxuXG5sYW5kaW5nLnNldFRpdGxlID0gKHRpdGxlKSA9PlxuICBob3N0LmNhbGwoJ3NldFRpdGxlJywgdGl0bGUpO1xuXG5sYW5kaW5nLmdldFZpZXdwb3J0U2l6ZSA9ICgpID0+XG4gIGhvc3QuY2FsbCgnZ2V0Vmlld3BvcnRTaXplJyk7XG5cbmxhbmRpbmcuZ2V0U2Nyb2xsID0gKCkgPT5cbiAgaG9zdC5jYWxsKCdnZXRTY3JvbGwnKTtcblxubGFuZGluZy5zZXRTY3JvbGwgPSAoeCwgeSkgPT5cbiAgaG9zdC5jYWxsKCdzZXRTY3JvbGwnLCB7IHgsIHksIH0pO1xuXG5sYW5kaW5nLnNldFNpemUgPSAoc2l6ZSkgPT4ge1xuICBob3N0LmNhbGwoJ3NldFNpemUnLCBzaXplKTtcbn1cblxubGFuZGluZy5zZXRSZWN0ID0gKHJlY3QpID0+XG4gIGhvc3QuY2FsbCgnc2V0UmVjdCcsIHJlY3QpO1xuXG5sYW5kaW5nLnVuc2V0UmVjdCA9ICgpID0+XG4gIGhvc3QuY2FsbCgndW5zZXRSZWN0Jyk7XG5cbmxhbmRpbmcucmVzZXRTaXplID0gKCkgPT4ge1xuICBob3N0LmNhbGwoJ3Jlc2V0U2l6ZScpO1xufVxuXG5sYW5kaW5nLnVwZGF0ZVNpemUgPSAoc2VsZWN0b3JzKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICBjb25zdCBzaXplID0gc2VsZWN0b3JzID8gZ2V0Q29udGFpbmVyc1NpemUoc2VsZWN0b3JzKSA6IGdldFBhZ2VTaXplKCk7XG4gIGxhbmRpbmcuc2V0U2l6ZShzaXplKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiBob3N0LmNhbGwoJ29uTG9hZCcsIGdldFBhZ2VTaXplKCkpKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiBsYW5kaW5nLnVwZGF0ZVNpemUoKSk7XG5cbndpbmRvdy5sYW5kaW5nID0gbGFuZGluZztcbmV4cG9ydCBkZWZhdWx0IGxhbmRpbmc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./static/js/modules/web/entries/landings_api.js\n");

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

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./static/js/modules/web/entries/landings_api.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/kphp/akanov/redesign/static/js/modules/web/entries/landings_api.js */"./static/js/modules/web/entries/landings_api.js");


/***/ })

/******/ });
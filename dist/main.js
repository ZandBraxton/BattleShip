/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/ff89a96d505ab9dac0cf84b09e766fcc.jpg */ "./src/assets/ff89a96d505ab9dac0cf84b09e766fcc.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    background-color: blue;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    overflow: hidden;\n}\n\n:root {\n    --ship-width: 50px;\n    --ship-height: 50px;\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\n*, *::before, *::after {\n    box-sizing: inherit;\n}\n\n.header {\n    position: relative;\n}\n\n.logo {\n    display: block;\n    height: 300px;\n    width: auto;\n    max-width: 50%;\n    margin: 0 auto auto auto;\n}\n\n.new-game {\n    display: block;\n    margin: 1em auto auto auto;\n    font-size: 5rem;\n    font-family: sans-serif;\n    background-color: #153f77;\n    border: none;\n    outline: 2px solid black;\n    color: white;\n    padding: 0.1em;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.new-game:hover {\n    background-color: #2060b4;\n    transform: scale(1.3);\n}\n\n.rotate {\n    display: block;\n    margin: 1em auto auto auto;\n    font-size: 2rem;\n    font-family: sans-serif;\n    padding: 0.3em;\n    background-color: #153f77;\n    border: none;\n    outline: 2px solid black;\n    color: white;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.rotate:hover {\n    background-color: #2060b4;\n    transform: scale(1.3);\n}\n\n.game-container {\n    display: flex;\n    flex-flow: row;\n    gap: 3em;\n    justify-content: center;\n}\n\n.p1board, .cpuboard {\n    display: grid;\n    height: 500;\n    width: 500;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n    position: relative;\n    background-color: #2060b4;\n}\n\n.cell {\n    outline: 1px solid black ;\n    width: 100%;\n    height: 50px;\n    text-align: center;\n}\n\n.ship {\n    background-color: rgb(139, 148, 139);\n}\n\n\n.p1board >.cell:hover {\n    background-color: rgba(31, 214, 71, 0.863);\n    width: var(--ship-width);\n    height: var(--ship-height);\n    cursor: pointer;\n}\n\n.cpuboard >.cell:hover {\n    background-color: rgba(31, 214, 71, 0.863);\n    cursor: pointer;\n}\n\n.missed {\n    background-color: rgb(255, 255, 255);\n}\n\n.hit {\n    background-color: red;\n}\n\n.gameover-container {\n    display: flex;\n    flex-flow: column;\n    margin: 0 auto 0 auto;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 30%;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(30, 43, 100);\n    outline: 3px solid black;\n    z-index: 800;\n    position: absolute;\n}\n\n.gameover-overlay {\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: black;\n    opacity: 0.56;\n    z-index: 700;\n    position: absolute;\n}\n\n.gameover {\n    width: 100%;\n    margin: 0.2em auto auto auto;\n    font-size: 6rem;\n    text-align: center;\n    color: rgb(255, 255, 255);\n    z-index: 900;\n    position: relative;\n}\n\n.play-again {\n    width: 80%;\n    margin: 0 auto auto auto;\n    font-size: 3rem;\n    background-color: rgba(0, 0, 0, 0.72);\n    color: white;\n    border: none;\n    z-index: 900;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.play-again:hover {\n    background-color: white;\n    color: black;\n    transition: all 0.3s;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,sBAAsB;IACtB,mDAAgE;IAChE,4BAA4B;IAC5B,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,WAAW;IACX,cAAc;IACd,wBAAwB;AAC5B;;AAEA;IACI,cAAc;IACd,0BAA0B;IAC1B,eAAe;IACf,uBAAuB;IACvB,yBAAyB;IACzB,YAAY;IACZ,wBAAwB;IACxB,YAAY;IACZ,cAAc;IACd,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,0BAA0B;IAC1B,eAAe;IACf,uBAAuB;IACvB,cAAc;IACd,yBAAyB;IACzB,YAAY;IACZ,wBAAwB;IACxB,YAAY;IACZ,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,QAAQ;IACR,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,UAAU;IACV,uCAAuC;IACvC,oCAAoC;IACpC,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;AACxC;;;AAGA;IACI,0CAA0C;IAC1C,wBAAwB;IACxB,0BAA0B;IAC1B,eAAe;AACnB;;AAEA;IACI,0CAA0C;IAC1C,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,qBAAqB;IACrB,OAAO;IACP,QAAQ;IACR,YAAY;IACZ,UAAU;IACV,mBAAmB;IACnB,uBAAuB;IACvB,kCAAkC;IAClC,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,MAAM;IACN,OAAO;IACP,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,4BAA4B;IAC5B,eAAe;IACf,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,wBAAwB;IACxB,eAAe;IACf,qCAAqC;IACrC,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,oBAAoB;AACxB","sourcesContent":["body {\n    margin: 0;\n    background-color: blue;\n    background: url('./assets/ff89a96d505ab9dac0cf84b09e766fcc.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    overflow: hidden;\n}\n\n:root {\n    --ship-width: 50px;\n    --ship-height: 50px;\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\n*, *::before, *::after {\n    box-sizing: inherit;\n}\n\n.header {\n    position: relative;\n}\n\n.logo {\n    display: block;\n    height: 300px;\n    width: auto;\n    max-width: 50%;\n    margin: 0 auto auto auto;\n}\n\n.new-game {\n    display: block;\n    margin: 1em auto auto auto;\n    font-size: 5rem;\n    font-family: sans-serif;\n    background-color: #153f77;\n    border: none;\n    outline: 2px solid black;\n    color: white;\n    padding: 0.1em;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.new-game:hover {\n    background-color: #2060b4;\n    transform: scale(1.3);\n}\n\n.rotate {\n    display: block;\n    margin: 1em auto auto auto;\n    font-size: 2rem;\n    font-family: sans-serif;\n    padding: 0.3em;\n    background-color: #153f77;\n    border: none;\n    outline: 2px solid black;\n    color: white;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.rotate:hover {\n    background-color: #2060b4;\n    transform: scale(1.3);\n}\n\n.game-container {\n    display: flex;\n    flex-flow: row;\n    gap: 3em;\n    justify-content: center;\n}\n\n.p1board, .cpuboard {\n    display: grid;\n    height: 500;\n    width: 500;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n    position: relative;\n    background-color: #2060b4;\n}\n\n.cell {\n    outline: 1px solid black ;\n    width: 100%;\n    height: 50px;\n    text-align: center;\n}\n\n.ship {\n    background-color: rgb(139, 148, 139);\n}\n\n\n.p1board >.cell:hover {\n    background-color: rgba(31, 214, 71, 0.863);\n    width: var(--ship-width);\n    height: var(--ship-height);\n    cursor: pointer;\n}\n\n.cpuboard >.cell:hover {\n    background-color: rgba(31, 214, 71, 0.863);\n    cursor: pointer;\n}\n\n.missed {\n    background-color: rgb(255, 255, 255);\n}\n\n.hit {\n    background-color: red;\n}\n\n.gameover-container {\n    display: flex;\n    flex-flow: column;\n    margin: 0 auto 0 auto;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 30%;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(30, 43, 100);\n    outline: 3px solid black;\n    z-index: 800;\n    position: absolute;\n}\n\n.gameover-overlay {\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: black;\n    opacity: 0.56;\n    z-index: 700;\n    position: absolute;\n}\n\n.gameover {\n    width: 100%;\n    margin: 0.2em auto auto auto;\n    font-size: 6rem;\n    text-align: center;\n    color: rgb(255, 255, 255);\n    z-index: 900;\n    position: relative;\n}\n\n.play-again {\n    width: 80%;\n    margin: 0 auto auto auto;\n    font-size: 3rem;\n    background-color: rgba(0, 0, 0, 0.72);\n    color: white;\n    border: none;\n    z-index: 900;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.play-again:hover {\n    background-color: white;\n    color: black;\n    transition: all 0.3s;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/asset.js":
/*!*****************************!*\
  !*** ./src/assets/asset.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _battleship_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship.png */ "./src/assets/battleship.png");



const header = document.querySelector('.header')

const myLogo = new Image()
myLogo.id = "logo"
myLogo.src = _battleship_png__WEBPACK_IMPORTED_MODULE_0__
myLogo.alt = "logo"
myLogo.classList.add('logo')

header.appendChild(myLogo)

/***/ }),

/***/ "./src/modules/gameFactory.js":
/*!************************************!*\
  !*** ./src/modules/gameFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameFactory)
/* harmony export */ });
class gameFactory {
    constructor() {
        this.boardArea = []
        this.attacked = []
        this.hasShip = []
        this.allShipsSunk = false
    }

    makeBoard() {
        //for some reason breaks if i is 0
        for (let i = 1; i < 101; i++) {
            this.boardArea.push(i)
        }
    
    }

    checkCollision(coords) {
        //collision with x axis
        const collision = [9, 19, 29, 39, 49, 59, 69, 79, 89];
        //check if collision with other ship
        for (let i = 0; i < this.hasShip.length; i++) {
            if (coords.some((coord) => this.hasShip[i].coords.includes(coord)))
            {
                return false
            }
        }
        //check if collision exceeds board size
        if (coords.some((coord) => !this.boardArea[coord])) {
            return false
        } 
        //check if collision with x axis
        else if (collision.some((coord) => {
            return [coord, coord + 1].every((result) => 
                coords.includes(result)
            )  
        })
        ) {
            return false
        } else {
            return true
        }
    }

    setShip(ship) {
       let check = this.checkCollision(ship.coords)
       if (check === false) {
           ship.coords = []
           return false
       }
        this.hasShip.push(ship)
        return ship
    }

    sinkShip(ship) {
        let index = this.hasShip.indexOf(ship)
        this.hasShip.splice(index, 1)
        if (this.hasShip.length === 0) {
            //if the array is 0 then all ships are sunk, returns game over
            this.allShipsSunk = true
            return "Game Over"
        }
        return this.hasShip
    }

    receiveAttack(location) {
        //goes through all 5 ships, checking if the target is within any of their coords
        for (let i = 0; i < this.hasShip.length; i++) {
             if (this.hasShip[i]['coords'].includes(location)) {
                this.attacked.push(location)
                return this.hasShip[i]
            }
            //if this spot has already been attacked
        } if (this.attacked.includes(location)) {
            return "AlreadyAttacked"
        } else {
            this.attacked.push(location)
            return "Missed"  
        }
        
    }

}


/***/ }),

/***/ "./src/modules/playerFactory.js":
/*!**************************************!*\
  !*** ./src/modules/playerFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ playerFactory)
/* harmony export */ });
/* harmony import */ var _gameFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameFactory */ "./src/modules/gameFactory.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory */ "./src/modules/shipFactory.js");




class playerFactory {
    constructor(name) {
        this.name = name
        this.gameBoard = new _gameFactory__WEBPACK_IMPORTED_MODULE_0__["default"]()
        this.ships = []
    }

    createShips() {
        let ship = new _shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"]("Carrier", 5)
        this.ships.push(ship)
        ship = new _shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"]("Battleship", 4)
        this.ships.push(ship)
        ship = new _shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"]("Destroyer", 3)
        this.ships.push(ship)
        ship = new _shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"]("Submarine", 3)
        this.ships.push(ship)
        ship = new _shipFactory__WEBPACK_IMPORTED_MODULE_1__["default"]("Patrol Boat", 2)
        this.ships.push(ship)
    }

    fireShot(location, player) {
        let result = player.gameBoard.receiveAttack(location)
        if (result === "Missed") {
            return result
        }
        if (result === "AlreadyAttacked") {
            return result
        }
        let isDead = result.Hit(location)
        if (isDead === true) {
            //result will be game over if all ships are sunk
           let isGameOver = player.gameBoard.sinkShip(result)
           if (isGameOver === "Game Over") {
               return "gameover"
           }
        }
        return "Hit"

    }




}

/***/ }),

/***/ "./src/modules/shipFactory.js":
/*!************************************!*\
  !*** ./src/modules/shipFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shipFactory)
/* harmony export */ });
class shipFactory {
    constructor(name, length) {
        this.name = name
        this.length = length
        this.coords = []
        this.sunk = false
    }

    setCoords(location, axis) {
        //sets coords on the ship object itself
        for (let i = 0; i < this.length; i++) {
            if (axis === 0) {
                this.coords.push(location + i)
            } else {
                this.coords.push(location + i * 10)
            }
        }
        return this
    }

    Hit(location) {
            let index = this.coords.indexOf(location)
            //remove the coords from the array if hit
            this.coords.splice(index, 1)
            if (this.coords.length === 0) {
                //if all coords on the ship are hit, sink the ship
                return this.isSunk()
            }
            return "got hit"
    }

    isSunk() {
       this.sunk = true
       return this.sunk
    }

};


/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderBoard": () => (/* binding */ renderBoard),
/* harmony export */   "renderShips": () => (/* binding */ renderShips),
/* harmony export */   "renderShot": () => (/* binding */ renderShot),
/* harmony export */   "renderGameOver": () => (/* binding */ renderGameOver)
/* harmony export */ });
function renderBoard(element, player) {
    let main = document.querySelector('.game-container')
    let board = document.createElement('div')
    board.classList.add(element)
    for (let i = 0; i < player.gameBoard.boardArea.length; i++) {
        let cell = document.createElement('div')
        //cell.textContent = i
        cell.classList.add('cell')
        cell.id = `${player.name} ${i}`
        cell.dataset.indexNumber = i
        board.appendChild(cell)
    }
    main.appendChild(board)
}

function renderShips(board, player) {
    let currentBoard = document.querySelector(board)
    for (let i = 0; i < player.gameBoard.hasShip.length; i++) {
        for (let j = 0; j < player.gameBoard.hasShip[i].length; j++) {
             let index = player.gameBoard.hasShip[i].coords[j]
             let child = currentBoard.childNodes[index]
             child.classList.add('ship')
        }  
    }
}

function renderShot(location, result) {
    let coords = document.getElementById(location)
    if (result === "Missed") {
        coords.classList.add("missed")
    } else if(result === "Hit") {
        coords.classList.add('hit')
    }
}


function renderGameOver(element, result) {
    const overlay = document.createElement('div')
    overlay.classList.add('gameover-overlay')

    const header = document.querySelector('header')
    const gameoverContainer = document.createElement('div')
    gameoverContainer.classList.add('gameover-container')

    const gameoverDom = document.createElement('div')
    gameoverDom.classList.add('gameover')
    if (result === "Win") {
        gameoverDom.textContent = 'You Win!'
    } else {
        gameoverDom.textContent = 'You Lose!'
    }

    const playAgain = document.createElement('button')
    playAgain.textContent = "Play Again?"
    playAgain.classList.add('play-again')
    
    element.appendChild(overlay)
    gameoverContainer.appendChild(gameoverDom)
    gameoverContainer.appendChild(playAgain)
    header.appendChild(gameoverContainer)
}



/***/ }),

/***/ "./src/assets/battleship.png":
/*!***********************************!*\
  !*** ./src/assets/battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05a821ecb1bc7ca85286.png";

/***/ }),

/***/ "./src/assets/ff89a96d505ab9dac0cf84b09e766fcc.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/ff89a96d505ab9dac0cf84b09e766fcc.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd2a4760358c6e2fe8cc.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/playerFactory */ "./src/modules/playerFactory.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _assets_asset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/asset */ "./src/assets/asset.js");






const initGame = (() => {

let Player1;
let CPU;
let i;
let axis;
let root = document.documentElement;
const body = document.querySelector('body')

const newGame = document.querySelector('.new-game')
newGame.addEventListener('click', gameStart)

function gameStart() {
    Player1 = new _modules_playerFactory__WEBPACK_IMPORTED_MODULE_0__["default"]('Player1')
    CPU = new _modules_playerFactory__WEBPACK_IMPORTED_MODULE_0__["default"]('CPU')
    i = 0
    axis = 0
    Player1.gameBoard.makeBoard();
    Player1.createShips()
    ;(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderBoard)('p1board', Player1);
    createRotateButton(body)
    appendListenerP1()
    hoverStyle(axis)
    newGame.style.display = "none"
}


function createRotateButton(element) {
    const rotate = document.createElement('button')
    rotate.classList.add('rotate')
    rotate.textContent = "Rotate"
    rotate.addEventListener('click', changeAxis)
    element.appendChild(rotate)
}

function changeAxis() {
    //0 for x axis, 1 for y axis
    if (axis === 0) {
        axis = 1
        hoverStyle(axis)
    } else {
        axis = 0
        hoverStyle(axis)
    }
}

function hoverStyle(axis) {
    if (axis === 0) {
        root.style.setProperty('--ship-width', 50 * Player1.ships[i].length + "px")
        root.style.setProperty('--ship-height', 50 + "px")
    } else {
        root.style.setProperty('--ship-width', 50 + 'px')
        root.style.setProperty('--ship-height', 50 * Player1.ships[i].length + "px")
    }
}


function placeShip(e) {
    let location = parseInt(e.target.dataset.indexNumber)
    Player1.ships[i].setCoords(location, axis)
    let check = Player1.gameBoard.setShip(Player1.ships[i])
    if (check === false) {
        return
    }
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderShips)('.p1board', Player1)
    i++
    if (i === 5) {
        const rotate = document.querySelector('.rotate')
        rotate.remove()
        root.style.setProperty('--ship-width', 0 +"px")
        root.style.setProperty('--ship-height', 0 + "px")
        let board = document.querySelector('.p1board')
        board.childNodes.forEach(cell => cell.removeEventListener('click', placeShip))
        CPU.gameBoard.makeBoard()
        CPU.createShips()
        placeCPUShips(CPU)
        ;(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderBoard)('cpuboard', CPU);
        appendListenerCPU()
    } else {
        hoverStyle(axis)
    }
}

function placeCPUShips(CPU) {
    for (let i = 0; i < 5; i++) {
        let randomAxis = Math.round(Math.random())
        let random = Math.floor(Math.random() * 99)
        CPU.ships[i].setCoords(random, randomAxis)
        let check = CPU.gameBoard.setShip(CPU.ships[i])
        while (check === false) {
            random = Math.floor(Math.random() * 99)
            CPU.ships[i].setCoords(random, randomAxis)
            check = CPU.gameBoard.setShip(CPU.ships[i])
        }
    }
   
}

function appendListenerP1() {
    let board = document.querySelector('.p1board')
    board.childNodes.forEach(cell => cell.addEventListener('click', placeShip))
}

function appendListenerCPU() {
    let board = document.querySelector('.cpuboard')
    board.childNodes.forEach(cell => cell.addEventListener('click', attack))
}

function removeListenerCPU() {
    let board = document.querySelector('.cpuboard')
    board.childNodes.forEach(cell => cell.removeEventListener('click', attack))
}


function attack(e) {
    let result = Player1.fireShot(parseInt(e.target.dataset.indexNumber), CPU)
            if (result === "AlreadyAttacked") {
                return
            }
            if (result === "gameover") {
                (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderShot)(e.target.id, "Hit")
                gameOver(body, "Win")
                return
            }
            (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderShot)(e.target.id, result)
            computerAI()
}

function computerAI() {
    let board = document.querySelector('.p1board')
    let random = Math.floor(Math.random() * 100)
    let result = CPU.fireShot(parseInt(random), Player1)
    while (result === "AlreadyAttacked") {
        random = Math.floor(Math.random() * 100)
        result = CPU.fireShot(parseInt(random), Player1) 
    }
    if (result === "gameover") {
        (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderShot)(board.children[random].id, "Hit")  
        gameOver(body, "Lose")
        return
    }
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderShot)(board.children[random].id, result)    
}

function gameOver(element, result) {
    (0,_render__WEBPACK_IMPORTED_MODULE_1__.renderGameOver)(element, result)
    let playAgain = document.querySelector('.play-again')
    playAgain.addEventListener('click', () => {
        let overlay = document.querySelector('.gameover-overlay')
        overlay.remove()
        let gameoverContainer = document.querySelector('.gameover-container')
        gameoverContainer.remove()
        let main = document.querySelector('.game-container')
        while (main.firstChild) {
            main.removeChild(main.lastChild)
        }
        gameStart()
    })
}
})();








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL2Fzc2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mZjg5YTk2ZDUwNWFiOWRhYzBjZjg0YjA5ZTc2NmZjYy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tc2hpcC13aWR0aDogNTBweDtcXG4gICAgLS1zaGlwLWhlaWdodDogNTBweDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvIGF1dG8gYXV0bztcXG59XFxuXFxuLm5ldy1nYW1lIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMWVtIGF1dG8gYXV0byBhdXRvO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUzZjc3O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwLjFlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLm5ldy1nYW1lOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwNjBiNDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMWVtIGF1dG8gYXV0byBhdXRvO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiAwLjNlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1M2Y3NztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnJvdGF0ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDYwYjQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuXFxuLmdhbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3c7XFxuICAgIGdhcDogM2VtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnAxYm9hcmQsIC5jcHVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogNTAwO1xcbiAgICB3aWR0aDogNTAwO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA2MGI0O1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjayA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAxNDgsIDEzOSk7XFxufVxcblxcblxcbi5wMWJvYXJkID4uY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDIxNCwgNzEsIDAuODYzKTtcXG4gICAgd2lkdGg6IHZhcigtLXNoaXAtd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNoaXAtaGVpZ2h0KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY3B1Ym9hcmQgPi5jZWxsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgMjE0LCA3MSwgMC44NjMpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5taXNzZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5nYW1lb3Zlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCA0MywgMTAwKTtcXG4gICAgb3V0bGluZTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICB6LWluZGV4OiA4MDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmdhbWVvdmVyLW92ZXJsYXkge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjU2O1xcbiAgICB6LWluZGV4OiA3MDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmdhbWVvdmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMC4yZW0gYXV0byBhdXRvIGF1dG87XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICB6LWluZGV4OiA5MDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBsYXktYWdhaW4ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDAgYXV0byBhdXRvIGF1dG87XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHotaW5kZXg6IDkwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnBsYXktYWdhaW46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1EQUFnRTtJQUNoRSw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsUUFBUTtJQUNSLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsVUFBVTtJQUNWLHVDQUF1QztJQUN2QyxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7O0FBR0E7SUFDSSwwQ0FBMEM7SUFDMUMsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG9CQUFvQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL2ZmODlhOTZkNTA1YWI5ZGFjMGNmODRiMDllNzY2ZmNjLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tc2hpcC13aWR0aDogNTBweDtcXG4gICAgLS1zaGlwLWhlaWdodDogNTBweDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvIGF1dG8gYXV0bztcXG59XFxuXFxuLm5ldy1nYW1lIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMWVtIGF1dG8gYXV0byBhdXRvO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUzZjc3O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwLjFlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLm5ldy1nYW1lOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwNjBiNDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMWVtIGF1dG8gYXV0byBhdXRvO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiAwLjNlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1M2Y3NztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnJvdGF0ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDYwYjQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuXFxuLmdhbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3c7XFxuICAgIGdhcDogM2VtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnAxYm9hcmQsIC5jcHVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogNTAwO1xcbiAgICB3aWR0aDogNTAwO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA2MGI0O1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBibGFjayA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAxNDgsIDEzOSk7XFxufVxcblxcblxcbi5wMWJvYXJkID4uY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDIxNCwgNzEsIDAuODYzKTtcXG4gICAgd2lkdGg6IHZhcigtLXNoaXAtd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNoaXAtaGVpZ2h0KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY3B1Ym9hcmQgPi5jZWxsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgMjE0LCA3MSwgMC44NjMpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5taXNzZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5nYW1lb3Zlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCA0MywgMTAwKTtcXG4gICAgb3V0bGluZTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICB6LWluZGV4OiA4MDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmdhbWVvdmVyLW92ZXJsYXkge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAwLjU2O1xcbiAgICB6LWluZGV4OiA3MDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmdhbWVvdmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMC4yZW0gYXV0byBhdXRvIGF1dG87XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICB6LWluZGV4OiA5MDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBsYXktYWdhaW4ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDAgYXV0byBhdXRvIGF1dG87XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHotaW5kZXg6IDkwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLnBsYXktYWdhaW46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBsb2dvIGZyb20gJy4vYmF0dGxlc2hpcC5wbmcnXG5cblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpXG5cbmNvbnN0IG15TG9nbyA9IG5ldyBJbWFnZSgpXG5teUxvZ28uaWQgPSBcImxvZ29cIlxubXlMb2dvLnNyYyA9IGxvZ29cbm15TG9nby5hbHQgPSBcImxvZ29cIlxubXlMb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKVxuXG5oZWFkZXIuYXBwZW5kQ2hpbGQobXlMb2dvKSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIGdhbWVGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZEFyZWEgPSBbXVxuICAgICAgICB0aGlzLmF0dGFja2VkID0gW11cbiAgICAgICAgdGhpcy5oYXNTaGlwID0gW11cbiAgICAgICAgdGhpcy5hbGxTaGlwc1N1bmsgPSBmYWxzZVxuICAgIH1cblxuICAgIG1ha2VCb2FyZCgpIHtcbiAgICAgICAgLy9mb3Igc29tZSByZWFzb24gYnJlYWtzIGlmIGkgaXMgMFxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkQXJlYS5wdXNoKGkpXG4gICAgICAgIH1cbiAgICBcbiAgICB9XG5cbiAgICBjaGVja0NvbGxpc2lvbihjb29yZHMpIHtcbiAgICAgICAgLy9jb2xsaXNpb24gd2l0aCB4IGF4aXNcbiAgICAgICAgY29uc3QgY29sbGlzaW9uID0gWzksIDE5LCAyOSwgMzksIDQ5LCA1OSwgNjksIDc5LCA4OV07XG4gICAgICAgIC8vY2hlY2sgaWYgY29sbGlzaW9uIHdpdGggb3RoZXIgc2hpcFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGFzU2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvb3Jkcy5zb21lKChjb29yZCkgPT4gdGhpcy5oYXNTaGlwW2ldLmNvb3Jkcy5pbmNsdWRlcyhjb29yZCkpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vY2hlY2sgaWYgY29sbGlzaW9uIGV4Y2VlZHMgYm9hcmQgc2l6ZVxuICAgICAgICBpZiAoY29vcmRzLnNvbWUoKGNvb3JkKSA9PiAhdGhpcy5ib2FyZEFyZWFbY29vcmRdKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gXG4gICAgICAgIC8vY2hlY2sgaWYgY29sbGlzaW9uIHdpdGggeCBheGlzXG4gICAgICAgIGVsc2UgaWYgKGNvbGxpc2lvbi5zb21lKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtjb29yZCwgY29vcmQgKyAxXS5ldmVyeSgocmVzdWx0KSA9PiBcbiAgICAgICAgICAgICAgICBjb29yZHMuaW5jbHVkZXMocmVzdWx0KVxuICAgICAgICAgICAgKSAgXG4gICAgICAgIH0pXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0U2hpcChzaGlwKSB7XG4gICAgICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja0NvbGxpc2lvbihzaGlwLmNvb3JkcylcbiAgICAgICBpZiAoY2hlY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgIHNoaXAuY29vcmRzID0gW11cbiAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgfVxuICAgICAgICB0aGlzLmhhc1NoaXAucHVzaChzaGlwKVxuICAgICAgICByZXR1cm4gc2hpcFxuICAgIH1cblxuICAgIHNpbmtTaGlwKHNoaXApIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5oYXNTaGlwLmluZGV4T2Yoc2hpcClcbiAgICAgICAgdGhpcy5oYXNTaGlwLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgaWYgKHRoaXMuaGFzU2hpcC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vaWYgdGhlIGFycmF5IGlzIDAgdGhlbiBhbGwgc2hpcHMgYXJlIHN1bmssIHJldHVybnMgZ2FtZSBvdmVyXG4gICAgICAgICAgICB0aGlzLmFsbFNoaXBzU3VuayA9IHRydWVcbiAgICAgICAgICAgIHJldHVybiBcIkdhbWUgT3ZlclwiXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzU2hpcFxuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2sobG9jYXRpb24pIHtcbiAgICAgICAgLy9nb2VzIHRocm91Z2ggYWxsIDUgc2hpcHMsIGNoZWNraW5nIGlmIHRoZSB0YXJnZXQgaXMgd2l0aGluIGFueSBvZiB0aGVpciBjb29yZHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmhhc1NoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICBpZiAodGhpcy5oYXNTaGlwW2ldWydjb29yZHMnXS5pbmNsdWRlcyhsb2NhdGlvbikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja2VkLnB1c2gobG9jYXRpb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFzU2hpcFtpXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiB0aGlzIHNwb3QgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZFxuICAgICAgICB9IGlmICh0aGlzLmF0dGFja2VkLmluY2x1ZGVzKGxvY2F0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiQWxyZWFkeUF0dGFja2VkXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrZWQucHVzaChsb2NhdGlvbilcbiAgICAgICAgICAgIHJldHVybiBcIk1pc3NlZFwiICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbn1cbiIsImltcG9ydCBnYW1lRmFjdG9yeSBmcm9tIFwiLi9nYW1lRmFjdG9yeVwiXG5pbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSBcIi4vc2hpcEZhY3RvcnlcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBsYXllckZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBnYW1lRmFjdG9yeSgpXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXVxuICAgIH1cblxuICAgIGNyZWF0ZVNoaXBzKCkge1xuICAgICAgICBsZXQgc2hpcCA9IG5ldyBzaGlwRmFjdG9yeShcIkNhcnJpZXJcIiwgNSlcbiAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApXG4gICAgICAgIHNoaXAgPSBuZXcgc2hpcEZhY3RvcnkoXCJCYXR0bGVzaGlwXCIsIDQpXG4gICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKVxuICAgICAgICBzaGlwID0gbmV3IHNoaXBGYWN0b3J5KFwiRGVzdHJveWVyXCIsIDMpXG4gICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKVxuICAgICAgICBzaGlwID0gbmV3IHNoaXBGYWN0b3J5KFwiU3VibWFyaW5lXCIsIDMpXG4gICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKVxuICAgICAgICBzaGlwID0gbmV3IHNoaXBGYWN0b3J5KFwiUGF0cm9sIEJvYXRcIiwgMilcbiAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApXG4gICAgfVxuXG4gICAgZmlyZVNob3QobG9jYXRpb24sIHBsYXllcikge1xuICAgICAgICBsZXQgcmVzdWx0ID0gcGxheWVyLmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGxvY2F0aW9uKVxuICAgICAgICBpZiAocmVzdWx0ID09PSBcIk1pc3NlZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCJBbHJlYWR5QXR0YWNrZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9XG4gICAgICAgIGxldCBpc0RlYWQgPSByZXN1bHQuSGl0KGxvY2F0aW9uKVxuICAgICAgICBpZiAoaXNEZWFkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvL3Jlc3VsdCB3aWxsIGJlIGdhbWUgb3ZlciBpZiBhbGwgc2hpcHMgYXJlIHN1bmtcbiAgICAgICAgICAgbGV0IGlzR2FtZU92ZXIgPSBwbGF5ZXIuZ2FtZUJvYXJkLnNpbmtTaGlwKHJlc3VsdClcbiAgICAgICAgICAgaWYgKGlzR2FtZU92ZXIgPT09IFwiR2FtZSBPdmVyXCIpIHtcbiAgICAgICAgICAgICAgIHJldHVybiBcImdhbWVvdmVyXCJcbiAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIkhpdFwiXG5cbiAgICB9XG5cblxuXG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBzaGlwRmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgICAgICAgdGhpcy5jb29yZHMgPSBbXVxuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZVxuICAgIH1cblxuICAgIHNldENvb3Jkcyhsb2NhdGlvbiwgYXhpcykge1xuICAgICAgICAvL3NldHMgY29vcmRzIG9uIHRoZSBzaGlwIG9iamVjdCBpdHNlbGZcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXhpcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29vcmRzLnB1c2gobG9jYXRpb24gKyBpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3Jkcy5wdXNoKGxvY2F0aW9uICsgaSAqIDEwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgSGl0KGxvY2F0aW9uKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNvb3Jkcy5pbmRleE9mKGxvY2F0aW9uKVxuICAgICAgICAgICAgLy9yZW1vdmUgdGhlIGNvb3JkcyBmcm9tIHRoZSBhcnJheSBpZiBoaXRcbiAgICAgICAgICAgIHRoaXMuY29vcmRzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgICAgIGlmICh0aGlzLmNvb3Jkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAvL2lmIGFsbCBjb29yZHMgb24gdGhlIHNoaXAgYXJlIGhpdCwgc2luayB0aGUgc2hpcFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzU3VuaygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJnb3QgaGl0XCJcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgdGhpcy5zdW5rID0gdHJ1ZVxuICAgICAgIHJldHVybiB0aGlzLnN1bmtcbiAgICB9XG5cbn07XG4iLCJmdW5jdGlvbiByZW5kZXJCb2FyZChlbGVtZW50LCBwbGF5ZXIpIHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNvbnRhaW5lcicpXG4gICAgbGV0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKGVsZW1lbnQpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuZ2FtZUJvYXJkLmJvYXJkQXJlYS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vY2VsbC50ZXh0Q29udGVudCA9IGlcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJylcbiAgICAgICAgY2VsbC5pZCA9IGAke3BsYXllci5uYW1lfSAke2l9YFxuICAgICAgICBjZWxsLmRhdGFzZXQuaW5kZXhOdW1iZXIgPSBpXG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGwpXG4gICAgfVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYm9hcmQpXG59XG5cbmZ1bmN0aW9uIHJlbmRlclNoaXBzKGJvYXJkLCBwbGF5ZXIpIHtcbiAgICBsZXQgY3VycmVudEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihib2FyZClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5nYW1lQm9hcmQuaGFzU2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllci5nYW1lQm9hcmQuaGFzU2hpcFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgIGxldCBpbmRleCA9IHBsYXllci5nYW1lQm9hcmQuaGFzU2hpcFtpXS5jb29yZHNbal1cbiAgICAgICAgICAgICBsZXQgY2hpbGQgPSBjdXJyZW50Qm9hcmQuY2hpbGROb2Rlc1tpbmRleF1cbiAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKCdzaGlwJylcbiAgICAgICAgfSAgXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJTaG90KGxvY2F0aW9uLCByZXN1bHQpIHtcbiAgICBsZXQgY29vcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobG9jYXRpb24pXG4gICAgaWYgKHJlc3VsdCA9PT0gXCJNaXNzZWRcIikge1xuICAgICAgICBjb29yZHMuY2xhc3NMaXN0LmFkZChcIm1pc3NlZFwiKVxuICAgIH0gZWxzZSBpZihyZXN1bHQgPT09IFwiSGl0XCIpIHtcbiAgICAgICAgY29vcmRzLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHJlbmRlckdhbWVPdmVyKGVsZW1lbnQsIHJlc3VsdCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZ2FtZW92ZXItb3ZlcmxheScpXG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKVxuICAgIGNvbnN0IGdhbWVvdmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBnYW1lb3ZlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lb3Zlci1jb250YWluZXInKVxuXG4gICAgY29uc3QgZ2FtZW92ZXJEb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGdhbWVvdmVyRG9tLmNsYXNzTGlzdC5hZGQoJ2dhbWVvdmVyJylcbiAgICBpZiAocmVzdWx0ID09PSBcIldpblwiKSB7XG4gICAgICAgIGdhbWVvdmVyRG9tLnRleHRDb250ZW50ID0gJ1lvdSBXaW4hJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdhbWVvdmVyRG9tLnRleHRDb250ZW50ID0gJ1lvdSBMb3NlISdcbiAgICB9XG5cbiAgICBjb25zdCBwbGF5QWdhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHBsYXlBZ2Fpbi50ZXh0Q29udGVudCA9IFwiUGxheSBBZ2Fpbj9cIlxuICAgIHBsYXlBZ2Fpbi5jbGFzc0xpc3QuYWRkKCdwbGF5LWFnYWluJylcbiAgICBcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG92ZXJsYXkpXG4gICAgZ2FtZW92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZW92ZXJEb20pXG4gICAgZ2FtZW92ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheUFnYWluKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChnYW1lb3ZlckNvbnRhaW5lcilcbn1cblxuZXhwb3J0IHtyZW5kZXJCb2FyZCwgcmVuZGVyU2hpcHMsIHJlbmRlclNob3QsIHJlbmRlckdhbWVPdmVyfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHBsYXllckZhY3RvcnkgZnJvbSBcIi4vbW9kdWxlcy9wbGF5ZXJGYWN0b3J5XCI7XG5pbXBvcnQge3JlbmRlckJvYXJkLCByZW5kZXJTaGlwcywgcmVuZGVyU2hvdCwgcmVuZGVyR2FtZU92ZXJ9IGZyb20gJy4vcmVuZGVyJ1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL2Fzc2V0cy9hc3NldCdcblxuXG5jb25zdCBpbml0R2FtZSA9ICgoKSA9PiB7XG5cbmxldCBQbGF5ZXIxO1xubGV0IENQVTtcbmxldCBpO1xubGV0IGF4aXM7XG5sZXQgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcblxuY29uc3QgbmV3R2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctZ2FtZScpXG5uZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FtZVN0YXJ0KVxuXG5mdW5jdGlvbiBnYW1lU3RhcnQoKSB7XG4gICAgUGxheWVyMSA9IG5ldyBwbGF5ZXJGYWN0b3J5KCdQbGF5ZXIxJylcbiAgICBDUFUgPSBuZXcgcGxheWVyRmFjdG9yeSgnQ1BVJylcbiAgICBpID0gMFxuICAgIGF4aXMgPSAwXG4gICAgUGxheWVyMS5nYW1lQm9hcmQubWFrZUJvYXJkKCk7XG4gICAgUGxheWVyMS5jcmVhdGVTaGlwcygpXG4gICAgcmVuZGVyQm9hcmQoJ3AxYm9hcmQnLCBQbGF5ZXIxKTtcbiAgICBjcmVhdGVSb3RhdGVCdXR0b24oYm9keSlcbiAgICBhcHBlbmRMaXN0ZW5lclAxKClcbiAgICBob3ZlclN0eWxlKGF4aXMpXG4gICAgbmV3R2FtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVSb3RhdGVCdXR0b24oZWxlbWVudCkge1xuICAgIGNvbnN0IHJvdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcm90YXRlLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpXG4gICAgcm90YXRlLnRleHRDb250ZW50ID0gXCJSb3RhdGVcIlxuICAgIHJvdGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUF4aXMpXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChyb3RhdGUpXG59XG5cbmZ1bmN0aW9uIGNoYW5nZUF4aXMoKSB7XG4gICAgLy8wIGZvciB4IGF4aXMsIDEgZm9yIHkgYXhpc1xuICAgIGlmIChheGlzID09PSAwKSB7XG4gICAgICAgIGF4aXMgPSAxXG4gICAgICAgIGhvdmVyU3R5bGUoYXhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgICBheGlzID0gMFxuICAgICAgICBob3ZlclN0eWxlKGF4aXMpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBob3ZlclN0eWxlKGF4aXMpIHtcbiAgICBpZiAoYXhpcyA9PT0gMCkge1xuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXNoaXAtd2lkdGgnLCA1MCAqIFBsYXllcjEuc2hpcHNbaV0ubGVuZ3RoICsgXCJweFwiKVxuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXNoaXAtaGVpZ2h0JywgNTAgKyBcInB4XCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zaGlwLXdpZHRoJywgNTAgKyAncHgnKVxuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXNoaXAtaGVpZ2h0JywgNTAgKiBQbGF5ZXIxLnNoaXBzW2ldLmxlbmd0aCArIFwicHhcIilcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gcGxhY2VTaGlwKGUpIHtcbiAgICBsZXQgbG9jYXRpb24gPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmluZGV4TnVtYmVyKVxuICAgIFBsYXllcjEuc2hpcHNbaV0uc2V0Q29vcmRzKGxvY2F0aW9uLCBheGlzKVxuICAgIGxldCBjaGVjayA9IFBsYXllcjEuZ2FtZUJvYXJkLnNldFNoaXAoUGxheWVyMS5zaGlwc1tpXSlcbiAgICBpZiAoY2hlY2sgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICByZW5kZXJTaGlwcygnLnAxYm9hcmQnLCBQbGF5ZXIxKVxuICAgIGkrK1xuICAgIGlmIChpID09PSA1KSB7XG4gICAgICAgIGNvbnN0IHJvdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUnKVxuICAgICAgICByb3RhdGUucmVtb3ZlKClcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zaGlwLXdpZHRoJywgMCArXCJweFwiKVxuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXNoaXAtaGVpZ2h0JywgMCArIFwicHhcIilcbiAgICAgICAgbGV0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxYm9hcmQnKVxuICAgICAgICBib2FyZC5jaGlsZE5vZGVzLmZvckVhY2goY2VsbCA9PiBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxhY2VTaGlwKSlcbiAgICAgICAgQ1BVLmdhbWVCb2FyZC5tYWtlQm9hcmQoKVxuICAgICAgICBDUFUuY3JlYXRlU2hpcHMoKVxuICAgICAgICBwbGFjZUNQVVNoaXBzKENQVSlcbiAgICAgICAgcmVuZGVyQm9hcmQoJ2NwdWJvYXJkJywgQ1BVKTtcbiAgICAgICAgYXBwZW5kTGlzdGVuZXJDUFUoKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGhvdmVyU3R5bGUoYXhpcylcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBsYWNlQ1BVU2hpcHMoQ1BVKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgbGV0IHJhbmRvbUF4aXMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OSlcbiAgICAgICAgQ1BVLnNoaXBzW2ldLnNldENvb3JkcyhyYW5kb20sIHJhbmRvbUF4aXMpXG4gICAgICAgIGxldCBjaGVjayA9IENQVS5nYW1lQm9hcmQuc2V0U2hpcChDUFUuc2hpcHNbaV0pXG4gICAgICAgIHdoaWxlIChjaGVjayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5KVxuICAgICAgICAgICAgQ1BVLnNoaXBzW2ldLnNldENvb3JkcyhyYW5kb20sIHJhbmRvbUF4aXMpXG4gICAgICAgICAgICBjaGVjayA9IENQVS5nYW1lQm9hcmQuc2V0U2hpcChDUFUuc2hpcHNbaV0pXG4gICAgICAgIH1cbiAgICB9XG4gICBcbn1cblxuZnVuY3Rpb24gYXBwZW5kTGlzdGVuZXJQMSgpIHtcbiAgICBsZXQgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDFib2FyZCcpXG4gICAgYm9hcmQuY2hpbGROb2Rlcy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYWNlU2hpcCkpXG59XG5cbmZ1bmN0aW9uIGFwcGVuZExpc3RlbmVyQ1BVKCkge1xuICAgIGxldCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcHVib2FyZCcpXG4gICAgYm9hcmQuY2hpbGROb2Rlcy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFjaykpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyQ1BVKCkge1xuICAgIGxldCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcHVib2FyZCcpXG4gICAgYm9hcmQuY2hpbGROb2Rlcy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGF0dGFjaykpXG59XG5cblxuZnVuY3Rpb24gYXR0YWNrKGUpIHtcbiAgICBsZXQgcmVzdWx0ID0gUGxheWVyMS5maXJlU2hvdChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmluZGV4TnVtYmVyKSwgQ1BVKVxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCJBbHJlYWR5QXR0YWNrZWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCJnYW1lb3ZlclwiKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyU2hvdChlLnRhcmdldC5pZCwgXCJIaXRcIilcbiAgICAgICAgICAgICAgICBnYW1lT3Zlcihib2R5LCBcIldpblwiKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyU2hvdChlLnRhcmdldC5pZCwgcmVzdWx0KVxuICAgICAgICAgICAgY29tcHV0ZXJBSSgpXG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVyQUkoKSB7XG4gICAgbGV0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxYm9hcmQnKVxuICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApXG4gICAgbGV0IHJlc3VsdCA9IENQVS5maXJlU2hvdChwYXJzZUludChyYW5kb20pLCBQbGF5ZXIxKVxuICAgIHdoaWxlIChyZXN1bHQgPT09IFwiQWxyZWFkeUF0dGFja2VkXCIpIHtcbiAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKVxuICAgICAgICByZXN1bHQgPSBDUFUuZmlyZVNob3QocGFyc2VJbnQocmFuZG9tKSwgUGxheWVyMSkgXG4gICAgfVxuICAgIGlmIChyZXN1bHQgPT09IFwiZ2FtZW92ZXJcIikge1xuICAgICAgICByZW5kZXJTaG90KGJvYXJkLmNoaWxkcmVuW3JhbmRvbV0uaWQsIFwiSGl0XCIpICBcbiAgICAgICAgZ2FtZU92ZXIoYm9keSwgXCJMb3NlXCIpXG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICByZW5kZXJTaG90KGJvYXJkLmNoaWxkcmVuW3JhbmRvbV0uaWQsIHJlc3VsdCkgICAgXG59XG5cbmZ1bmN0aW9uIGdhbWVPdmVyKGVsZW1lbnQsIHJlc3VsdCkge1xuICAgIHJlbmRlckdhbWVPdmVyKGVsZW1lbnQsIHJlc3VsdClcbiAgICBsZXQgcGxheUFnYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXktYWdhaW4nKVxuICAgIHBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZW92ZXItb3ZlcmxheScpXG4gICAgICAgIG92ZXJsYXkucmVtb3ZlKClcbiAgICAgICAgbGV0IGdhbWVvdmVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVvdmVyLWNvbnRhaW5lcicpXG4gICAgICAgIGdhbWVvdmVyQ29udGFpbmVyLnJlbW92ZSgpXG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtY29udGFpbmVyJylcbiAgICAgICAgd2hpbGUgKG1haW4uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmxhc3RDaGlsZClcbiAgICAgICAgfVxuICAgICAgICBnYW1lU3RhcnQoKVxuICAgIH0pXG59XG59KSgpO1xuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
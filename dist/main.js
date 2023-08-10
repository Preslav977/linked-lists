/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Node.js":
/*!*********************!*\
  !*** ./src/Node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-underscore-dangle */
class Node {
  constructor() {
    let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let nextNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.value = value;
    this.nextNode = nextNode;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
  get nextNode() {
    return this._nextNode;
  }
  set nextNode(value) {
    this._nextNode = value;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node);

/***/ }),

/***/ "./src/linkedList.js":
/*!***************************!*\
  !*** ./src/linkedList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./src/Node.js");
/* eslint-disable class-methods-use-this */

// Linked Lists pseudo code

// Before begin the project choose between factory functions or class syntax !

// Two important classes/factory functions that are needed.
// 1. The first one is for representing the full list
// Maybe for creating new objects (nodes) ?

// 2. Node class/factory with value property, and link to the nextNode
// set both my default.
// Hmm value property, get for reading, set for writing ?
// And this will be used to point on to the nextNode,
// something like this, previous: value, next: null ?

class LinkedList {
  // Linked List functions
  // 1. append(value) parameter, this method will add the node to the end of the list
  // Maybe check if there is tail and has any value to assign to the node's value

  head;
  tail;
  countNodes = 0;
  append(value) {
    // if the tail doesn't exist
    // or the list is empty
    if (!this.head) {
      // create new node which will become the head
      const newNode = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
      // count the node if it's created
      this.head = newNode;
      console.log(this.head);
      this.countNodes += 1;
      // else if there is a head already
    } else {
      // create new node
      this.tail = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
      // point the head to the new node
      this.head.nextNode = this.tail;
      // count the nodes
      console.log(this.head);
      this.countNodes += 1;
    }
  }

  // 2. prepend(value) parameter, this method will add the node
  // to the beginning of the list
  prepend(value) {
    // if the head doesn't exist
    if (!this.head) {
      // create new node which will become the head
      this.head = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
      // count the created node
      console.log(this.head);
      this.countNodes += 1;
    } else {
      // else create new node
      const newNode = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
      // point that node to the previous node
      newNode.nextNode = this.head;
      this.head = newNode;
      // count the created node
      console.log(this.head);
      this.countNodes += 1;
    }
  }

  // Check if the head has any value, and assign the node's value ?
  // Example 5 (head) -> 2 (tail)
  // head points to 5 (next as pointer), and the tails points to null.
  // If 1 is added as the head, 1 -> 5 -> 2
  // 1 is the new head, 1 points to 5 as next value, 2 points to null
  // If 12 is added as the tail 1 -> 5 -> 2 -> 12
  // 12 is the new tail, 1 points as next value to 5, 5 next value points to 2 and 2
  // points to 12, 12 points to null

  // 3.Size, method that will return the numbers of nodes in the list
  // Maybe for loop though the whole list, and return the nodes in the current list ?
  size() {
    // return the number of nodes of the list
    console.log(this.countNodes);
    return this.countNodes;
  }

  // 4. Head, method that will return the first node the first node of the list
  // Condition if the head exist such as the first node return it, no loop maybe here ?
  findHead() {
    // method that will return the first node of the list
    // traverse to the first node
    // check if the first node exist
    // if exist return it
    if (this.head) {
      console.log(this.head);
      return this.head;
    }
  }

  // 5. Tail, method that will return the last node of the list
  // For loop then return the tail such as the last node return it in the current list ?
  findTail() {
    // method that will return the last node of the list
    let searchForLastNode = this.head;
    while (searchForLastNode !== null) {
      searchForLastNode = searchForLastNode.nextNode;
      if (searchForLastNode.nextNode === null) {
        console.log(searchForLastNode);
        return searchForLastNode;
      }
    }
  }

  // 6. at(index), method that will return the node of given index.
  // For loop so see in index exist in the current list such as 0,
  // if it does return the node
  at(index) {
    // method that will return node at given index
    // loop maybe for the node at the pointed index
    // next check if the node exist
    // return the node at the pointed index
    // otherwise maybe console log not found
    let nodePosition = 0;
    let searchForNode = this.head;
    if (nodePosition === 0 && index === 0) {
      console.log(searchForNode);
      return searchForNode;
    }
    while (searchForNode !== index) {
      nodePosition += 1;
      searchForNode = searchForNode.nextNode;
      // console.log("This is the the wanted index", index);
      // console.log("This is the node position", nodePosition);
      if (index === nodePosition) {
        console.log(searchForNode);
        return searchForNode;
      }
    }
  }

  // 7. Pop(), simple method that will remove the last node of the list.
  pop() {
    // method that will remove the last node
    let searchLastNode = this.head;
    searchLastNode = searchLastNode.nextNode;
    while (searchLastNode !== null) {
      if (searchLastNode.nextNode === null || searchLastNode.nextNode.nextNode === null || searchLastNode.nextNode.nextNode.nextNode === null || searchLastNode.nextNode.nextNode.nextNode.nextNode === null || searchLastNode.nextNode.nextNode.nextNode.nextNode.nextNode === null) {
        searchLastNode.nextNode = null;
        console.log(searchLastNode);
        return searchLastNode;
      }
    }
  }

  // 8. contains(value), method that will return true if the
  // exist in the list, otherwise false
  // For loop, to see if value exist return true if not false.
  contains(value) {
    // method that will return true if the value exist otherwise false
    // start from the head
    let searchValue = this.head;
    if (searchValue.value === value) {
      return true;
    }

    // if node value is not equal to the argument
    while (searchValue.value !== value) {
      // move on to the next node
      searchValue = searchValue.nextNode;
      // if node value is equal to the value
      if (searchValue.value === value) {
        return true;
      }
      if (searchValue.nextNode === null) {
        // console.log(searchValue.value);
        // console.log(value);
        return false;
      }
    }
  }

  // 9. findValue(value), method that will return the index of the node containing
  // value null if it doesn't exist
  // For loop, if the value exist return the index of the node, else return null
  findValue(value) {
    // method that will return the index of the node, else it will return null
    let nodePosition = 0;
    let searchNodeIndex = this.head;
    if (searchNodeIndex.value === value && nodePosition === 0) {
      console.log(nodePosition);
      return nodePosition;
    }
    while (searchNodeIndex.value !== value) {
      nodePosition += 1;
      searchNodeIndex = searchNodeIndex.nextNode;
      if (searchNodeIndex.value === value) {
        console.log(nodePosition);
        return nodePosition;
      }
      if (searchNodeIndex.nextNode === null) {
        return null;
      }
    }
  }

  // 10. toString(), method that will represent LinkedLists objects
  // as strings in the console.
  // In the current format:
  // (value) -> (value) -> (value) -> null
  // Using JSON stringify maybe to turn these objects as strings in JSON format ?
  toString() {
    // method that will represent the objects as strings
    console.log(`(${this.head.value}) ->`, `${this.tail.nextNode}`);
  }

  /// /////////////////////////////////////////////////////////////////////////////
  // Extra methods !!!
  // 11. insertAt(value, index), that will insert new node
  // with provided value of given index
  // Couple of things needs to happen here, after inserting the new node
  // the previous node
  // that has been move need to point to the new one for example
  // 1 -> 2 -> 5 -> 12
  // indexes 0, 1, 2, 3
  // If 7 is added in index 2
  // 1 -> 2 -> 7 -> 5 - > 12
  // Two needs to points at seven, and seven has to point as 5
  // Need to somehow update the points between the nodes that has been added the new node
  // 12. removeAt(index), method that will remove node at current index.
  // If 7 is removed in the above example
  // 1 -> 2 -> 5 -> 12
  // Two has to point to five, because the previous node has been removed in order to keep
  // the pointers updated, and five has to point to twelve.
  // Important tip: When you insert or remove a node, consider
  // how it will affect the existing nodes.
  // Some of the nodes will need their nextNode link updated.
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkedList);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: lightgreen;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;AAC9B","sourcesContent":["body {\r\n  background-color: lightgreen;\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _linkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedList */ "./src/linkedList.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const linkedList = new _linkedList__WEBPACK_IMPORTED_MODULE_0__["default"]();
const head = linkedList.append(2);
const tail = linkedList.append(3);

// const testing = linkedList.append(4);

// const anotherTest = linkedList.append(5);

const test = linkedList.prepend(1);

// const test1 = linkedList.prepend(6);

// linkedList.size();

// linkedList.findHead();

// linkedList.findTail();

// linkedList.at(2);

// linkedList.pop();

// console.log(linkedList.contains(4));

// linkedList.findValue(3);

linkedList.toString();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXNDO0FBQ2pCO0FBRXJCLE1BQU13QixVQUFVLEdBQUcsSUFBSXhCLG1EQUFVLENBQUMsQ0FBQztBQUVuQyxNQUFNQyxJQUFJLEdBQUd1QixVQUFVLENBQUNwQixNQUFNLENBQUMsQ0FBQyxDQUFDO0FBRWpDLE1BQU1GLElBQUksR0FBR3NCLFVBQVUsQ0FBQ3BCLE1BQU0sQ0FBQyxDQUFDLENBQUM7O0FBRWpDOztBQUVBOztBQUVBLE1BQU1xQixJQUFJLEdBQUdELFVBQVUsQ0FBQ2hCLE9BQU8sQ0FBQyxDQUFDLENBQUM7O0FBRWxDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBZ0IsVUFBVSxDQUFDRCxRQUFRLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9Ob2RlLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvbGlua2VkTGlzdC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cclxuY2xhc3MgTm9kZSB7XHJcbiAgY29uc3RydWN0b3IodmFsdWUgPSBudWxsLCBuZXh0Tm9kZSA9IG51bGwpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMubmV4dE5vZGUgPSBuZXh0Tm9kZTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBuZXh0Tm9kZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9uZXh0Tm9kZTtcclxuICB9XHJcblxyXG4gIHNldCBuZXh0Tm9kZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5fbmV4dE5vZGUgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vZGU7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cclxuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xyXG4vLyBMaW5rZWQgTGlzdHMgcHNldWRvIGNvZGVcclxuXHJcbi8vIEJlZm9yZSBiZWdpbiB0aGUgcHJvamVjdCBjaG9vc2UgYmV0d2VlbiBmYWN0b3J5IGZ1bmN0aW9ucyBvciBjbGFzcyBzeW50YXggIVxyXG5cclxuLy8gVHdvIGltcG9ydGFudCBjbGFzc2VzL2ZhY3RvcnkgZnVuY3Rpb25zIHRoYXQgYXJlIG5lZWRlZC5cclxuLy8gMS4gVGhlIGZpcnN0IG9uZSBpcyBmb3IgcmVwcmVzZW50aW5nIHRoZSBmdWxsIGxpc3RcclxuLy8gTWF5YmUgZm9yIGNyZWF0aW5nIG5ldyBvYmplY3RzIChub2RlcykgP1xyXG5cclxuLy8gMi4gTm9kZSBjbGFzcy9mYWN0b3J5IHdpdGggdmFsdWUgcHJvcGVydHksIGFuZCBsaW5rIHRvIHRoZSBuZXh0Tm9kZVxyXG4vLyBzZXQgYm90aCBteSBkZWZhdWx0LlxyXG4vLyBIbW0gdmFsdWUgcHJvcGVydHksIGdldCBmb3IgcmVhZGluZywgc2V0IGZvciB3cml0aW5nID9cclxuLy8gQW5kIHRoaXMgd2lsbCBiZSB1c2VkIHRvIHBvaW50IG9uIHRvIHRoZSBuZXh0Tm9kZSxcclxuLy8gc29tZXRoaW5nIGxpa2UgdGhpcywgcHJldmlvdXM6IHZhbHVlLCBuZXh0OiBudWxsID9cclxuXHJcbmNsYXNzIExpbmtlZExpc3Qge1xyXG4gIC8vIExpbmtlZCBMaXN0IGZ1bmN0aW9uc1xyXG4gIC8vIDEuIGFwcGVuZCh2YWx1ZSkgcGFyYW1ldGVyLCB0aGlzIG1ldGhvZCB3aWxsIGFkZCB0aGUgbm9kZSB0byB0aGUgZW5kIG9mIHRoZSBsaXN0XHJcbiAgLy8gTWF5YmUgY2hlY2sgaWYgdGhlcmUgaXMgdGFpbCBhbmQgaGFzIGFueSB2YWx1ZSB0byBhc3NpZ24gdG8gdGhlIG5vZGUncyB2YWx1ZVxyXG5cclxuICBoZWFkO1xyXG5cclxuICB0YWlsO1xyXG5cclxuICBjb3VudE5vZGVzID0gMDtcclxuXHJcbiAgYXBwZW5kKHZhbHVlKSB7XHJcbiAgICAvLyBpZiB0aGUgdGFpbCBkb2Vzbid0IGV4aXN0XHJcbiAgICAvLyBvciB0aGUgbGlzdCBpcyBlbXB0eVxyXG4gICAgaWYgKCF0aGlzLmhlYWQpIHtcclxuICAgICAgLy8gY3JlYXRlIG5ldyBub2RlIHdoaWNoIHdpbGwgYmVjb21lIHRoZSBoZWFkXHJcbiAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XHJcbiAgICAgIC8vIGNvdW50IHRoZSBub2RlIGlmIGl0J3MgY3JlYXRlZFxyXG4gICAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWQpO1xyXG4gICAgICB0aGlzLmNvdW50Tm9kZXMgKz0gMTtcclxuICAgICAgLy8gZWxzZSBpZiB0aGVyZSBpcyBhIGhlYWQgYWxyZWFkeVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gY3JlYXRlIG5ldyBub2RlXHJcbiAgICAgIHRoaXMudGFpbCA9IG5ldyBOb2RlKHZhbHVlKTtcclxuICAgICAgLy8gcG9pbnQgdGhlIGhlYWQgdG8gdGhlIG5ldyBub2RlXHJcbiAgICAgIHRoaXMuaGVhZC5uZXh0Tm9kZSA9IHRoaXMudGFpbDtcclxuICAgICAgLy8gY291bnQgdGhlIG5vZGVzXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGVhZCk7XHJcbiAgICAgIHRoaXMuY291bnROb2RlcyArPSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gMi4gcHJlcGVuZCh2YWx1ZSkgcGFyYW1ldGVyLCB0aGlzIG1ldGhvZCB3aWxsIGFkZCB0aGUgbm9kZVxyXG4gIC8vIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3RcclxuICBwcmVwZW5kKHZhbHVlKSB7XHJcbiAgICAvLyBpZiB0aGUgaGVhZCBkb2Vzbid0IGV4aXN0XHJcbiAgICBpZiAoIXRoaXMuaGVhZCkge1xyXG4gICAgICAvLyBjcmVhdGUgbmV3IG5vZGUgd2hpY2ggd2lsbCBiZWNvbWUgdGhlIGhlYWRcclxuICAgICAgdGhpcy5oZWFkID0gbmV3IE5vZGUodmFsdWUpO1xyXG4gICAgICAvLyBjb3VudCB0aGUgY3JlYXRlZCBub2RlXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGVhZCk7XHJcbiAgICAgIHRoaXMuY291bnROb2RlcyArPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZWxzZSBjcmVhdGUgbmV3IG5vZGVcclxuICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcclxuICAgICAgLy8gcG9pbnQgdGhhdCBub2RlIHRvIHRoZSBwcmV2aW91cyBub2RlXHJcbiAgICAgIG5ld05vZGUubmV4dE5vZGUgPSB0aGlzLmhlYWQ7XHJcbiAgICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XHJcbiAgICAgIC8vIGNvdW50IHRoZSBjcmVhdGVkIG5vZGVcclxuICAgICAgY29uc29sZS5sb2codGhpcy5oZWFkKTtcclxuICAgICAgdGhpcy5jb3VudE5vZGVzICs9IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiB0aGUgaGVhZCBoYXMgYW55IHZhbHVlLCBhbmQgYXNzaWduIHRoZSBub2RlJ3MgdmFsdWUgP1xyXG4gIC8vIEV4YW1wbGUgNSAoaGVhZCkgLT4gMiAodGFpbClcclxuICAvLyBoZWFkIHBvaW50cyB0byA1IChuZXh0IGFzIHBvaW50ZXIpLCBhbmQgdGhlIHRhaWxzIHBvaW50cyB0byBudWxsLlxyXG4gIC8vIElmIDEgaXMgYWRkZWQgYXMgdGhlIGhlYWQsIDEgLT4gNSAtPiAyXHJcbiAgLy8gMSBpcyB0aGUgbmV3IGhlYWQsIDEgcG9pbnRzIHRvIDUgYXMgbmV4dCB2YWx1ZSwgMiBwb2ludHMgdG8gbnVsbFxyXG4gIC8vIElmIDEyIGlzIGFkZGVkIGFzIHRoZSB0YWlsIDEgLT4gNSAtPiAyIC0+IDEyXHJcbiAgLy8gMTIgaXMgdGhlIG5ldyB0YWlsLCAxIHBvaW50cyBhcyBuZXh0IHZhbHVlIHRvIDUsIDUgbmV4dCB2YWx1ZSBwb2ludHMgdG8gMiBhbmQgMlxyXG4gIC8vIHBvaW50cyB0byAxMiwgMTIgcG9pbnRzIHRvIG51bGxcclxuXHJcbiAgLy8gMy5TaXplLCBtZXRob2QgdGhhdCB3aWxsIHJldHVybiB0aGUgbnVtYmVycyBvZiBub2RlcyBpbiB0aGUgbGlzdFxyXG4gIC8vIE1heWJlIGZvciBsb29wIHRob3VnaCB0aGUgd2hvbGUgbGlzdCwgYW5kIHJldHVybiB0aGUgbm9kZXMgaW4gdGhlIGN1cnJlbnQgbGlzdCA/XHJcbiAgc2l6ZSgpIHtcclxuICAgIC8vIHJldHVybiB0aGUgbnVtYmVyIG9mIG5vZGVzIG9mIHRoZSBsaXN0XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvdW50Tm9kZXMpO1xyXG4gICAgcmV0dXJuIHRoaXMuY291bnROb2RlcztcclxuICB9XHJcblxyXG4gIC8vIDQuIEhlYWQsIG1ldGhvZCB0aGF0IHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBub2RlIHRoZSBmaXJzdCBub2RlIG9mIHRoZSBsaXN0XHJcbiAgLy8gQ29uZGl0aW9uIGlmIHRoZSBoZWFkIGV4aXN0IHN1Y2ggYXMgdGhlIGZpcnN0IG5vZGUgcmV0dXJuIGl0LCBubyBsb29wIG1heWJlIGhlcmUgP1xyXG4gIGZpbmRIZWFkKCkge1xyXG4gICAgLy8gbWV0aG9kIHRoYXQgd2lsbCByZXR1cm4gdGhlIGZpcnN0IG5vZGUgb2YgdGhlIGxpc3RcclxuICAgIC8vIHRyYXZlcnNlIHRvIHRoZSBmaXJzdCBub2RlXHJcbiAgICAvLyBjaGVjayBpZiB0aGUgZmlyc3Qgbm9kZSBleGlzdFxyXG4gICAgLy8gaWYgZXhpc3QgcmV0dXJuIGl0XHJcbiAgICBpZiAodGhpcy5oZWFkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGVhZCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmhlYWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyA1LiBUYWlsLCBtZXRob2QgdGhhdCB3aWxsIHJldHVybiB0aGUgbGFzdCBub2RlIG9mIHRoZSBsaXN0XHJcbiAgLy8gRm9yIGxvb3AgdGhlbiByZXR1cm4gdGhlIHRhaWwgc3VjaCBhcyB0aGUgbGFzdCBub2RlIHJldHVybiBpdCBpbiB0aGUgY3VycmVudCBsaXN0ID9cclxuICBmaW5kVGFpbCgpIHtcclxuICAgIC8vIG1ldGhvZCB0aGF0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IG5vZGUgb2YgdGhlIGxpc3RcclxuICAgIGxldCBzZWFyY2hGb3JMYXN0Tm9kZSA9IHRoaXMuaGVhZDtcclxuICAgIHdoaWxlIChzZWFyY2hGb3JMYXN0Tm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICBzZWFyY2hGb3JMYXN0Tm9kZSA9IHNlYXJjaEZvckxhc3ROb2RlLm5leHROb2RlO1xyXG4gICAgICBpZiAoc2VhcmNoRm9yTGFzdE5vZGUubmV4dE5vZGUgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWFyY2hGb3JMYXN0Tm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIHNlYXJjaEZvckxhc3ROb2RlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyA2LiBhdChpbmRleCksIG1ldGhvZCB0aGF0IHdpbGwgcmV0dXJuIHRoZSBub2RlIG9mIGdpdmVuIGluZGV4LlxyXG4gIC8vIEZvciBsb29wIHNvIHNlZSBpbiBpbmRleCBleGlzdCBpbiB0aGUgY3VycmVudCBsaXN0IHN1Y2ggYXMgMCxcclxuICAvLyBpZiBpdCBkb2VzIHJldHVybiB0aGUgbm9kZVxyXG4gIGF0KGluZGV4KSB7XHJcbiAgICAvLyBtZXRob2QgdGhhdCB3aWxsIHJldHVybiBub2RlIGF0IGdpdmVuIGluZGV4XHJcbiAgICAvLyBsb29wIG1heWJlIGZvciB0aGUgbm9kZSBhdCB0aGUgcG9pbnRlZCBpbmRleFxyXG4gICAgLy8gbmV4dCBjaGVjayBpZiB0aGUgbm9kZSBleGlzdFxyXG4gICAgLy8gcmV0dXJuIHRoZSBub2RlIGF0IHRoZSBwb2ludGVkIGluZGV4XHJcbiAgICAvLyBvdGhlcndpc2UgbWF5YmUgY29uc29sZSBsb2cgbm90IGZvdW5kXHJcbiAgICBsZXQgbm9kZVBvc2l0aW9uID0gMDtcclxuICAgIGxldCBzZWFyY2hGb3JOb2RlID0gdGhpcy5oZWFkO1xyXG5cclxuICAgIGlmIChub2RlUG9zaXRpb24gPT09IDAgJiYgaW5kZXggPT09IDApIHtcclxuICAgICAgY29uc29sZS5sb2coc2VhcmNoRm9yTm9kZSk7XHJcbiAgICAgIHJldHVybiBzZWFyY2hGb3JOb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlIChzZWFyY2hGb3JOb2RlICE9PSBpbmRleCkge1xyXG4gICAgICBub2RlUG9zaXRpb24gKz0gMTtcclxuICAgICAgc2VhcmNoRm9yTm9kZSA9IHNlYXJjaEZvck5vZGUubmV4dE5vZGU7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgdGhlIHdhbnRlZCBpbmRleFwiLCBpbmRleCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgbm9kZSBwb3NpdGlvblwiLCBub2RlUG9zaXRpb24pO1xyXG4gICAgICBpZiAoaW5kZXggPT09IG5vZGVQb3NpdGlvbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlYXJjaEZvck5vZGUpO1xyXG4gICAgICAgIHJldHVybiBzZWFyY2hGb3JOb2RlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyA3LiBQb3AoKSwgc2ltcGxlIG1ldGhvZCB0aGF0IHdpbGwgcmVtb3ZlIHRoZSBsYXN0IG5vZGUgb2YgdGhlIGxpc3QuXHJcbiAgcG9wKCkge1xyXG4gICAgLy8gbWV0aG9kIHRoYXQgd2lsbCByZW1vdmUgdGhlIGxhc3Qgbm9kZVxyXG4gICAgbGV0IHNlYXJjaExhc3ROb2RlID0gdGhpcy5oZWFkO1xyXG4gICAgc2VhcmNoTGFzdE5vZGUgPSBzZWFyY2hMYXN0Tm9kZS5uZXh0Tm9kZTtcclxuICAgIHdoaWxlIChzZWFyY2hMYXN0Tm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgc2VhcmNoTGFzdE5vZGUubmV4dE5vZGUgPT09IG51bGwgfHxcclxuICAgICAgICBzZWFyY2hMYXN0Tm9kZS5uZXh0Tm9kZS5uZXh0Tm9kZSA9PT0gbnVsbCB8fFxyXG4gICAgICAgIHNlYXJjaExhc3ROb2RlLm5leHROb2RlLm5leHROb2RlLm5leHROb2RlID09PSBudWxsIHx8XHJcbiAgICAgICAgc2VhcmNoTGFzdE5vZGUubmV4dE5vZGUubmV4dE5vZGUubmV4dE5vZGUubmV4dE5vZGUgPT09IG51bGwgfHxcclxuICAgICAgICBzZWFyY2hMYXN0Tm9kZS5uZXh0Tm9kZS5uZXh0Tm9kZS5uZXh0Tm9kZS5uZXh0Tm9kZS5uZXh0Tm9kZSA9PT0gbnVsbFxyXG4gICAgICApIHtcclxuICAgICAgICBzZWFyY2hMYXN0Tm9kZS5uZXh0Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VhcmNoTGFzdE5vZGUpO1xyXG4gICAgICAgIHJldHVybiBzZWFyY2hMYXN0Tm9kZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gOC4gY29udGFpbnModmFsdWUpLCBtZXRob2QgdGhhdCB3aWxsIHJldHVybiB0cnVlIGlmIHRoZVxyXG4gIC8vIGV4aXN0IGluIHRoZSBsaXN0LCBvdGhlcndpc2UgZmFsc2VcclxuICAvLyBGb3IgbG9vcCwgdG8gc2VlIGlmIHZhbHVlIGV4aXN0IHJldHVybiB0cnVlIGlmIG5vdCBmYWxzZS5cclxuICBjb250YWlucyh2YWx1ZSkge1xyXG4gICAgLy8gbWV0aG9kIHRoYXQgd2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGUgdmFsdWUgZXhpc3Qgb3RoZXJ3aXNlIGZhbHNlXHJcbiAgICAvLyBzdGFydCBmcm9tIHRoZSBoZWFkXHJcbiAgICBsZXQgc2VhcmNoVmFsdWUgPSB0aGlzLmhlYWQ7XHJcblxyXG4gICAgaWYgKHNlYXJjaFZhbHVlLnZhbHVlID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBub2RlIHZhbHVlIGlzIG5vdCBlcXVhbCB0byB0aGUgYXJndW1lbnRcclxuICAgIHdoaWxlIChzZWFyY2hWYWx1ZS52YWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgLy8gbW92ZSBvbiB0byB0aGUgbmV4dCBub2RlXHJcbiAgICAgIHNlYXJjaFZhbHVlID0gc2VhcmNoVmFsdWUubmV4dE5vZGU7XHJcbiAgICAgIC8vIGlmIG5vZGUgdmFsdWUgaXMgZXF1YWwgdG8gdGhlIHZhbHVlXHJcbiAgICAgIGlmIChzZWFyY2hWYWx1ZS52YWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHNlYXJjaFZhbHVlLm5leHROb2RlID09PSBudWxsKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VhcmNoVmFsdWUudmFsdWUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIDkuIGZpbmRWYWx1ZSh2YWx1ZSksIG1ldGhvZCB0aGF0IHdpbGwgcmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgbm9kZSBjb250YWluaW5nXHJcbiAgLy8gdmFsdWUgbnVsbCBpZiBpdCBkb2Vzbid0IGV4aXN0XHJcbiAgLy8gRm9yIGxvb3AsIGlmIHRoZSB2YWx1ZSBleGlzdCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBub2RlLCBlbHNlIHJldHVybiBudWxsXHJcbiAgZmluZFZhbHVlKHZhbHVlKSB7XHJcbiAgICAvLyBtZXRob2QgdGhhdCB3aWxsIHJldHVybiB0aGUgaW5kZXggb2YgdGhlIG5vZGUsIGVsc2UgaXQgd2lsbCByZXR1cm4gbnVsbFxyXG4gICAgbGV0IG5vZGVQb3NpdGlvbiA9IDA7XHJcbiAgICBsZXQgc2VhcmNoTm9kZUluZGV4ID0gdGhpcy5oZWFkO1xyXG5cclxuICAgIGlmIChzZWFyY2hOb2RlSW5kZXgudmFsdWUgPT09IHZhbHVlICYmIG5vZGVQb3NpdGlvbiA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhub2RlUG9zaXRpb24pO1xyXG4gICAgICByZXR1cm4gbm9kZVBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHdoaWxlIChzZWFyY2hOb2RlSW5kZXgudmFsdWUgIT09IHZhbHVlKSB7XHJcbiAgICAgIG5vZGVQb3NpdGlvbiArPSAxO1xyXG4gICAgICBzZWFyY2hOb2RlSW5kZXggPSBzZWFyY2hOb2RlSW5kZXgubmV4dE5vZGU7XHJcbiAgICAgIGlmIChzZWFyY2hOb2RlSW5kZXgudmFsdWUgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobm9kZVBvc2l0aW9uKTtcclxuICAgICAgICByZXR1cm4gbm9kZVBvc2l0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc2VhcmNoTm9kZUluZGV4Lm5leHROb2RlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIDEwLiB0b1N0cmluZygpLCBtZXRob2QgdGhhdCB3aWxsIHJlcHJlc2VudCBMaW5rZWRMaXN0cyBvYmplY3RzXHJcbiAgLy8gYXMgc3RyaW5ncyBpbiB0aGUgY29uc29sZS5cclxuICAvLyBJbiB0aGUgY3VycmVudCBmb3JtYXQ6XHJcbiAgLy8gKHZhbHVlKSAtPiAodmFsdWUpIC0+ICh2YWx1ZSkgLT4gbnVsbFxyXG4gIC8vIFVzaW5nIEpTT04gc3RyaW5naWZ5IG1heWJlIHRvIHR1cm4gdGhlc2Ugb2JqZWN0cyBhcyBzdHJpbmdzIGluIEpTT04gZm9ybWF0ID9cclxuICB0b1N0cmluZygpIHtcclxuICAgIC8vIG1ldGhvZCB0aGF0IHdpbGwgcmVwcmVzZW50IHRoZSBvYmplY3RzIGFzIHN0cmluZ3NcclxuICAgIGNvbnNvbGUubG9nKGAoJHt0aGlzLmhlYWQudmFsdWV9KSAtPmAsIGAke3RoaXMudGFpbC5uZXh0Tm9kZX1gKTtcclxuICB9XHJcblxyXG4gIC8vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vIEV4dHJhIG1ldGhvZHMgISEhXHJcbiAgLy8gMTEuIGluc2VydEF0KHZhbHVlLCBpbmRleCksIHRoYXQgd2lsbCBpbnNlcnQgbmV3IG5vZGVcclxuICAvLyB3aXRoIHByb3ZpZGVkIHZhbHVlIG9mIGdpdmVuIGluZGV4XHJcbiAgLy8gQ291cGxlIG9mIHRoaW5ncyBuZWVkcyB0byBoYXBwZW4gaGVyZSwgYWZ0ZXIgaW5zZXJ0aW5nIHRoZSBuZXcgbm9kZVxyXG4gIC8vIHRoZSBwcmV2aW91cyBub2RlXHJcbiAgLy8gdGhhdCBoYXMgYmVlbiBtb3ZlIG5lZWQgdG8gcG9pbnQgdG8gdGhlIG5ldyBvbmUgZm9yIGV4YW1wbGVcclxuICAvLyAxIC0+IDIgLT4gNSAtPiAxMlxyXG4gIC8vIGluZGV4ZXMgMCwgMSwgMiwgM1xyXG4gIC8vIElmIDcgaXMgYWRkZWQgaW4gaW5kZXggMlxyXG4gIC8vIDEgLT4gMiAtPiA3IC0+IDUgLSA+IDEyXHJcbiAgLy8gVHdvIG5lZWRzIHRvIHBvaW50cyBhdCBzZXZlbiwgYW5kIHNldmVuIGhhcyB0byBwb2ludCBhcyA1XHJcbiAgLy8gTmVlZCB0byBzb21laG93IHVwZGF0ZSB0aGUgcG9pbnRzIGJldHdlZW4gdGhlIG5vZGVzIHRoYXQgaGFzIGJlZW4gYWRkZWQgdGhlIG5ldyBub2RlXHJcbiAgLy8gMTIuIHJlbW92ZUF0KGluZGV4KSwgbWV0aG9kIHRoYXQgd2lsbCByZW1vdmUgbm9kZSBhdCBjdXJyZW50IGluZGV4LlxyXG4gIC8vIElmIDcgaXMgcmVtb3ZlZCBpbiB0aGUgYWJvdmUgZXhhbXBsZVxyXG4gIC8vIDEgLT4gMiAtPiA1IC0+IDEyXHJcbiAgLy8gVHdvIGhhcyB0byBwb2ludCB0byBmaXZlLCBiZWNhdXNlIHRoZSBwcmV2aW91cyBub2RlIGhhcyBiZWVuIHJlbW92ZWQgaW4gb3JkZXIgdG8ga2VlcFxyXG4gIC8vIHRoZSBwb2ludGVycyB1cGRhdGVkLCBhbmQgZml2ZSBoYXMgdG8gcG9pbnQgdG8gdHdlbHZlLlxyXG4gIC8vIEltcG9ydGFudCB0aXA6IFdoZW4geW91IGluc2VydCBvciByZW1vdmUgYSBub2RlLCBjb25zaWRlclxyXG4gIC8vIGhvdyBpdCB3aWxsIGFmZmVjdCB0aGUgZXhpc3Rpbmcgbm9kZXMuXHJcbiAgLy8gU29tZSBvZiB0aGUgbm9kZXMgd2lsbCBuZWVkIHRoZWlyIG5leHROb2RlIGxpbmsgdXBkYXRlZC5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlua2VkTGlzdDtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBNEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IExpbmtlZExpc3QgZnJvbSBcIi4vbGlua2VkTGlzdFwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY29uc3QgbGlua2VkTGlzdCA9IG5ldyBMaW5rZWRMaXN0KCk7XHJcblxyXG5jb25zdCBoZWFkID0gbGlua2VkTGlzdC5hcHBlbmQoMik7XHJcblxyXG5jb25zdCB0YWlsID0gbGlua2VkTGlzdC5hcHBlbmQoMyk7XHJcblxyXG4vLyBjb25zdCB0ZXN0aW5nID0gbGlua2VkTGlzdC5hcHBlbmQoNCk7XHJcblxyXG4vLyBjb25zdCBhbm90aGVyVGVzdCA9IGxpbmtlZExpc3QuYXBwZW5kKDUpO1xyXG5cclxuY29uc3QgdGVzdCA9IGxpbmtlZExpc3QucHJlcGVuZCgxKTtcclxuXHJcbi8vIGNvbnN0IHRlc3QxID0gbGlua2VkTGlzdC5wcmVwZW5kKDYpO1xyXG5cclxuLy8gbGlua2VkTGlzdC5zaXplKCk7XHJcblxyXG4vLyBsaW5rZWRMaXN0LmZpbmRIZWFkKCk7XHJcblxyXG4vLyBsaW5rZWRMaXN0LmZpbmRUYWlsKCk7XHJcblxyXG4vLyBsaW5rZWRMaXN0LmF0KDIpO1xyXG5cclxuLy8gbGlua2VkTGlzdC5wb3AoKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKGxpbmtlZExpc3QuY29udGFpbnMoNCkpO1xyXG5cclxuLy8gbGlua2VkTGlzdC5maW5kVmFsdWUoMyk7XHJcblxyXG5saW5rZWRMaXN0LnRvU3RyaW5nKCk7XHJcbiJdLCJuYW1lcyI6WyJOb2RlIiwiY29uc3RydWN0b3IiLCJ2YWx1ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIm5leHROb2RlIiwiX3ZhbHVlIiwiX25leHROb2RlIiwiTGlua2VkTGlzdCIsImhlYWQiLCJ0YWlsIiwiY291bnROb2RlcyIsImFwcGVuZCIsIm5ld05vZGUiLCJjb25zb2xlIiwibG9nIiwicHJlcGVuZCIsInNpemUiLCJmaW5kSGVhZCIsImZpbmRUYWlsIiwic2VhcmNoRm9yTGFzdE5vZGUiLCJhdCIsImluZGV4Iiwibm9kZVBvc2l0aW9uIiwic2VhcmNoRm9yTm9kZSIsInBvcCIsInNlYXJjaExhc3ROb2RlIiwiY29udGFpbnMiLCJzZWFyY2hWYWx1ZSIsImZpbmRWYWx1ZSIsInNlYXJjaE5vZGVJbmRleCIsInRvU3RyaW5nIiwibGlua2VkTGlzdCIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9
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

  head = null;
  tail = null;
  countNodes = 0;
  append(value) {
    // if the tail doesn't exist
    // or the list is empty
    if (!this.head) {
      // create new node which will become the head
      const newNode = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
      // count the node if it's created
      this.head = newNode;
      this.countNodes += 1;
      return this.head;
      // else if there is a head already
    }

    if (!this.tail) {
      this.tail = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
      this.countNodes += 1;
      return this.tail;
    }
    const newNode = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
    this.head.nextNode = this.tail;
    this.tail.nextNode = newNode;
    return this.head;
  }

  // 2. prepend(value) parameter, this method will add the node
  // to the beginning of the list
  prepend(value) {
    // if the head doesn't exist
    if (!this.head) {
      // create new node which will become the head
      this.head = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
      // count the created node
      this.countNodes += 1;
      return this.head;
    }
    // else create new node
    const newNode = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
    // point that node to the previous node
    newNode.nextNode = this.head;
    this.head = newNode;
    // count the created node
    this.countNodes += 1;
    return this.head;
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
      // console.log(this.head);
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
        // console.log(searchForLastNode);
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
      // console.log(searchForNode);
      return searchForNode;
    }
    while (searchForNode !== index) {
      nodePosition += 1;
      searchForNode = searchForNode.nextNode;
      // console.log("This is the the wanted index", index);
      // console.log("This is the node position", nodePosition);
      if (index === nodePosition) {
        // console.log(searchForNode);
        return searchForNode;
      }
    }
  }

  // 7. Pop(), simple method that will remove the last node of the list.
  pop() {
    // method that will remove the last node
    const headOfList = this.head;
    let previousNodeBeforeTail = this.head;
    if (headOfList.nextNode === null) {
      throw new Error("You cannot delete the head");
    } else {
      while (previousNodeBeforeTail !== null) {
        if (previousNodeBeforeTail.nextNode !== null && previousNodeBeforeTail.nextNode.nextNode === null) {
          previousNodeBeforeTail.nextNode = null;
          return headOfList;
        }
        previousNodeBeforeTail = previousNodeBeforeTail.nextNode;
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
      // console.log(nodePosition);
      return nodePosition;
    }
    while (searchNodeIndex.value !== value) {
      nodePosition += 1;
      searchNodeIndex = searchNodeIndex.nextNode;
      if (searchNodeIndex.value === value) {
        // console.log(nodePosition);
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
    let startFromHead = this.head;
    let convertToStringsLists = "";
    convertToStringsLists += `(${startFromHead.value}) -> `;
    while (startFromHead !== null) {
      startFromHead = startFromHead.nextNode;
      if (startFromHead !== null) {
        convertToStringsLists += `(${startFromHead.value}) -> `;
      }
    }
    convertToStringsLists += " null";
    return convertToStringsLists;
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: lightgreen;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;AAC9B","sourcesContent":["body {\n  background-color: lightgreen;\n}\n"],"sourceRoot":""}]);
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

// console.log(linkedList);

console.log(linkedList.append(1));
console.log(linkedList.append(2));
console.log(linkedList.append(3));

// console.log(linkedList.prepend(4));

// console.log(linkedList.prepend(5));

// console.log(linkedList.prepend(6));

// console.log(linkedList.size());

// console.log(linkedList.findHead());

// console.log(linkedList.findTail());

// console.log(linkedList.at(2));

// console.log(linkedList.contains(4));

// console.log(linkedList.findValue(1));

// console.log(linkedList.pop())

// console.log(linkedList.pop());

// linkedList.prepend(3);

// linkedList.prepend(4);

// console.log(linkedList.pop());

// linkedList.prepend(3);

// linkedList.append("hamster");

// linkedList.prepend("snake");

// linkedList.append(2);

// console.log(linkedList.contains(4));

// linkedList.findValue(3);

console.log(linkedList.toString());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsTUFBTUEsSUFBSSxDQUFDO0VBQ1RDLFdBQVdBLENBQUEsRUFBZ0M7SUFBQSxJQUEvQkMsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxJQUFJO0lBQUEsSUFBRUcsUUFBUSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxJQUFJO0lBQ3ZDLElBQUksQ0FBQ0QsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0ksUUFBUSxHQUFHQSxRQUFRO0VBQzFCO0VBRUEsSUFBSUosS0FBS0EsQ0FBQSxFQUFHO0lBQ1YsT0FBTyxJQUFJLENBQUNLLE1BQU07RUFDcEI7RUFFQSxJQUFJTCxLQUFLQSxDQUFDQSxLQUFLLEVBQUU7SUFDZixJQUFJLENBQUNLLE1BQU0sR0FBR0wsS0FBSztFQUNyQjtFQUVBLElBQUlJLFFBQVFBLENBQUEsRUFBRztJQUNiLE9BQU8sSUFBSSxDQUFDRSxTQUFTO0VBQ3ZCO0VBRUEsSUFBSUYsUUFBUUEsQ0FBQ0osS0FBSyxFQUFFO0lBQ2xCLElBQUksQ0FBQ00sU0FBUyxHQUFHTixLQUFLO0VBQ3hCO0FBQ0Y7QUFFQSxpRUFBZUYsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJuQjtBQUMwQjtBQUMxQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNUyxVQUFVLENBQUM7RUFDZjtFQUNBO0VBQ0E7O0VBRUFDLElBQUksR0FBRyxJQUFJO0VBRVhDLElBQUksR0FBRyxJQUFJO0VBRVhDLFVBQVUsR0FBRyxDQUFDO0VBRWRDLE1BQU1BLENBQUNYLEtBQUssRUFBRTtJQUNaO0lBQ0E7SUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDUSxJQUFJLEVBQUU7TUFDZDtNQUNBLE1BQU1JLE9BQU8sR0FBRyxJQUFJZCw2Q0FBSSxDQUFDRSxLQUFLLENBQUM7TUFDL0I7TUFDQSxJQUFJLENBQUNRLElBQUksR0FBR0ksT0FBTztNQUVuQixJQUFJLENBQUNGLFVBQVUsSUFBSSxDQUFDO01BRXBCLE9BQU8sSUFBSSxDQUFDRixJQUFJO01BQ2hCO0lBQ0Y7O0lBRUEsSUFBSSxDQUFDLElBQUksQ0FBQ0MsSUFBSSxFQUFFO01BQ2QsSUFBSSxDQUFDQSxJQUFJLEdBQUcsSUFBSVgsNkNBQUksQ0FBQ0UsS0FBSyxDQUFDO01BRTNCLElBQUksQ0FBQ1UsVUFBVSxJQUFJLENBQUM7TUFFcEIsT0FBTyxJQUFJLENBQUNELElBQUk7SUFDbEI7SUFFQSxNQUFNRyxPQUFPLEdBQUcsSUFBSWQsNkNBQUksQ0FBQ0UsS0FBSyxDQUFDO0lBRS9CLElBQUksQ0FBQ1EsSUFBSSxDQUFDSixRQUFRLEdBQUcsSUFBSSxDQUFDSyxJQUFJO0lBRTlCLElBQUksQ0FBQ0EsSUFBSSxDQUFDTCxRQUFRLEdBQUdRLE9BQU87SUFFNUIsT0FBTyxJQUFJLENBQUNKLElBQUk7RUFDbEI7O0VBRUE7RUFDQTtFQUNBSyxPQUFPQSxDQUFDYixLQUFLLEVBQUU7SUFDYjtJQUNBLElBQUksQ0FBQyxJQUFJLENBQUNRLElBQUksRUFBRTtNQUNkO01BQ0EsSUFBSSxDQUFDQSxJQUFJLEdBQUcsSUFBSVYsNkNBQUksQ0FBQ0UsS0FBSyxDQUFDO01BQzNCO01BQ0EsSUFBSSxDQUFDVSxVQUFVLElBQUksQ0FBQztNQUVwQixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUNBO0lBQ0EsTUFBTUksT0FBTyxHQUFHLElBQUlkLDZDQUFJLENBQUNFLEtBQUssQ0FBQztJQUMvQjtJQUNBWSxPQUFPLENBQUNSLFFBQVEsR0FBRyxJQUFJLENBQUNJLElBQUk7SUFDNUIsSUFBSSxDQUFDQSxJQUFJLEdBQUdJLE9BQU87SUFDbkI7SUFDQSxJQUFJLENBQUNGLFVBQVUsSUFBSSxDQUFDO0lBRXBCLE9BQU8sSUFBSSxDQUFDRixJQUFJO0VBQ2xCOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBTSxJQUFJQSxDQUFBLEVBQUc7SUFDTDtJQUNBLE9BQU8sSUFBSSxDQUFDSixVQUFVO0VBQ3hCOztFQUVBO0VBQ0E7RUFDQUssUUFBUUEsQ0FBQSxFQUFHO0lBQ1Q7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJLElBQUksQ0FBQ1AsSUFBSSxFQUFFO01BQ2I7TUFDQSxPQUFPLElBQUksQ0FBQ0EsSUFBSTtJQUNsQjtFQUNGOztFQUVBO0VBQ0E7RUFDQVEsUUFBUUEsQ0FBQSxFQUFHO0lBQ1Q7SUFDQSxJQUFJQyxpQkFBaUIsR0FBRyxJQUFJLENBQUNULElBQUk7SUFDakMsT0FBT1MsaUJBQWlCLEtBQUssSUFBSSxFQUFFO01BQ2pDQSxpQkFBaUIsR0FBR0EsaUJBQWlCLENBQUNiLFFBQVE7TUFDOUMsSUFBSWEsaUJBQWlCLENBQUNiLFFBQVEsS0FBSyxJQUFJLEVBQUU7UUFDdkM7UUFDQSxPQUFPYSxpQkFBaUI7TUFDMUI7SUFDRjtFQUNGOztFQUVBO0VBQ0E7RUFDQTtFQUNBQyxFQUFFQSxDQUFDQyxLQUFLLEVBQUU7SUFDUjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsSUFBSUMsWUFBWSxHQUFHLENBQUM7SUFDcEIsSUFBSUMsYUFBYSxHQUFHLElBQUksQ0FBQ2IsSUFBSTtJQUU3QixJQUFJWSxZQUFZLEtBQUssQ0FBQyxJQUFJRCxLQUFLLEtBQUssQ0FBQyxFQUFFO01BQ3JDO01BQ0EsT0FBT0UsYUFBYTtJQUN0QjtJQUVBLE9BQU9BLGFBQWEsS0FBS0YsS0FBSyxFQUFFO01BQzlCQyxZQUFZLElBQUksQ0FBQztNQUNqQkMsYUFBYSxHQUFHQSxhQUFhLENBQUNqQixRQUFRO01BQ3RDO01BQ0E7TUFDQSxJQUFJZSxLQUFLLEtBQUtDLFlBQVksRUFBRTtRQUMxQjtRQUNBLE9BQU9DLGFBQWE7TUFDdEI7SUFDRjtFQUNGOztFQUVBO0VBQ0FDLEdBQUdBLENBQUEsRUFBRztJQUNKO0lBQ0EsTUFBTUMsVUFBVSxHQUFHLElBQUksQ0FBQ2YsSUFBSTtJQUU1QixJQUFJZ0Isc0JBQXNCLEdBQUcsSUFBSSxDQUFDaEIsSUFBSTtJQUV0QyxJQUFJZSxVQUFVLENBQUNuQixRQUFRLEtBQUssSUFBSSxFQUFFO01BQ2hDLE1BQU0sSUFBSXFCLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztJQUMvQyxDQUFDLE1BQU07TUFDTCxPQUFPRCxzQkFBc0IsS0FBSyxJQUFJLEVBQUU7UUFDdEMsSUFDRUEsc0JBQXNCLENBQUNwQixRQUFRLEtBQUssSUFBSSxJQUN4Q29CLHNCQUFzQixDQUFDcEIsUUFBUSxDQUFDQSxRQUFRLEtBQUssSUFBSSxFQUNqRDtVQUNBb0Isc0JBQXNCLENBQUNwQixRQUFRLEdBQUcsSUFBSTtVQUN0QyxPQUFPbUIsVUFBVTtRQUNuQjtRQUVBQyxzQkFBc0IsR0FBR0Esc0JBQXNCLENBQUNwQixRQUFRO01BQzFEO0lBQ0Y7RUFDRjs7RUFFQTtFQUNBO0VBQ0E7RUFDQXNCLFFBQVFBLENBQUMxQixLQUFLLEVBQUU7SUFDZDtJQUNBO0lBQ0EsSUFBSTJCLFdBQVcsR0FBRyxJQUFJLENBQUNuQixJQUFJO0lBRTNCLElBQUltQixXQUFXLENBQUMzQixLQUFLLEtBQUtBLEtBQUssRUFBRTtNQUMvQixPQUFPLElBQUk7SUFDYjs7SUFFQTtJQUNBLE9BQU8yQixXQUFXLENBQUMzQixLQUFLLEtBQUtBLEtBQUssRUFBRTtNQUNsQztNQUNBMkIsV0FBVyxHQUFHQSxXQUFXLENBQUN2QixRQUFRO01BQ2xDO01BQ0EsSUFBSXVCLFdBQVcsQ0FBQzNCLEtBQUssS0FBS0EsS0FBSyxFQUFFO1FBQy9CLE9BQU8sSUFBSTtNQUNiO01BRUEsSUFBSTJCLFdBQVcsQ0FBQ3ZCLFFBQVEsS0FBSyxJQUFJLEVBQUU7UUFDakM7UUFDQTtRQUNBLE9BQU8sS0FBSztNQUNkO0lBQ0Y7RUFDRjs7RUFFQTtFQUNBO0VBQ0E7RUFDQXdCLFNBQVNBLENBQUM1QixLQUFLLEVBQUU7SUFDZjtJQUNBLElBQUlvQixZQUFZLEdBQUcsQ0FBQztJQUNwQixJQUFJUyxlQUFlLEdBQUcsSUFBSSxDQUFDckIsSUFBSTtJQUUvQixJQUFJcUIsZUFBZSxDQUFDN0IsS0FBSyxLQUFLQSxLQUFLLElBQUlvQixZQUFZLEtBQUssQ0FBQyxFQUFFO01BQ3pEO01BQ0EsT0FBT0EsWUFBWTtJQUNyQjtJQUVBLE9BQU9TLGVBQWUsQ0FBQzdCLEtBQUssS0FBS0EsS0FBSyxFQUFFO01BQ3RDb0IsWUFBWSxJQUFJLENBQUM7TUFDakJTLGVBQWUsR0FBR0EsZUFBZSxDQUFDekIsUUFBUTtNQUMxQyxJQUFJeUIsZUFBZSxDQUFDN0IsS0FBSyxLQUFLQSxLQUFLLEVBQUU7UUFDbkM7UUFDQSxPQUFPb0IsWUFBWTtNQUNyQjtNQUVBLElBQUlTLGVBQWUsQ0FBQ3pCLFFBQVEsS0FBSyxJQUFJLEVBQUU7UUFDckMsT0FBTyxJQUFJO01BQ2I7SUFDRjtFQUNGOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTBCLFFBQVFBLENBQUEsRUFBRztJQUNUO0lBQ0EsSUFBSUMsYUFBYSxHQUFHLElBQUksQ0FBQ3ZCLElBQUk7SUFDN0IsSUFBSXdCLHFCQUFxQixHQUFHLEVBQUU7SUFDOUJBLHFCQUFxQixJQUFLLElBQUdELGFBQWEsQ0FBQy9CLEtBQU0sT0FBTTtJQUN2RCxPQUFPK0IsYUFBYSxLQUFLLElBQUksRUFBRTtNQUM3QkEsYUFBYSxHQUFHQSxhQUFhLENBQUMzQixRQUFRO01BRXRDLElBQUkyQixhQUFhLEtBQUssSUFBSSxFQUFFO1FBQzFCQyxxQkFBcUIsSUFBSyxJQUFHRCxhQUFhLENBQUMvQixLQUFNLE9BQU07TUFDekQ7SUFDRjtJQUNBZ0MscUJBQXFCLElBQUksT0FBTztJQUNoQyxPQUFPQSxxQkFBcUI7RUFDOUI7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0Y7O0FBRUEsaUVBQWV6QixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0UnpCO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxnREFBZ0QsaUNBQWlDLEdBQUcsU0FBUyxnRkFBZ0YsWUFBWSxnQ0FBZ0MsaUNBQWlDLEdBQUcscUJBQXFCO0FBQ2xSO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FzQztBQUNqQjtBQUVyQixNQUFNMEIsVUFBVSxHQUFHLElBQUkxQixtREFBVSxDQUFDLENBQUM7O0FBRW5DOztBQUVBMkIsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFVBQVUsQ0FBQ3RCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVqQ3VCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixVQUFVLENBQUN0QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFakN1QixPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsVUFBVSxDQUFDdEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVqQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQXVCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixVQUFVLENBQUNILFFBQVEsQ0FBQyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvTm9kZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL2xpbmtlZExpc3QuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5jbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IodmFsdWUgPSBudWxsLCBuZXh0Tm9kZSA9IG51bGwpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5uZXh0Tm9kZSA9IG5leHROb2RlO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbmV4dE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25leHROb2RlO1xuICB9XG5cbiAgc2V0IG5leHROb2RlKHZhbHVlKSB7XG4gICAgdGhpcy5fbmV4dE5vZGUgPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xuLy8gTGlua2VkIExpc3RzIHBzZXVkbyBjb2RlXG5cbi8vIEJlZm9yZSBiZWdpbiB0aGUgcHJvamVjdCBjaG9vc2UgYmV0d2VlbiBmYWN0b3J5IGZ1bmN0aW9ucyBvciBjbGFzcyBzeW50YXggIVxuXG4vLyBUd28gaW1wb3J0YW50IGNsYXNzZXMvZmFjdG9yeSBmdW5jdGlvbnMgdGhhdCBhcmUgbmVlZGVkLlxuLy8gMS4gVGhlIGZpcnN0IG9uZSBpcyBmb3IgcmVwcmVzZW50aW5nIHRoZSBmdWxsIGxpc3Rcbi8vIE1heWJlIGZvciBjcmVhdGluZyBuZXcgb2JqZWN0cyAobm9kZXMpID9cblxuLy8gMi4gTm9kZSBjbGFzcy9mYWN0b3J5IHdpdGggdmFsdWUgcHJvcGVydHksIGFuZCBsaW5rIHRvIHRoZSBuZXh0Tm9kZVxuLy8gc2V0IGJvdGggbXkgZGVmYXVsdC5cbi8vIEhtbSB2YWx1ZSBwcm9wZXJ0eSwgZ2V0IGZvciByZWFkaW5nLCBzZXQgZm9yIHdyaXRpbmcgP1xuLy8gQW5kIHRoaXMgd2lsbCBiZSB1c2VkIHRvIHBvaW50IG9uIHRvIHRoZSBuZXh0Tm9kZSxcbi8vIHNvbWV0aGluZyBsaWtlIHRoaXMsIHByZXZpb3VzOiB2YWx1ZSwgbmV4dDogbnVsbCA/XG5cbmNsYXNzIExpbmtlZExpc3Qge1xuICAvLyBMaW5rZWQgTGlzdCBmdW5jdGlvbnNcbiAgLy8gMS4gYXBwZW5kKHZhbHVlKSBwYXJhbWV0ZXIsIHRoaXMgbWV0aG9kIHdpbGwgYWRkIHRoZSBub2RlIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgLy8gTWF5YmUgY2hlY2sgaWYgdGhlcmUgaXMgdGFpbCBhbmQgaGFzIGFueSB2YWx1ZSB0byBhc3NpZ24gdG8gdGhlIG5vZGUncyB2YWx1ZVxuXG4gIGhlYWQgPSBudWxsO1xuXG4gIHRhaWwgPSBudWxsO1xuXG4gIGNvdW50Tm9kZXMgPSAwO1xuXG4gIGFwcGVuZCh2YWx1ZSkge1xuICAgIC8vIGlmIHRoZSB0YWlsIGRvZXNuJ3QgZXhpc3RcbiAgICAvLyBvciB0aGUgbGlzdCBpcyBlbXB0eVxuICAgIGlmICghdGhpcy5oZWFkKSB7XG4gICAgICAvLyBjcmVhdGUgbmV3IG5vZGUgd2hpY2ggd2lsbCBiZWNvbWUgdGhlIGhlYWRcbiAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgICAvLyBjb3VudCB0aGUgbm9kZSBpZiBpdCdzIGNyZWF0ZWRcbiAgICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG5cbiAgICAgIHRoaXMuY291bnROb2RlcyArPSAxO1xuXG4gICAgICByZXR1cm4gdGhpcy5oZWFkO1xuICAgICAgLy8gZWxzZSBpZiB0aGVyZSBpcyBhIGhlYWQgYWxyZWFkeVxuICAgIH1cblxuICAgIGlmICghdGhpcy50YWlsKSB7XG4gICAgICB0aGlzLnRhaWwgPSBuZXcgTm9kZSh2YWx1ZSk7XG5cbiAgICAgIHRoaXMuY291bnROb2RlcyArPSAxO1xuXG4gICAgICByZXR1cm4gdGhpcy50YWlsO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG5cbiAgICB0aGlzLmhlYWQubmV4dE5vZGUgPSB0aGlzLnRhaWw7XG5cbiAgICB0aGlzLnRhaWwubmV4dE5vZGUgPSBuZXdOb2RlO1xuXG4gICAgcmV0dXJuIHRoaXMuaGVhZDtcbiAgfVxuXG4gIC8vIDIuIHByZXBlbmQodmFsdWUpIHBhcmFtZXRlciwgdGhpcyBtZXRob2Qgd2lsbCBhZGQgdGhlIG5vZGVcbiAgLy8gdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdFxuICBwcmVwZW5kKHZhbHVlKSB7XG4gICAgLy8gaWYgdGhlIGhlYWQgZG9lc24ndCBleGlzdFxuICAgIGlmICghdGhpcy5oZWFkKSB7XG4gICAgICAvLyBjcmVhdGUgbmV3IG5vZGUgd2hpY2ggd2lsbCBiZWNvbWUgdGhlIGhlYWRcbiAgICAgIHRoaXMuaGVhZCA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICAgIC8vIGNvdW50IHRoZSBjcmVhdGVkIG5vZGVcbiAgICAgIHRoaXMuY291bnROb2RlcyArPSAxO1xuXG4gICAgICByZXR1cm4gdGhpcy5oZWFkO1xuICAgIH1cbiAgICAvLyBlbHNlIGNyZWF0ZSBuZXcgbm9kZVxuICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgLy8gcG9pbnQgdGhhdCBub2RlIHRvIHRoZSBwcmV2aW91cyBub2RlXG4gICAgbmV3Tm9kZS5uZXh0Tm9kZSA9IHRoaXMuaGVhZDtcbiAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgIC8vIGNvdW50IHRoZSBjcmVhdGVkIG5vZGVcbiAgICB0aGlzLmNvdW50Tm9kZXMgKz0gMTtcblxuICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gIH1cblxuICAvLyBDaGVjayBpZiB0aGUgaGVhZCBoYXMgYW55IHZhbHVlLCBhbmQgYXNzaWduIHRoZSBub2RlJ3MgdmFsdWUgP1xuICAvLyBFeGFtcGxlIDUgKGhlYWQpIC0+IDIgKHRhaWwpXG4gIC8vIGhlYWQgcG9pbnRzIHRvIDUgKG5leHQgYXMgcG9pbnRlciksIGFuZCB0aGUgdGFpbHMgcG9pbnRzIHRvIG51bGwuXG4gIC8vIElmIDEgaXMgYWRkZWQgYXMgdGhlIGhlYWQsIDEgLT4gNSAtPiAyXG4gIC8vIDEgaXMgdGhlIG5ldyBoZWFkLCAxIHBvaW50cyB0byA1IGFzIG5leHQgdmFsdWUsIDIgcG9pbnRzIHRvIG51bGxcbiAgLy8gSWYgMTIgaXMgYWRkZWQgYXMgdGhlIHRhaWwgMSAtPiA1IC0+IDIgLT4gMTJcbiAgLy8gMTIgaXMgdGhlIG5ldyB0YWlsLCAxIHBvaW50cyBhcyBuZXh0IHZhbHVlIHRvIDUsIDUgbmV4dCB2YWx1ZSBwb2ludHMgdG8gMiBhbmQgMlxuICAvLyBwb2ludHMgdG8gMTIsIDEyIHBvaW50cyB0byBudWxsXG5cbiAgLy8gMy5TaXplLCBtZXRob2QgdGhhdCB3aWxsIHJldHVybiB0aGUgbnVtYmVycyBvZiBub2RlcyBpbiB0aGUgbGlzdFxuICAvLyBNYXliZSBmb3IgbG9vcCB0aG91Z2ggdGhlIHdob2xlIGxpc3QsIGFuZCByZXR1cm4gdGhlIG5vZGVzIGluIHRoZSBjdXJyZW50IGxpc3QgP1xuICBzaXplKCkge1xuICAgIC8vIHJldHVybiB0aGUgbnVtYmVyIG9mIG5vZGVzIG9mIHRoZSBsaXN0XG4gICAgcmV0dXJuIHRoaXMuY291bnROb2RlcztcbiAgfVxuXG4gIC8vIDQuIEhlYWQsIG1ldGhvZCB0aGF0IHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBub2RlIHRoZSBmaXJzdCBub2RlIG9mIHRoZSBsaXN0XG4gIC8vIENvbmRpdGlvbiBpZiB0aGUgaGVhZCBleGlzdCBzdWNoIGFzIHRoZSBmaXJzdCBub2RlIHJldHVybiBpdCwgbm8gbG9vcCBtYXliZSBoZXJlID9cbiAgZmluZEhlYWQoKSB7XG4gICAgLy8gbWV0aG9kIHRoYXQgd2lsbCByZXR1cm4gdGhlIGZpcnN0IG5vZGUgb2YgdGhlIGxpc3RcbiAgICAvLyB0cmF2ZXJzZSB0byB0aGUgZmlyc3Qgbm9kZVxuICAgIC8vIGNoZWNrIGlmIHRoZSBmaXJzdCBub2RlIGV4aXN0XG4gICAgLy8gaWYgZXhpc3QgcmV0dXJuIGl0XG4gICAgaWYgKHRoaXMuaGVhZCkge1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5oZWFkKTtcbiAgICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gNS4gVGFpbCwgbWV0aG9kIHRoYXQgd2lsbCByZXR1cm4gdGhlIGxhc3Qgbm9kZSBvZiB0aGUgbGlzdFxuICAvLyBGb3IgbG9vcCB0aGVuIHJldHVybiB0aGUgdGFpbCBzdWNoIGFzIHRoZSBsYXN0IG5vZGUgcmV0dXJuIGl0IGluIHRoZSBjdXJyZW50IGxpc3QgP1xuICBmaW5kVGFpbCgpIHtcbiAgICAvLyBtZXRob2QgdGhhdCB3aWxsIHJldHVybiB0aGUgbGFzdCBub2RlIG9mIHRoZSBsaXN0XG4gICAgbGV0IHNlYXJjaEZvckxhc3ROb2RlID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlIChzZWFyY2hGb3JMYXN0Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgc2VhcmNoRm9yTGFzdE5vZGUgPSBzZWFyY2hGb3JMYXN0Tm9kZS5uZXh0Tm9kZTtcbiAgICAgIGlmIChzZWFyY2hGb3JMYXN0Tm9kZS5uZXh0Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hGb3JMYXN0Tm9kZSk7XG4gICAgICAgIHJldHVybiBzZWFyY2hGb3JMYXN0Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyA2LiBhdChpbmRleCksIG1ldGhvZCB0aGF0IHdpbGwgcmV0dXJuIHRoZSBub2RlIG9mIGdpdmVuIGluZGV4LlxuICAvLyBGb3IgbG9vcCBzbyBzZWUgaW4gaW5kZXggZXhpc3QgaW4gdGhlIGN1cnJlbnQgbGlzdCBzdWNoIGFzIDAsXG4gIC8vIGlmIGl0IGRvZXMgcmV0dXJuIHRoZSBub2RlXG4gIGF0KGluZGV4KSB7XG4gICAgLy8gbWV0aG9kIHRoYXQgd2lsbCByZXR1cm4gbm9kZSBhdCBnaXZlbiBpbmRleFxuICAgIC8vIGxvb3AgbWF5YmUgZm9yIHRoZSBub2RlIGF0IHRoZSBwb2ludGVkIGluZGV4XG4gICAgLy8gbmV4dCBjaGVjayBpZiB0aGUgbm9kZSBleGlzdFxuICAgIC8vIHJldHVybiB0aGUgbm9kZSBhdCB0aGUgcG9pbnRlZCBpbmRleFxuICAgIC8vIG90aGVyd2lzZSBtYXliZSBjb25zb2xlIGxvZyBub3QgZm91bmRcbiAgICBsZXQgbm9kZVBvc2l0aW9uID0gMDtcbiAgICBsZXQgc2VhcmNoRm9yTm9kZSA9IHRoaXMuaGVhZDtcblxuICAgIGlmIChub2RlUG9zaXRpb24gPT09IDAgJiYgaW5kZXggPT09IDApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaEZvck5vZGUpO1xuICAgICAgcmV0dXJuIHNlYXJjaEZvck5vZGU7XG4gICAgfVxuXG4gICAgd2hpbGUgKHNlYXJjaEZvck5vZGUgIT09IGluZGV4KSB7XG4gICAgICBub2RlUG9zaXRpb24gKz0gMTtcbiAgICAgIHNlYXJjaEZvck5vZGUgPSBzZWFyY2hGb3JOb2RlLm5leHROb2RlO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSB0aGUgd2FudGVkIGluZGV4XCIsIGluZGV4KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB0aGUgbm9kZSBwb3NpdGlvblwiLCBub2RlUG9zaXRpb24pO1xuICAgICAgaWYgKGluZGV4ID09PSBub2RlUG9zaXRpb24pIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VhcmNoRm9yTm9kZSk7XG4gICAgICAgIHJldHVybiBzZWFyY2hGb3JOb2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIDcuIFBvcCgpLCBzaW1wbGUgbWV0aG9kIHRoYXQgd2lsbCByZW1vdmUgdGhlIGxhc3Qgbm9kZSBvZiB0aGUgbGlzdC5cbiAgcG9wKCkge1xuICAgIC8vIG1ldGhvZCB0aGF0IHdpbGwgcmVtb3ZlIHRoZSBsYXN0IG5vZGVcbiAgICBjb25zdCBoZWFkT2ZMaXN0ID0gdGhpcy5oZWFkO1xuXG4gICAgbGV0IHByZXZpb3VzTm9kZUJlZm9yZVRhaWwgPSB0aGlzLmhlYWQ7XG5cbiAgICBpZiAoaGVhZE9mTGlzdC5uZXh0Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbm5vdCBkZWxldGUgdGhlIGhlYWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChwcmV2aW91c05vZGVCZWZvcmVUYWlsICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcmV2aW91c05vZGVCZWZvcmVUYWlsLm5leHROb2RlICE9PSBudWxsICYmXG4gICAgICAgICAgcHJldmlvdXNOb2RlQmVmb3JlVGFpbC5uZXh0Tm9kZS5uZXh0Tm9kZSA9PT0gbnVsbFxuICAgICAgICApIHtcbiAgICAgICAgICBwcmV2aW91c05vZGVCZWZvcmVUYWlsLm5leHROb2RlID0gbnVsbDtcbiAgICAgICAgICByZXR1cm4gaGVhZE9mTGlzdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZpb3VzTm9kZUJlZm9yZVRhaWwgPSBwcmV2aW91c05vZGVCZWZvcmVUYWlsLm5leHROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIDguIGNvbnRhaW5zKHZhbHVlKSwgbWV0aG9kIHRoYXQgd2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGVcbiAgLy8gZXhpc3QgaW4gdGhlIGxpc3QsIG90aGVyd2lzZSBmYWxzZVxuICAvLyBGb3IgbG9vcCwgdG8gc2VlIGlmIHZhbHVlIGV4aXN0IHJldHVybiB0cnVlIGlmIG5vdCBmYWxzZS5cbiAgY29udGFpbnModmFsdWUpIHtcbiAgICAvLyBtZXRob2QgdGhhdCB3aWxsIHJldHVybiB0cnVlIGlmIHRoZSB2YWx1ZSBleGlzdCBvdGhlcndpc2UgZmFsc2VcbiAgICAvLyBzdGFydCBmcm9tIHRoZSBoZWFkXG4gICAgbGV0IHNlYXJjaFZhbHVlID0gdGhpcy5oZWFkO1xuXG4gICAgaWYgKHNlYXJjaFZhbHVlLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gaWYgbm9kZSB2YWx1ZSBpcyBub3QgZXF1YWwgdG8gdGhlIGFyZ3VtZW50XG4gICAgd2hpbGUgKHNlYXJjaFZhbHVlLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgLy8gbW92ZSBvbiB0byB0aGUgbmV4dCBub2RlXG4gICAgICBzZWFyY2hWYWx1ZSA9IHNlYXJjaFZhbHVlLm5leHROb2RlO1xuICAgICAgLy8gaWYgbm9kZSB2YWx1ZSBpcyBlcXVhbCB0byB0aGUgdmFsdWVcbiAgICAgIGlmIChzZWFyY2hWYWx1ZS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWFyY2hWYWx1ZS5uZXh0Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hWYWx1ZS52YWx1ZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIDkuIGZpbmRWYWx1ZSh2YWx1ZSksIG1ldGhvZCB0aGF0IHdpbGwgcmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgbm9kZSBjb250YWluaW5nXG4gIC8vIHZhbHVlIG51bGwgaWYgaXQgZG9lc24ndCBleGlzdFxuICAvLyBGb3IgbG9vcCwgaWYgdGhlIHZhbHVlIGV4aXN0IHJldHVybiB0aGUgaW5kZXggb2YgdGhlIG5vZGUsIGVsc2UgcmV0dXJuIG51bGxcbiAgZmluZFZhbHVlKHZhbHVlKSB7XG4gICAgLy8gbWV0aG9kIHRoYXQgd2lsbCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBub2RlLCBlbHNlIGl0IHdpbGwgcmV0dXJuIG51bGxcbiAgICBsZXQgbm9kZVBvc2l0aW9uID0gMDtcbiAgICBsZXQgc2VhcmNoTm9kZUluZGV4ID0gdGhpcy5oZWFkO1xuXG4gICAgaWYgKHNlYXJjaE5vZGVJbmRleC52YWx1ZSA9PT0gdmFsdWUgJiYgbm9kZVBvc2l0aW9uID09PSAwKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhub2RlUG9zaXRpb24pO1xuICAgICAgcmV0dXJuIG5vZGVQb3NpdGlvbjtcbiAgICB9XG5cbiAgICB3aGlsZSAoc2VhcmNoTm9kZUluZGV4LnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgbm9kZVBvc2l0aW9uICs9IDE7XG4gICAgICBzZWFyY2hOb2RlSW5kZXggPSBzZWFyY2hOb2RlSW5kZXgubmV4dE5vZGU7XG4gICAgICBpZiAoc2VhcmNoTm9kZUluZGV4LnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhub2RlUG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gbm9kZVBvc2l0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VhcmNoTm9kZUluZGV4Lm5leHROb2RlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIDEwLiB0b1N0cmluZygpLCBtZXRob2QgdGhhdCB3aWxsIHJlcHJlc2VudCBMaW5rZWRMaXN0cyBvYmplY3RzXG4gIC8vIGFzIHN0cmluZ3MgaW4gdGhlIGNvbnNvbGUuXG4gIC8vIEluIHRoZSBjdXJyZW50IGZvcm1hdDpcbiAgLy8gKHZhbHVlKSAtPiAodmFsdWUpIC0+ICh2YWx1ZSkgLT4gbnVsbFxuICAvLyBVc2luZyBKU09OIHN0cmluZ2lmeSBtYXliZSB0byB0dXJuIHRoZXNlIG9iamVjdHMgYXMgc3RyaW5ncyBpbiBKU09OIGZvcm1hdCA/XG4gIHRvU3RyaW5nKCkge1xuICAgIC8vIG1ldGhvZCB0aGF0IHdpbGwgcmVwcmVzZW50IHRoZSBvYmplY3RzIGFzIHN0cmluZ3NcbiAgICBsZXQgc3RhcnRGcm9tSGVhZCA9IHRoaXMuaGVhZDtcbiAgICBsZXQgY29udmVydFRvU3RyaW5nc0xpc3RzID0gXCJcIjtcbiAgICBjb252ZXJ0VG9TdHJpbmdzTGlzdHMgKz0gYCgke3N0YXJ0RnJvbUhlYWQudmFsdWV9KSAtPiBgO1xuICAgIHdoaWxlIChzdGFydEZyb21IZWFkICE9PSBudWxsKSB7XG4gICAgICBzdGFydEZyb21IZWFkID0gc3RhcnRGcm9tSGVhZC5uZXh0Tm9kZTtcblxuICAgICAgaWYgKHN0YXJ0RnJvbUhlYWQgIT09IG51bGwpIHtcbiAgICAgICAgY29udmVydFRvU3RyaW5nc0xpc3RzICs9IGAoJHtzdGFydEZyb21IZWFkLnZhbHVlfSkgLT4gYDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29udmVydFRvU3RyaW5nc0xpc3RzICs9IFwiIG51bGxcIjtcbiAgICByZXR1cm4gY29udmVydFRvU3RyaW5nc0xpc3RzO1xuICB9XG5cbiAgLy8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIEV4dHJhIG1ldGhvZHMgISEhXG4gIC8vIDExLiBpbnNlcnRBdCh2YWx1ZSwgaW5kZXgpLCB0aGF0IHdpbGwgaW5zZXJ0IG5ldyBub2RlXG4gIC8vIHdpdGggcHJvdmlkZWQgdmFsdWUgb2YgZ2l2ZW4gaW5kZXhcbiAgLy8gQ291cGxlIG9mIHRoaW5ncyBuZWVkcyB0byBoYXBwZW4gaGVyZSwgYWZ0ZXIgaW5zZXJ0aW5nIHRoZSBuZXcgbm9kZVxuICAvLyB0aGUgcHJldmlvdXMgbm9kZVxuICAvLyB0aGF0IGhhcyBiZWVuIG1vdmUgbmVlZCB0byBwb2ludCB0byB0aGUgbmV3IG9uZSBmb3IgZXhhbXBsZVxuICAvLyAxIC0+IDIgLT4gNSAtPiAxMlxuICAvLyBpbmRleGVzIDAsIDEsIDIsIDNcbiAgLy8gSWYgNyBpcyBhZGRlZCBpbiBpbmRleCAyXG4gIC8vIDEgLT4gMiAtPiA3IC0+IDUgLSA+IDEyXG4gIC8vIFR3byBuZWVkcyB0byBwb2ludHMgYXQgc2V2ZW4sIGFuZCBzZXZlbiBoYXMgdG8gcG9pbnQgYXMgNVxuICAvLyBOZWVkIHRvIHNvbWVob3cgdXBkYXRlIHRoZSBwb2ludHMgYmV0d2VlbiB0aGUgbm9kZXMgdGhhdCBoYXMgYmVlbiBhZGRlZCB0aGUgbmV3IG5vZGVcbiAgLy8gMTIuIHJlbW92ZUF0KGluZGV4KSwgbWV0aG9kIHRoYXQgd2lsbCByZW1vdmUgbm9kZSBhdCBjdXJyZW50IGluZGV4LlxuICAvLyBJZiA3IGlzIHJlbW92ZWQgaW4gdGhlIGFib3ZlIGV4YW1wbGVcbiAgLy8gMSAtPiAyIC0+IDUgLT4gMTJcbiAgLy8gVHdvIGhhcyB0byBwb2ludCB0byBmaXZlLCBiZWNhdXNlIHRoZSBwcmV2aW91cyBub2RlIGhhcyBiZWVuIHJlbW92ZWQgaW4gb3JkZXIgdG8ga2VlcFxuICAvLyB0aGUgcG9pbnRlcnMgdXBkYXRlZCwgYW5kIGZpdmUgaGFzIHRvIHBvaW50IHRvIHR3ZWx2ZS5cbiAgLy8gSW1wb3J0YW50IHRpcDogV2hlbiB5b3UgaW5zZXJ0IG9yIHJlbW92ZSBhIG5vZGUsIGNvbnNpZGVyXG4gIC8vIGhvdyBpdCB3aWxsIGFmZmVjdCB0aGUgZXhpc3Rpbmcgbm9kZXMuXG4gIC8vIFNvbWUgb2YgdGhlIG5vZGVzIHdpbGwgbmVlZCB0aGVpciBuZXh0Tm9kZSBsaW5rIHVwZGF0ZWQuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtlZExpc3Q7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUE0QjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgTGlua2VkTGlzdCBmcm9tIFwiLi9saW5rZWRMaXN0XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBsaW5rZWRMaXN0ID0gbmV3IExpbmtlZExpc3QoKTtcblxuLy8gY29uc29sZS5sb2cobGlua2VkTGlzdCk7XG5cbmNvbnNvbGUubG9nKGxpbmtlZExpc3QuYXBwZW5kKDEpKTtcblxuY29uc29sZS5sb2cobGlua2VkTGlzdC5hcHBlbmQoMikpO1xuXG5jb25zb2xlLmxvZyhsaW5rZWRMaXN0LmFwcGVuZCgzKSk7XG5cbi8vIGNvbnNvbGUubG9nKGxpbmtlZExpc3QucHJlcGVuZCg0KSk7XG5cbi8vIGNvbnNvbGUubG9nKGxpbmtlZExpc3QucHJlcGVuZCg1KSk7XG5cbi8vIGNvbnNvbGUubG9nKGxpbmtlZExpc3QucHJlcGVuZCg2KSk7XG5cbi8vIGNvbnNvbGUubG9nKGxpbmtlZExpc3Quc2l6ZSgpKTtcblxuLy8gY29uc29sZS5sb2cobGlua2VkTGlzdC5maW5kSGVhZCgpKTtcblxuLy8gY29uc29sZS5sb2cobGlua2VkTGlzdC5maW5kVGFpbCgpKTtcblxuLy8gY29uc29sZS5sb2cobGlua2VkTGlzdC5hdCgyKSk7XG5cbi8vIGNvbnNvbGUubG9nKGxpbmtlZExpc3QuY29udGFpbnMoNCkpO1xuXG4vLyBjb25zb2xlLmxvZyhsaW5rZWRMaXN0LmZpbmRWYWx1ZSgxKSk7XG5cbi8vIGNvbnNvbGUubG9nKGxpbmtlZExpc3QucG9wKCkpXG5cbi8vIGNvbnNvbGUubG9nKGxpbmtlZExpc3QucG9wKCkpO1xuXG4vLyBsaW5rZWRMaXN0LnByZXBlbmQoMyk7XG5cbi8vIGxpbmtlZExpc3QucHJlcGVuZCg0KTtcblxuLy8gY29uc29sZS5sb2cobGlua2VkTGlzdC5wb3AoKSk7XG5cbi8vIGxpbmtlZExpc3QucHJlcGVuZCgzKTtcblxuLy8gbGlua2VkTGlzdC5hcHBlbmQoXCJoYW1zdGVyXCIpO1xuXG4vLyBsaW5rZWRMaXN0LnByZXBlbmQoXCJzbmFrZVwiKTtcblxuLy8gbGlua2VkTGlzdC5hcHBlbmQoMik7XG5cbi8vIGNvbnNvbGUubG9nKGxpbmtlZExpc3QuY29udGFpbnMoNCkpO1xuXG4vLyBsaW5rZWRMaXN0LmZpbmRWYWx1ZSgzKTtcblxuY29uc29sZS5sb2cobGlua2VkTGlzdC50b1N0cmluZygpKTtcbiJdLCJuYW1lcyI6WyJOb2RlIiwiY29uc3RydWN0b3IiLCJ2YWx1ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIm5leHROb2RlIiwiX3ZhbHVlIiwiX25leHROb2RlIiwiTGlua2VkTGlzdCIsImhlYWQiLCJ0YWlsIiwiY291bnROb2RlcyIsImFwcGVuZCIsIm5ld05vZGUiLCJwcmVwZW5kIiwic2l6ZSIsImZpbmRIZWFkIiwiZmluZFRhaWwiLCJzZWFyY2hGb3JMYXN0Tm9kZSIsImF0IiwiaW5kZXgiLCJub2RlUG9zaXRpb24iLCJzZWFyY2hGb3JOb2RlIiwicG9wIiwiaGVhZE9mTGlzdCIsInByZXZpb3VzTm9kZUJlZm9yZVRhaWwiLCJFcnJvciIsImNvbnRhaW5zIiwic2VhcmNoVmFsdWUiLCJmaW5kVmFsdWUiLCJzZWFyY2hOb2RlSW5kZXgiLCJ0b1N0cmluZyIsInN0YXJ0RnJvbUhlYWQiLCJjb252ZXJ0VG9TdHJpbmdzTGlzdHMiLCJsaW5rZWRMaXN0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=
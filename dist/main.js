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

linkedList.prepend(1);
linkedList.append(2);
linkedList.prepend(3);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsTUFBTUEsSUFBSSxDQUFDO0VBQ1RDLFdBQVdBLENBQUEsRUFBZ0M7SUFBQSxJQUEvQkMsS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxJQUFJO0lBQUEsSUFBRUcsUUFBUSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxJQUFJO0lBQ3ZDLElBQUksQ0FBQ0QsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0ksUUFBUSxHQUFHQSxRQUFRO0VBQzFCO0VBRUEsSUFBSUosS0FBS0EsQ0FBQSxFQUFHO0lBQ1YsT0FBTyxJQUFJLENBQUNLLE1BQU07RUFDcEI7RUFFQSxJQUFJTCxLQUFLQSxDQUFDQSxLQUFLLEVBQUU7SUFDZixJQUFJLENBQUNLLE1BQU0sR0FBR0wsS0FBSztFQUNyQjtFQUVBLElBQUlJLFFBQVFBLENBQUEsRUFBRztJQUNiLE9BQU8sSUFBSSxDQUFDRSxTQUFTO0VBQ3ZCO0VBRUEsSUFBSUYsUUFBUUEsQ0FBQ0osS0FBSyxFQUFFO0lBQ2xCLElBQUksQ0FBQ00sU0FBUyxHQUFHTixLQUFLO0VBQ3hCO0FBQ0Y7QUFFQSxpRUFBZUYsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJuQjtBQUMwQjtBQUMxQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNUyxVQUFVLENBQUM7RUFDZjtFQUNBO0VBQ0E7O0VBRUFDLElBQUk7RUFFSkMsSUFBSTtFQUVKQyxVQUFVLEdBQUcsQ0FBQztFQUVkQyxNQUFNQSxDQUFDWCxLQUFLLEVBQUU7SUFDWjtJQUNBO0lBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQ1EsSUFBSSxFQUFFO01BQ2Q7TUFDQSxNQUFNSSxPQUFPLEdBQUcsSUFBSWQsNkNBQUksQ0FBQ0UsS0FBSyxDQUFDO01BQy9CO01BQ0EsSUFBSSxDQUFDUSxJQUFJLEdBQUdJLE9BQU87TUFDbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ04sSUFBSSxDQUFDO01BQ3RCLElBQUksQ0FBQ0UsVUFBVSxJQUFJLENBQUM7TUFDcEI7SUFDRixDQUFDLE1BQU07TUFDTDtNQUNBLElBQUksQ0FBQ0QsSUFBSSxHQUFHLElBQUlYLDZDQUFJLENBQUNFLEtBQUssQ0FBQztNQUMzQjtNQUNBLElBQUksQ0FBQ1EsSUFBSSxDQUFDSixRQUFRLEdBQUcsSUFBSSxDQUFDSyxJQUFJO01BQzlCO01BQ0FJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ04sSUFBSSxDQUFDO01BQ3RCLElBQUksQ0FBQ0UsVUFBVSxJQUFJLENBQUM7SUFDdEI7RUFDRjs7RUFFQTtFQUNBO0VBQ0FLLE9BQU9BLENBQUNmLEtBQUssRUFBRTtJQUNiO0lBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQ1EsSUFBSSxFQUFFO01BQ2Q7TUFDQSxJQUFJLENBQUNBLElBQUksR0FBRyxJQUFJViw2Q0FBSSxDQUFDRSxLQUFLLENBQUM7TUFDM0I7TUFDQWEsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDTixJQUFJLENBQUM7TUFDdEIsSUFBSSxDQUFDRSxVQUFVLElBQUksQ0FBQztJQUN0QixDQUFDLE1BQU07TUFDTDtNQUNBLE1BQU1FLE9BQU8sR0FBRyxJQUFJZCw2Q0FBSSxDQUFDRSxLQUFLLENBQUM7TUFDL0I7TUFDQVksT0FBTyxDQUFDUixRQUFRLEdBQUcsSUFBSSxDQUFDSSxJQUFJO01BQzVCLElBQUksQ0FBQ0EsSUFBSSxHQUFHSSxPQUFPO01BQ25CO01BQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ04sSUFBSSxDQUFDO01BQ3RCLElBQUksQ0FBQ0UsVUFBVSxJQUFJLENBQUM7SUFDdEI7RUFDRjs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQU0sSUFBSUEsQ0FBQSxFQUFHO0lBQ0w7SUFDQUgsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDSixVQUFVLENBQUM7SUFDNUIsT0FBTyxJQUFJLENBQUNBLFVBQVU7RUFDeEI7O0VBRUE7RUFDQTtFQUNBTyxRQUFRQSxDQUFBLEVBQUc7SUFDVDtJQUNBO0lBQ0E7SUFDQTtJQUNBLElBQUksSUFBSSxDQUFDVCxJQUFJLEVBQUU7TUFDYjtNQUNBLE9BQU8sSUFBSSxDQUFDQSxJQUFJO0lBQ2xCO0VBQ0Y7O0VBRUE7RUFDQTtFQUNBVSxRQUFRQSxDQUFBLEVBQUc7SUFDVDtJQUNBLElBQUlDLGlCQUFpQixHQUFHLElBQUksQ0FBQ1gsSUFBSTtJQUNqQyxPQUFPVyxpQkFBaUIsS0FBSyxJQUFJLEVBQUU7TUFDakNBLGlCQUFpQixHQUFHQSxpQkFBaUIsQ0FBQ2YsUUFBUTtNQUM5QyxJQUFJZSxpQkFBaUIsQ0FBQ2YsUUFBUSxLQUFLLElBQUksRUFBRTtRQUN2QztRQUNBLE9BQU9lLGlCQUFpQjtNQUMxQjtJQUNGO0VBQ0Y7O0VBRUE7RUFDQTtFQUNBO0VBQ0FDLEVBQUVBLENBQUNDLEtBQUssRUFBRTtJQUNSO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJQyxZQUFZLEdBQUcsQ0FBQztJQUNwQixJQUFJQyxhQUFhLEdBQUcsSUFBSSxDQUFDZixJQUFJO0lBRTdCLElBQUljLFlBQVksS0FBSyxDQUFDLElBQUlELEtBQUssS0FBSyxDQUFDLEVBQUU7TUFDckM7TUFDQSxPQUFPRSxhQUFhO0lBQ3RCO0lBRUEsT0FBT0EsYUFBYSxLQUFLRixLQUFLLEVBQUU7TUFDOUJDLFlBQVksSUFBSSxDQUFDO01BQ2pCQyxhQUFhLEdBQUdBLGFBQWEsQ0FBQ25CLFFBQVE7TUFDdEM7TUFDQTtNQUNBLElBQUlpQixLQUFLLEtBQUtDLFlBQVksRUFBRTtRQUMxQjtRQUNBLE9BQU9DLGFBQWE7TUFDdEI7SUFDRjtFQUNGOztFQUVBO0VBQ0FDLEdBQUdBLENBQUEsRUFBRztJQUNKO0lBQ0EsTUFBTUMsVUFBVSxHQUFHLElBQUksQ0FBQ2pCLElBQUk7SUFFNUIsSUFBSWtCLHNCQUFzQixHQUFHLElBQUksQ0FBQ2xCLElBQUk7SUFFdEMsSUFBSWlCLFVBQVUsQ0FBQ3JCLFFBQVEsS0FBSyxJQUFJLEVBQUU7TUFDaEMsTUFBTSxJQUFJdUIsS0FBSyxDQUFDLDRCQUE0QixDQUFDO0lBQy9DLENBQUMsTUFBTTtNQUNMLE9BQU9ELHNCQUFzQixLQUFLLElBQUksRUFBRTtRQUN0QyxJQUNFQSxzQkFBc0IsQ0FBQ3RCLFFBQVEsS0FBSyxJQUFJLElBQ3hDc0Isc0JBQXNCLENBQUN0QixRQUFRLENBQUNBLFFBQVEsS0FBSyxJQUFJLEVBQ2pEO1VBQ0FzQixzQkFBc0IsQ0FBQ3RCLFFBQVEsR0FBRyxJQUFJO1VBQ3RDLE9BQU9xQixVQUFVO1FBQ25CO1FBRUFDLHNCQUFzQixHQUFHQSxzQkFBc0IsQ0FBQ3RCLFFBQVE7TUFDMUQ7SUFDRjtFQUNGOztFQUVBO0VBQ0E7RUFDQTtFQUNBd0IsUUFBUUEsQ0FBQzVCLEtBQUssRUFBRTtJQUNkO0lBQ0E7SUFDQSxJQUFJNkIsV0FBVyxHQUFHLElBQUksQ0FBQ3JCLElBQUk7SUFFM0IsSUFBSXFCLFdBQVcsQ0FBQzdCLEtBQUssS0FBS0EsS0FBSyxFQUFFO01BQy9CLE9BQU8sSUFBSTtJQUNiOztJQUVBO0lBQ0EsT0FBTzZCLFdBQVcsQ0FBQzdCLEtBQUssS0FBS0EsS0FBSyxFQUFFO01BQ2xDO01BQ0E2QixXQUFXLEdBQUdBLFdBQVcsQ0FBQ3pCLFFBQVE7TUFDbEM7TUFDQSxJQUFJeUIsV0FBVyxDQUFDN0IsS0FBSyxLQUFLQSxLQUFLLEVBQUU7UUFDL0IsT0FBTyxJQUFJO01BQ2I7TUFFQSxJQUFJNkIsV0FBVyxDQUFDekIsUUFBUSxLQUFLLElBQUksRUFBRTtRQUNqQztRQUNBO1FBQ0EsT0FBTyxLQUFLO01BQ2Q7SUFDRjtFQUNGOztFQUVBO0VBQ0E7RUFDQTtFQUNBMEIsU0FBU0EsQ0FBQzlCLEtBQUssRUFBRTtJQUNmO0lBQ0EsSUFBSXNCLFlBQVksR0FBRyxDQUFDO0lBQ3BCLElBQUlTLGVBQWUsR0FBRyxJQUFJLENBQUN2QixJQUFJO0lBRS9CLElBQUl1QixlQUFlLENBQUMvQixLQUFLLEtBQUtBLEtBQUssSUFBSXNCLFlBQVksS0FBSyxDQUFDLEVBQUU7TUFDekQ7TUFDQSxPQUFPQSxZQUFZO0lBQ3JCO0lBRUEsT0FBT1MsZUFBZSxDQUFDL0IsS0FBSyxLQUFLQSxLQUFLLEVBQUU7TUFDdENzQixZQUFZLElBQUksQ0FBQztNQUNqQlMsZUFBZSxHQUFHQSxlQUFlLENBQUMzQixRQUFRO01BQzFDLElBQUkyQixlQUFlLENBQUMvQixLQUFLLEtBQUtBLEtBQUssRUFBRTtRQUNuQztRQUNBLE9BQU9zQixZQUFZO01BQ3JCO01BRUEsSUFBSVMsZUFBZSxDQUFDM0IsUUFBUSxLQUFLLElBQUksRUFBRTtRQUNyQyxPQUFPLElBQUk7TUFDYjtJQUNGO0VBQ0Y7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBNEIsUUFBUUEsQ0FBQSxFQUFHO0lBQ1Q7SUFDQSxJQUFJQyxhQUFhLEdBQUcsSUFBSSxDQUFDekIsSUFBSTtJQUM3QixJQUFJMEIscUJBQXFCLEdBQUcsRUFBRTtJQUM5QkEscUJBQXFCLElBQUssSUFBR0QsYUFBYSxDQUFDakMsS0FBTSxPQUFNO0lBQ3ZELE9BQU9pQyxhQUFhLEtBQUssSUFBSSxFQUFFO01BQzdCQSxhQUFhLEdBQUdBLGFBQWEsQ0FBQzdCLFFBQVE7TUFFdEMsSUFBSTZCLGFBQWEsS0FBSyxJQUFJLEVBQUU7UUFDMUJDLHFCQUFxQixJQUFLLElBQUdELGFBQWEsQ0FBQ2pDLEtBQU0sT0FBTTtNQUN6RDtJQUNGO0lBQ0FrQyxxQkFBcUIsSUFBSSxPQUFPO0lBQ2hDLE9BQU9BLHFCQUFxQjtFQUM5Qjs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDRjs7QUFFQSxpRUFBZTNCLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVRekI7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGdEQUFnRCxpQ0FBaUMsR0FBRyxTQUFTLGdGQUFnRixZQUFZLGdDQUFnQyxpQ0FBaUMsR0FBRyxxQkFBcUI7QUFDbFI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXNDO0FBQ2pCO0FBRXJCLE1BQU00QixVQUFVLEdBQUcsSUFBSTVCLG1EQUFVLENBQUMsQ0FBQzs7QUFFbkM7O0FBRUE0QixVQUFVLENBQUNwQixPQUFPLENBQUMsQ0FBQyxDQUFDO0FBRXJCb0IsVUFBVSxDQUFDeEIsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUVwQndCLFVBQVUsQ0FBQ3BCLE9BQU8sQ0FBQyxDQUFDLENBQUM7O0FBRXJCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBRixPQUFPLENBQUNDLEdBQUcsQ0FBQ3FCLFVBQVUsQ0FBQ0gsUUFBUSxDQUFDLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9Ob2RlLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvbGlua2VkTGlzdC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IG51bGwsIG5leHROb2RlID0gbnVsbCkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm5leHROb2RlID0gbmV4dE5vZGU7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuZXh0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmV4dE5vZGU7XG4gIH1cblxuICBzZXQgbmV4dE5vZGUodmFsdWUpIHtcbiAgICB0aGlzLl9uZXh0Tm9kZSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGU7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCI7XG4vLyBMaW5rZWQgTGlzdHMgcHNldWRvIGNvZGVcblxuLy8gQmVmb3JlIGJlZ2luIHRoZSBwcm9qZWN0IGNob29zZSBiZXR3ZWVuIGZhY3RvcnkgZnVuY3Rpb25zIG9yIGNsYXNzIHN5bnRheCAhXG5cbi8vIFR3byBpbXBvcnRhbnQgY2xhc3Nlcy9mYWN0b3J5IGZ1bmN0aW9ucyB0aGF0IGFyZSBuZWVkZWQuXG4vLyAxLiBUaGUgZmlyc3Qgb25lIGlzIGZvciByZXByZXNlbnRpbmcgdGhlIGZ1bGwgbGlzdFxuLy8gTWF5YmUgZm9yIGNyZWF0aW5nIG5ldyBvYmplY3RzIChub2RlcykgP1xuXG4vLyAyLiBOb2RlIGNsYXNzL2ZhY3Rvcnkgd2l0aCB2YWx1ZSBwcm9wZXJ0eSwgYW5kIGxpbmsgdG8gdGhlIG5leHROb2RlXG4vLyBzZXQgYm90aCBteSBkZWZhdWx0LlxuLy8gSG1tIHZhbHVlIHByb3BlcnR5LCBnZXQgZm9yIHJlYWRpbmcsIHNldCBmb3Igd3JpdGluZyA/XG4vLyBBbmQgdGhpcyB3aWxsIGJlIHVzZWQgdG8gcG9pbnQgb24gdG8gdGhlIG5leHROb2RlLFxuLy8gc29tZXRoaW5nIGxpa2UgdGhpcywgcHJldmlvdXM6IHZhbHVlLCBuZXh0OiBudWxsID9cblxuY2xhc3MgTGlua2VkTGlzdCB7XG4gIC8vIExpbmtlZCBMaXN0IGZ1bmN0aW9uc1xuICAvLyAxLiBhcHBlbmQodmFsdWUpIHBhcmFtZXRlciwgdGhpcyBtZXRob2Qgd2lsbCBhZGQgdGhlIG5vZGUgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdFxuICAvLyBNYXliZSBjaGVjayBpZiB0aGVyZSBpcyB0YWlsIGFuZCBoYXMgYW55IHZhbHVlIHRvIGFzc2lnbiB0byB0aGUgbm9kZSdzIHZhbHVlXG5cbiAgaGVhZDtcblxuICB0YWlsO1xuXG4gIGNvdW50Tm9kZXMgPSAwO1xuXG4gIGFwcGVuZCh2YWx1ZSkge1xuICAgIC8vIGlmIHRoZSB0YWlsIGRvZXNuJ3QgZXhpc3RcbiAgICAvLyBvciB0aGUgbGlzdCBpcyBlbXB0eVxuICAgIGlmICghdGhpcy5oZWFkKSB7XG4gICAgICAvLyBjcmVhdGUgbmV3IG5vZGUgd2hpY2ggd2lsbCBiZWNvbWUgdGhlIGhlYWRcbiAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgICAvLyBjb3VudCB0aGUgbm9kZSBpZiBpdCdzIGNyZWF0ZWRcbiAgICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWQpO1xuICAgICAgdGhpcy5jb3VudE5vZGVzICs9IDE7XG4gICAgICAvLyBlbHNlIGlmIHRoZXJlIGlzIGEgaGVhZCBhbHJlYWR5XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNyZWF0ZSBuZXcgbm9kZVxuICAgICAgdGhpcy50YWlsID0gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgLy8gcG9pbnQgdGhlIGhlYWQgdG8gdGhlIG5ldyBub2RlXG4gICAgICB0aGlzLmhlYWQubmV4dE5vZGUgPSB0aGlzLnRhaWw7XG4gICAgICAvLyBjb3VudCB0aGUgbm9kZXNcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGVhZCk7XG4gICAgICB0aGlzLmNvdW50Tm9kZXMgKz0gMTtcbiAgICB9XG4gIH1cblxuICAvLyAyLiBwcmVwZW5kKHZhbHVlKSBwYXJhbWV0ZXIsIHRoaXMgbWV0aG9kIHdpbGwgYWRkIHRoZSBub2RlXG4gIC8vIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3RcbiAgcHJlcGVuZCh2YWx1ZSkge1xuICAgIC8vIGlmIHRoZSBoZWFkIGRvZXNuJ3QgZXhpc3RcbiAgICBpZiAoIXRoaXMuaGVhZCkge1xuICAgICAgLy8gY3JlYXRlIG5ldyBub2RlIHdoaWNoIHdpbGwgYmVjb21lIHRoZSBoZWFkXG4gICAgICB0aGlzLmhlYWQgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgICAvLyBjb3VudCB0aGUgY3JlYXRlZCBub2RlXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWQpO1xuICAgICAgdGhpcy5jb3VudE5vZGVzICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVsc2UgY3JlYXRlIG5ldyBub2RlXG4gICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgLy8gcG9pbnQgdGhhdCBub2RlIHRvIHRoZSBwcmV2aW91cyBub2RlXG4gICAgICBuZXdOb2RlLm5leHROb2RlID0gdGhpcy5oZWFkO1xuICAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICAgIC8vIGNvdW50IHRoZSBjcmVhdGVkIG5vZGVcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGVhZCk7XG4gICAgICB0aGlzLmNvdW50Tm9kZXMgKz0gMTtcbiAgICB9XG4gIH1cblxuICAvLyBDaGVjayBpZiB0aGUgaGVhZCBoYXMgYW55IHZhbHVlLCBhbmQgYXNzaWduIHRoZSBub2RlJ3MgdmFsdWUgP1xuICAvLyBFeGFtcGxlIDUgKGhlYWQpIC0+IDIgKHRhaWwpXG4gIC8vIGhlYWQgcG9pbnRzIHRvIDUgKG5leHQgYXMgcG9pbnRlciksIGFuZCB0aGUgdGFpbHMgcG9pbnRzIHRvIG51bGwuXG4gIC8vIElmIDEgaXMgYWRkZWQgYXMgdGhlIGhlYWQsIDEgLT4gNSAtPiAyXG4gIC8vIDEgaXMgdGhlIG5ldyBoZWFkLCAxIHBvaW50cyB0byA1IGFzIG5leHQgdmFsdWUsIDIgcG9pbnRzIHRvIG51bGxcbiAgLy8gSWYgMTIgaXMgYWRkZWQgYXMgdGhlIHRhaWwgMSAtPiA1IC0+IDIgLT4gMTJcbiAgLy8gMTIgaXMgdGhlIG5ldyB0YWlsLCAxIHBvaW50cyBhcyBuZXh0IHZhbHVlIHRvIDUsIDUgbmV4dCB2YWx1ZSBwb2ludHMgdG8gMiBhbmQgMlxuICAvLyBwb2ludHMgdG8gMTIsIDEyIHBvaW50cyB0byBudWxsXG5cbiAgLy8gMy5TaXplLCBtZXRob2QgdGhhdCB3aWxsIHJldHVybiB0aGUgbnVtYmVycyBvZiBub2RlcyBpbiB0aGUgbGlzdFxuICAvLyBNYXliZSBmb3IgbG9vcCB0aG91Z2ggdGhlIHdob2xlIGxpc3QsIGFuZCByZXR1cm4gdGhlIG5vZGVzIGluIHRoZSBjdXJyZW50IGxpc3QgP1xuICBzaXplKCkge1xuICAgIC8vIHJldHVybiB0aGUgbnVtYmVyIG9mIG5vZGVzIG9mIHRoZSBsaXN0XG4gICAgY29uc29sZS5sb2codGhpcy5jb3VudE5vZGVzKTtcbiAgICByZXR1cm4gdGhpcy5jb3VudE5vZGVzO1xuICB9XG5cbiAgLy8gNC4gSGVhZCwgbWV0aG9kIHRoYXQgd2lsbCByZXR1cm4gdGhlIGZpcnN0IG5vZGUgdGhlIGZpcnN0IG5vZGUgb2YgdGhlIGxpc3RcbiAgLy8gQ29uZGl0aW9uIGlmIHRoZSBoZWFkIGV4aXN0IHN1Y2ggYXMgdGhlIGZpcnN0IG5vZGUgcmV0dXJuIGl0LCBubyBsb29wIG1heWJlIGhlcmUgP1xuICBmaW5kSGVhZCgpIHtcbiAgICAvLyBtZXRob2QgdGhhdCB3aWxsIHJldHVybiB0aGUgZmlyc3Qgbm9kZSBvZiB0aGUgbGlzdFxuICAgIC8vIHRyYXZlcnNlIHRvIHRoZSBmaXJzdCBub2RlXG4gICAgLy8gY2hlY2sgaWYgdGhlIGZpcnN0IG5vZGUgZXhpc3RcbiAgICAvLyBpZiBleGlzdCByZXR1cm4gaXRcbiAgICBpZiAodGhpcy5oZWFkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmhlYWQpO1xuICAgICAgcmV0dXJuIHRoaXMuaGVhZDtcbiAgICB9XG4gIH1cblxuICAvLyA1LiBUYWlsLCBtZXRob2QgdGhhdCB3aWxsIHJldHVybiB0aGUgbGFzdCBub2RlIG9mIHRoZSBsaXN0XG4gIC8vIEZvciBsb29wIHRoZW4gcmV0dXJuIHRoZSB0YWlsIHN1Y2ggYXMgdGhlIGxhc3Qgbm9kZSByZXR1cm4gaXQgaW4gdGhlIGN1cnJlbnQgbGlzdCA/XG4gIGZpbmRUYWlsKCkge1xuICAgIC8vIG1ldGhvZCB0aGF0IHdpbGwgcmV0dXJuIHRoZSBsYXN0IG5vZGUgb2YgdGhlIGxpc3RcbiAgICBsZXQgc2VhcmNoRm9yTGFzdE5vZGUgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKHNlYXJjaEZvckxhc3ROb2RlICE9PSBudWxsKSB7XG4gICAgICBzZWFyY2hGb3JMYXN0Tm9kZSA9IHNlYXJjaEZvckxhc3ROb2RlLm5leHROb2RlO1xuICAgICAgaWYgKHNlYXJjaEZvckxhc3ROb2RlLm5leHROb2RlID09PSBudWxsKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaEZvckxhc3ROb2RlKTtcbiAgICAgICAgcmV0dXJuIHNlYXJjaEZvckxhc3ROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIDYuIGF0KGluZGV4KSwgbWV0aG9kIHRoYXQgd2lsbCByZXR1cm4gdGhlIG5vZGUgb2YgZ2l2ZW4gaW5kZXguXG4gIC8vIEZvciBsb29wIHNvIHNlZSBpbiBpbmRleCBleGlzdCBpbiB0aGUgY3VycmVudCBsaXN0IHN1Y2ggYXMgMCxcbiAgLy8gaWYgaXQgZG9lcyByZXR1cm4gdGhlIG5vZGVcbiAgYXQoaW5kZXgpIHtcbiAgICAvLyBtZXRob2QgdGhhdCB3aWxsIHJldHVybiBub2RlIGF0IGdpdmVuIGluZGV4XG4gICAgLy8gbG9vcCBtYXliZSBmb3IgdGhlIG5vZGUgYXQgdGhlIHBvaW50ZWQgaW5kZXhcbiAgICAvLyBuZXh0IGNoZWNrIGlmIHRoZSBub2RlIGV4aXN0XG4gICAgLy8gcmV0dXJuIHRoZSBub2RlIGF0IHRoZSBwb2ludGVkIGluZGV4XG4gICAgLy8gb3RoZXJ3aXNlIG1heWJlIGNvbnNvbGUgbG9nIG5vdCBmb3VuZFxuICAgIGxldCBub2RlUG9zaXRpb24gPSAwO1xuICAgIGxldCBzZWFyY2hGb3JOb2RlID0gdGhpcy5oZWFkO1xuXG4gICAgaWYgKG5vZGVQb3NpdGlvbiA9PT0gMCAmJiBpbmRleCA9PT0gMCkge1xuICAgICAgLy8gY29uc29sZS5sb2coc2VhcmNoRm9yTm9kZSk7XG4gICAgICByZXR1cm4gc2VhcmNoRm9yTm9kZTtcbiAgICB9XG5cbiAgICB3aGlsZSAoc2VhcmNoRm9yTm9kZSAhPT0gaW5kZXgpIHtcbiAgICAgIG5vZGVQb3NpdGlvbiArPSAxO1xuICAgICAgc2VhcmNoRm9yTm9kZSA9IHNlYXJjaEZvck5vZGUubmV4dE5vZGU7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIlRoaXMgaXMgdGhlIHRoZSB3YW50ZWQgaW5kZXhcIiwgaW5kZXgpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJUaGlzIGlzIHRoZSBub2RlIHBvc2l0aW9uXCIsIG5vZGVQb3NpdGlvbik7XG4gICAgICBpZiAoaW5kZXggPT09IG5vZGVQb3NpdGlvbikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hGb3JOb2RlKTtcbiAgICAgICAgcmV0dXJuIHNlYXJjaEZvck5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gNy4gUG9wKCksIHNpbXBsZSBtZXRob2QgdGhhdCB3aWxsIHJlbW92ZSB0aGUgbGFzdCBub2RlIG9mIHRoZSBsaXN0LlxuICBwb3AoKSB7XG4gICAgLy8gbWV0aG9kIHRoYXQgd2lsbCByZW1vdmUgdGhlIGxhc3Qgbm9kZVxuICAgIGNvbnN0IGhlYWRPZkxpc3QgPSB0aGlzLmhlYWQ7XG5cbiAgICBsZXQgcHJldmlvdXNOb2RlQmVmb3JlVGFpbCA9IHRoaXMuaGVhZDtcblxuICAgIGlmIChoZWFkT2ZMaXN0Lm5leHROb2RlID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2Fubm90IGRlbGV0ZSB0aGUgaGVhZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHByZXZpb3VzTm9kZUJlZm9yZVRhaWwgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByZXZpb3VzTm9kZUJlZm9yZVRhaWwubmV4dE5vZGUgIT09IG51bGwgJiZcbiAgICAgICAgICBwcmV2aW91c05vZGVCZWZvcmVUYWlsLm5leHROb2RlLm5leHROb2RlID09PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgIHByZXZpb3VzTm9kZUJlZm9yZVRhaWwubmV4dE5vZGUgPSBudWxsO1xuICAgICAgICAgIHJldHVybiBoZWFkT2ZMaXN0O1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldmlvdXNOb2RlQmVmb3JlVGFpbCA9IHByZXZpb3VzTm9kZUJlZm9yZVRhaWwubmV4dE5vZGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gOC4gY29udGFpbnModmFsdWUpLCBtZXRob2QgdGhhdCB3aWxsIHJldHVybiB0cnVlIGlmIHRoZVxuICAvLyBleGlzdCBpbiB0aGUgbGlzdCwgb3RoZXJ3aXNlIGZhbHNlXG4gIC8vIEZvciBsb29wLCB0byBzZWUgaWYgdmFsdWUgZXhpc3QgcmV0dXJuIHRydWUgaWYgbm90IGZhbHNlLlxuICBjb250YWlucyh2YWx1ZSkge1xuICAgIC8vIG1ldGhvZCB0aGF0IHdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIHZhbHVlIGV4aXN0IG90aGVyd2lzZSBmYWxzZVxuICAgIC8vIHN0YXJ0IGZyb20gdGhlIGhlYWRcbiAgICBsZXQgc2VhcmNoVmFsdWUgPSB0aGlzLmhlYWQ7XG5cbiAgICBpZiAoc2VhcmNoVmFsdWUudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBpZiBub2RlIHZhbHVlIGlzIG5vdCBlcXVhbCB0byB0aGUgYXJndW1lbnRcbiAgICB3aGlsZSAoc2VhcmNoVmFsdWUudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAvLyBtb3ZlIG9uIHRvIHRoZSBuZXh0IG5vZGVcbiAgICAgIHNlYXJjaFZhbHVlID0gc2VhcmNoVmFsdWUubmV4dE5vZGU7XG4gICAgICAvLyBpZiBub2RlIHZhbHVlIGlzIGVxdWFsIHRvIHRoZSB2YWx1ZVxuICAgICAgaWYgKHNlYXJjaFZhbHVlLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlYXJjaFZhbHVlLm5leHROb2RlID09PSBudWxsKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaFZhbHVlLnZhbHVlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gOS4gZmluZFZhbHVlKHZhbHVlKSwgbWV0aG9kIHRoYXQgd2lsbCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBub2RlIGNvbnRhaW5pbmdcbiAgLy8gdmFsdWUgbnVsbCBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gIC8vIEZvciBsb29wLCBpZiB0aGUgdmFsdWUgZXhpc3QgcmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgbm9kZSwgZWxzZSByZXR1cm4gbnVsbFxuICBmaW5kVmFsdWUodmFsdWUpIHtcbiAgICAvLyBtZXRob2QgdGhhdCB3aWxsIHJldHVybiB0aGUgaW5kZXggb2YgdGhlIG5vZGUsIGVsc2UgaXQgd2lsbCByZXR1cm4gbnVsbFxuICAgIGxldCBub2RlUG9zaXRpb24gPSAwO1xuICAgIGxldCBzZWFyY2hOb2RlSW5kZXggPSB0aGlzLmhlYWQ7XG5cbiAgICBpZiAoc2VhcmNoTm9kZUluZGV4LnZhbHVlID09PSB2YWx1ZSAmJiBub2RlUG9zaXRpb24gPT09IDApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGVQb3NpdGlvbik7XG4gICAgICByZXR1cm4gbm9kZVBvc2l0aW9uO1xuICAgIH1cblxuICAgIHdoaWxlIChzZWFyY2hOb2RlSW5kZXgudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICBub2RlUG9zaXRpb24gKz0gMTtcbiAgICAgIHNlYXJjaE5vZGVJbmRleCA9IHNlYXJjaE5vZGVJbmRleC5uZXh0Tm9kZTtcbiAgICAgIGlmIChzZWFyY2hOb2RlSW5kZXgudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGVQb3NpdGlvbik7XG4gICAgICAgIHJldHVybiBub2RlUG9zaXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWFyY2hOb2RlSW5kZXgubmV4dE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gMTAuIHRvU3RyaW5nKCksIG1ldGhvZCB0aGF0IHdpbGwgcmVwcmVzZW50IExpbmtlZExpc3RzIG9iamVjdHNcbiAgLy8gYXMgc3RyaW5ncyBpbiB0aGUgY29uc29sZS5cbiAgLy8gSW4gdGhlIGN1cnJlbnQgZm9ybWF0OlxuICAvLyAodmFsdWUpIC0+ICh2YWx1ZSkgLT4gKHZhbHVlKSAtPiBudWxsXG4gIC8vIFVzaW5nIEpTT04gc3RyaW5naWZ5IG1heWJlIHRvIHR1cm4gdGhlc2Ugb2JqZWN0cyBhcyBzdHJpbmdzIGluIEpTT04gZm9ybWF0ID9cbiAgdG9TdHJpbmcoKSB7XG4gICAgLy8gbWV0aG9kIHRoYXQgd2lsbCByZXByZXNlbnQgdGhlIG9iamVjdHMgYXMgc3RyaW5nc1xuICAgIGxldCBzdGFydEZyb21IZWFkID0gdGhpcy5oZWFkO1xuICAgIGxldCBjb252ZXJ0VG9TdHJpbmdzTGlzdHMgPSBcIlwiO1xuICAgIGNvbnZlcnRUb1N0cmluZ3NMaXN0cyArPSBgKCR7c3RhcnRGcm9tSGVhZC52YWx1ZX0pIC0+IGA7XG4gICAgd2hpbGUgKHN0YXJ0RnJvbUhlYWQgIT09IG51bGwpIHtcbiAgICAgIHN0YXJ0RnJvbUhlYWQgPSBzdGFydEZyb21IZWFkLm5leHROb2RlO1xuXG4gICAgICBpZiAoc3RhcnRGcm9tSGVhZCAhPT0gbnVsbCkge1xuICAgICAgICBjb252ZXJ0VG9TdHJpbmdzTGlzdHMgKz0gYCgke3N0YXJ0RnJvbUhlYWQudmFsdWV9KSAtPiBgO1xuICAgICAgfVxuICAgIH1cbiAgICBjb252ZXJ0VG9TdHJpbmdzTGlzdHMgKz0gXCIgbnVsbFwiO1xuICAgIHJldHVybiBjb252ZXJ0VG9TdHJpbmdzTGlzdHM7XG4gIH1cblxuICAvLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gRXh0cmEgbWV0aG9kcyAhISFcbiAgLy8gMTEuIGluc2VydEF0KHZhbHVlLCBpbmRleCksIHRoYXQgd2lsbCBpbnNlcnQgbmV3IG5vZGVcbiAgLy8gd2l0aCBwcm92aWRlZCB2YWx1ZSBvZiBnaXZlbiBpbmRleFxuICAvLyBDb3VwbGUgb2YgdGhpbmdzIG5lZWRzIHRvIGhhcHBlbiBoZXJlLCBhZnRlciBpbnNlcnRpbmcgdGhlIG5ldyBub2RlXG4gIC8vIHRoZSBwcmV2aW91cyBub2RlXG4gIC8vIHRoYXQgaGFzIGJlZW4gbW92ZSBuZWVkIHRvIHBvaW50IHRvIHRoZSBuZXcgb25lIGZvciBleGFtcGxlXG4gIC8vIDEgLT4gMiAtPiA1IC0+IDEyXG4gIC8vIGluZGV4ZXMgMCwgMSwgMiwgM1xuICAvLyBJZiA3IGlzIGFkZGVkIGluIGluZGV4IDJcbiAgLy8gMSAtPiAyIC0+IDcgLT4gNSAtID4gMTJcbiAgLy8gVHdvIG5lZWRzIHRvIHBvaW50cyBhdCBzZXZlbiwgYW5kIHNldmVuIGhhcyB0byBwb2ludCBhcyA1XG4gIC8vIE5lZWQgdG8gc29tZWhvdyB1cGRhdGUgdGhlIHBvaW50cyBiZXR3ZWVuIHRoZSBub2RlcyB0aGF0IGhhcyBiZWVuIGFkZGVkIHRoZSBuZXcgbm9kZVxuICAvLyAxMi4gcmVtb3ZlQXQoaW5kZXgpLCBtZXRob2QgdGhhdCB3aWxsIHJlbW92ZSBub2RlIGF0IGN1cnJlbnQgaW5kZXguXG4gIC8vIElmIDcgaXMgcmVtb3ZlZCBpbiB0aGUgYWJvdmUgZXhhbXBsZVxuICAvLyAxIC0+IDIgLT4gNSAtPiAxMlxuICAvLyBUd28gaGFzIHRvIHBvaW50IHRvIGZpdmUsIGJlY2F1c2UgdGhlIHByZXZpb3VzIG5vZGUgaGFzIGJlZW4gcmVtb3ZlZCBpbiBvcmRlciB0byBrZWVwXG4gIC8vIHRoZSBwb2ludGVycyB1cGRhdGVkLCBhbmQgZml2ZSBoYXMgdG8gcG9pbnQgdG8gdHdlbHZlLlxuICAvLyBJbXBvcnRhbnQgdGlwOiBXaGVuIHlvdSBpbnNlcnQgb3IgcmVtb3ZlIGEgbm9kZSwgY29uc2lkZXJcbiAgLy8gaG93IGl0IHdpbGwgYWZmZWN0IHRoZSBleGlzdGluZyBub2Rlcy5cbiAgLy8gU29tZSBvZiB0aGUgbm9kZXMgd2lsbCBuZWVkIHRoZWlyIG5leHROb2RlIGxpbmsgdXBkYXRlZC5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua2VkTGlzdDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNEJBQTRCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBMaW5rZWRMaXN0IGZyb20gXCIuL2xpbmtlZExpc3RcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGxpbmtlZExpc3QgPSBuZXcgTGlua2VkTGlzdCgpO1xuXG4vLyBjb25zb2xlLmxvZyhsaW5rZWRMaXN0KTtcblxubGlua2VkTGlzdC5wcmVwZW5kKDEpO1xuXG5saW5rZWRMaXN0LmFwcGVuZCgyKTtcblxubGlua2VkTGlzdC5wcmVwZW5kKDMpO1xuXG4vLyBsaW5rZWRMaXN0LnByZXBlbmQoNCk7XG5cbi8vIGNvbnNvbGUubG9nKGxpbmtlZExpc3QucG9wKCkpO1xuXG4vLyBsaW5rZWRMaXN0LnByZXBlbmQoMyk7XG5cbi8vIGxpbmtlZExpc3QuYXBwZW5kKFwiaGFtc3RlclwiKTtcblxuLy8gbGlua2VkTGlzdC5wcmVwZW5kKFwic25ha2VcIik7XG5cbi8vIGxpbmtlZExpc3QuYXBwZW5kKDIpO1xuXG4vLyBjb25zb2xlLmxvZyhsaW5rZWRMaXN0LmNvbnRhaW5zKDQpKTtcblxuLy8gbGlua2VkTGlzdC5maW5kVmFsdWUoMyk7XG5cbmNvbnNvbGUubG9nKGxpbmtlZExpc3QudG9TdHJpbmcoKSk7XG4iXSwibmFtZXMiOlsiTm9kZSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJuZXh0Tm9kZSIsIl92YWx1ZSIsIl9uZXh0Tm9kZSIsIkxpbmtlZExpc3QiLCJoZWFkIiwidGFpbCIsImNvdW50Tm9kZXMiLCJhcHBlbmQiLCJuZXdOb2RlIiwiY29uc29sZSIsImxvZyIsInByZXBlbmQiLCJzaXplIiwiZmluZEhlYWQiLCJmaW5kVGFpbCIsInNlYXJjaEZvckxhc3ROb2RlIiwiYXQiLCJpbmRleCIsIm5vZGVQb3NpdGlvbiIsInNlYXJjaEZvck5vZGUiLCJwb3AiLCJoZWFkT2ZMaXN0IiwicHJldmlvdXNOb2RlQmVmb3JlVGFpbCIsIkVycm9yIiwiY29udGFpbnMiLCJzZWFyY2hWYWx1ZSIsImZpbmRWYWx1ZSIsInNlYXJjaE5vZGVJbmRleCIsInRvU3RyaW5nIiwic3RhcnRGcm9tSGVhZCIsImNvbnZlcnRUb1N0cmluZ3NMaXN0cyIsImxpbmtlZExpc3QiXSwic291cmNlUm9vdCI6IiJ9
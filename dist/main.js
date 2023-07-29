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
class Node {
  constructor(value, nextNode) {
    this.value = null;
    this.nextNode = null;
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
class LinkedList {
  //
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LinkedList);

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedList */ "./src/linkedList.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node */ "./src/Node.js");


const test = new _Node__WEBPACK_IMPORTED_MODULE_1__["default"](5);
console.log(test);

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

// Linked List functions
// 1. append(value) parameter, this method will add the node to the end of the list
// Maybe check if there is tail and has any value to assign to the node's value ?

// 2. prepend(value) parameter, this method will add the node to the beginning of the list
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

// 4. Head, method that will return the first node the first node of the list
// Condition if the head exist such as the first node return it, no loop maybe here ?

// 5. Tail, method that will return the last node of the list
// For loop then return the tail such as the last node return it in the current list ?

// 6. at(index), method that will return the node of given index.
// For loop so see in index exist in the current list such as 0,
// if it does return the node

// 7. Pop(), simple method that will remove the last node of the list.

// 8. contains(value), method that will return true if the
// exist in the list, otherwise false
// For loop, to see if value exist return true if not false.

// 9. findValue(value), method that will return the index of the node containing
// value null if it doesn't exist
// For loop, if the value exist return the index of the node, else return null

// 10. toString(), method that will represent LinkedLists objects
// as strings in the console.
// In the current format:
// (value) -> (value) -> (value) -> null
// Using JSON stringify maybe to turn these objects as strings in JSON format ?

// Extra methods !!!

// 11. insertAt(value, index), that will insert new node
// with provided value of given index
// Couple of things needs to happen here, after inserting the new node, the previous node
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLElBQUksQ0FBQztFQUNUQyxXQUFXQSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTtJQUMzQixJQUFJLENBQUNELEtBQUssR0FBRyxJQUFJO0lBQ2pCLElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7RUFDdEI7QUFDRjtBQUVBLGlFQUFlSCxJQUFJOzs7Ozs7Ozs7Ozs7OztBQ1BuQixNQUFNSSxVQUFVLENBQUM7RUFDZjtBQUFBO0FBR0YsaUVBQWVBLFVBQVU7Ozs7OztVQ0p6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNaO0FBRTFCLE1BQU1DLElBQUksR0FBRyxJQUFJTCw2Q0FBSSxDQUFDLENBQUMsQ0FBQztBQUV4Qk0sT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQzs7QUFFakI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9Ob2RlLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvbGlua2VkTGlzdC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IodmFsdWUsIG5leHROb2RlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5uZXh0Tm9kZSA9IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiIsImNsYXNzIExpbmtlZExpc3Qge1xuICAvL1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rZWRMaXN0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTGlua2VkTGlzdCBmcm9tIFwiLi9saW5rZWRMaXN0XCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCI7XG5cbmNvbnN0IHRlc3QgPSBuZXcgTm9kZSg1KTtcblxuY29uc29sZS5sb2codGVzdCk7XG5cbi8vIExpbmtlZCBMaXN0cyBwc2V1ZG8gY29kZVxuXG4vLyBCZWZvcmUgYmVnaW4gdGhlIHByb2plY3QgY2hvb3NlIGJldHdlZW4gZmFjdG9yeSBmdW5jdGlvbnMgb3IgY2xhc3Mgc3ludGF4ICFcblxuLy8gVHdvIGltcG9ydGFudCBjbGFzc2VzL2ZhY3RvcnkgZnVuY3Rpb25zIHRoYXQgYXJlIG5lZWRlZC5cbi8vIDEuIFRoZSBmaXJzdCBvbmUgaXMgZm9yIHJlcHJlc2VudGluZyB0aGUgZnVsbCBsaXN0XG4vLyBNYXliZSBmb3IgY3JlYXRpbmcgbmV3IG9iamVjdHMgKG5vZGVzKSA/XG5cbi8vIDIuIE5vZGUgY2xhc3MvZmFjdG9yeSB3aXRoIHZhbHVlIHByb3BlcnR5LCBhbmQgbGluayB0byB0aGUgbmV4dE5vZGVcbi8vIHNldCBib3RoIG15IGRlZmF1bHQuXG4vLyBIbW0gdmFsdWUgcHJvcGVydHksIGdldCBmb3IgcmVhZGluZywgc2V0IGZvciB3cml0aW5nID9cbi8vIEFuZCB0aGlzIHdpbGwgYmUgdXNlZCB0byBwb2ludCBvbiB0byB0aGUgbmV4dE5vZGUsXG4vLyBzb21ldGhpbmcgbGlrZSB0aGlzLCBwcmV2aW91czogdmFsdWUsIG5leHQ6IG51bGwgP1xuXG4vLyBMaW5rZWQgTGlzdCBmdW5jdGlvbnNcbi8vIDEuIGFwcGVuZCh2YWx1ZSkgcGFyYW1ldGVyLCB0aGlzIG1ldGhvZCB3aWxsIGFkZCB0aGUgbm9kZSB0byB0aGUgZW5kIG9mIHRoZSBsaXN0XG4vLyBNYXliZSBjaGVjayBpZiB0aGVyZSBpcyB0YWlsIGFuZCBoYXMgYW55IHZhbHVlIHRvIGFzc2lnbiB0byB0aGUgbm9kZSdzIHZhbHVlID9cblxuLy8gMi4gcHJlcGVuZCh2YWx1ZSkgcGFyYW1ldGVyLCB0aGlzIG1ldGhvZCB3aWxsIGFkZCB0aGUgbm9kZSB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0XG4vLyBDaGVjayBpZiB0aGUgaGVhZCBoYXMgYW55IHZhbHVlLCBhbmQgYXNzaWduIHRoZSBub2RlJ3MgdmFsdWUgP1xuXG4vLyBFeGFtcGxlIDUgKGhlYWQpIC0+IDIgKHRhaWwpXG4vLyBoZWFkIHBvaW50cyB0byA1IChuZXh0IGFzIHBvaW50ZXIpLCBhbmQgdGhlIHRhaWxzIHBvaW50cyB0byBudWxsLlxuXG4vLyBJZiAxIGlzIGFkZGVkIGFzIHRoZSBoZWFkLCAxIC0+IDUgLT4gMlxuLy8gMSBpcyB0aGUgbmV3IGhlYWQsIDEgcG9pbnRzIHRvIDUgYXMgbmV4dCB2YWx1ZSwgMiBwb2ludHMgdG8gbnVsbFxuXG4vLyBJZiAxMiBpcyBhZGRlZCBhcyB0aGUgdGFpbCAxIC0+IDUgLT4gMiAtPiAxMlxuLy8gMTIgaXMgdGhlIG5ldyB0YWlsLCAxIHBvaW50cyBhcyBuZXh0IHZhbHVlIHRvIDUsIDUgbmV4dCB2YWx1ZSBwb2ludHMgdG8gMiBhbmQgMlxuLy8gcG9pbnRzIHRvIDEyLCAxMiBwb2ludHMgdG8gbnVsbFxuXG4vLyAzLlNpemUsIG1ldGhvZCB0aGF0IHdpbGwgcmV0dXJuIHRoZSBudW1iZXJzIG9mIG5vZGVzIGluIHRoZSBsaXN0XG4vLyBNYXliZSBmb3IgbG9vcCB0aG91Z2ggdGhlIHdob2xlIGxpc3QsIGFuZCByZXR1cm4gdGhlIG5vZGVzIGluIHRoZSBjdXJyZW50IGxpc3QgP1xuXG4vLyA0LiBIZWFkLCBtZXRob2QgdGhhdCB3aWxsIHJldHVybiB0aGUgZmlyc3Qgbm9kZSB0aGUgZmlyc3Qgbm9kZSBvZiB0aGUgbGlzdFxuLy8gQ29uZGl0aW9uIGlmIHRoZSBoZWFkIGV4aXN0IHN1Y2ggYXMgdGhlIGZpcnN0IG5vZGUgcmV0dXJuIGl0LCBubyBsb29wIG1heWJlIGhlcmUgP1xuXG4vLyA1LiBUYWlsLCBtZXRob2QgdGhhdCB3aWxsIHJldHVybiB0aGUgbGFzdCBub2RlIG9mIHRoZSBsaXN0XG4vLyBGb3IgbG9vcCB0aGVuIHJldHVybiB0aGUgdGFpbCBzdWNoIGFzIHRoZSBsYXN0IG5vZGUgcmV0dXJuIGl0IGluIHRoZSBjdXJyZW50IGxpc3QgP1xuXG4vLyA2LiBhdChpbmRleCksIG1ldGhvZCB0aGF0IHdpbGwgcmV0dXJuIHRoZSBub2RlIG9mIGdpdmVuIGluZGV4LlxuLy8gRm9yIGxvb3Agc28gc2VlIGluIGluZGV4IGV4aXN0IGluIHRoZSBjdXJyZW50IGxpc3Qgc3VjaCBhcyAwLFxuLy8gaWYgaXQgZG9lcyByZXR1cm4gdGhlIG5vZGVcblxuLy8gNy4gUG9wKCksIHNpbXBsZSBtZXRob2QgdGhhdCB3aWxsIHJlbW92ZSB0aGUgbGFzdCBub2RlIG9mIHRoZSBsaXN0LlxuXG4vLyA4LiBjb250YWlucyh2YWx1ZSksIG1ldGhvZCB0aGF0IHdpbGwgcmV0dXJuIHRydWUgaWYgdGhlXG4vLyBleGlzdCBpbiB0aGUgbGlzdCwgb3RoZXJ3aXNlIGZhbHNlXG4vLyBGb3IgbG9vcCwgdG8gc2VlIGlmIHZhbHVlIGV4aXN0IHJldHVybiB0cnVlIGlmIG5vdCBmYWxzZS5cblxuLy8gOS4gZmluZFZhbHVlKHZhbHVlKSwgbWV0aG9kIHRoYXQgd2lsbCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBub2RlIGNvbnRhaW5pbmdcbi8vIHZhbHVlIG51bGwgaWYgaXQgZG9lc24ndCBleGlzdFxuLy8gRm9yIGxvb3AsIGlmIHRoZSB2YWx1ZSBleGlzdCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBub2RlLCBlbHNlIHJldHVybiBudWxsXG5cbi8vIDEwLiB0b1N0cmluZygpLCBtZXRob2QgdGhhdCB3aWxsIHJlcHJlc2VudCBMaW5rZWRMaXN0cyBvYmplY3RzXG4vLyBhcyBzdHJpbmdzIGluIHRoZSBjb25zb2xlLlxuLy8gSW4gdGhlIGN1cnJlbnQgZm9ybWF0OlxuLy8gKHZhbHVlKSAtPiAodmFsdWUpIC0+ICh2YWx1ZSkgLT4gbnVsbFxuLy8gVXNpbmcgSlNPTiBzdHJpbmdpZnkgbWF5YmUgdG8gdHVybiB0aGVzZSBvYmplY3RzIGFzIHN0cmluZ3MgaW4gSlNPTiBmb3JtYXQgP1xuXG4vLyBFeHRyYSBtZXRob2RzICEhIVxuXG4vLyAxMS4gaW5zZXJ0QXQodmFsdWUsIGluZGV4KSwgdGhhdCB3aWxsIGluc2VydCBuZXcgbm9kZVxuLy8gd2l0aCBwcm92aWRlZCB2YWx1ZSBvZiBnaXZlbiBpbmRleFxuLy8gQ291cGxlIG9mIHRoaW5ncyBuZWVkcyB0byBoYXBwZW4gaGVyZSwgYWZ0ZXIgaW5zZXJ0aW5nIHRoZSBuZXcgbm9kZSwgdGhlIHByZXZpb3VzIG5vZGVcbi8vIHRoYXQgaGFzIGJlZW4gbW92ZSBuZWVkIHRvIHBvaW50IHRvIHRoZSBuZXcgb25lIGZvciBleGFtcGxlXG5cbi8vIDEgLT4gMiAtPiA1IC0+IDEyXG4vLyBpbmRleGVzIDAsIDEsIDIsIDNcblxuLy8gSWYgNyBpcyBhZGRlZCBpbiBpbmRleCAyXG4vLyAxIC0+IDIgLT4gNyAtPiA1IC0gPiAxMlxuLy8gVHdvIG5lZWRzIHRvIHBvaW50cyBhdCBzZXZlbiwgYW5kIHNldmVuIGhhcyB0byBwb2ludCBhcyA1XG4vLyBOZWVkIHRvIHNvbWVob3cgdXBkYXRlIHRoZSBwb2ludHMgYmV0d2VlbiB0aGUgbm9kZXMgdGhhdCBoYXMgYmVlbiBhZGRlZCB0aGUgbmV3IG5vZGVcblxuLy8gMTIuIHJlbW92ZUF0KGluZGV4KSwgbWV0aG9kIHRoYXQgd2lsbCByZW1vdmUgbm9kZSBhdCBjdXJyZW50IGluZGV4LlxuLy8gSWYgNyBpcyByZW1vdmVkIGluIHRoZSBhYm92ZSBleGFtcGxlXG5cbi8vIDEgLT4gMiAtPiA1IC0+IDEyXG4vLyBUd28gaGFzIHRvIHBvaW50IHRvIGZpdmUsIGJlY2F1c2UgdGhlIHByZXZpb3VzIG5vZGUgaGFzIGJlZW4gcmVtb3ZlZCBpbiBvcmRlciB0byBrZWVwXG4vLyB0aGUgcG9pbnRlcnMgdXBkYXRlZCwgYW5kIGZpdmUgaGFzIHRvIHBvaW50IHRvIHR3ZWx2ZS5cblxuLy8gSW1wb3J0YW50IHRpcDogV2hlbiB5b3UgaW5zZXJ0IG9yIHJlbW92ZSBhIG5vZGUsIGNvbnNpZGVyXG4vLyBob3cgaXQgd2lsbCBhZmZlY3QgdGhlIGV4aXN0aW5nIG5vZGVzLlxuLy8gU29tZSBvZiB0aGUgbm9kZXMgd2lsbCBuZWVkIHRoZWlyIG5leHROb2RlIGxpbmsgdXBkYXRlZC5cbiJdLCJuYW1lcyI6WyJOb2RlIiwiY29uc3RydWN0b3IiLCJ2YWx1ZSIsIm5leHROb2RlIiwiTGlua2VkTGlzdCIsInRlc3QiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==
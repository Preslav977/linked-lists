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
  // Linked List functions
  // 1. append(value) parameter, this method will add the node to the end of the list
  // Maybe check if there is tail and has any value to assign to the node's value ?
  append(value) {
    // method to append node to the end of the list
  }

  // 2. prepend(value) parameter, this method will add the node
  // to the beginning of the list
  prepend(value) {
    // method to append node to the beginning of the list
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
  }

  // 4. Head, method that will return the first node the first node of the list
  // Condition if the head exist such as the first node return it, no loop maybe here ?
  head() {
    // method that will return the first node of the list
  }

  // 5. Tail, method that will return the last node of the list
  // For loop then return the tail such as the last node return it in the current list ?
  tail() {
    // method that will return the last node of the list
  }

  // 6. at(index), method that will return the node of given index.
  // For loop so see in index exist in the current list such as 0,
  // if it does return the node
  at(index) {
    // method that will return node at given index
  }

  // 7. Pop(), simple method that will remove the last node of the list.
  pop() {
    // method that will remove the last node
  }

  // 8. contains(value), method that will return true if the
  // exist in the list, otherwise false
  // For loop, to see if value exist return true if not false.
  contains(value) {
    // method that will return true if the value exist otherwise false
  }

  // 9. findValue(value), method that will return the index of the node containing
  // value null if it doesn't exist
  // For loop, if the value exist return the index of the node, else return null
  findValue(value) {
    // method that will return the index of the node, else it will return null
  }

  // 10. toString(), method that will represent LinkedLists objects
  // as strings in the console.
  // In the current format:
  // (value) -> (value) -> (value) -> null
  // Using JSON stringify maybe to turn these objects as strings in JSON format ?
  toString() {
    // method that will represent the objects as strings
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLElBQUksQ0FBQztFQUNUQyxXQUFXQSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTtJQUMzQixJQUFJLENBQUNELEtBQUssR0FBRyxJQUFJO0lBQ2pCLElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7RUFDdEI7QUFDRjtBQUVBLGlFQUFlSCxJQUFJOzs7Ozs7Ozs7Ozs7OztBQ1BuQixNQUFNSSxVQUFVLENBQUM7RUFDZjtFQUNBO0VBQ0E7RUFDQUMsTUFBTUEsQ0FBQ0gsS0FBSyxFQUFFO0lBQ1o7RUFBQTs7RUFHRjtFQUNBO0VBQ0FJLE9BQU9BLENBQUNKLEtBQUssRUFBRTtJQUNiO0VBQUE7O0VBR0Y7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQUssSUFBSUEsQ0FBQSxFQUFHO0lBQ0w7RUFBQTs7RUFHRjtFQUNBO0VBQ0FDLElBQUlBLENBQUEsRUFBRztJQUNMO0VBQUE7O0VBR0Y7RUFDQTtFQUNBQyxJQUFJQSxDQUFBLEVBQUc7SUFDTDtFQUFBOztFQUdGO0VBQ0E7RUFDQTtFQUNBQyxFQUFFQSxDQUFDQyxLQUFLLEVBQUU7SUFDUjtFQUFBOztFQUdGO0VBQ0FDLEdBQUdBLENBQUEsRUFBRztJQUNKO0VBQUE7O0VBR0Y7RUFDQTtFQUNBO0VBQ0FDLFFBQVFBLENBQUNYLEtBQUssRUFBRTtJQUNkO0VBQUE7O0VBR0Y7RUFDQTtFQUNBO0VBQ0FZLFNBQVNBLENBQUNaLEtBQUssRUFBRTtJQUNmO0VBQUE7O0VBR0Y7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBYSxRQUFRQSxDQUFBLEVBQUc7SUFDVDtFQUFBOztFQUdGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNGOztBQUVBLGlFQUFlWCxVQUFVOzs7Ozs7VUNsR3pCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ1o7O0FBRTFCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9Ob2RlLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvbGlua2VkTGlzdC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IodmFsdWUsIG5leHROb2RlKSB7XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5uZXh0Tm9kZSA9IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiIsImNsYXNzIExpbmtlZExpc3Qge1xuICAvLyBMaW5rZWQgTGlzdCBmdW5jdGlvbnNcbiAgLy8gMS4gYXBwZW5kKHZhbHVlKSBwYXJhbWV0ZXIsIHRoaXMgbWV0aG9kIHdpbGwgYWRkIHRoZSBub2RlIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgLy8gTWF5YmUgY2hlY2sgaWYgdGhlcmUgaXMgdGFpbCBhbmQgaGFzIGFueSB2YWx1ZSB0byBhc3NpZ24gdG8gdGhlIG5vZGUncyB2YWx1ZSA/XG4gIGFwcGVuZCh2YWx1ZSkge1xuICAgIC8vIG1ldGhvZCB0byBhcHBlbmQgbm9kZSB0byB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gIH1cblxuICAvLyAyLiBwcmVwZW5kKHZhbHVlKSBwYXJhbWV0ZXIsIHRoaXMgbWV0aG9kIHdpbGwgYWRkIHRoZSBub2RlXG4gIC8vIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3RcbiAgcHJlcGVuZCh2YWx1ZSkge1xuICAgIC8vIG1ldGhvZCB0byBhcHBlbmQgbm9kZSB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0XG4gIH1cblxuICAvLyBDaGVjayBpZiB0aGUgaGVhZCBoYXMgYW55IHZhbHVlLCBhbmQgYXNzaWduIHRoZSBub2RlJ3MgdmFsdWUgP1xuICAvLyBFeGFtcGxlIDUgKGhlYWQpIC0+IDIgKHRhaWwpXG4gIC8vIGhlYWQgcG9pbnRzIHRvIDUgKG5leHQgYXMgcG9pbnRlciksIGFuZCB0aGUgdGFpbHMgcG9pbnRzIHRvIG51bGwuXG4gIC8vIElmIDEgaXMgYWRkZWQgYXMgdGhlIGhlYWQsIDEgLT4gNSAtPiAyXG4gIC8vIDEgaXMgdGhlIG5ldyBoZWFkLCAxIHBvaW50cyB0byA1IGFzIG5leHQgdmFsdWUsIDIgcG9pbnRzIHRvIG51bGxcbiAgLy8gSWYgMTIgaXMgYWRkZWQgYXMgdGhlIHRhaWwgMSAtPiA1IC0+IDIgLT4gMTJcbiAgLy8gMTIgaXMgdGhlIG5ldyB0YWlsLCAxIHBvaW50cyBhcyBuZXh0IHZhbHVlIHRvIDUsIDUgbmV4dCB2YWx1ZSBwb2ludHMgdG8gMiBhbmQgMlxuICAvLyBwb2ludHMgdG8gMTIsIDEyIHBvaW50cyB0byBudWxsXG4gIC8vIDMuU2l6ZSwgbWV0aG9kIHRoYXQgd2lsbCByZXR1cm4gdGhlIG51bWJlcnMgb2Ygbm9kZXMgaW4gdGhlIGxpc3RcbiAgLy8gTWF5YmUgZm9yIGxvb3AgdGhvdWdoIHRoZSB3aG9sZSBsaXN0LCBhbmQgcmV0dXJuIHRoZSBub2RlcyBpbiB0aGUgY3VycmVudCBsaXN0ID9cbiAgc2l6ZSgpIHtcbiAgICAvLyByZXR1cm4gdGhlIG51bWJlciBvZiBub2RlcyBvZiB0aGUgbGlzdFxuICB9XG5cbiAgLy8gNC4gSGVhZCwgbWV0aG9kIHRoYXQgd2lsbCByZXR1cm4gdGhlIGZpcnN0IG5vZGUgdGhlIGZpcnN0IG5vZGUgb2YgdGhlIGxpc3RcbiAgLy8gQ29uZGl0aW9uIGlmIHRoZSBoZWFkIGV4aXN0IHN1Y2ggYXMgdGhlIGZpcnN0IG5vZGUgcmV0dXJuIGl0LCBubyBsb29wIG1heWJlIGhlcmUgP1xuICBoZWFkKCkge1xuICAgIC8vIG1ldGhvZCB0aGF0IHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBub2RlIG9mIHRoZSBsaXN0XG4gIH1cblxuICAvLyA1LiBUYWlsLCBtZXRob2QgdGhhdCB3aWxsIHJldHVybiB0aGUgbGFzdCBub2RlIG9mIHRoZSBsaXN0XG4gIC8vIEZvciBsb29wIHRoZW4gcmV0dXJuIHRoZSB0YWlsIHN1Y2ggYXMgdGhlIGxhc3Qgbm9kZSByZXR1cm4gaXQgaW4gdGhlIGN1cnJlbnQgbGlzdCA/XG4gIHRhaWwoKSB7XG4gICAgLy8gbWV0aG9kIHRoYXQgd2lsbCByZXR1cm4gdGhlIGxhc3Qgbm9kZSBvZiB0aGUgbGlzdFxuICB9XG5cbiAgLy8gNi4gYXQoaW5kZXgpLCBtZXRob2QgdGhhdCB3aWxsIHJldHVybiB0aGUgbm9kZSBvZiBnaXZlbiBpbmRleC5cbiAgLy8gRm9yIGxvb3Agc28gc2VlIGluIGluZGV4IGV4aXN0IGluIHRoZSBjdXJyZW50IGxpc3Qgc3VjaCBhcyAwLFxuICAvLyBpZiBpdCBkb2VzIHJldHVybiB0aGUgbm9kZVxuICBhdChpbmRleCkge1xuICAgIC8vIG1ldGhvZCB0aGF0IHdpbGwgcmV0dXJuIG5vZGUgYXQgZ2l2ZW4gaW5kZXhcbiAgfVxuXG4gIC8vIDcuIFBvcCgpLCBzaW1wbGUgbWV0aG9kIHRoYXQgd2lsbCByZW1vdmUgdGhlIGxhc3Qgbm9kZSBvZiB0aGUgbGlzdC5cbiAgcG9wKCkge1xuICAgIC8vIG1ldGhvZCB0aGF0IHdpbGwgcmVtb3ZlIHRoZSBsYXN0IG5vZGVcbiAgfVxuXG4gIC8vIDguIGNvbnRhaW5zKHZhbHVlKSwgbWV0aG9kIHRoYXQgd2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGVcbiAgLy8gZXhpc3QgaW4gdGhlIGxpc3QsIG90aGVyd2lzZSBmYWxzZVxuICAvLyBGb3IgbG9vcCwgdG8gc2VlIGlmIHZhbHVlIGV4aXN0IHJldHVybiB0cnVlIGlmIG5vdCBmYWxzZS5cbiAgY29udGFpbnModmFsdWUpIHtcbiAgICAvLyBtZXRob2QgdGhhdCB3aWxsIHJldHVybiB0cnVlIGlmIHRoZSB2YWx1ZSBleGlzdCBvdGhlcndpc2UgZmFsc2VcbiAgfVxuXG4gIC8vIDkuIGZpbmRWYWx1ZSh2YWx1ZSksIG1ldGhvZCB0aGF0IHdpbGwgcmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgbm9kZSBjb250YWluaW5nXG4gIC8vIHZhbHVlIG51bGwgaWYgaXQgZG9lc24ndCBleGlzdFxuICAvLyBGb3IgbG9vcCwgaWYgdGhlIHZhbHVlIGV4aXN0IHJldHVybiB0aGUgaW5kZXggb2YgdGhlIG5vZGUsIGVsc2UgcmV0dXJuIG51bGxcbiAgZmluZFZhbHVlKHZhbHVlKSB7XG4gICAgLy8gbWV0aG9kIHRoYXQgd2lsbCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBub2RlLCBlbHNlIGl0IHdpbGwgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIDEwLiB0b1N0cmluZygpLCBtZXRob2QgdGhhdCB3aWxsIHJlcHJlc2VudCBMaW5rZWRMaXN0cyBvYmplY3RzXG4gIC8vIGFzIHN0cmluZ3MgaW4gdGhlIGNvbnNvbGUuXG4gIC8vIEluIHRoZSBjdXJyZW50IGZvcm1hdDpcbiAgLy8gKHZhbHVlKSAtPiAodmFsdWUpIC0+ICh2YWx1ZSkgLT4gbnVsbFxuICAvLyBVc2luZyBKU09OIHN0cmluZ2lmeSBtYXliZSB0byB0dXJuIHRoZXNlIG9iamVjdHMgYXMgc3RyaW5ncyBpbiBKU09OIGZvcm1hdCA/XG4gIHRvU3RyaW5nKCkge1xuICAgIC8vIG1ldGhvZCB0aGF0IHdpbGwgcmVwcmVzZW50IHRoZSBvYmplY3RzIGFzIHN0cmluZ3NcbiAgfVxuXG4gIC8vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBFeHRyYSBtZXRob2RzICEhIVxuICAvLyAxMS4gaW5zZXJ0QXQodmFsdWUsIGluZGV4KSwgdGhhdCB3aWxsIGluc2VydCBuZXcgbm9kZVxuICAvLyB3aXRoIHByb3ZpZGVkIHZhbHVlIG9mIGdpdmVuIGluZGV4XG4gIC8vIENvdXBsZSBvZiB0aGluZ3MgbmVlZHMgdG8gaGFwcGVuIGhlcmUsIGFmdGVyIGluc2VydGluZyB0aGUgbmV3IG5vZGVcbiAgLy8gdGhlIHByZXZpb3VzIG5vZGVcbiAgLy8gdGhhdCBoYXMgYmVlbiBtb3ZlIG5lZWQgdG8gcG9pbnQgdG8gdGhlIG5ldyBvbmUgZm9yIGV4YW1wbGVcbiAgLy8gMSAtPiAyIC0+IDUgLT4gMTJcbiAgLy8gaW5kZXhlcyAwLCAxLCAyLCAzXG4gIC8vIElmIDcgaXMgYWRkZWQgaW4gaW5kZXggMlxuICAvLyAxIC0+IDIgLT4gNyAtPiA1IC0gPiAxMlxuICAvLyBUd28gbmVlZHMgdG8gcG9pbnRzIGF0IHNldmVuLCBhbmQgc2V2ZW4gaGFzIHRvIHBvaW50IGFzIDVcbiAgLy8gTmVlZCB0byBzb21laG93IHVwZGF0ZSB0aGUgcG9pbnRzIGJldHdlZW4gdGhlIG5vZGVzIHRoYXQgaGFzIGJlZW4gYWRkZWQgdGhlIG5ldyBub2RlXG4gIC8vIDEyLiByZW1vdmVBdChpbmRleCksIG1ldGhvZCB0aGF0IHdpbGwgcmVtb3ZlIG5vZGUgYXQgY3VycmVudCBpbmRleC5cbiAgLy8gSWYgNyBpcyByZW1vdmVkIGluIHRoZSBhYm92ZSBleGFtcGxlXG4gIC8vIDEgLT4gMiAtPiA1IC0+IDEyXG4gIC8vIFR3byBoYXMgdG8gcG9pbnQgdG8gZml2ZSwgYmVjYXVzZSB0aGUgcHJldmlvdXMgbm9kZSBoYXMgYmVlbiByZW1vdmVkIGluIG9yZGVyIHRvIGtlZXBcbiAgLy8gdGhlIHBvaW50ZXJzIHVwZGF0ZWQsIGFuZCBmaXZlIGhhcyB0byBwb2ludCB0byB0d2VsdmUuXG4gIC8vIEltcG9ydGFudCB0aXA6IFdoZW4geW91IGluc2VydCBvciByZW1vdmUgYSBub2RlLCBjb25zaWRlclxuICAvLyBob3cgaXQgd2lsbCBhZmZlY3QgdGhlIGV4aXN0aW5nIG5vZGVzLlxuICAvLyBTb21lIG9mIHRoZSBub2RlcyB3aWxsIG5lZWQgdGhlaXIgbmV4dE5vZGUgbGluayB1cGRhdGVkLlxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rZWRMaXN0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTGlua2VkTGlzdCBmcm9tIFwiLi9saW5rZWRMaXN0XCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCI7XG5cbi8vIExpbmtlZCBMaXN0cyBwc2V1ZG8gY29kZVxuXG4vLyBCZWZvcmUgYmVnaW4gdGhlIHByb2plY3QgY2hvb3NlIGJldHdlZW4gZmFjdG9yeSBmdW5jdGlvbnMgb3IgY2xhc3Mgc3ludGF4ICFcblxuLy8gVHdvIGltcG9ydGFudCBjbGFzc2VzL2ZhY3RvcnkgZnVuY3Rpb25zIHRoYXQgYXJlIG5lZWRlZC5cbi8vIDEuIFRoZSBmaXJzdCBvbmUgaXMgZm9yIHJlcHJlc2VudGluZyB0aGUgZnVsbCBsaXN0XG4vLyBNYXliZSBmb3IgY3JlYXRpbmcgbmV3IG9iamVjdHMgKG5vZGVzKSA/XG5cbi8vIDIuIE5vZGUgY2xhc3MvZmFjdG9yeSB3aXRoIHZhbHVlIHByb3BlcnR5LCBhbmQgbGluayB0byB0aGUgbmV4dE5vZGVcbi8vIHNldCBib3RoIG15IGRlZmF1bHQuXG4vLyBIbW0gdmFsdWUgcHJvcGVydHksIGdldCBmb3IgcmVhZGluZywgc2V0IGZvciB3cml0aW5nID9cbi8vIEFuZCB0aGlzIHdpbGwgYmUgdXNlZCB0byBwb2ludCBvbiB0byB0aGUgbmV4dE5vZGUsXG4vLyBzb21ldGhpbmcgbGlrZSB0aGlzLCBwcmV2aW91czogdmFsdWUsIG5leHQ6IG51bGwgP1xuIl0sIm5hbWVzIjpbIk5vZGUiLCJjb25zdHJ1Y3RvciIsInZhbHVlIiwibmV4dE5vZGUiLCJMaW5rZWRMaXN0IiwiYXBwZW5kIiwicHJlcGVuZCIsInNpemUiLCJoZWFkIiwidGFpbCIsImF0IiwiaW5kZXgiLCJwb3AiLCJjb250YWlucyIsImZpbmRWYWx1ZSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==
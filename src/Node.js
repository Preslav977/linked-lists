/* eslint-disable no-underscore-dangle */
class Node {
  constructor(value = null, nodeNext = null) {
    this.value = value;
    this.nodeNext = nodeNext;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  get nodeNext() {
    return this._nodeNext;
  }

  set nodeNext(value) {
    this._nodeNext = value;
  }
}

export default Node;

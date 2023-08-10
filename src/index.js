import LinkedList from "./linkedList";
import "./style.css";

const linkedList = new LinkedList();

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

console.log(linkedList.contains(4));

import LinkedList from "./linkedList";
import "./style.css";

const linkedList = new LinkedList();

const firstNode = linkedList.append(2);

const secondNode = linkedList.append(3);

// const thirdNode = linkedList.append(4);

// const fifthNode = linkedList.append(5);

const sixthNode = linkedList.prepend(1);

// const seventhNode = linkedList.prepend(6);

// linkedList.size();

// linkedList.findHead();

// linkedList.findTail();

// linkedList.at(2);

// linkedList.pop();

// console.log(linkedList.contains(4));

// linkedList.findValue(3);

console.log(linkedList.toString());

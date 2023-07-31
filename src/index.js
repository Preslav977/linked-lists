import LinkedList from "./linkedList";
import Node from "./Node";
import "./style.css";

const linkedList = new LinkedList();

const tail = linkedList.append(5);

const head = new Node(2);

const newHead = linkedList.prepend(8);
newHead.nodeNext = head;
console.log(newHead);

head.nodeNext = tail;

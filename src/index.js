import LinkedList from "./linkedList";
import "./style.css";

const linkedList = new LinkedList();

const head = linkedList.append(5);

const tail = linkedList.append(6);

const newHead = linkedList.prepend(7);

const anotherNewHead = linkedList.prepend(9);

console.log(linkedList.size());

import LinkedList from "./linkedList";
import "./style.css";

const linkedList = new LinkedList();

const head = linkedList.append(5);

const tail = linkedList.append(3);

const test = linkedList.prepend(1);

const test1 = linkedList.prepend(6);

const test2 = linkedList.prepend(11);

linkedList.size();

linkedList.head();

// linkedList.tail();

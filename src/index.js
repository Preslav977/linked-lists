import LinkedList from "./linkedList";
import "./style.css";

const linkedList = new LinkedList();

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

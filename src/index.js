import LinkedList from "./linkedList";
import Node from "./Node";

const test = new Node(5);

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

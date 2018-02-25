class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(node){
    if(this.head == null){
      this.head = node;
      this.tail = node;
    }
    else{
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this.tail;
  }
  pop(){
    const poppedNode = this.tail;
    let currentNode = this.head;
    while(currentNode.next != this.tail){
      currentNode = currentNode.next;
    }
    this.tail = currentNode;
    this.length--;
    return poppedNode;
  }
  delete(node){
    let currentNode = this.head;
    if(node === this.tail){
      this.pop();
    }
    else{
      while(currentNode.next !== node){
         currentNode = currentNode.next;
      }
      currentNode.next = currentNode.next.next;
      this.length--;
      return this;
    }
  }
  search(node){
    let currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
      if(currentNode === node){
        return "Node Found!";
      }
      else{
        return "Not Found!";
      }
    }
  }
}

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

var headNode = new Node(3);
var newNode1 = new Node(6);
var newNode2 = new Node(9);
var newNode3 = new Node(6);
var newNode4 = new Node(8);
var newNode5 = new Node(10);
var newNode6 = new Node(99);


var list = new LinkedList();

list.push(headNode);
list.push(newNode1);
list.push(newNode2);
list.push(newNode3);
list.push(newNode4);
list.push(newNode5);
list.push(newNode6);

console.log(list.pop());
console.log(list.tail.next);

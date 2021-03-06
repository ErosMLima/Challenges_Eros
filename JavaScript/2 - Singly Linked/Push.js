class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val)

		if(!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			this.tail = newNode 
		}
		this.lenght++
		return this
	}
}

let list = new SinglyLinkedList()

list.push('hi')
list.push('there')
list.push('my')

console.log(list)

// Object { head: {…}, tail: {…}, length: 0, lenght: NaN }
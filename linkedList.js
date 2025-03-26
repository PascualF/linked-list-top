// This class is to create a new node
class Node {
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}
/* 
const n1 = new Node(200)
console.log(n1) */

// This class is to reprensent the linkedlist
class LinkedList {
    constructor(){
        this.head = this.head
        this.size = 0
    }

    // Appends a value a the end of the list, meaning the TAIL
    append(value){
        
        const node = new Node(value)

        if(!this.head){
            this.head = node;
            this.size++
            return;
        }

        let current = this.head

        while(current.nextNode){
            current = current.nextNode
        }

        current.nextNode = node
        this.size++
        return
    }

    // Add a value, to the start of the list, meaning the HEAD.
    prepend(value){

        const node = new Node(value, this.head)
        this.head = node;
        this.size++
    }

    // True if value is in list
    contains(value){

    }

    // Return the index of the element value
    find(value){

    }

    // Transform into string ( value ) -> ( value ) -> ( value ) -> null and console log them
    toString(){
        let current = this.head;
        let result = ""
        while(current) {
            result += `( ${current.value} ) -> `
            current = current.nextNode
        }
        console.log(result + 'null')

    }

}

const linkedList = new LinkedList()

// Prepending values to the list
linkedList.prepend(100)
linkedList.prepend(400)

// Append values to the list
linkedList.append(200)

// Console log the linked list
linkedList.toString();
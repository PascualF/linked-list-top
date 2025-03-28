// This class is to create a new node
class Node {
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

// This class is to reprensent the linkedlist
class LinkedList {
    constructor(head = null){
        this.head = head
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


    // Give the node value at inputed index
    at(index){

        if(index > 0 && index > this.size) {
            return null;
        }

        let current = this.head;
        let count = 0;

        while(current.nextNode){
            current = current.nextNode
            count++
            if(index === count){
                console.log(current.value)
            }
        }

    }


    // True if value is in list
    contains(value){
        if(!this.head){
            return `The Linked List is empty`
        }

        let current = this.head

        while(current){
            if(current.value === value){
                return true
            }
            current = current.nextNode
        }

        return false
    }

    // Return the index of the element value
    find(value){

        if(!this.head){
            return `The Linked List is empty`
        }

        let current = this.head;
        let countIndex = 0
        while(current){
            if(current.value === value){
                return countIndex
            }
            countIndex++
            current = current.nextNode
        }
    }

    headValue(){
        console.log('This value is the head ' + this.head.value)
    }

    tailValue(){
        let current = this.head;

        while(current.nextNode){
            current = current.nextNode
        }
        console.log('This value is the tail ' + current.value)

    }

    getSize(){
        let current = this.head;
        let count = 0;

        while(current){
            count++
            current = current.nextNode
        }

        return count
    }

    removeLastElement(){
        if(!this.head){
            return null
        }

        let current = this.head;
        let previous;

        while(current.nextNode){
            previous = current
            current = current.nextNode
        }

        console.log('This is the previous')
        console.log(previous)

        return previous.nextNode = null

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
linkedList.prepend(120)

// Append values to the list
linkedList.append(200)
linkedList.append(900)

// Get value at index
linkedList.at(2)

// Return true if value in linked list
console.log(`200 in the linked list => ${linkedList.contains(200)}`)
// Reutnr the index if value in linked list, or null if value not in linked list
console.log(`200 in the index linked list => ${linkedList.find(200)}`)

// This is the head
linkedList.headValue()
linkedList.tailValue()
console.log(`The lit as a size of ${linkedList.getSize()} Nodes`)

// Removes the last element
linkedList.removeLastElement()


// Console log the linked list
linkedList.toString();


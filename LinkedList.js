class LinkedList {
    constructor() {
        this.head = null;
        
        // variables for printList to correctly
        // display the correct message
        this.newestNode = null;
        this.addToList = false;
        this.addToHead = false;
    }
    
    // add node to head (beginning) of list
    addHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        
        // if there is a head, set new head's
        // next node to current head
        if (currentHead) {
            this.head.setNext(currentHead);
        }
        
        // updating values for printList 
        this.newestNode = data;
        this.addToList = true;
        this.addToHead = true;
    }
    
    // add node to tail (end) of list
    addTail(data) {
        let tail = this.head;
        
        // if there is no head (empty list), create a 
        // new node and set it as the head
        if (!tail) {
            this.head = new Node(data);
        } else {
            // traverse to end of list 
            while (tail.getNext() !== null) {
                tail = tail.getNext();
            }
            // create new tail add end of list
            tail.setNext(new Node(data));
        }
        
        // updating values for printList 
        this.newestNode = data;
        this.addToList = true;
        this.addToHead = false;
    }
   
    // remove current head of list
    removeHead() {
        const removedHead = this.head;
        // if list is empty, return
        if (!removedHead) {
            return;
        }
        // set current head's next node as new head
        this.head = removedHead.getNext();
        
        // updating values for printList 
        this.newestNode = removedHead;
        this.addToList = false;
        
        return removedHead.data;
    }
    
    // print the current state of the linked list
    printList() {
        let currentNode = this.head;
        let output = '';
        
        let list = document.getElementById('list');
        let node = document.createElement('h3');
        let text = document.createElement('p');
        
        // check to see what newest node is and 
        // display the corresponding message stating
        // the changes made to the linked list
        if (currentNode === null) {
            text.innerHTML = 'The list is empty';
            list.appendChild(text); node.appendChild(document.createTextNode(currentNode));
            list.appendChild(node);
        } else {
            if (this.addToList && this.addToHead) {
                text.innerHTML = `Add ${this.newestNode} to the head of the linked list`;
                list.appendChild(text);
            } else if (this.addToList && !this.addToHead) {
                text.innerHTML = `Add ${this.newestNode} to the tail of the linked list`;
                list.appendChild(text);
            } else {
                text.innerHTML = 'Remove head from the linked list';
                list.appendChild(text);
            }
        }
        
        // display the current state of the linked list
        while (currentNode !== null) {
            output = currentNode.data + ' ';
            currentNode = currentNode.getNext();
            
            node.appendChild(document.createTextNode(output));
            list.appendChild(node);
        }
    }
}

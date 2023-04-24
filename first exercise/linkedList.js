const nodeFactory = (value) => {

    value = null
    next = null

    return {
        value,
        next
    }

}

const linkedListFactory = () => {
    let _head = null;
    let length = 0;

    const getHead = () => {
        return _head
    }

    const append = (value) => {
        if (_head === null) {
            _head = nodeFactory(value)
            length++
            return
        }

        let current = _head
        while (current.next !== null) {
            current = current.next
        }
        current.next = nodeFactory(value)
        length++
    }

    const prepend = (value) => {
        let newHead = nodeFactory(value)
        newHead.next = _head
        _head = newHead
        length++
    }

    const size = () => {
        return length
    }

    const head = () => {
        if (_head !== null) {
            return Object.values(_head)[0]
        }
    }
    
    const tail = () => {
        let current = _head
        if (current.next === null) {
            return current
        }
    }
    
    const at = (value) => {
            return Object.values(_head)[value]
    }

    return {
        append,
        prepend,
        getHead,
        size,
        head,
        tail,
        at
    }
}


const Node = nodeFactory()
console.log(Node.nextNode)
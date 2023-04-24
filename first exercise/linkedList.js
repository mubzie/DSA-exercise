const nodeFactory = (value = null, next = null) => {

    return {
        value,
        next
    }

}

const linkedListFactory = () => {
    let _head = null;
    let length = 0;

    const getList = () => {
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
        let current = _head

        if (current.next !== null) {
            return {'value': current.value, 'next': current.next.value}
        }
    }
    
    const tail = () => {
        let current = _head

        while (current.next !== null) {
            current = current.next
        }
        return current

    }
    
    const at = (value) => {
        return Object.values(_head)[value]
    }

    return {
        append,
        prepend,
        getList,
        size,
        head,
        tail,
        at
    }
}


const linkedList = linkedListFactory()
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.append(5)
linkedList.append(6)
linkedList.prepend(7)
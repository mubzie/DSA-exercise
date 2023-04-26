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
    
    const at = (index) => {
        let current = _head
        let count = 0

        while (current !== null) {
            if (count === index) {
                return current
            }
            count++
            current  = current.next
        }
    }
    
    const pop = () => {
        if(_head === null || _head.next === null) return null
        
        let current = _head

        while (current.next.next !== null) {
            current = current.next
        }
        current.next = null
        length--

    }
    
    const contains = (value) => {
        let current = _head
        
        while (current !== null) {
            if (current.value === value) {
                return true
            }
            current = current.next
        }
        
        return false
        
    }
    
    const find = (value) => {
        let current = _head
        let count = 0

        while (current !== null) {
            if (current.value === value) {
                return count
            }
            count++
            current  = current.next
        }
    }

    const toString = () => {
        let current = _head 
        let string = ''

        while (current !== null) {
            string += `( ${current.value} ) -> `
            if (current.next === null) {
                string += `null`
            }
            current = current.next
        }
        
        return string
    }

    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString
    }
}


const linkedList = linkedListFactory()
const mergeSort = (arr) => {

    if (arr.length === 0) return 'Cannot sort an empty array XD'
    if (arr.length === 1) return arr;

    const mid = Math.floor(arr.length/2);
    const leftSide = arr.slice(0, mid);
    const rightSide = arr.slice(mid, arr.length);

    return merge(mergeSort(leftSide), mergeSort(rightSide))
}

console.log(mergeSort([1,2,3,4,5,6,7,8]));

const merge = (leftArr, rightArr) => {

    const result = [];

    leftPointer = 0;
    rightPointer = 0;

    while (leftPointer < leftArr.length && rightPointer < rightArr.length) {
        if (leftArr[leftPointer] < rightArr[rightPointer]) {
            result.push(leftArr[leftPointer])
            leftPointer++
        } else {
            result.push(rightArr[rightPointer])
            rightPointer++
        }
    }

    while (leftPointer < leftArr.length) {
        result.push(leftArr[leftPointer])
        leftPointer++
    }

    while (rightPointer < rightArr.length) {
        result.push(rightArr[rightPointer])
        rightPointer++
    }

    return result;
}
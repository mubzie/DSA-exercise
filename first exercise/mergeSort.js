const merge = (left, right) => {

    let result = [];

    let leftPointer = left.length;
    let rightPointer = right.length;

    let i = 0; let j = 0; let k = 0;
   
    while (i < leftPointer && j < rightPointer) {

        if (left[i] < right[j]) {
            result[k++] = left[i++];
        } else {
            result[k++] = right[j++]
        }

    }

    for (; i < leftPointer; i++) {
        result[k++] = left[i]
    }

    for (; j < rightPointer; j++) {
        result[k++] = right[j]
    }

    return result

}

const mergeSort = (arr) => {

    if (arr.length === 0) return 'Cannot sort an empty array XD'
    if (arr.length === 1) return arr;

    const mid = Math.floor(arr.length/2);
    const leftSide = arr.slice(0, mid);
    const rightSide = arr.slice(mid, arr.length);

    return merge(mergeSort(leftSide), mergeSort(rightSide))
}

console.log(mergeSort([9,8,7,2,3,6,0,4,5,3,23,18,12]));
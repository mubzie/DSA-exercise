const fibs = (n, fibArr = [0,1]) => {

for (let i = 2; n > fibArr.length; i++) {
    fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
}

return fibArr;

}

fibs(8)

const fibsRecurse = (n, fibs = [0,1]) => {

    if (fibs.length >= n) return fibs;

    return fibsRecurse(n, [...fibs, fibs[fibs.length - 2] + fibs[fibs.length - 1]]);
}

fibsRecurse(8)

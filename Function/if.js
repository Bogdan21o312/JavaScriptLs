//If====================================================================================================

const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not number'
    }
    
    if (a <= 0 || b <= 0) {
        return 'Numbers are not positive'
    }
    return a + b
}

console.log(sumPositiveNumbers())

//====================================================================================================
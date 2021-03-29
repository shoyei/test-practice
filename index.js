export function capitalizeString(x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
}

export function reverseString(x) {
    const myArr = x.split('')
    const revArr = myArr.reverse()
    const revString = revArr.join('')
    return revString
}

export const calculator = {
    add: function (a, b) {
        return a + b
    },

    subtract: function (a, b) {
        return a - b
    },

    multiply: function (a, b) {
        return a * b
    },

    divide: function (a, b) {
        return a / b
    }
}

export function caesar(string, shift) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~1234567890' ']/s
    const myStrArr = string.split('')
    let newArray = myStrArr.map(letter => {
        if (regex.test(letter)) return letter
        else {
            let capital = (letter === letter.toUpperCase()) ? true : false
            let index = alphabet.findIndex(item => item === letter.toLowerCase())
            index += shift
            if (index > 25) index -= 26
            else if (index < 0) index += 26
            return capital ? alphabet[index].toUpperCase() : alphabet[index]
        }
    })
    return newArray.join('')
}

export function arrayAnalysis(array) {
    let average = () => array.reduce((result, value) => result + value) / array.length
    let min = () => Math.min.apply(null, array)
    let max = () => Math.max.apply(null, array)
    let length = () => array.length
    return {
        average: average(),
        min: min(),
        max: max(),
        length: length()
    }
}
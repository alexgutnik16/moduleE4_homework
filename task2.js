str = 'category'

const car = {
    category: 'transport'
}

function compareStrAndObj(str, obj) {
    for (key in obj) {
        if (key == str) {
            return true
        }
    }
    return false
}

result = compareStrAndObj(str, car)
console.log(result)
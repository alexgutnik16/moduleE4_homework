const car = {
    category: 'transport'
}

const bike = Object.create(car)

bike.wheels = 2

function getOwnKeys(obj) {
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key)
        }
    }
}

getOwnKeys(bike)
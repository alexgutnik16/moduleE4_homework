function createObj() {
    return Object.create(null)
}

car = createObj()
car.wheels = 4
console.log(car.wheels)
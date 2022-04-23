class PC {
    constructor(power, cpu, ram) {
        this.power = power
        this.cpu = cpu
        this.ram = ram
        this.type = 'electrical device'
    }
    onDevice() {
        console.log('Device ON')
        return this.power
    }
    offDevice() {
        this.power = 0
        console.log('Device OFF')
        return this.power
    }
}

class Monitor extends PC {
    constructor(power, maxBrightness, refreshRate) {
        super(power)
        this.maxBrightness = maxBrightness
        this.refreshRate = refreshRate
    }
    getRefreshRate() {
        console.log(`Refresh rate of monitor is ${this.refreshRate}Hz`)
    }
}

class Lamp extends PC {
    constructor(power, lightColor) {
        super(power)
        this.lightColor = lightColor
    }
}

const MY_PC = new PC(800, 'Intel Core i7', 16)
const MY_MONITOR = new Monitor(40, 400, 144)
const MY_LAMP = new Lamp(60, 'white')

powPc = MY_PC.onDevice()
powMonitor = MY_MONITOR.onDevice()
powLamp = MY_LAMP.onDevice()
console.log(`Total amount of energy consumed - ${powPc+powMonitor+powLamp}`)
MY_MONITOR.getRefreshRate()

powMonitor = MY_MONITOR.offDevice()
powLamp = MY_LAMP.offDevice()
console.log(`Total amount of energy consumed - ${powPc+powMonitor+powLamp}`)
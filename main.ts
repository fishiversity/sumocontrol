radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xValue = value
    }
    if (name == "y") {
        yValue = value * -1
    }
})
let rightSpeed = 0
let leftSpeed = 0
let y = 0
let yValue = 0
let xValue = 0
let x = 0
OLED.init(128, 64)
radio.setGroup(1)
joystickbit.initJoystickBit()
basic.showIcon(IconNames.Happy)
OLED.clear()
basic.forever(function () {
    y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 0, 1023, -100, 100)
    x = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 0, 1023, -100, 100)
    radio.sendValue("y", y)
    radio.sendValue("x", x)
})
basic.forever(function () {
    leftSpeed = yValue + xValue
    rightSpeed = yValue - xValue
    wuKong.setAllMotor(leftSpeed, rightSpeed)
})

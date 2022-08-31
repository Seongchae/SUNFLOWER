let 밝기 = 0
basic.forever(function () {
    밝기 = pins.analogReadPin(AnalogPin.P1)
    if (밝기 > 800) {
        pins.servoWritePin(AnalogPin.P2, 45)
        basic.showIcon(IconNames.Happy)
    } else {
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.showIcon(IconNames.Sad)
    }
})

let 밝기 = 0
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    밝기 = pins.analogReadPin(AnalogPin.P1)
    if (밝기 > 800) {
        pins.digitalWritePin(DigitalPin.P2, 45)
        basic.showIcon(IconNames.Happy)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showIcon(IconNames.Sad)
    }
})

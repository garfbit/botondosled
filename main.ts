input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.West)
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.East)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P0, 0)
})

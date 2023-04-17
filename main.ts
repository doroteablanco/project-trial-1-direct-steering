let Display = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
basic.forever(function () {
    Display.show(pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    180
    ))
    basic.pause(100)
})

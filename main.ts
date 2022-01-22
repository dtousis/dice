let αριθμός = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Square)
    αριθμός = randint(1, 6)
    if (αριθμός == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        if (αριθμός == 2) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                `)
        } else {
            if (αριθμός == 3) {
                basic.showLeds(`
                    . . . . #
                    . . . . .
                    . . # . .
                    . . . . .
                    # . . . .
                    `)
            } else {
                if (αριθμός == 4) {
                    basic.showLeds(`
                        # . . . #
                        . . . . .
                        . . . . .
                        . . . . .
                        # . . . #
                        `)
                } else {
                    if (αριθμός == 5) {
                        basic.showLeds(`
                            # . . . #
                            . . . . .
                            . . # . .
                            . . . . .
                            # . . . #
                            `)
                    } else {
                        if (αριθμός == 6) {
                            basic.showLeds(`
                                # . . . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # . . . #
                                `)
                        }
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
    led.setBrightness(255)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.SmallDiamond)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(100)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.SmallDiamond)
    basic.clearScreen()
})

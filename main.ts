let αριθμός = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    αριθμός = randint(1, 6)
    if (αριθμός == 1) {
        images.createImage(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `).showImage(0)
    } else {
        if (αριθμός == 2) {
            images.createImage(`
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                `).showImage(0)
        } else {
            if (αριθμός == 3) {
                images.createImage(`
                    . . . . #
                    . . . . .
                    . . # . .
                    . . . . .
                    # . . . .
                    `).showImage(0)
            } else {
                if (αριθμός == 4) {
                    images.createImage(`
                        # . . . #
                        . . . . .
                        . . . . .
                        . . . . .
                        # . . . #
                        `).showImage(0)
                } else {
                    if (αριθμός == 5) {
                        images.createImage(`
                            # . . . #
                            . . . . .
                            . . # . .
                            . . . . .
                            # . . . #
                            `).showImage(0)
                    } else {
                        if (αριθμός == 6) {
                            images.createImage(`
                                # . . . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # . . . #
                                `).showImage(0)
                        }
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
	
})

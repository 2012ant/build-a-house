player.onChat("house", function (width, height) {
    builder.teleportTo(pos(0, -1, -5))
    while (i <= height - 1) {
        builder.move(UP, 1)
        builder.mark()
        for (let index = 0; index < 4; index++) {
            builder.move(FORWARD, width - 1)
            builder.turn(LEFT_TURN)
        }
        builder.tracePath(STONE)
        i += 1
    }
    builder.shift(-1, 1, -1)
    if (width % 2 == 0) {
        roofLayers = width / 2 - 1
    } else {
        roofLayers = width / 2
    }
    while (layer <= roofLayers + 1) {
        builder.mark()
        for (let index = 0; index < 4; index++) {
            builder.move(FORWARD, width + 1 - layer * 2)
            builder.turn(LEFT_TURN)
        }
        builder.tracePath(PLANKS_OAK)
        builder.shift(1, 1, 1)
        layer += 1
    }
    builder.move(DOWN, roofLayers + height + 2)
    builder.mark()
    builder.move(FORWARD, width / 2 + 1)
    builder.move(UP, 1)
    builder.fill(AIR)
    builder.shift(width * -1 + 1, 0, width / 2 - 1)
    builder.place(GLASS)
    builder.move(RIGHT, width - 1)
    builder.place(GLASS)
})
let layer = 0
let i = 0
let roofLayers = 0
roofLayers = 1000

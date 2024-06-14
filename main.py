roofLayers = 1000

def on_on_chat(width, height):
    global roofLayers
    builder.teleport_to(pos(0, -1, -5))
    i = 0
    while i <= height - 1:
        builder.move(UP, 1)
        builder.mark()
        for j in range(4):
            builder.move(FORWARD, width - 1)
            builder.turn(TurnDirection.LEFT)
        builder.trace_path(STONE)
        i += 1
    builder.shift(-1, 1, -1)
    if width % 2 == 0:
        roofLayers = width / 2 - 1
    else:
        roofLayers = width / 2
    layer = 0
    while layer <= roofLayers + 1:
        builder.mark()
        for k in range(4):
            builder.move(FORWARD, width + 1 - layer * 2)
            builder.turn(TurnDirection.LEFT)
        builder.trace_path(PLANKS_OAK)
        builder.shift(1, 1, 1)
        layer += 1
    builder.move(DOWN, roofLayers + height + 2)
    builder.mark()
    builder.move(FORWARD, width / 2 + 1)
    builder.move(UP, 1)
    builder.fill(AIR)
    builder.shift(width * -1 + 1, 0, width / 2 - 1)
    builder.place(GLASS)
    builder.move(RIGHT, width - 1)
    builder.place(GLASS)
player.on_chat("house", on_on_chat)

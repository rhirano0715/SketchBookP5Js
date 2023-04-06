setup = _ => {
    noStroke(createCanvas(W = 800, W, WEBGL))
    R = random
    g = createGraphics(W, W)
    g.noStroke``
    C = g.circle
    for (i = 9999; i--;)r = R(R(R())), C(x = r * W / 4, y = R(W), s = 4 - r * 3), C(y, W - x, s)
    background(0)
    for (i = 9; i--;)push(texture(g)), rotate(i / 6), pop(box(W / 2 - i * W / 18))
}

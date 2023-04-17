t = 0
draw = _ => {
    t || createCanvas(W = 720, W)
    t += .005
    // colorMode(HSB)
    // B = blendMode
    // B(BLEND)
    // background(0, .1)
    background(5, .1)
    // B(ADD)
    noFill()
    for (y = 0; y < W; y += 17)for (x = -y / 17 % 2 * 17; x < W; x += 34)
        stroke((N = noise(x / 200, y / 200, t) * 6 + t) * W % 360, 90, W, (T = tan(N) ** 8))
            + square(x - (S = min(13, W / T)), y - S, S * 2)
}

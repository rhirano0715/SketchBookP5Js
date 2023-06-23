function setup() {
    createCanvas(1400, 400);
    background(0, 0, 0);
    background(5, .1)
    noFill()
    for (i = 0; i < 99999; i++) {
        stroke(random(360), 90, 90, 10)
            + square(random(1400), random(400), random(25), 1)
    }
}

function preload() {
    // loadImage("");
}

function setup() {
    // p1: width, p2: height, [p3: renderer P2D(default)/WEBGL]
    createCanvas(720, 720);
    // noCursor();
    frameRate(60);

    colorMode(HSB, 360, 100, 100);

    rectMode(CENTER);

    noStroke();

    i = random(360)
    j = 360 - i
    k = 1

    background(i, 100, 100);
    fill(j, 100, 100);
    rect(360, 360, k, k);

}

function draw() {
    for (var d = 0; d < 5; d++) {
        k++;
        if (k > 720) {
            i = random(360)
            j = 360 - i
            k = 1
            background(i, 100, 100);
            fill(j, 100, 100);

        }
        rect(360, 360, k, k);
    }
}

function keyPressed() {
    if (key === 's') {
        saveGif('color_square.gif', 15); // 1 sec
    }
}

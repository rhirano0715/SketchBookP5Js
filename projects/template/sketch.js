function preload() {
    // loadImage("");
}

function setup() {
    // p1: width, p2: height, [p3: renderer P2D(default)/WEBGL]
    createCanvas(1400, 400);

    background(0, 0, 0);
    background(5, .1);
    noFill();

    // default is 60  per second
    frameRate(60);

    // translate, p1: move x pixels to the right, p2: move y pixcels to the down.

    // rotate, p1: rodate x radians

    // scale, p1: magnify x

    // stroke
    // square
    // random
    // ellipse

    // random
}

function draw() {
    console.log(frameCount);
}

function setup() {
    createCanvas(1400, 400);
    background(0, 0, 0);
}

function draw() {
    for (i = 0; i < random(999999); i++) {
        fill(random(255), random(255), random(255));
        ellipse(random(1400), random(400), random(1, 3), random(1, 3));
    }
}

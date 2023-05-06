function setup() {
    createCanvas(600, 600);
    background(255, 255, 255);
}

function draw() {
    for (i = 0; i < random(999); i++) {
        if (i % 2 == 0) {
            fill(255, 255, 255);
        }
        else {
            fill(0, 0, 0);
        }

        ellipse(random(700), random(700), random(1, 2), random(1, 2));
    }

}

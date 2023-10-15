let max;

let xs = [];
let ys = [];
let vxs = [];
let vys = [];

function setup() {
    createCanvas(400, 400);

    noStroke();
    fill(255, 50);
    background(0);

    max = 400;

    // TODO: 起点を4隅にする
    for (let i = 0; i < 100 / 4; i++) {
        // Initial position
        xs[i] = 0;
        ys[i] = 0;

        // Initial velocity
        vxs[i] = 0;
        vys[i] = 0;
    }

    for (let i = 100; i < 200; i++) {
        // Initial position
        xs[i] = 0;
        ys[i] = height;

        // Initial velocity
        vxs[i] = 0;
        vys[i] = 0;
    }

    for (let i = 200; i < 300; i++) {
        // Initial position
        xs[i] = width;
        ys[i] = 0;

        // Initial velocity
        vxs[i] = 0;
        vys[i] = 0;
    }

    for (let i = 300; i < 400; i++) {
        // Initial position
        xs[i] = width;
        ys[i] = height;

        // Initial velocity
        vxs[i] = 0;
        vys[i] = 0;
    }


    // for (let i = 0; i < max / 4; i++) {
    //     // Initial position
    //     xs[i] = width / 2;
    //     ys[i] = height / 2;

    //     // Initial velocity
    //     vxs[i] = 0;
    //     vys[i] = 0;
    // }

    // for (let i = max - 1; i > max - (max / 5); i--) {
    //     // Initial position
    //     xs[i] = width;
    //     ys[i] = height;

    //     // Initial velocity
    //     vxs[i] = 0;
    //     vys[i] = 0;
    // }
}

function draw() {
    for (let i = 0; i < max; i++) {
        // Apply velocity to position
        xs[i] += vxs[i];
        ys[i] += vys[i];

        // Randomly change velocity
        vxs[i] += random(-1.0, 1.0) * 2 / 4;
        vys[i] += random(-1.0, 1.0) * 2 / 4;

        // Add simple air resistance
        vxs[i] *= 0.95;
        vys[i] *= 0.95;

        // Draw agents
        fill(255, random(50));
        ellipse(xs[i], ys[i], 2, 2);
    }

    //   save("result.png");
}

function keyPressed() {
    if (key === 's') {
        saveGif('RandomWalk.gif', 15); // 1 sec
    }
}

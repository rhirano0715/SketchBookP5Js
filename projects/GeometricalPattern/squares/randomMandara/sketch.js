var boxes;

var xZero = 0
var yZero = 0
var level1 = 1

// Parameters
var createCanvasWidth = 800
var createCanvasHeight = createCanvasWidth
var needFill = 0              // true or false
var backgroundH = 0           // 0 ~ 359
var backgroundS = 100         // 0 ~ 100
var backgroundB = 0           // 0 ~ 100
var aroundSqureCount = 7      // 0 ~ 9
var baseScaleDivider = 4      // 1 ~ 6
var offsetBias = 2            // 0.001 ~ 33. Preferably around 1 to 2
var scaleBias = 0.5           // Up to 4.55
var hueLower = 0              // 0 ~ perhaps 359?
var hueUpper = 200            // 0 ~ perhaps 359?

function setup() {
    createCanvas(createCanvasWidth, createCanvasHeight);
    colorMode(HSB);
    rectMode(CENTER);
    if (!needFill) {
        noFill();
    }
}

function draw() {
    // Set background color to black
    background(backgroundH, backgroundS, backgroundB);

    // Prepare the starting square
    boxes = [];
    boxes.push(new Box(xZero, yZero, width / baseScaleDivider, level1));

    // Create squares around the main square
    for (let i = 1; i <= aroundSqureCount; i++) {
        createBoxes(i);
    }

    // Draw the squares
    for (let b of boxes) {
        b.show();
    }
}

// Create four squares around a square
function createBoxes(level) {
    let newboxes = boxes.slice();

    if (level === 1) {
        return newboxes;
    }

    for (let b of boxes) {
        let offset = b.scl * offsetBias;
        let scl = b.scl * scaleBias;
        newboxes.push(new Box(b.x, b.y - offset, scl, level));
        newboxes.push(new Box(b.x + offset, b.y, scl, level));
        newboxes.push(new Box(b.x, b.y + offset, scl, level));
        newboxes.push(new Box(b.x - offset, b.y, scl, level));
    }
    boxes = newboxes;
}

class Box {
    constructor(x, y, scl, lev) {
        this.x = x;
        this.y = y;
        this.scl = scl;
        this.level = lev;
    }

    show() {
        push();
        translate(width / 2 + this.x, height / 2 + this.y);
        rotate(PI / 4 * this.level);
        let d = this.x * this.x + this.y * this.y;
        let hue = map(d, 0, (width / 2) * (width / 2), hueLower, hueUpper);
        stroke(hue, 100, 100);
        rect(1, 0, this.scl, this.scl);
        pop();
    }
}

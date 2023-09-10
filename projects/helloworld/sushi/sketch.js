var canvasWidth = 200;
var canvasCenter = canvasWidth / 2;
var netaXBias = canvasWidth / 20;
var netaYBias = canvasWidth / 10;
var upperBase = canvasWidth * 3 / 4
var lowerBase = canvasWidth / 4

function setup() {
    createCanvas(canvasWidth, canvasWidth);
    background(0);
    noLoop();
}

function draw() {
    // しゃり (rice)
    fill(255);
    noStroke();
    ellipse(canvasCenter, canvasCenter, upperBase, lowerBase);

    // // まぐろ (tuna)
    // fill(250, 30, 30);
    // ellipse(canvasCenter, canvasCenter - netaXBias, upperBase + netaYBias, lowerBase);

    fill(250, 128, 20);
    ellipse(canvasCenter, canvasCenter - netaXBias, upperBase + netaYBias, lowerBase);

}

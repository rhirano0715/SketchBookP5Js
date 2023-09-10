'use strict';

var canvasWidth = 400;
var segmentCount = 360;
var radius = 300;

function setup() {
    createCanvas(canvasWidth, canvasWidth);
    noStroke();
    background(0);
    colorMode(HSB, 360, width, height);
    frameRate(10)
}

function draw() {
    var angleStep = 360 / segmentCount;

    beginShape(TRIANGLE_FAN);
    vertex(width / 2, height / 2);

    for (var angle = 0; angle <= 360; angle += angleStep) {
        var vx = width / 2 + cos(radians(angle)) * radius;
        var vy = height / 2 + sin(radians(angle)) * radius;
        vertex(vx, vy);
        fill(angle, random(800), random(800));
    }

    endShape();
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}

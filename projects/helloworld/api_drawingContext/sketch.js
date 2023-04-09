function setup() {
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = -5;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = "black";
    background(200);
    ellipse(width / 2, height / 2, 50, 50);
}

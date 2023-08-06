function setup() {
    numA = 10;
    numB = 6;

    ratio = numB / numA

    xPos = 0;
    yPos = 0;

    itr = 0;

    wd = width;

    createCanvas(500, 500);
    colorMode(HSB, 1)

    while (wd > 0.1) {
        itr++;
        if (itr % 2 == 1) {
            while (xPos + wd * ratio < width + 0.1) {
                fill(color(random(1), 1, 1));
                rect(xPos, yPos, wd * ratio, wd);
                xPos += wd * ratio;
            }

            wd = width - xPos;
        } else {
            while (yPos + wd / ratio < width + 0.1) {
                fill(color(random(1), 1, 1));
                rect(xPos, yPos, wd, wd / ratio);
                yPos += wd / ratio;
            }

            wd = width - yPos;
        }
    }
}

function setup() {
    numA = 10;
    numB = 6;
    scalar = 50;

    numA *= scalar;
    numB *= scalar;

    wd = numB;
    xPos = 0;
    yPos = 0;

    itr = 0;

    createCanvas(500, 500);

    colorMode(HSB, 1)

    while (wd > 0) {
        itr++;
        if (itr % 2 == 1) {
            while (xPos + wd <= numA) {
                col = color(random(1), 1, 1);
                fill(col);
                rect(xPos, yPos, wd, wd);
                xPos += wd;
            }

            wd = numA - xPos;
        } else {
            while (yPos + wd <= numB) {
                col = color(random(1), 1, 1);
                fill(col);
                rect(xPos, yPos, wd, wd);
                yPos += wd;
            }

            wd = numB - yPos;
        }
    }
}

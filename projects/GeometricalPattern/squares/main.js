var boxes; // 四角形を入れておく配列

function setup() {
    createCanvas(400, 400);
    colorMode(HSB);
    rectMode(CENTER);
    noFill();
}

function draw() {
    // 背景色を黒色にする
    background(0, 100, 0);

    // 起点となる四角形を用意する
    boxes = [];
    boxes.push(new Box(0, 0, width / 3, 1));

    // 四角形のまわりに四角形を作成する
    let level = 6;
    for (let i = 1; i <= level; i++) {
        createBoxes(i);
    }

    // 四角形を描画する
    for (let b of boxes) {
        b.show();
    }
}

// 四角形のまわりに４つの四角形を作成する
function createBoxes(level) {
    let newboxes = boxes.slice();

    if (level === 1) {
        return newboxes;
    }

    for (let b of boxes) {
        let offset = b.scl * 2;
        let scl = b.scl * 0.5;
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
        let hue = map(d, 0, (width / 2) * (width / 2), 200, 0);
        stroke(hue, 100, 100);
        rect(0, 0, this.scl, this.scl);
        pop();
    }
}

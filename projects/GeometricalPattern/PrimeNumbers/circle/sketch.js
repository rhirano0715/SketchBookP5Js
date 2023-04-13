let n = 100; // 円周上の点の数
let radius = 200; // 円の半径
let primes = []; // 素数を格納する配列

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);

    // 素数を計算して配列に格納する
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j <= sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
}

function draw() {
    background(220);
    translate(width / 2, height / 2);

    // 円周上の点を描画する
    for (let i = 0; i < n; i++) {
        let angle = map(i, 0, n, 0, 360);
        let x = radius * cos(angle);
        let y = radius * sin(angle);
        stroke(0);
        strokeWeight(1);
        point(x, y);
    }

    // 素数のみに色をつける
    for (let i = 0; i < primes.length; i++) {
        let index = primes[i] - 1; // 素数の位置は1から始まるので、-1する
        let angle = map(index, 0, n, 0, 360);
        let x = radius * cos(angle);
        let y = radius * sin(angle);
        noStroke();
        fill(255, 0, 0);
        ellipse(x, y, 10, 10);
    }
}

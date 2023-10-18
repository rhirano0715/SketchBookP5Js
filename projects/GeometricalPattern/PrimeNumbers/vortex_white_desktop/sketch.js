let n = 99999; // 素数を計算する範囲
let radius = 0.5; // 素数の半径
let maxDist; // 素数が配置される最大距離
let primes = []; // 素数を格納する配列

function setup() {
    createCanvas(2880, 1920);
    angleMode(DEGREES);
    maxDist = sqrt(sq(width / 2) + sq(height / 2)); // 最大距離を計算する

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

    background(0, 0, 0);
}

function draw() {
    translate(width / 2, height / 2);

    // 素数を渦状に描画する
    for (let i = 0; i < primes.length; i++) {
        let index = primes[i] - 1; // 素数の位置は1から始まるので、-1する
        let angle = map(index, 0, primes.length, 0, 360);
        let dist = map(index, 0, primes.length, 0, maxDist);
        let x = dist * cos(angle) / random(10);
        let y = dist * sin(angle) / random(10);
        noStroke();
        fill(999999, random(i % 50));
        ellipse(x, y, radius, radius);
    }
}


function keyPressed() {
    if (key === 's') {
        saveGif('vortex_white.gif', 15); // 1 sec
    }
}

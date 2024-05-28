let img; // 元の画像を保持する変数

function preload() {
  img = loadImage('image.gif'); // GIF画像を読み込む
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); // 角度の単位を度に設定
  img.loadPixels(); // 画像のピクセルデータにアクセスできるようにする
}

function draw() {
  background(0);

  const numberOfTiles = 10; // タイルの数
  const tileW = width / numberOfTiles; // タイルの幅
  const tileH = height / numberOfTiles; // タイルの高さ
  const kaleidoscopeTiles = 6; // 万華鏡に見えるタイルの数

  // 各タイルに対して万華鏡効果を適用
  for (let y = 0; y < numberOfTiles; y++) {
    for (let x = 0; x < numberOfTiles; x++) {
      // タイルの位置を計算
      const posX = tileW * x;
      const posY = tileH * y;

      // 万華鏡の各セグメントを描画
      for (let i = 0; i < kaleidoscopeTiles; i++) {
        push();
        translate(posX + tileW / 2, posY + tileH / 2);
        rotate((360 / kaleidoscopeTiles) * i);
        let imgSegment = img.get(posX, posY, tileW, tileH);
        translate(-tileW / 2, -tileH / 2);
        applyKaleidoscopeEffect(imgSegment, tileW, tileH);
        pop();
      }
    }
  }
}

function applyKaleidoscopeEffect(imgSegment, w, h) {
  // 万華鏡効果を適用した画像セグメントを描画
  translate(w / 2, h / 2);
  rotate(180);
  translate(-w / 2, -h / 2);
  image(imgSegment, 0, 0, w, h);
}

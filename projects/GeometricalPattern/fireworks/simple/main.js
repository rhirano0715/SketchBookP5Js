let fireworks = [];
let gravity;

function setup() {
    createCanvas(600, 400);
    colorMode(HSB);
    gravity = createVector(0, 0.2); // define gravity
}

function draw() {
    background(0, 0, 0, 25);

    if (random(1) < 0.03) {
        fireworks.push(new Firework());
    }

    for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();

        if (fireworks[i].done()) {
            fireworks.splice(i, 1);
        }
    }
}

class Firework {
    constructor() {
        this.hu = random(255);
        this.firework = new Particle(random(width), height, this.hu, true);
        this.exploded = false;
        this.particles = [];
    }

    done() {
        return this.exploded && this.particles.length === 0;
    }

    update() {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();

            if (this.firework.vel.y >= 0) {
                this.exploded = true;
                this.explode();
            }
        }

        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();

            if (this.particles[i].done()) {
                this.particles.splice(i, 1);
            }
        }
    }

    explode() {
        for (let i = 0; i < 100; i++) {
            let p = new Particle(
                this.firework.pos.x,
                this.firework.pos.y,
                this.hu,
                false
            );
            this.particles.push(p);
        }
    }

    show() {
        if (!this.exploded) {
            this.firework.show();
        }

        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].show();
        }
    }
}

// class Particle {
//     constructor(x, y, hu, firework) {
//         this.pos = createVector(x, y);
//         this.firework = firework;
//         this.lifespan = 255;
//         this.hu = hu;
//         this.vel = firework
//             ? createVector(0, random(-15, -10))
//             : p5.Vector.random2D().mult(random(2, 10));
//         this.acc = createVector(0, 0);
//     }

//     applyForce(force) {
//         this.acc.add(force);
//     }

//     update() {
//         if (!this.firework) {
//             this.vel.mult(0.9);
//             this.lifespan -= 4;
//         }

//         this.vel.add(this.acc);
//         this.pos.add(this.vel);
//         this.acc.mult(0);
//     }

//     done() {
//         return this.lifespan <= 0;
//     }

//     show() {
//         colorMode(HSB);
//         if (!this.firework) {
//             strokeWeight(2);
//             stroke(this.hu, 255, 255, this.lifespan);
//         } else {
//             strokeWeight(4);
//             stroke(this.hu, 255, 255);
//         }

//         point(this.pos.x, this.pos.y);
//     }
// }
// class Particle {
//     constructor(x, y, hu, firework) {
//         this.pos = createVector(x, y);
//         this.firework = firework;
//         this.lifespan = 255;
//         this.hu = hu;
//         this.vel = firework
//             ? createVector(0, random(-15, -10))
//             : p5.Vector.random2D().mult(random(2, 10));
//         this.acc = createVector(0, 0);
//     }

//     applyForce(force) {
//         this.acc.add(force);
//     }

//     update() {
//         if (!this.firework) {
//             this.vel.mult(0.9);
//             this.lifespan -= 4;
//         }

//         this.vel.add(this.acc);
//         this.pos.add(this.vel);
//         this.acc.mult(0);
//     }

//     done() {
//         return this.lifespan <= 0;
//     }

//     show() {
//         colorMode(HSB);

//         if (this.firework) {
//             strokeWeight(4);
//             stroke(this.hu, 255, 255);
//         } else {
//             // Create rainbow effect
//             strokeWeight(2);
//             stroke(this.hu, 255, 255, this.lifespan);
//             this.hu += 1;
//             if (this.hu > 255) {
//                 this.hu = 0;
//             }
//         }

//         point(this.pos.x, this.pos.y);
//     }
// }
class Particle {
    constructor(x, y, hu, firework) {
        this.pos = createVector(x, y);
        this.firework = firework;
        this.lifespan = 255;
        this.hu = hu;
        this.alpha = 255; // alpha value for the particle's stroke color
        this.vel = firework
            ? createVector(0, random(-15, -10))
            : p5.Vector.random2D().mult(random(2, 10));
        this.acc = createVector(0, 0);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    update() {
        if (!this.firework) {
            this.vel.mult(0.9);
            this.lifespan -= 4;
            // Randomly change the alpha value
            this.alpha = random(50, 255);
        }

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    done() {
        return this.lifespan <= 0;
    }

    show() {
        colorMode(HSB);

        if (this.firework) {
            strokeWeight(4);
            stroke(this.hu, 255, 255);
        } else {
            strokeWeight(2);
            stroke(this.hu, 255, 255, this.alpha);
        }

        point(this.pos.x, this.pos.y);
    }
}

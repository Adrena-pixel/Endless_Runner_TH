

//import Phaser from 'phaser';//

const config = {
    type:Phaser.auto,
    height: 700,
    width: 1000,

    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    physics: {
        default: 'arcade'
    },
    arcade: {
        gravity: {y: 80},
        velocity: {y: 160}
    },

    scene: {
        preload,
        create,
        update
    }
}

let character = null;

//速度
const gravity = 80;
const velocity = 160;
//起点
const startpoint = {x: config.width*0.1, y: config.height*0.4}

function preload() {
    this.load.image('character', './assets/character.png');
    this.load.image('ground', './assets/ground.png');
}

function create() {
    character = this.physics.add.image(startpoint.x, startpoint.y, 'character');
    this.physics.add.image(0, 500, 'ground').setOrigin(0, 0);
    character.body.gravity.y = gravity;

    this.input.on('pointerdown', jump);
}

function update(time, delta) {
    if (character.y > config.height-250 || character.y < 50){
        restartgame();
    }
}

function restartgame() {
    character.x = startpoint.x;
    character.y = startpoint.y;
    character.body.velocity.y = 0;
}

function jump(){
    character.body.velocity.y = -velocity;
}

new Phaser.Game(config);
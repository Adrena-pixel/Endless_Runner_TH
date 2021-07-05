class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }
    preload (){
        this.load.image('character', './assets/character.png');
        this.load.image('ground', './assets/ground.jpg');
    }
    create (){
        this.scene.start('menuScene');
    }
}
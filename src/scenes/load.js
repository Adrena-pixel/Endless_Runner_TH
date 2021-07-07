class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }
    preload (){
        this.load.image('character', './assets/character.png');
        this.load.image('ground', './assets/ground.jpg');
        this.load.image('platform', './assets/platform.png');
        this.load.image('terrain', './assets/terrain.png');  
    }
    create (){
        this.scene.start('menuScene');
    }
}
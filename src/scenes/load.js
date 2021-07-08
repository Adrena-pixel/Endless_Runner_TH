class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }
    preload (){
        this.load.image('character', './assets/character.png');
        this.load.image('ground', './assets/ground.jpg');
        this.load.image('platform', './assets/platform.png');
        this.load.image('terrain', './assets/terrain.png'); 
        this.load.image('bg1', './assets/bg1.png'); 
        this.load.image('bg2', './assets/bg2.png'); 
        this.load.image('bg3', './assets/bg3.png'); 
    }
    create (){
        this.scene.start('menuScene');
    }
}
class Play extends Phaser.Scene {
    constructor() {
        super('playScene');

    }
    /*preload (){
        this.load.image('character', './assets/character.png');
    }*/
    create (){
        this.character = new character(this, 100, 600, 0);
    }

}
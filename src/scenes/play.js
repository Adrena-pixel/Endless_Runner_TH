class Play extends Phaser.Scene {
    constructor() {
        super('playScene');

    }
    /*preload (){
        this.load.image('character', './assets/character.png');
    }*/
    create (){
        
        var ground = this.physics.add.sprite(0,600,'ground').setOrigin(0, 0);
        this.character = new character(this, 100, 300, 0).setOrigin(0, 0); // (100, 500)
        this.character = null;
        this.character.setGravityY(200);
        ground.setImmovable();
        this.physics.add.collider(this.character, ground);

    }

}
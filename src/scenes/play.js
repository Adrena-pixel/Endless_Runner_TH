
class Play extends Phaser.Scene {
    constructor() {
        super('playScene');

    }
    /*preload (){
        this.load.image('character', './assets/character.png');
       */
    create (){
        
        var ground = this.physics.add.sprite(0,500,'ground').setOrigin(0, 0);
        this.character = new character(this, 100, 0, 0).setOrigin(0, 0); // (100, 500)

        ground.body.immovable = true;
        this.physics.add.collider(this.character, ground);
        this.cursorKeys = this.input.keyboard.createCursorKeys();

        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);

    }
    update(){
       this.character.update();
        
    }
    
}


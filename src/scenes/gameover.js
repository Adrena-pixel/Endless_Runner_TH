class GameOver extends Phaser.Scene {
    constructor() {
        super('gameoverScene');
    }
    create (){
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '50px',
            //backgroundColor: '#F3B141',
            color: '#fff77c',
            align: 'center',
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
            fixedWidth: 0
        }
        this.add.text(300, 250, 'Game Over', menuConfig).setOrigin(0, 0);
        this.add.text(275, 350, 'press z to restart', menuConfig).setOrigin(0, 0);
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        
    }
    update (){
        if (Phaser.Input.Keyboard.JustDown(keyZ)) {
            // possible game settings
            //game.settings = {
              //spaceshipSpeed: 3,
              //gameTimer: 60000    
            //}
            this.sound.play('start');
            this.scene.start('playScene');    
          }
    }
}
class character extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, frame) {
        super(scene, x, y, 'character', frame);
  
      // add object to existing scene
        scene.add.existing(this);
        scene.physics.add.existing(this); //add to physics
        this.body.gravity.y = 300;
        
        const Jumppressed = Phaser.Input.Keyboard.JustDown(keyZ); 
        
        
    }

    
    update (){
        if (Phaser.Input.Keyboard.JustDown(keyZ)){
            console.log ("key reached");
            this.body.velocity.y = -100;
        }
    }

}

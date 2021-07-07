class character extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, frame) {
        super(scene, x, y, 'character', frame);
  
      // add object to existing scene
        scene.add.existing(this);
        scene.physics.add.existing(this); //add to physics
        this.body.gravity.y = 600;

        //this.cursorKeys = this.input.keyboard.createCursorKeys();
        //const Jumppressed = Phaser.Input.Keyboard.JustDown(keyZ); 
        this.jumpped = false;        
        
    }

    
    update (){
        
        if (Phaser.Input.Keyboard.JustDown(keyZ) && this.jumpped == false){
            //console.log ("key reached"); //
            this.body.velocity.y = -600;
            this.jumpped = true;
        }

        if (this.y < 400){
            this.jumpped = true;
        } else if (this.y >= 400 ){
            this.jumpped = false;
        }

        //add a new fast fall function
        if (Phaser.Input.Keyboard.JustDown(keyX) && this.jumpped == true){
            this.body.velocity.y = 800;
        }
    }
}

class character extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, frame) {
        super(scene, x, y, 'character', frame);
  
      // add object to existing scene
        scene.add.existing(this);
        scene.physics.add.existing(this); //add to physics
        //this.setVelocityY(200);
        //this.setImmovable(); 

    }

    //update (){

    //}

}
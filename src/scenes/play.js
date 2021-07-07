
class Play extends Phaser.Scene {
    constructor() {
        super('playScene');

    }
    create (){
        
        //var ground = this.physics.add.sprite(0,500,'ground').setOrigin(0, 0);
        //this.scroll_ground = this.add.tileSprite(0, 500, 1000, 700, 'ground').setOrigin(0, 0);

        this.character = new character(this, 100, 100, 0).setOrigin(0, 0); // (100, 400)
        //this.character.setCollideWorldBounds(true);
        
        //ground.body.immovable = true;
        //this.physics.add.collider(this.character, ground);
        
        //set keys
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);

        //create platform group
        this.platformGroup = this.add.group({
            //once the platform removed, add it to pool
            removeCallback: function(platform){
                platform.scene.platformPool.add(platform)
            }
        });
        //platform group done

        //create pool
        this.platformPool = this.add.group({
            //if a platform is removed from pool, add it to the active group
            //removeCallback: call a function when an element is removed from list
            removeCallback: function(platform){
                platform.scene.platformGroup.add(platform)
            }
        });
        //create pool done

        this.addPlatform(game.config.width, game.config.width/2);

        //add collider to platform and player
        this.physics.add.collider(this.character, this.platformGroup);
        //add collider done

    }
    //define a function to generate platform
    addPlatform(platformWidth, posX){
        //define variable platform
        let platform;
        if (this.platformPool.getLength()){
            platform = this.platformPool.getFirst();
            platform.x = posX;
            // search info foe active and visible
            platform.active = true;
            platform.visible = true;
            this.platformPool.remove (platform);
        }
        else {
            platform = this.physics.add.sprite(posX, 600, "ground");
            platform.setImmovable(true);
            platform.setVelocityX( -500 );
            this.platformGroup.add (platform);
        }
        platform.displayWidth = platformWidth;
        //define the width of next platform
        this.nextplatformWidth = Phaser.Math.Between(100, 500);
    }
    //  end of addPlatform function

    update(){
        //this.scroll_ground.tilePositionX += 6;
        this.character.update();

        //recycling spawn platforms
        // set the mindis to game width
        let minDistance = game.config.width;
        // getChildren: get all elements in a group
        this.platformGroup.getChildren().forEach(function(platform){
            let platformDistance = game.config.width - platform.x - platform.displayWidth / 2;
            minDistance = Math.min (minDistance, platformDistance);
            if (platform.x < -platform.displayWidth/2){
                this.platformGroup.killAndHide(platform);
                this.platformGroup.remove(platform);
            }
        },this);
        //adding new platforms
        if (minDistance > this.nextplatformWidth){
            var nextplatformWidth = Phaser.Math.Between(50, 250);
            this.addPlatform(nextplatformWidth, game.config.width + nextplatformWidth / 2);
        }
        
    }

   
    
}


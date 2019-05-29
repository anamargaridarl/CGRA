/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(50);

        this.appearance = new CGFappearance(this);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.scaleFactor = 1;
        
      /*  this.plane = new MyTerrain(this, 32);
            
        this.house = new MyHouse(this);
        this.cubemap = new MyCubeMap(this, 'images/skybox_day5.png');*/

        // TODO: mudar para valores a serio
        this.bird = new MyBird(this, 0, 6, 2, 0,1);

        //this.lightning = new MyLightning(this, "X", "FF", "F[-X][X]F[-X]+FX", 25, 3, 0.5);

        //Objects connected to MyInterface
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    
    update(t) {
			this.bird.updatePosition(t / 100 % 1000);
	}


    checkKeys() {
        var text = "Keys pressed: ";
        var keysPressed = false;
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text += " W ";
            this.bird.accelerate(1)
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text += " S ";
            this.bird.accelerate(-1);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyA")) {
            text += " A ";
            this.bird.turn(1);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyD")) {
            text += " D ";
            this.bird.turn(-1);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyR")) {
            text += " R ";
            this.bird.originalPosition();
            keysPressed = true;
        }
        if (keysPressed)
            console.log(text);
    }



    displayScene() {
        
       /* this.pushMatrix();
        this.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        this.plane.display();
        this.popMatrix();
        
        this.pushMatrix()
        this.scale(4, 4, 4)
        this.translate(-3,1,-1);
        this.house.display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(0,8,0);
        this.cubemap.displayBase();
        this.popMatrix();*/

        //this.lightning.display();
        this.bird.display();
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();

        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

        //Apply default appearance
        // this.setDefaultAppearance();
        this.appearance.apply();
        
        // ---- BEGIN Primitive drawing section
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
        this.displayScene();

        this.checkKeys();

        // ---- END Primitive drawing section
    }
}
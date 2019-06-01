/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }

    randomBranches() {

        this.branches.push(new MyTreeBranch(this, this.branchTexture, 0, 0, 2, 0));

        for (var i = 0; i < 4; i++) {
            this.branches.push(new MyTreeBranch(this, this.branchTexture, Math.random() * (10 - -10) - 10, 0, Math.random() * (10 - -10) - 10, Math.random() * (2 * Math.PI)));
        }

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

        this.plane = new MyTerrain(this, 32);

        this.house = new MyHouse(this);
        this.cubemap = new MyCubeMap(this, 'images/skybox_day5.png');

        // TODO: mudar para valores a serio
        this.bird = new MyBird(this, 0, 10, 2, 0, 0);
        this.nest = new MyNest(this, 2, 0, 5);

        this.branchTexture = new CGFappearance(this);
        this.branchTexture.loadTexture('images/column3.png');

        this.branches = [];
        this.randomBranches();

        this.lightning = new MyLightning(this);
        
        this.start_lightning = false;
        this.lightning_animated = false;

        //Objects connected to MyInterface
    }

    displayBranches() {
        for (var i = 0; i < this.branches.length; i++) {
            this.branches[i].display();
        }
    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();

        this.lights[1].setConstantAttenuation(0.0);
        this.lights[1].setPosition(2, 20, 1, 1);
        this.lights[1].setDiffuse(1.0, 1, 153 / 255, 1.0);
        this.lights[1].setSpecular(1, 1, 153 / 255, 1.0);
        this.lights[1].setAmbient(1, 1, 153 / 255, 1.0);
        this.lights[1].enable();
        this.lights[1].update();

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
        if (this.start_lightning) {
            this.lightning.startAnimation(t);
            this.start_lightning = false;
            this.lightning_animated = true;
        }

        if (this.lightning_animated) {
            if (this.lightning.updateLightning(t)) {
                this.lightning_animated = false;
            }
        }

        if (this.bird.yP <= 0.001) {
            console.log("meias")
            if (!this.bird.lookNest(this.nest, this.branches))
                this.bird.lookBranches(this.branches);
        }

        this.bird.updatePosition(t / 100 % 1000);
        this.checkKeys();
    }


    checkKeys() {
        var text = "Keys pressed: ";
        var keysPressed = false;
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text += " W ";
            this.bird.accelerate(0.1)
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text += " S ";
            this.bird.accelerate(-0.1);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyA")) {
            text += " A ";
            this.bird.turn(0.1);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyD")) {
            text += " D ";
            this.bird.turn(-0.1);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyR")) {
            text += " R ";
            this.bird.originalPosition();
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyP")) {
            text += " P ";
            this.bird.startFall(this.branches);
            keysPressed = true;
        }
        if (this.gui.isKeyPressed("KeyL")) {
            text += " L ";
            this.start_lightning = true;
            this.lightning.startAnimation();
            keysPressed = true;
        }
        if (keysPressed)
            console.log(text);
    }

    displayScene() {
        this.pushMatrix();
        this.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        this.plane.display();
        this.popMatrix();

        this.pushMatrix()
        this.scale(4, 4, 4)
        this.translate(-3, 1, -1);
        this.house.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(0, 10, 0);
        this.cubemap.displayBase();
        this.popMatrix();

        this.pushMatrix();
        this.displayBranches();
        this.popMatrix();

        this.nest.display();

        this.pushMatrix();
        this.scale(this.bird.scaleFactor, this.bird.scaleFactor, this.bird.scaleFactor)
        this.bird.display();
        this.popMatrix();

        if (this.lightning_animated) {
            this.pushMatrix();
            this.rotate(Math.PI, 0, 0, 1);
            this.translate(0, -20, 0);
        }
        
        
        if (this.display_lightning) {
            this.lightning.display();
            this.popMatrix();
        }
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


        // ---- END Primitive drawing section
    }
};
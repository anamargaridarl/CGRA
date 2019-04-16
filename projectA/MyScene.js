/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    updateObjectComplexity() {

        if (this.selectedObject == this.lightsIDs['Day']) {
            this.lights[0].disable();
            this.lights[2].disable();
            this.lights[1].enable();

            this.lights[0].update();
            this.lights[2].update();
            this.lights[1].update();
        }

        if (this.selectedObject == this.lightsIDs['Night']) {
            this.lights[1].disable();
            this.lights[0].enable();
            this.lights[2].enable();

            this.lights[0].update();
            this.lights[2].update();
            this.lights[1].update();
        }

    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();
        this.enableTextures(true);

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.tree = new MyTree(this, 2, 1, 3, 2) // TODO: apply textures
        this.group_patch = new MyTreeGroupPatch(this)
        this.row_patch = new MyTreeRowPatch(this)
        this.house = new MyHouse(this);
        this.hill = new MyVoxelHill(this, 0, 0);
        var coords = [
            0,0,
            10,0,
            0,10,
            10,10
        ];
        this.ground = new MyQuad(this,coords);
        this.cubemap_day = new MyCubeMap(this, 'images/skybox_day5.png');
        this.cubemap_night = new MyCubeMap(this, 'images/skybox_night.png');
        this.fire = new MyFire(this);
        this.pool = new MyPool(this);

        //Initialize scene scale factor
        this.scaleFactor = 0.6;

        //Initialize textures
        this.floor = new CGFappearance(this)
        this.floor.loadTexture('images/grass6.png');
        this.floor.setTextureWrap('REPEAT', 'REPEAT');

    }
    initLights() {

        //Luz Fogueira
        this.lights[0].setPosition(Math.sqrt(1 / 2) / 2, 0.5, 5.5, 1);
        this.lights[0].setDiffuse(1, 102 / 255, 0, 1.0);
        this.lights[0].setAmbient(1, 102 / 255, 0, 1.0);
        this.lights[0].setLinearAttenuation(0.3);
        this.lights[0].setSpecular(1, 102 / 255, 0, 1.0);

        //Luz Sol
        this.lights[1].setConstantAttenuation(0.2);
        this.lights[1].setPosition(2, 30, 1, 1);
        this.lights[1].setDiffuse(1.0, 1, 153 / 255, 1.0);

        //Luz lua
        this.lights[2].setPosition(2, 30, 1, 1);
        this.lights[2].setDiffuse(1, 1, 1, 1.0);
        this.lights[2].setConstantAttenuation(1);

        this.lightsIDs = { 'Day': 0, 'Night': 1 };

        this.selectedObject = 0;

        this.updateObjectComplexity();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 10, 30), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    displayScene() {

        this.pushMatrix()
        this.scale(4, 4,4)
        this.house.display();
        this.popMatrix();

        this.pushMatrix();
        this.scale(2, 2, 2);
        this.translate(6, 0.5, -10);
        this.hill.display(0, 4);
        this.popMatrix();

        this.pushMatrix();
        this.scale(2, 2, 2);
        this.translate(-9, 0.5, 5);
        this.hill.display(0, 4);
        this.popMatrix();

        this.pushMatrix();
        this.translate(0,0,2);
        this.scale(3,3,3)
        this.fire.display();
        this.popMatrix();

        this.pushMatrix();
        this.floor.apply();
        this.translate(0, 0.01, 0);
        this.scale(80, 80, 80);
        this.rotate(-Math.PI / 2, 1, 0, 0);
        this.ground.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-5, 0.01, -2);
        this.scale(3, 3, 3);
        this.pool.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-25,0,-15)
        this.scale(2,2,2)
        this.group_patch.display()
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(-25,0,-25)
        this.scale(2,2,2)
        this.row_patch.display()
        this.popMatrix();

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

        //Apply default appearance
        this.setDefaultAppearance();

        //Factor display
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

        this.lights[0].update();
        this.lights[1].update();
        this.lights[2].update();


        // ---- BEGIN Primitive drawing section
        // this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);

        this.displayScene();

        if (this.selectedObject == 0)
            this.cubemap_day.displayBase();
        else if (this.selectedObject == 1)
            this.cubemap_night.displayBase();

        // ---- END Primitive drawing section
    }
}
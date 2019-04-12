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
        this.enableTextures(true);

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.prism = new MyPrism(this, 5)

        this.cylinder = new MyCylinder(this, 4);

        this.tree = new MyTree(this, 2, 1, 3, 2) // TODO: apply textures
        this.group_patch = new MyTreeGroupPatch(this)
        this.row_patch = new MyTreeRowPatch(this)

        this.house = new MyHouse(this);

        this.hill = new MyVoxelHill(this, 0, 0);

        this.ground = new MyQuad(this);

        this.cubemap = new MyCubeMap(this);

        this.fire = new MyFire(this);

        //Objects connected to MyInterface
        this.objects = [this.cylinder]
        this.objectIDs = { 'Cylinder': 0 }
        this.selectedObject = 0;

        this.scaleFactor = 1;


        //Initialize textures
        this.floor = new CGFappearance(this)
        this.floor.loadTexture('images/ground.jpg');
        this.floor.setTextureWrap('REPEAT', 'REPEAT');

    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
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

        // ---- BEGIN Primitive drawing section


        // this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);

       /* this.prism.display();
        this.cylinder.enableNormalViz();
        this.cylinder.display();*/
        this.pushMatrix()
        this.scale(1.5, 1.5, 1.5)
        this.house.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(5, 0, 3)
        // this.row_patch.display()
        this.group_patch.display()
        this.popMatrix();

        this.pushMatrix();
        this.translate(6, 0.5, -10);
        this.hill.display(0, 4);
        this.popMatrix();

        this.pushMatrix();
        this.translate(-9, 0.5, 5);
        this.hill.display(0, 4);
        this.popMatrix();

        this.pushMatrix();
        this.fire.display();
        this.popMatrix();

        this.pushMatrix();
        this.floor.apply();
        this.scale(30, 30, 30);
        this.rotate(-Math.PI / 2, 1, 0, 0);
        this.ground.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(6, 0.5, -10);
        this.hill.display(0, 4);
        this.popMatrix();

        /*this.pushMatrix();
        this.cubemap.display();
        this.popMatrix();*/

        // this.group_patch.display()
        // this.row_patch.display()


        // ---- END Primitive drawing section
    }
}
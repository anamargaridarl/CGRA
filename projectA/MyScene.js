/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    updateObjectComplexity() {

        if(this.selectedObject == this.lightsIDs['Day'])
        {
            this.lights[0].disable();
            this.lights[2].disable();
            this.lights[1].enable();

            this.lights[0].update();
            this.lights[2].update();
            this.lights[1].update();
        }

        if(this.selectedObject == this.lightsIDs['Night'])
        {
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
        this.ground = new MyQuad(this);
        this.cubemap = new MyCubeMap(this);
        this.fire = new MyFire(this);
        this.pool = new MyPool(this);
        
        this.scaleFactor = 1;

        //Initialize textures
        this.floor = new CGFappearance(this)
        this.floor.loadTexture('images/ground.jpg');

    }
    initLights() {

        //Luz Fogueira
        this.lights[0].setPosition(Math.sqrt(1 / 2) / 2, 0.5, 2.5, 1);
        this.lights[0].setDiffuse(1, 102/256, 0, 1.0);
        this.lights[0].setAmbient(1, 102/256, 0, 1.0);
        this.lights[0].setLinearAttenuation(0.3);
        this.lights[0].setSpecular(1,102/256, 0, 1.0);
        this.lights[0].disable();
        this.lights[0].setVisible(true);
        this.lights[0].update();

        //Luz Sol
        this.lights[1].setConstantAttenuation(0.2);
        this.lights[1].setPosition(2, 15, 1, 1);
        this.lights[1].setDiffuse(1.0, 1,  153/256, 1.0);
       /* this.lights[1].setAmbient(1, 1, 153/256, 1.0);
        this.lights[1].setSpecular(1, 1, 153/256, 1.0);*/
        this.lights[1].setVisible(true);
        this.lights[1].disable();
        this.lights[1].update();

        //Luz lua
        this.lights[2].setPosition(0, 20, 0, 1);
        this.lights[2].setDiffuse(1, 1, 1, 1.0);
        this.lights[2].setAmbient(1, 1, 1, 1.0);
        this.lights[2].setSpecular(1, 1,1, 1.0);
        this.lights[2].setConstantAttenuation(1);
        this.lights[2].disable();
        this.lights[2].setVisible(true);
        this.lights[2].update();

        this.lightsIDs = { 'Day': 0, 'Night': 1};

        this.selectedObject = 0;
        this.updateObjectComplexity();
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

       /* this.pushMatrix();
        this.translate(5, 0, 3)
        // this.row_patch.display()
        this.group_patch.display()
        this.popMatrix();*/

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

        this.pushMatrix();
        this.pool.display();
        this.popMatrix();


       

    

        /*this.pushMatrix();
        this.cubemap.display();
        this.popMatrix();*/

        // this.group_patch.display()
        // this.row_patch.display()


        // ---- END Primitive drawing section
    }
}
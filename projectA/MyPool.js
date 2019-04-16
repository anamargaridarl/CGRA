/**
* MyVoxelHill
* @constructor
*/
class MyPool extends CGFobject {
    constructor(scene) {
        super(scene);
        
        //Objects
        this.water = new MyQuad(scene);
        this.poolside = new MyPoolSide(scene,6,10);

        //Specular texture with light blue color
        this.waterT = new CGFappearance(scene)
        this.waterT.setSpecular(135/256,206/256,250/256); 
        this.waterT.setDiffuse(135/256*0.1, 206/256*0.1, 250/256*0.1, 1.0);
        this.waterT.setAmbient(135/256*0.1, 206/256*0.1, 250/256*0.1, 1.0);
        this.waterT.setShininess(0.2);
        this.waterT.loadTexture('images/pool2.jpg');

    }

    display() {

        //Pool sides
        this.scene.pushMatrix();
        this.scene.translate(5,0,5);
        this.poolside.display();
        this.scene.popMatrix();

        //water
        this.scene.pushMatrix();
        this.waterT.apply();
        this.scene.translate(5+2.5,0.01,5+1.5);
        this.scene.scale(0.5*9,1,0.5*5);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.water.display();
        this.scene.popMatrix();
    }
	
		
}
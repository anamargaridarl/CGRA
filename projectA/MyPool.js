/**
* MyVoxelHill
* @constructor
*/
class MyPool extends CGFobject {
    constructor(scene) {
        super(scene);
		
        this.water = new MyQuad(scene);
        this.poolside = new MyPoolSide(scene,5,5,6,10);

        this.waterT = new CGFappearance(scene)
        this.waterT.setSpecular(1, 1, 1, 1.0);
        this.waterT.setDiffuse(0.1, 0.1, 0.1, 1.0);
        this.waterT.setShininess(1);
        this.waterT.loadTexture('images/pool.jpg');

    }

    display() {

        this.scene.pushMatrix();
        this.poolside.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.waterT.apply();
        this.scene.translate(5+2.5,0.01,5+1.5);
        this.scene.scale(0.5*9,1,0.5*5);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.water.display();
        this.scene.popMatrix();
    }
	
		
}
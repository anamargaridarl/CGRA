/**
* MyVoxelHill
* @constructor
*/
class MyPoolSide extends CGFobject {
    constructor(scene, x, z, l,c) {
        super(scene);
		
		this.c = c;
		this.l = l;
		this.x = x;
		this.z = z;

		var topText = new CGFappearance(scene);
		topText.setSpecular(1, 1, 1, 1.0);
		topText.setDiffuse(0.1, 0.1, 0.1, 1.0);
        topText.setShininess(1);
        topText.loadTexture('images/marble3.jpeg');

		var textures = [topText, topText, topText, topText];
		
		this.cube = new MyUnitCubeQuad(scene,textures);
    }

    display() {
	
		var side = 0.5;

            this.scene.pushMatrix();
			this.scene.translate(this.x, 0, this.z);
			this.scene.scale(0.5,0.1,0.5);
            this.cube.display();
            this.scene.popMatrix();

			for(var horizontal = 1; horizontal <= this.c; horizontal++)
			{
				this.scene.pushMatrix();
				this.scene.translate(this.x + side*horizontal, 0, this.z );
				this.scene.scale(0.5,0.1,0.5);
            	this.cube.display();
				this.scene.popMatrix();

				this.scene.pushMatrix();
				this.scene.translate(this.x + side*horizontal, 0, this.z + side*this.l);
				this.scene.scale(0.5,0.1,0.5);
            	this.cube.display();
				this.scene.popMatrix();
			}

			for(var vertical = 1; vertical <= this.l; vertical++)
			{
				this.scene.pushMatrix();
				this.scene.translate(this.x , 0, this.z + side*vertical);
				this.scene.scale(0.5,0.1,0.5);
            	this.cube.display();
				this.scene.popMatrix();

				this.scene.pushMatrix();
				this.scene.translate(this.x +side*this.c, 0, this.z + side*vertical);
				this.scene.scale(0.5,0.1,0.5);
            	this.cube.display();
				this.scene.popMatrix();
			}
    }
}
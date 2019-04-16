/**
* MyVoxelHill
* @constructor
*/
class MyPoolSide extends CGFobject {
	constructor(scene, l, c) {
		super(scene);

		//width - c; height- h
		this.c = c;
		this.l = l;

		//Specular texture with light grey color
		var topText = new CGFappearance(scene);
		topText.setSpecular(211 / 255, 211 / 255, 211 / 255, 1.0);
		topText.setDiffuse(211 / 255 * 0.1, 211 / 255 * 0.1, 211 / 255 * 0.1, 1.0);
		topText.setAmbient(211 / 255 * 0.1, 211 / 255 * 0.1, 211 / 255 * 0.1, 1.0);
		topText.setShininess(0.1);
		topText.loadTexture('images/marble3.jpeg');

		var textures = [topText, topText, topText, topText];
		this.cube = new MyUnitCubeQuad(scene, textures);
	}

	display() {

		var x = 0;
		var z = 0;
		var side = 0.5;

		this.scene.pushMatrix();
		this.scene.translate(x, 0, z);
		this.scene.scale(0.5, 0.1, 0.5);
		this.cube.display();
		this.scene.popMatrix();

		for (var horizontal = 1; horizontal <= this.c; horizontal++) {
			this.scene.pushMatrix();
			this.scene.translate(x + side * horizontal, 0, z);
			this.scene.scale(0.5, 0.1, 0.5);
			this.cube.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
			this.scene.translate(x + side * horizontal, 0, z + side * this.l);
			this.scene.scale(0.5, 0.1, 0.5);
			this.cube.display();
			this.scene.popMatrix();
		}

		for (var vertical = 1; vertical <= this.l; vertical++) {
			this.scene.pushMatrix();
			this.scene.translate(x, 0, z + side * vertical);
			this.scene.scale(0.5, 0.1, 0.5);
			this.cube.display();
			this.scene.popMatrix();

			this.scene.pushMatrix();
			this.scene.translate(x + side * this.c, 0, z + side * vertical);
			this.scene.scale(0.5, 0.1, 0.5);
			this.cube.display();
			this.scene.popMatrix();
		}
	}
}
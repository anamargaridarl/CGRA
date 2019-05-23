/**
* MyCubeMap
* @constructor
*/
class MyCubeMap extends CGFobject {
	constructor(scene, texture) {
		super(scene);

		this.cubemap_texture = new CGFappearance(scene);
		this.cubemap_texture.loadTexture(texture);

		this.initBuffers();
	}

	initBuffers() {
		this.vertices = [
			-0.5, -0.5, -0.5, // P - 0
			0.5, -0.5, -0.5, // Q - 1
			0.5, -0.5, 0.5, // R - 2                
			-0.5, -0.5, 0.5, // S - 3

			-0.5, 0.5, -0.5, // P - 4 - 0
			0.5, 0.5, -0.5, // Q - 5 - 1
			0.5, 0.5, 0.5, // R - 6 - 2
			-0.5, 0.5, 0.5, // S - 7 - 3

			-0.5, 0.5, 0.5, // P - 8 - 0
			0.5, 0.5, 0.5, // Q - 9 - 1
			0.5, -0.5, 0.5, // R - 10 - 2
			-0.5, -0.5, 0.5, // S - 11 - 3

			-0.5, 0.5, -0.5, // P - 12 - 0
			-0.5, 0.5, 0.5, // Q - 13 - 1
			-0.5, -0.5, 0.5, // R - 14 - 2
			-0.5, -0.5, -0.5, // S - 15 - 3

			0.5, 0.5, 0.5, // P - 16 - 0
			0.5, 0.5, -0.5, // Q - 17 - 1
			0.5, -0.5, -0.5, // R - 18 - 2
			0.5, -0.5, 0.5, // S - 19 - 3

			0.5, 0.5, -0.5, // P - 20 - 0
			-0.5, 0.5, -0.5, // Q - 21 - 1
			-0.5, -0.5, -0.5, // R - 22 - 2
			0.5, -0.5, -0.5, // S - 23 - 3
		]

		this.indices = [
			1, 0, 3,
			3, 2, 1,

			7, 4, 5,
			5, 6, 7,

			9, 10, 11,
			11, 8, 9,

			13, 14, 15,
			15, 12, 13,

			17, 18, 19,
			19, 16, 17,

			21, 22, 23,
			23, 20, 21
		]

		this.normals = [
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,

			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,

			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,

			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,

			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,

			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		]

		this.texCoords = [
			0.25, 0.5,
			0.5, 0.5,
			0.5, 0.75,
			0.25, 0.75,

			0.25, 0,
			0.5, 0,
			0.5, 0.25,
			0.25, 0.25,

			0.25, 0.25,
			0.5, 0.25,
			0.5, 0.5,
			0.25, 0.5,

			0, 0.25,
			0.25, 0.25,
			0.25, 0.5,
			0, 0.5,

			0.5, 0.25,
			0.75, 0.25,
			0.75, 0.5,
			0.5, 0.5,

			0.75, 0.25,
			1, 0.25,
			1, 0.5,
			0.75, 0.5
		]

		this.primitiveType = this.scene.gl.TRIANGLES
		this.initGLBuffers()
	}

	displayBase() {
		// Apply texture and set filtering
		this.cubemap_texture.apply();

		// Display cube faces
		this.scene.pushMatrix()
		this.scene.translate(0, 30, 0)
		this.scene.scale(80, 60, 80)
		this.display()
		this.scene.popMatrix()
	}
}
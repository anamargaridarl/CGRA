class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1.5, 1.5, 0,	//0
			-1.5, -1.5, 0,	//1
			1.5, -1.5, 0,	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			0, 2, 1
		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		]

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

class MyTriangleBig extends CGFobject {
	constructor(scene,a1,a2,b1,b2,c1,c2) {
		super(scene);
		this.texCoords=[
			a1,a2,
			b1,b2,
			c1,c2
			];
		
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-2, 0, 0,	//0
		     0, -2, 0,	//1
			0, 2, 0,	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0,1,2
		];

		this.normals = [
			0,0,1,
			0,0,1,
			0,0,1
		]
		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
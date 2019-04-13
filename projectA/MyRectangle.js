class MyRectangle extends CGFobject { //estou a tentar fazer circulo para a fogueira
	constructor(scene,r,slices,coords) {
		super(scene);

		this.r=r;
		this.slices =slices;

		this.initBuffers();
		if (coords != undefined)
			this.updateTexCoords(coords);

	
	}
	
	initBuffers() {
		this.vertices = [];
			
		var ang = Math.PI*2 / slices;

			for(var i = 0; i < this.slices; i++){
			{
				this.vertices.push(Math.cos(ang),Math.sen(ang));
				ang += ang;
			}
		

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			1, 3, 2
		];

		//Facing Z positive
		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		];
		
		/*
		Texture coords (s,t)
		+----------> s
        |
        |
		|
		v
        t
        */

		this.texCoords = [
			0, 1,
			1, 1,
			0, 0,
			1, 0
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}



}
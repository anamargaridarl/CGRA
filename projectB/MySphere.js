class MySphere extends CGFobject {
	constructor(scene, slices, stacks) {
		super(scene);

		this.slices = slices;
		this.stacks = stacks;

		this.initBuffers();
	};

	initBuffers() {
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.texCoords = [];

		// Angles
		var theta = 2.0 * Math.PI / this.slices;
		var alfa = Math.PI / (2 * this.stacks);

		// Fill vertices
		for (var i = 0; i <= this.stacks; i++) {
			for (var j = 0; j <= this.slices; j++) {
				this.vertices.push(Math.cos(theta * j) * Math.cos(alfa * i), Math.sin(theta * j) * Math.cos(alfa * i), Math.sin(alfa * i));
				this.vertices.push(Math.cos(theta * j) * Math.cos(alfa * i), Math.sin(theta * j) * Math.cos(alfa * i), -Math.sin(alfa * i));
				this.normals.push(Math.cos(theta * j) * Math.cos(alfa * i), Math.sin(theta * j) * Math.cos(alfa * i), Math.sin(alfa * i));
				this.texCoords.push(j / this.slices, i / this.stacks);
			}
		}

		// Fild indices 
		for (var i = 0; i < this.stacks; i++) {
			for (var j = 0; j < this.slices; j++) {
				this.indices.push(
					(this.slices + 1) * i + j,
					(this.slices + 1) * i + j + 1,
					(this.slices + 1) * (i + 1) + j,
				);

	
				this.indices.push(
					(this.slices + 1) * i + j + 1,
					(this.slices + 1) * (i + 1) + j + 1,
					(this.slices + 1) * (i + 1) + j
				);

			}
		}

		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	};
};
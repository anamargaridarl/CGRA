class MyCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
    }
    
	initBuffers() {
		this.vertices = [
			0.5, -0.5, 0.5,	//0
		    -0.5, -0.5, 0.5,	//1
			-0.5, 0.5, 0.5,	//2
            0.5, 0.5, 0.5,	//3
            0.5, -0.5, -0.5,	//4
		    -0.5, -0.5, -0.5,	//5
			-0.5, 0.5, -0.5,	//6
			0.5, 0.5, -0.5	//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
           0,3,2,
           1,0,2,
           4,0,1,
           5,4,1,
           7,3,0,
           4,7,0,
           5,1,2,
           6,5,2,
           6,2,3,
           7,6,3,
           5,6,7,
           4,5,7
           
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	displayBase(Scene)
	{
		if(Scene.displayCube)
		{
		Scene.pushMatrix();
        Scene.translate(0.5,-0.5,-0.5);
        Scene.myCube.display();
		Scene.popMatrix();
		}
	}

}
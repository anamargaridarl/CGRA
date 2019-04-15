class MyCubeMap extends CGFobject {
	constructor(scene, texture) {
        super(scene);
        
        this.cubemap_texture = new CGFappearance(scene)
        this.cubemap_texture.loadTexture(texture)

		this.initBuffers();
    }

	initBottom() {
		this.vertices = [
            -0.5, -0.5, -0.5, // P - 0
            0.5, -0.5, -0.5, // Q - 1
            0.5, -0.5, 0.5, // R - 2                
            -0.5, -0.5, 0.5, // S - 3
        ]

        this.indices = [
			1,0,3,1,2,3
        ]
		
        this.normals = [
			0,1,0,
			0,1,0,
			0,1,0,
			0,1,0
        ]

        this.texCoords = [
			0.25, 0.5,
			0.5, 0.5,
			0.5, 0.75,
			0.25, 0.75
        ]

        this.initGLBuffers()
	}

	initTop() {
		this.vertices = [
            -0.5, 0.5, -0.5, // P - 0
            0.5, 0.5, -0.5, // Q - 1
            0.5, 0.5, 0.5, // R - 2
            -0.5, 0.5, 0.5, // S - 3
        ]

        this.indices = [
            3,0,1,3,2,1
		]
		
        this.normals = [
			0,-1,0,
			0,-1,0,
			0,-1,0,
			0,-1,0
        ]

        this.texCoords = [
			0.25, 0,
			0.5, 0,
			0.5, 0.25,
			0.25, 0.25
        ]

        this.initGLBuffers()
	}

	initFront() {
		this.vertices = [
            -0.5, 0.5, 0.5, // P - 0
            0.5, 0.5, 0.5, // Q - 1
            0.5, -0.5, 0.5, // R - 2
            -0.5, -0.5, 0.5, // S - 3
        ]

        this.indices = [
            3,2,1,3,0,1
		]
		
        this.normals = [
			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1
        ]

        this.texCoords = [
			0.25, 0.25,
			0.5, 0.25,
			0.5, 0.5,
			0.25, 0.5
        ]

        this.initGLBuffers()
	}

	initFrontLeft() {
		this.vertices = [
            -0.5, 0.5, -0.5, // P - 0
            -0.5, 0.5, 0.5, // Q - 1
            -0.5, -0.5, 0.5, // R - 2
            -0.5, -0.5, -0.5, // S - 3
        ]

        this.indices = [
            3,2,1,3,0,1
		]
		
        this.normals = [
			1,0,0,
			1,0,0,
			1,0,0,
			1,0,0
        ]

        this.texCoords = [
			0, 0.25,
			0.25, 0.25,
			0.25, 0.5,
			0, 0.5
        ]

        this.initGLBuffers()
	}

	initFrontRight() {
		this.vertices = [
            0.5, 0.5, 0.5, // P - 0
            0.5, 0.5, -0.5, // Q - 1
            0.5, -0.5, -0.5, // R - 2
            0.5, -0.5, 0.5, // S - 3
        ]

        this.indices = [
            3,2,1,3,0,1
		]
		
        this.normals = [
			-1,0,0,
			-1,0,0,
			-1,0,0,
			-1,0,0
        ]

        this.texCoords = [
			0.5, 0.25,
			0.75, 0.25,
			0.75, 0.5,
			0.5, 0.5
        ]

        this.initGLBuffers()
	}

	initBack() {
		this.vertices = [
            0.5, 0.5, -0.5, // P - 0
            -0.5, 0.5, -0.5, // Q - 1
            -0.5, -0.5, -0.5, // R - 2
            0.5, -0.5, -0.5, // S - 3
        ]

        this.indices = [
            3,2,1,3,0,1
		]
		
        this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1
        ]

        this.texCoords = [
			0.75, 0.25,
			1, 0.25,
			1, 0.5,
			0.75, 0.5
        ]

        this.initGLBuffers()
	}

	displayBase()
	{
		// Apply texture and set filtering
        this.cubemap_texture.apply()
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
		
		// Display cube faces
		this.scene.pushMatrix()
		this.scene.translate(0, 50, 0)
		this.scene.scale(100, 100, 100)
		this.initBottom()
		this.display()
		
		this.initTop()
		this.display()

		this.initFront()
		this.display()

		this.initFrontLeft()
		this.display()

		this.initFrontRight()
		this.display()

		this.initBack()
		this.display()
		this.scene.popMatrix()
	}

}
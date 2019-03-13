/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
    constructor(scene, coords) {
		super(scene);
        // this.initBuffers();
        
        this.current_scene = scene

        this.bottom = new MyQuad(scene)
        this.upper = new MyQuad(scene)
        this.square1 = new MyQuad(scene)
        this.square2 = new MyQuad(scene)
        this.square3 = new MyQuad(scene)
        this.square4 = new MyQuad(scene)

		if (coords != undefined)
			this.updateTexCoords(coords);
    }
    
    display() {
        this.bottom.display()
    }
}
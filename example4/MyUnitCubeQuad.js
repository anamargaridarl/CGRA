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

        this.square1 = new MyQuad(scene)
        this.square2 = new MyQuad(scene)
        this.square3 = new MyQuad(scene)
        this.square4 = new MyQuad(scene)
        this.square5 = new MyQuad(scene)
        this.square6 = new MyQuad(scene)

		if (coords != undefined)
			this.updateTexCoords(coords);
    }
    
    display() {
        this.current_scene.pushMatrix()
        this.current_scene.rotate(3*Math.PI/2, 1, 0, 0)
        this.current_scene.translate(0, 0, 0.5)
        this.square1.display()
        
        this.current_scene.translate(0, 0, -0.5)
        this.current_scene.rotate(Math.PI, 1, 0, 0)
        this.current_scene.translate(0, 0, 0.5)
        this.square1.display()
        this.current_scene.popMatrix()

        
        this.current_scene.pushMatrix()
        this.current_scene.translate(0, 0, 0.5)
        this.square2.display()
        
        this.current_scene.translate(0, 0, -1)
        this.current_scene.rotate(Math.PI, 0, 1, 0)
        this.square2.display()
        this.current_scene.popMatrix()

        
        this.current_scene.pushMatrix()
        this.current_scene.rotate(Math.PI/2, 0, 1, 0)
        this.current_scene.translate(0, 0, 0.5)
        this.square3.display()

        this.current_scene.translate(0, 0, -1)
        this.current_scene.rotate(Math.PI, 0, 1, 0)
        this.square3.display()
        this.scene.popMatrix()
    }
}
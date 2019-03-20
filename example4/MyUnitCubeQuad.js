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

		if (coords != undefined)
			this.updateTexCoords(coords);
    }
    
    display() {

        
        // Prepare scene for the first pair of squares to be drawn
        this.current_scene.pushMatrix()
        
        // Apply transformations
        this.current_scene.rotate(3*Math.PI/2, 1, 0, 0)
        this.current_scene.translate(0, 0, 0.5)
        
        // Apply textures and display first square
        this.current_scene.quadMaterial.setTexture(this.current_scene.mine_top)
        this.current_scene.quadMaterial.apply()
        this.current_scene.gl.texParameteri(this.current_scene.gl.TEXTURE_2D, this.current_scene.gl.TEXTURE_MAG_FILTER, this.current_scene.gl.NEAREST);
        this.square1.display()
        
        // Apply transformations
        this.current_scene.translate(0, 0, -0.5)
        this.current_scene.rotate(Math.PI, 1, 0, 0)
        this.current_scene.translate(0, 0, 0.5)

        
        // Apply textures and display second square
        this.current_scene.quadMaterial.setTexture(this.current_scene.mine_bottom)
        this.current_scene.quadMaterial.apply()
        this.current_scene.gl.texParameteri(this.current_scene.gl.TEXTURE_2D, this.current_scene.gl.TEXTURE_MAG_FILTER, this.current_scene.gl.NEAREST);
        this.square1.display()

        // Reset scene
        this.current_scene.popMatrix()

        // ---------------------------------------------------------------------
        // Similar to the first set of squares
        this.current_scene.quadMaterial.setTexture(this.current_scene.mine_side)
        this.current_scene.quadMaterial.apply()
        this.current_scene.gl.texParameteri(this.current_scene.gl.TEXTURE_2D, this.current_scene.gl.TEXTURE_MAG_FILTER, this.current_scene.gl.NEAREST);


        this.current_scene.pushMatrix()
        this.current_scene.translate(0, 0, 0.5)
        this.square2.display()
        
        this.current_scene.translate(0, 0, -1)
        this.current_scene.rotate(Math.PI, 0, 1, 0)
        this.square2.display()
        this.current_scene.popMatrix()

        // ----------------------------------------------------------------------
        // Similar to the first set of squares
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
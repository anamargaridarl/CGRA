class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);

        this.current_scene = scene;

<<<<<<< HEAD
        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.smallTriangle = new MyTriangleSmall(scene);
        this.bigTriangle = new MyTriangleBig(scene);
        this.bigTriangle2 = new MyTriangleBig(scene);

        this.material_diamond = new CGFappearance(scene)
        this.material_diamond.setSpecular(1, 1, 1, 1)
        this.material_diamond.setDiffuse(0, 1, 0, 1)
        this.material_diamond.setAmbient(0, 1, 0, 1)

        this.material_small_triangle = new CGFappearance(scene)
        this.material_small_triangle.setSpecular(1, 1, 1, 1)
        this.material_small_triangle.setDiffuse(169/255, 79/255, 193/255, 1)
        this.material_small_triangle.setAmbient(169/255, 79/255, 193/255, 1)

        this.material_small_triangle2 = new CGFappearance(scene)
        this.material_small_triangle2.setSpecular(1, 1, 1, 1)
        this.material_small_triangle2.setDiffuse(1, 0, 0, 1)
        this.material_small_triangle2.setAmbient(1, 0, 0, 1)

        this.material_parallelogram = new CGFappearance(scene)
        this.material_parallelogram.setSpecular(1, 1, 1, 1)
        this.material_parallelogram.setDiffuse(1, 1, 0, 1)
        this.material_parallelogram.setAmbient(1, 1, 0, 1)

        this.material_triangle = new CGFappearance(scene)
        this.material_triangle.setSpecular(1, 1, 1, 1)
        this.material_triangle.setDiffuse(1, 156/255, 208/255, 1)
        this.material_triangle.setAmbient(1, 156/255, 208/255, 1)

        this.material_big_triangle = new CGFappearance(scene)
        this.material_big_triangle.setSpecular(1, 1, 1, 1)
        this.material_big_triangle.setDiffuse(1, 156/255, 0, 1)
        this.material_big_triangle.setAmbient(1, 156/255, 0, 1)

        this.material_big_triangle2 = new CGFappearance(scene)
        this.material_big_triangle2.setSpecular(1, 1, 1, 1)
        this.material_big_triangle2.setDiffuse(0, 0, 1, 1)
        this.material_big_triangle2.setAmbient(0, 0, 1, 1)
=======
        this.diamond = new MyDiamond(this.current_scene);
        this.triangle = new MyTriangle(this.current_scene);
        this.parallelogram = new MyParallelogram(this.current_scene);
        this.smallTriangle = new MyTriangleSmall(this.current_scene);
        this.bigTriangle = new MyTriangleBig(this.current_scene);
    

        // this.initBuffers()
>>>>>>> fd7a44bde5db7143e8cd9ab7bc29e933f735c340
    }

    display() {

        var rDiam = [Math.cos(Math.PI / 4), Math.cos(Math.PI / 4), 0.0, 0.0,
        -Math.cos(Math.PI / 4), Math.cos(Math.PI / 4), 0.0, 0.0,
            0.0, 0.0, 1, 0.0,
            0.0, 0.0, 0.0, 1.0];

        var tDiam = [1, 0.0, 0.0, 0.0,
            0.0, 1, 0.0, 0.0,
            0.0, 0.0, 1, 0.0,
            -Math.cos(Math.PI / 4), 2 + Math.sqrt(2) / 2, 0.0, 1.0];
<<<<<<< HEAD
            
        this.material_diamond.apply()
=======

    
>>>>>>> fd7a44bde5db7143e8cd9ab7bc29e933f735c340
        this.current_scene.pushMatrix();
        this.current_scene.multMatrix(tDiam);
        this.current_scene.multMatrix(rDiam);
        this.current_scene.customMaterial.apply();
        this.diamond.display();
        this.current_scene.popMatrix();
        
        this.material_triangle.apply()
        this.current_scene.pushMatrix();
        this.current_scene.translate(1.83, - (Math.sqrt(8) - 1), 0);
        this.triangle.display();
        this.current_scene.popMatrix();
        
<<<<<<< HEAD
        this.material_small_triangle.apply()
=======
>>>>>>> fd7a44bde5db7143e8cd9ab7bc29e933f735c340
        this.current_scene.pushMatrix();
        this.current_scene.translate(0, 1, 0);
        this.smallTriangle.display();
        this.current_scene.popMatrix();

        this.material_small_triangle2.apply()
        this.current_scene.pushMatrix();
        this.current_scene.translate(0.83, - (Math.sqrt(8) - 1), 0);
        this.smallTriangle.display();
        this.current_scene.popMatrix();
        

        this.material_big_triangle.apply()
        this.current_scene.pushMatrix();
        this.current_scene.translate(Math.sqrt(8) / 2, Math.sqrt(8) / 2, 0);
        this.current_scene.rotate(Math.PI / 4, 0, 0, 1);
        this.bigTriangle.display();
        this.current_scene.popMatrix();

<<<<<<< HEAD
        this.material_big_triangle2.apply()
=======

>>>>>>> fd7a44bde5db7143e8cd9ab7bc29e933f735c340
        this.current_scene.pushMatrix();
        this.current_scene.translate(Math.sqrt(8) / 2, - (Math.sqrt(8) / 2), 0);
        this.current_scene.rotate(-(Math.PI / 2 + Math.PI / 4), 0, 0, 1);
        this.bigTriangle.display();
        this.current_scene.popMatrix();
<<<<<<< HEAD
        
        this.material_parallelogram.apply()
=======


>>>>>>> fd7a44bde5db7143e8cd9ab7bc29e933f735c340
        this.current_scene.pushMatrix();
        this.current_scene.translate(-Math.SQRT1_2, 0, 0);
        this.current_scene.scale(-1, 1, 1);
        this.current_scene.translate(0, 2 + Math.SQRT2, 0);
        this.current_scene.rotate(3 * Math.PI / 4, 0, 0, 1);
        this.parallelogram.display();
        this.current_scene.popMatrix();
       
    }
    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.smallTriangle.enableNormalViz();
        this.bigTriangle.enableNormalViz();
    }

    disableNormalViz()
    {
        this.diamond.disableNormalViz();
        this.triangle.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.smallTriangle.disableNormalViz();
        this.bigTriangle.disableNormalViz();
    }
}
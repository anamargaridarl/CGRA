class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);

        this.current_scene = scene;

        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);

        this.smallTriangle = new MyTriangleSmall(scene,0,0,0,0.5,0.25,0.25);
        this.smallTriangle2 = new MyTriangleSmall(scene,0.25,0.75,0.5,0.5,0.75,0.75);

        this.bigTriangle = new MyTriangleBig(scene,0,0,0.5,0.5,1,0);
        this.bigTriangle2 = new MyTriangleBig(scene,1,0,0.5,0.5,1,1);

        this.material_diamond = new CGFappearance(scene)
        this.material_diamond.loadTexture('images/tangram.png');
        this.material_diamond.setTextureWrap('REPEAT', 'REPEAT');
      

        this.material_small_triangle = new CGFappearance(scene)
        this.material_small_triangle.loadTexture('images/tangram.png');
        this.material_small_triangle.setTextureWrap('REPEAT', 'REPEAT');

        this.material_small_triangle2 = new CGFappearance(scene)
        this.material_small_triangle2.loadTexture('images/tangram.png');
        this.material_small_triangle2.setTextureWrap('REPEAT', 'REPEAT');

        this.material_parallelogram = new CGFappearance(scene)
        this.material_parallelogram.loadTexture('images/tangram.png');
        this.material_parallelogram.setTextureWrap('REPEAT', 'REPEAT');

        this.material_triangle = new CGFappearance(scene)
        this.material_triangle.loadTexture('images/tangram.png');
        this.material_triangle.setTextureWrap('REPEAT', 'REPEAT');

        this.material_big_triangle = new CGFappearance(scene)
        this.material_big_triangle.loadTexture('images/tangram.png');
        this.material_big_triangle.setTextureWrap('REPEAT', 'REPEAT');

        this.material_big_triangle2 = new CGFappearance(scene)
        this.material_big_triangle2.loadTexture('images/tangram.png');
        this.material_big_triangle2.setTextureWrap('REPEAT', 'REPEAT');
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
            

        this.material_diamond.apply()   
        this.current_scene.pushMatrix();
        this.current_scene.multMatrix(tDiam);
        this.current_scene.multMatrix(rDiam);
        this.diamond.display();
        this.current_scene.popMatrix();
        
        this.material_triangle.apply()
        this.current_scene.pushMatrix();
        this.current_scene.translate(1.83, - (Math.sqrt(8) - 1), 0);
        this.triangle.display();
        this.current_scene.popMatrix();
        
        this.material_small_triangle.apply()
        this.current_scene.pushMatrix();
        this.current_scene.translate(0, 1, 0);
        this.smallTriangle.display();
        this.current_scene.popMatrix();

        this.material_small_triangle2.apply()
        this.current_scene.pushMatrix();
        this.current_scene.translate(0.83, - (Math.sqrt(8) - 1), 0);
        this.smallTriangle2.display();
        this.current_scene.popMatrix();
        

        this.material_big_triangle.apply()
        this.current_scene.pushMatrix();
        this.current_scene.translate(Math.sqrt(8) / 2, Math.sqrt(8) / 2, 0);
        this.current_scene.rotate(Math.PI / 4, 0, 0, 1);
        this.bigTriangle.display();
        this.current_scene.popMatrix();

        this.material_big_triangle2.apply()
        this.current_scene.pushMatrix();
        this.current_scene.translate(Math.sqrt(8) / 2, - (Math.sqrt(8) / 2), 0);
        this.current_scene.rotate(-(Math.PI / 2 + Math.PI / 4), 0, 0, 1);
        this.bigTriangle2.display();
        this.current_scene.popMatrix();
        
        this.material_parallelogram.apply()
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
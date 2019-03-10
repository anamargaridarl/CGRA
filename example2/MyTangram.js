class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);

        this.current_scene = scene;

        this.diamond = new MyDiamond(this.current_scene);
        this.triangle = new MyTriangle(this.current_scene);
        this.parallelogram = new MyParallelogram(this.current_scene);
        this.smallTriangle = new MyTriangleSmall(this.current_scene);
        this.bigTriangle = new MyTriangleBig(this.current_scene);
        this.bigTriangle2 = new MyTriangleBig(this.current_scene);

        // this.initBuffers()
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

        this.current_scene.pushMatrix();
        this.current_scene.multMatrix(tDiam);
        this.current_scene.multMatrix(rDiam);
        this.diamond.display();
        this.current_scene.popMatrix();

        this.current_scene.pushMatrix();
        this.current_scene.translate(1.83, - (Math.sqrt(8) - 1), 0);
        this.triangle.display();
        this.current_scene.popMatrix();

        this.current_scene.pushMatrix();
        this.current_scene.translate(0, 1, 0);
        this.smallTriangle.display();
        this.current_scene.popMatrix();

        this.current_scene.pushMatrix();
        this.current_scene.translate(0.83, - (Math.sqrt(8) - 1), 0);
        this.smallTriangle.display();
        this.current_scene.popMatrix();

        this.current_scene.pushMatrix();
        this.current_scene.translate(Math.sqrt(8) / 2, Math.sqrt(8) / 2, 0);
        this.current_scene.rotate(Math.PI / 4, 0, 0, 1);
        this.bigTriangle.display();
        this.current_scene.popMatrix();

        this.current_scene.pushMatrix();
        this.current_scene.translate(Math.sqrt(8) / 2, - (Math.sqrt(8) / 2), 0);
        this.current_scene.rotate(-(Math.PI / 2 + Math.PI / 4), 0, 0, 1);
        this.bigTriangle2.display();
        this.current_scene.popMatrix();

        this.current_scene.pushMatrix();
        this.current_scene.translate(-Math.SQRT1_2, 0, 0);
        this.current_scene.scale(-1, 1, 1);
        this.current_scene.translate(0, 2 + Math.SQRT2, 0);
        this.current_scene.rotate(3 * Math.PI / 4, 0, 0, 1);
        this.parallelogram.display();
        this.current_scene.popMatrix();
    }
    /*   initBuffers() {
           /*this.vertices = []
           this.indices = []
           this.normals = []
           this.vertices = this.vertices.concat(this.diamond.vertices, this.triangle.vertices, this.parallelogram.vertices, this.smallTriangle.vertices, this.bigTriangle.vertices, this.bigTriangle2.vertices)
           this.indices = this.indices.concat(this.diamond.indices, this.triangle.indices, this.parallelogram.indices, this.smallTriangle.indices, this.bigTriangle.indices, this.bigTriangle2.indices)
           this.normals = this.normals.concat(this.diamond.normals, this.triangle.normals, this.parallelogram.normals, this.smallTriangle.normals, this.bigTriangle.normals, this.bigTriangle2.normals)
           
           this.primitiveType = this.scene.gl.TRIANGLES;
           this.initGLBuffers();
       }
       updateBuffers(complexity) {
           this.complexity = complexity;
       }
       */
    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.smallTriangle.enableNormalViz();
        this.bigTriangle.enableNormalViz();
        this.bigTriangle2.enableNormalViz();
    }

    disableNormalViz()
    {
        this.diamond.disableNormalViz();
        this.triangle.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.smallTriangle.disableNormalViz();
        this.bigTriangle.disableNormalViz();
        this.bigTriangle2.disableNormalViz();
    }
}
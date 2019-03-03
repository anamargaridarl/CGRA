class MyTangram extends CGFobject {
    constructor(scene) {
		super(scene);
		
    }
    
    display(Scene){
        
        var rDiam = [Math.cos(Math.PI / 4), Math.cos(Math.PI / 4), 0.0, 0.0,
        -Math.cos(Math.PI / 4), Math.cos(Math.PI / 4), 0.0, 0.0,
            0.0, 0.0, 1, 0.0,
            0.0, 0.0, 0.0, 1.0];

        var tDiam = [1, 0.0, 0.0, 0.0,
            0.0, 1, 0.0, 0.0,
            0.0, 0.0, 1, 0.0,
            -Math.cos(Math.PI / 4), 2 + Math.sqrt(2) / 2, 0.0, 1.0];

        if (Scene.displayDiamond) {
            Scene.pushMatrix();
            Scene.multMatrix(tDiam);
            Scene.multMatrix(rDiam);
            Scene.diamond.display();
            Scene.popMatrix();
        }

        if (Scene.displayTriangle) {
            Scene.pushMatrix();
            Scene.translate(1.83, - (Math.sqrt(8) - 1), 0);
            Scene.triangle.display();
            Scene.popMatrix();
        }

        if (Scene.displaySmallTriangle) {
            Scene.pushMatrix();
            Scene.translate(0, 1, 0);
            Scene.smallTriangle.display();
            Scene.popMatrix();
        }

        if (Scene.displaySmallTriangle2) {
            Scene.pushMatrix();
            Scene.translate(0.83, - (Math.sqrt(8) - 1), 0);
            Scene.smallTriangle.display();
            Scene.popMatrix();
        }

        if (Scene.displayBigTriangle) {
            Scene.pushMatrix();
            Scene.translate(Math.sqrt(8) / 2, Math.sqrt(8) / 2, 0);
            Scene.rotate(Math.PI / 4, 0, 0, 1);
            Scene.bigTriangle.display();
            Scene.popMatrix();
        }

        if (Scene.displayBigTriangle2) {
            Scene.pushMatrix();
            Scene.translate(Math.sqrt(8) / 2, - (Math.sqrt(8) / 2), 0);
            Scene.rotate(-(Math.PI / 2 + Math.PI / 4), 0, 0, 1);
            Scene.bigTriangle2.display();
            Scene.popMatrix();
        }

        if (Scene.displayParallelogram) {
            Scene.pushMatrix();
            Scene.translate(2, 2 + Math.sqrt(2) + Math.sqrt(2), 0)
            Scene.rotate(Math.PI / 4, 0, 0, 1);
            Scene.rotate(Math.PI, 0, 1, 0);
            Scene.parallelogram.display();
            Scene.popMatrix();
        }
    }
}
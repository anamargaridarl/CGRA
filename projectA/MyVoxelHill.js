/**
* MyVoxelHill
* @constructor
*/
class MyVoxelHill extends CGFobject {
    constructor(scene, levels, x, z) {
        super(scene);
        this.levels = levels;
        this.cube = new MyUnitCubeQuad(scene);
    }

    display(y, level) {
        var y  = 0;
        var x = 0;
        var z = 0;

        //linhas por nivel
        for (var i = level; i > 0; i--) {

            var side = i * 2 - 1;
            var y;

            //primeiro cubo do nivel 
            this.scene.pushMatrix();
            this.scene.translate(x, y, z);
            this.cube.display();
            this.scene.popMatrix();

            //linhas verticais e horizontais
            for (var l = 1; l < side; l++) {
                this.scene.pushMatrix();
                this.scene.translate(x + l, y, z);
                this.cube.display();
                this.scene.popMatrix();

                this.scene.pushMatrix();
                this.scene.translate(x, y, z+l);
                this.cube.display();
                this.scene.popMatrix();

                this.scene.pushMatrix();
                this.scene.translate(x+l, y, z+(side-1));
                this.cube.display();
                this.scene.popMatrix();

                this.scene.pushMatrix();
                this.scene.translate(x+ (side-1), y, z+l);
                this.cube.display();
                this.scene.popMatrix();
            }

            y++;
            x++;
            z++;

        }
    }
}
/**
* MyVoxelHill
* @constructor
*/
class MyVoxelHill extends CGFobject {
    constructor(scene, levels) {
        super(scene);
        
        this.levels = levels;
        
        //textures
        var topText = new CGFappearance(scene)
        topText.loadTexture('images/grass6.png');

        var sideText = new CGFappearance(scene)
        sideText.loadTexture('images/mineSide3.png');

        var bottomText = new CGFappearance(scene)
        bottomText.loadTexture('images/mineBottom.png');

        //objects
        var texturesMinecraft = [topText, bottomText, sideText, sideText]; 
        this.cube = new MyUnitCubeQuad(scene,texturesMinecraft);
    }

    display(y, level) {
        var y  = 0;
        var x = 0;
        var z = 0;

        //draw each level
        for (var i = level; i > 0; i--) {

            var side = i * 2 - 1;
            var y;

            //first cube 
            this.scene.pushMatrix();
            this.scene.translate(x, y, z);
            this.cube.display();
            this.scene.popMatrix();

            //draw lines and columns
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
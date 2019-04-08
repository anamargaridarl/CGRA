/**
* MyVoxelHill
* @constructor
*/
class MyVoxelHill extends CGFobject {
    constructor(scene, levels) {
        super(scene);

        this.cubes = []
    }

    display(y,level) {
        side = level*2-1;
        this.nbcubes = (level*level)-(( level-1)*(level-1));



        
    }
}
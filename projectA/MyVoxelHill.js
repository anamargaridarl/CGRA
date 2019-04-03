/**
* MyVoxelHill
* @constructor
*/
class MyVoxelHill extends CGFobject {
    constructor(scene, levels) {
        super(scene);

        this.cubes = []
    
        for(i = 1; i<= levels; i++)
        {
            nbsquares = i +(i-1);
            for(j = o; j< nbsquares; j++)
            {
                this.cubes.push(new MyUnitCubeQuad());
            }
        }       
    
    }

    display() {

        for(i = 0; i < this.cubes.length; i++)
        {
            for(j = 1; j<= levels; j++)
            {
                nbsquares = j +(j-1);

                for(l = 0; l< nbsquares; l++)
                {
                    this.scene.translate(1,0,0);
                }
            }
        }
        
    }
}
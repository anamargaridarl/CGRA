class MyCubeMap extends CGFobject {
	constructor(scene) {
        super(scene);
        
        this.cubemap = new MyUnitCube(scene);
    }
    
    display()
    {
        this.cubemap.display();
    }
	
}
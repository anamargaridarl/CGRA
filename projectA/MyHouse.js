class MyHouse extends CGFobject {
    
    constructor(scene) {
        super(scene);

    this.myscene = scene;

    this.cube = new MyUnitCubeQuad(scene);
    this.column1 = new MyCylinder(scene,20);
    this.column2 = new MyCylinder(scene,20);
    this.roof = new MyPyramid(scene,4,1);
    this.base = new MyUnitCubeQuad(scene);
    this.door = new MyRectangle(this);


    }

    display()
    {
        /*
        this.myscene.pushMatrix();
        this.myscene.scale(1.25,1,1)
        this.myscene.translate(0,0.5,0);
        this.cube.display();
        this.myscene.popMatrix();

        this.myscene.pushMatrix();
        this.myscene.translate(0,0.5,0.15);
        this.myscene.rotate(Math.PI /4,0,1,0);
        this.myscene.scale(1.25,0.5,1.25);
        this.myscene.translate(0,1,0);
        this.roof.display();
        this.myscene.popMatrix();
*/

        this.door.display();

    


    }

}

class MyHouse extends CGFobject {
    
    constructor(scene) {
        super(scene);

    this.myscene = scene;

    this.cube = new MyUnitCubeQuad(scene);
    this.column1 = new MyCylinder(scene,20);
    this.roof = new MyPyramid(scene,4,1);
    this.base = new MyUnitCubeQuad(scene);
    //this.door = new MyRectangle(this);

    this.material_house = new CGFappearance(scene)
    this.material_house.loadTexture('images/walls.jpg');
    this.material_house.setTextureWrap('REPEAT', 'REPEAT');

    /*this.material_roof = new CGFappearance(scene)
    this.material_roof.loadTexture('images/tangram.png');
    this.material_roof.setTextureWrap('REPEAT', 'REPEAT');

    this.material_collumns = new CGFappearance(scene)
    this.material_collumns.loadTexture('images/tangram.png');
    this.material_collumns.setTextureWrap('REPEAT', 'REPEAT');*/

    }

    display()
    {
        this.myscene.pushMatrix();
        this.material_house.apply();
        this.myscene.scale(2,1,1)
        this.myscene.translate(0,0.5,0);
        this.cube.display();
        this.myscene.popMatrix();

        
        this.myscene.pushMatrix();
        this.myscene.translate(0,0.5,0.15);
        this.myscene.rotate(Math.PI /4,0,1,0);
        this.myscene.scale(1.5,0.5,1.5);
        this.myscene.translate(0,1,0);
        this.roof.display();
        this.myscene.popMatrix();
        

        this.myscene.pushMatrix();
        this.myscene.translate(-0.9,0,0.7);
        this.myscene.scale(0.1,1,0.1);
        this.column1.display();
        this.myscene.popMatrix();
    
        this.myscene.pushMatrix();
        this.myscene.translate(0.9,0,0.7);
        this.myscene.scale(0.1,1,0.1);
        this.column1.display();
        this.myscene.popMatrix();

          
        this.myscene.pushMatrix();
        this.myscene.translate(-0.4,0,0.7);
        this.myscene.scale(0.1,1,0.1);
        this.column1.display();
        this.myscene.popMatrix();

        this.myscene.pushMatrix();
        this.myscene.translate(0.4,0,0.7);
        this.myscene.scale(0.1,1,0.1);
        this.column1.display();
        this.myscene.popMatrix();
    


    }

}

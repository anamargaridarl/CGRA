class MyHouse extends CGFobject {
    
    constructor(scene) {
        super(scene);

    this.myscene = scene;

   
    this.column1 = new MyCylinder(scene,20);
    this.roof = new MyPyramid(scene,4,1);
    //this.door = new MyRectangle(this);

    var material_house = new CGFappearance(scene)
    material_house.loadTexture('images/wall5.png');

    var material_door = new CGFappearance(scene)
    material_door.loadTexture('images/doorside.png');

    var texturesHouse = [material_house, material_house, material_house, material_door];

    this.material_roof = new CGFappearance(scene)
    this.material_roof.loadTexture('images/roof3.jpg');


    
    this.material_collumns = new CGFappearance(scene)
    this.material_collumns.loadTexture('images/column3.png');
    this.material_collumns.setDiffuse(92/256, 51/256, 23/256, 1.0);
    this.material_collumns.setSpecular(92/256*0.1, 51/256*0.1, 23/256*0.1, 1.0);
    this.material_collumns.setShininess(10.0);

    this.cube = new MyUnitCubeQuad(scene,texturesHouse);
    this.base = new MyUnitCubeQuad(scene,texturesHouse);
    }

    display()
    {
        this.myscene.pushMatrix();
        this.myscene.scale(2,1,1)
        this.myscene.translate(0,0.5,0);
        this.cube.display();
        this.myscene.popMatrix();

        
        this.myscene.pushMatrix();
        this.material_roof.apply();
        this.myscene.translate(0,0.5,0.15);
        this.myscene.rotate(Math.PI /4,0,1,0);
        this.myscene.scale(1.5,0.5,1.5);
        this.myscene.translate(0,1,0);
        this.roof.display();
        this.myscene.popMatrix();
        

        this.myscene.pushMatrix();
        this.material_collumns.apply();
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

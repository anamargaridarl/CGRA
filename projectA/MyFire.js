class MyFire extends CGFobject {
    constructor(scene) {
        super(scene);
        
        this.wood = new MyCylinder(scene,20);

        this.woodT = new CGFappearance(scene)
        this.woodT.loadTexture('images/column3.png');

    }

    display()
    {
        this.scene.pushMatrix();
        this.woodT.apply();
        this.scene.translate(0,0,2.5);
        this.scene.rotate(- Math.PI /4,0,1,0)
        this.scene.rotate(- Math.PI /2,1,0,0)
        this.scene.scale(0.1,1,0.1);
        this.wood.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.woodT.apply();
        this.scene.translate(Math.sqrt(1/2),0,2.5);
        this.scene.rotate( Math.PI /4,0,1,0)
        this.scene.rotate(- Math.PI /2,1,0,0)
        this.scene.scale(0.1,1,0.1);
        this.wood.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.woodT.apply();
        this.scene.translate(-0.15,0, 2.5 - Math.sqrt(1/2) / 2 );
        this.scene.rotate(- Math.PI /2,0,1,0)
        this.scene.rotate(- Math.PI /2,1,0,0)
        this.scene.scale(0.1,1,0.1);
        this.wood.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.woodT.apply();
        this.scene.translate(Math.sqrt(1/2) / 2, 0, 2.5 +0.15 );
        this.scene.rotate(- Math.PI /2,1,0,0)
        this.scene.scale(0.1,1,0.1);
        this.wood.display();
        this.scene.popMatrix();

    }
}
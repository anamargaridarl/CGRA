class MyTreeBranch extends CGFobject {
    constructor(scene) {
        super(scene);

        //Diffuse texture with brown color (wood)
        this.wood = new CGFappearance(scene)
        this.wood.setDiffuse(92 / 255, 51 / 255, 23 / 255, 1.0);
        this.wood.setSpecular(92 / 255, 51 / 255, 23 / 255, 1.0);
        this.wood.setShininess(0.1);
        this.wood.loadTexture('images/column3.png');

        this.branch = new MyCylinder(scene,20);
    }

    display()
    {
    this.scene.pushMatrix();
    this.wood.apply();
    this.scene.scale(0.1,0.1,1);
    this.scene.rotate(Math.PI/2,1,0,0);
    this.branch.display();
    this.scene.popMatrix();
    }

}


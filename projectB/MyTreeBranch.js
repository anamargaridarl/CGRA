class MyTreeBranch extends CGFobject {
    constructor(scene, texture,x,y,z, ang) {
        super(scene);

        //Diffuse texture with brown color (wood)
        this.texture = texture;

        this.x = x;
        this.y= y;
        this.z =z;
        this.ang =ang;


        this.branch = new MyCylinder(scene, 20);
    }

    display() {
        this.scene.pushMatrix();
        this.texture.apply();
        this.scene.translate(this.x,this.y,this.z);
        this.scene.rotate(this.ang,0,1,0);
        this.scene.scale(0.1, 0.1, 1);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.branch.display();
        this.scene.popMatrix();
    }

}


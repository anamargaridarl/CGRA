class MyLeaf extends CGFobject {
    constructor(scene) {
        super(scene);

        this.leaf = new MyTriangle(this.scene);

        this.material = new CGFappearance(scene)
        this.material.setAmbient(0, 128 / 256, 0, 1);
        this.material.setDiffuse(0, 128 / 256, 0, 1);
        this.material.setSpecular(0, 128 / 256, 0, 1);
        this.material.setShininess(1);
    }

    display() {
        this.material.apply();
        this.leaf.display();
    }

}
class MyBranch extends CGFobject {
    constructor(scene) {
        super(scene);

        this.cylinder = new MyCylinder(this.scene, 4);

        this.material = new CGFappearance(scene)
        this.material.setAmbient(139 / 256, 69 / 256, 19 / 256, 1);
        this.material.setDiffuse(139 / 256, 69 / 256, 19 / 256, 1);
        this.material.setSpecular(139 / 256, 69 / 256, 19 / 256, 1);
        this.material.setShininess(1);

    }

    display() {

        this.material.apply();
        this.cylinder.display();
    }
}

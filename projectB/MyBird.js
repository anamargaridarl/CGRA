/**
* MyTree
* @constructor
*/
class MyTree extends CGFobject {
    constructor(scene) {
        super(scene);

    this.bodyhead = new MyUnitCubeQuad(this);
    this.beak = new MyCone(this,20);
        
    }

    display() {

        this.scene.pushMatrix();
        this.scene.translate(10, 0.5, 10);
        this.bodyhead.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(10, 1.5, 11);
        this.bodyhead.display();
        this.scene.popMatrix();

    }
}
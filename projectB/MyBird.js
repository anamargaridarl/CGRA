/**
* MyTree
* @constructor
*/
class MyBird extends CGFobject {
    constructor(scene, x, y, z, angYY, v) {
        super(scene);

        var feathers = new CGFappearance(scene)
        feathers.loadTexture('images/bird.jpg');

        //House objects
        var texturesbird = [feathers, feathers, feathers, feathers];


        this.bodyhead = new MyUnitCubeQuad(scene, texturesbird);
        // this.beak = new MyCone(scene,20,2);

        this.x = x;
        this.y = y;
        this.z = z;


    }

    display() {

        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y + 0.5, this.z);
        this.bodyhead.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y + 1.5, this.z + 0.5);
        this.bodyhead.display();
        this.scene.popMatrix();



    }

    updatePosition() {
        this.x = this.x + 1;
        this.y = this.y + 1;
        this.z = this.z + 1;
    }
}
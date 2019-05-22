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

        this.initialx = x;
        this.initialy = y;
        this.initialz = z;

        this.rotatefactor = angYY;

        this.x = x;
        this.y = y;
        this.z = z;

        this.v = v;

    }

    display() {

        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y + 10.5, this.z);
        this.bodyhead.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y + 11.5, this.z + 0.5);
        this.bodyhead.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(this.rotatefactor, 0, 1, 0);
        this.bodyhead.display();
        this.scene.popMatrix();

    }

    updatePosition(t) {
        this.y = (this.y + Math.sin(t))*this.v ;

    }

    turn(v) {
        if (v > 0)
            this.rotatefactor += Math.PI / 2;
        else
            this.rotatefactor -= Math.PI / 2;
    }

    accelerate(v) {
        if (v > 0)
            this.v += 0.01;
        else
        {
            if(this.v >  0)
                this.v -= 0.01;
        }
    }

    originalPosition() {
        this.scene.pushMatrix();
        this.scene.translate(this.initialx, this.initialy + 0.5, this.initialz);
        this.bodyhead.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.initialx, this.initialy + 1.5, this.initialz + 0.5);
        this.bodyhead.display();
        this.scene.popMatrix();

    }
}
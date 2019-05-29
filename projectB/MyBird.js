/**
* MyTree
* @constructor
*/
class MyBird extends CGFobject {
    constructor(scene, x, y, z, angYY, v) {
        super(scene);

        this.body = new MyBirdBody(scene);
        this.wings = new MyWings(scene);

        this.initialx = x;
        this.initialy = y;
        this.initialz = z;

        this.rotatefactor = angYY;
        this.x = x;
        this.y = y;
        this.z = z;

        this.rwings = 0;
        this.v = v;

    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.initialx + this.x, this.initialy + this.y, this.initialz + this.z);
        this.scene.rotate(this.rotatefactor, 0, 1, 0);
        this.scene.pushMatrix();
        this.body.displayBody();
        this.scene.axis.display();
        this.wings.displayWings(this.rwings);
        this.scene.popMatrix();
        this.scene.popMatrix();
    }



    updatePosition(t) {
        this.y = (this.initialy + 2 * Math.sin(t * 0.1));
        this.rwings = (this.initialy + 2 * Math.sin(t * this.v));
    }

    turn(rotatefactor) {
        if (rotatefactor > 0) {
            if (this.rotatefactor >= 2 * Math.PI)
                this.rotatefactor = Math.PI / 2;
            else
                this.rotatefactor += Math.PI / 2;
        }
        else {
            if (this.rotatefactor <= 0)
                this.rotatefactor = 2 * Math.PI;
            else
                this.rotatefactor -= Math.PI / 2;
        }
    }

    accelerate(v) {
        if (v > 0) {
            this.v += 0.01;
            this.x += 0.5;
        }
        else {
            if (this.v > 0) {
                this.v -= 0.01;
                this.x -= 0.5;
            }
        }

    }

    originalPosition() {
        this.rotatefactor = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.v = 0;
    }

}
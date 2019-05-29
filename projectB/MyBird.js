/**
* MyTree
* @constructor
*/
class MyBird extends CGFobject {
    constructor(scene, x, y, z) {
        super(scene);

        this.body = new MyBirdBody(scene);
        this.wings = new MyWings(scene);

        this.initialx = x;
        this.initialy = y;
        this.initialz = z;

        this.rotatefactor = 0;
        this.x = x;
        this.y = y;
        this.z = z;

        this.rwings = 0;
        this.v = 0;

        this.fall = false;
        this.rise = false;
        this.yP = 0;

        this.branches;

        this.scaleFactor = 1;

    }

    startFall(branches) {
        this.yP = this.initialy + this.y;
        this.fall = true;
        this.branches = branches;
    }

    startRise() {
        this.fall = false;
        this.rise = true;
    }

    lookBranches(branches) {

        for (var i = 0; i < 5; i++) {
            if (branches[i].x == this.x + this.initialx && branches[i].z == this.z + this.initialz)
                console.log("yeeeei");
        }
    }

    move() {
        this.scene.rotate(this.rotatefactor, 0, 1, 0);
        this.scene.pushMatrix();
        this.body.displayBody();
        this.scene.axis.display();
        this.wings.displayWings(this.rwings);
        this.scene.popMatrix();
    }

    display() {

        if (this.fall || this.rise) {
            this.scene.pushMatrix();
            this.scene.translate(this.initialx + this.x, this.yP, this.initialz + this.z);
            this.move();
            this.scene.popMatrix();
        }
        else {
            this.scene.pushMatrix();
            this.scene.translate(this.initialx + this.x, this.initialy + this.y, this.initialz + this.z);
            this.move();
            this.scene.popMatrix();
        }


    }

    riseUpdate(t) {

        if (this.rise) {
            if (this.yP < this.y) {
                this.yP += t * this.v * 0.002;
            }
            else {
                this.rise = false;
                this.y = this.yP;
            }
        }
    }

    fallUpdate(t) {

        if (this.fall) {

            if (this.yP > 0) {
                this.yP -= t * this.v * 0.002;
            }
            else {
                this.startRise();
            }
        }
    }

    updatePosition(t) {

        this.fallUpdate(t);
        this.riseUpdate(t);

        this.y = (this.initialy + 2 * Math.sin(t * 0.1));

        if (this.v != 0)
        {
            this.z -= Math.cos(this.rotatefactor) * this.v;
            this.x -= Math.sin(this.rotatefactor) * this.v;
            this.rwings = (this.initialy + 2 * Math.sin(t * this.v));
        }
        else
            this.rwings = (this.initialy + 2 * Math.sin(t * 0.5));

    }

    turn(v) {
        this.rotatefactor += v *10;
    }

    accelerate(v) {

        if (this.v <= 0.05) {
            this.v = 0;
            this.rwings = 1;
        }

        this.v += v;
    }


    originalPosition() {
        this.rotatefactor = 0;
        this.x = this.initialx;
        this.y = this.initialy;
        this.z = this.initialz;
        this.v = 0;
    }

}
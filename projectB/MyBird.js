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
        this.yP = 1000;

        this.birdBranches;
        this.speedfactor = 1;

        this.scaleFactor = 1;

    }

    startFall(branches) {
        this.yP = this.y;
        this.fall = true;
        this.branches = branches;
    }

    startRise() {
        this.fall = false;
        this.rise = true;
    }

    differenceCoords(i, j) {

        console.log(Math.abs(i-j))
        if (Math.abs(i - j) < 4)
            return true;
        else
            return false;
    }

    lookBranches(branches) {

        if (!this.birdBranches) {
            for (var i = 0; i < branches.length; i++) {
                if (this.differenceCoords(branches[i].x, this.x) && this.differenceCoords(branches[i].z, this.z)) {
                    branches[i].ang = 0;
                    this.birdBranches = branches[i];
                    branches.splice(i, 1);
                    break;
                }

            }
        }
    }

    lookNest(nest, branches) {

        if (this.birdBranches) {

            if (this.differenceCoords(nest.x, this.x) && this.differenceCoords(nest.z, this.z)) {

                this.birdBranches.x = nest.x;
                this.birdBranches.y = nest.y + 0.5;
                this.birdBranches.z = nest.z;
                this.birdBranches.ang = Math.random() * (2 * Math.PI);
        

                branches.push(this.birdBranches)
                this.birdBranches = null;
                return true;

            }
            else
                return false;

        }
        else
            return false
    }

    move() {
        this.scene.rotate(this.rotatefactor, 0, 1, 0);
        this.scene.pushMatrix();
        this.displayBirdBranches();
        this.body.displayBody();
        this.scene.axis.display();
        this.wings.displayWings(this.rwings);
        this.scene.popMatrix();
    }

    displayBirdBranches() {
        if (this.birdBranches != undefined) {

            this.birdBranches.x = 1; //small adjustment to rotation
            this.birdBranches.y = 0.5;
            this.birdBranches.z = -0.5;
            this.birdBranches.ang = Math.PI / 2;

            this.birdBranches.display();

        }
    }

    display() {

        if (this.fall || this.rise) {
            this.scene.pushMatrix();
            this.scene.translate(this.x, this.yP, this.z);
            this.move();
            this.scene.popMatrix();
        }
        else {
            this.scene.pushMatrix();
            this.scene.translate(this.x, this.y, this.z);
            this.move();
            this.scene.popMatrix();
        }


    }

    riseUpdate() {

        if (this.rise) {
            if (this.yP < this.y) {
                this.yP += this.v;
            }
            else {
                this.rise = false;
                this.y = this.yP;
            }
        }
    }

    fallUpdate() {

        if (this.fall) {

            if (this.yP > 0) {
                this.yP -= this.v;
            }
            else {
                this.startRise();
            }
        }
    }

    updatePosition(t) {

        this.fallUpdate();
        this.riseUpdate();

        this.y = (this.initialy + 2 * Math.sin(t * 0.1));

        if (this.v != 0) {
            this.z -= Math.cos(this.rotatefactor) * this.v;
            this.x -= Math.sin(this.rotatefactor) * this.v;
            this.rwings = (this.initialy + 2 * Math.sin(t * this.v));
        }
        else
            this.rwings = (this.initialy + 2 * Math.sin(t * 0.5));

    }

    turn(v) {
        this.rotatefactor += v * this.speedfactor;
    }

    accelerate(v) {

        this.v += v * this.speedfactor;
        if (this.v <= 0.0005) {
            this.v = 0;
            this.rwings = 1;
        }
    }


    originalPosition() {

        if (this.rise || this.fall) {
            this.rise = false;
            this.fall = false;
        }

        this.rotatefactor = 0;
        this.x = this.initialx;
        this.y = this.initialy;

        this.z = this.initialz;
        this.v = 0;
    }

}
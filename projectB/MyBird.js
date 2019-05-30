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

        this.branches;

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

    lookBranches(branches) {

        console.log(this.x)
        console.log(this.z)
        for (var i = 0; i < 5; i++) {

            console.log(i)
            console.log(branches[i].x)
            console.log(branches[i].z)


            if (branches[i].x == this.x  && branches[i].z == this.z )
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
            this.scene.translate(this.x, this.yP, this.z);
            this.move();
            this.scene.popMatrix();
        }
        else {
            this.scene.pushMatrix();
            this.scene.translate(this.x, this.y,  this.z);
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
        this.rotatefactor += v *this.v ;
    }

    accelerate(v) {

        if (this.v <= 0.05) {
            this.v = 0;
            this.rwings = 1;
        }

        this.v += v;
    }


    originalPosition() {

        if(this.rise || this.fall)
        {
            this.rise = false;
            this.fall =false;
        }
        
        console.log(this.initialy)
        this.rotatefactor = 0;
        this.x = this.initialx;
        this.y = this.initialy;
        console.log(this.y)

        this.z = this.initialz;
        this.v = 0;
    }

}
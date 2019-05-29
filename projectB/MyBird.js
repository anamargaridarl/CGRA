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

        this.fall = false;
        this.rise = false;
        this.yP = 0;

        this.branches;

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

    lookBranches(branches)
    {
        for(var i = 0; i< 5; i++)
        {
            if(branches[i].x == this.x + this.initialx && branches[i].z == this.z +this.initialz)
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
        else{
            this.scene.pushMatrix();
            this.scene.translate(this.initialx + this.x, this.initialy + this.y, this.initialz + this.z);
            this.move();
            this.scene.popMatrix();
        }


    }

    riseUpdate(t) {
        
        if (this.rise) {
            if (this.yP < 15)
            {
                this.yP += t*this.v*0.002;
            }
            else {
                this.rise = false;
            }
        }
    }

    fallUpdate(t) {

        if (this.fall) {
            
            if (this.yP > 0)
            {
                this.yP -= t*this.v*0.002;
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
            this.rwings = (this.initialy + 2 * Math.sin(t * this.v));
        else
            this.rwings = (this.initialy + 2 * Math.sin(t * 0.5));

        if (this.rotatefactor == Math.PI)
            this.z += this.v * t % 0.2;
        else if (this.rotatefactor == Math.PI / 2)
            this.x -= this.v * t % 0.2;
        else if (this.rotatefactor == 0)
            this.z -= this.v * t % 0.2;
        else if (this.rotatefactor == Math.PI / 2 + Math.PI)
            this.x += this.v * t % 0.2;


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

    accelerate(flag) {
        if (flag > 0) {
            this.v += 0.1;
        }
        else {
            if (this.v > 0.01) {
                this.v -= 0.1;
            }
            else {
                this.v = 0;
                this.rwings = 1;
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
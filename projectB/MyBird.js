/**
* MyTree
* @constructor
*/
class MyBird extends CGFobject {
    constructor(scene, x, y, z, angYY, v) {
        super(scene);

        //Texture
        var feathers = new CGFappearance(scene)
        feathers.loadTexture('images/bird.jpg');
        var texturesbird = [feathers, feathers, feathers, feathers];
    
        //Body
        this.bodyhead = new MyUnitCubeQuad(scene, texturesbird);
        this.beak = new MyCone(scene,20,2);

        //Wings
         this.higher = new MyQuad(scene);
         this.lower =  new MyTriangle(scene);

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

    display()
    {
        this.scene.pushMatrix();
        this.scene.translate(this.initialx +this.x,this.initialy + this.y,this.initialz +this.z);
        this.scene.rotate(this.rotatefactor,0,1,0);
        this.scene.pushMatrix();
        this.displayBody();
        this.scene.axis.display();
        this.displayWings();
        this.scene.popMatrix();
        this.scene.popMatrix();


    }

    displayWings()
    {

        this.scene.pushMatrix();
        this.scene.rotate(Math.sin(this.rwings),0,0,1);

        this.scene.pushMatrix();
        this.scene.translate(+0.8+0.75, 0, 0.5);
        this.scene.scale(0.5,1,0.20);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/10,0,1,0);
        this.lower.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

    
        this.scene.pushMatrix();
        this.scene.translate(0.8, 0,0.5);
        this.scene.scale(0.5,1,0.4);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/9,0,1,0);
        this.higher.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.rotate(Math.sin(this.rwings),0,0,1);
    
        this.scene.pushMatrix();
        this.scene.translate(-0.8-0.74,0, 0.5);
        this.scene.scale(0.5,1,0.20);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.scale(-1,1,1);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/10,0,1,0);
        this.lower.display();
        this.scene.popMatrix();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(-0.8, 0, 0.5);
        this.scene.scale(0.5,1,0.4);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/9,0,1,0);
        this.higher.display();
        this.scene.popMatrix();
        this.scene.popMatrix();



        this.scene.popMatrix();

  
    }

    displayBody() {

        //Eyes
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0.7, -0.5);
        this.scene.scale(0.2,0.2,0.2);
        this.bodyhead.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0.7,-0.5);
        this.scene.scale(0.2,0.2,0.2);
        this.bodyhead.display();
        this.scene.popMatrix();

        //Beak
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, - 0.5);
        this.scene.rotate( -Math.PI /2 ,1, 0, 0);
        this.scene.scale(0.2,0.5,0.2);
        this.beak.display();
        this.scene.popMatrix();

        //Body
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.bodyhead.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.bodyhead.display();
        this.scene.popMatrix();

    

    }

    updatePosition(t) {
        this.y = (this.initialy + 2*Math.sin(t*0.1)) ;
        this.rwings = (this.initialy + 2*Math.sin(t*this.v)) ;

    }

    turn(rotatefactor) {
        if (rotatefactor > 0)
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

    originalPosition()
    {
        this.rotatefactor = this.angyy;
        this.x = this.initialx;
        this.y = this.initialy;
        this.z =  this.initialz;
    }
    
}
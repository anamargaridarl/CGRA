class MyNest extends CGFobject {
    constructor(scene,x,y,z) {
        super(scene)

        var woodT = new CGFappearance(scene)
        woodT.loadTexture('images/nest.jpg');

        this.wood = new MyTreeBranch(scene,woodT,0,0,0,0);

        this.x = x;
        this.y = y;
        this.z = z;
    }

    display() {

        this.scene.pushMatrix();

        this.scene.translate(this.x,this.y,this.z);

        var beta = 0;
        var alpha = (2 * Math.PI) / 20;
       
       for (var i = 0; i < 20; i++) {
        
            this.scene.pushMatrix()
            this.scene.rotate(beta,0,1,0);
            this.scene.pushMatrix()
            this.scene.translate(0,0,0.5);
            this.scene.rotate(-alpha, 1, 0,0);
            this.wood.display();
            this.scene.popMatrix();
            this.scene.popMatrix();

            this.scene.pushMatrix()
            this.scene.rotate(beta,0,1,0);
            this.scene.scale(0.6,1,0.6)
            this.wood.display();
            this.scene.popMatrix();

            beta += alpha;
        }     

        this.scene.popMatrix();

           
    }
}


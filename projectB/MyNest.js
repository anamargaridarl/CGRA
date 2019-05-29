class MyNest extends CGFobject {
    constructor(scene) {
        super(scene)

        this.woodT = new CGFappearance(scene)
        this.woodT.loadTexture('images/nest.jpg');

        this.wood = new MyTreeBranch(scene);
    }

    display() {

        var beta = 0;
        var alpha = (2 * Math.PI) / 20;

       
       for (var i = 0; i < 20; i++) {
        
            this.scene.pushMatrix()
            this.scene.rotate(beta,0,1,0);
            this.scene.pushMatrix()
            this.scene.rotate(beta, 0, 0, 1);
            this.scene.translate(0,0,0.5);
            this.wood.display();
            this.scene.popMatrix();
            this.scene.popMatrix();




            beta += alpha;
        }        
    }
}


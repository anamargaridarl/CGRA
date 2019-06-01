class MySphere extends CGFobject {
    constructor(scene) {
        super(scene);

        this.semi = new MySemiSphere(scene, 20, 20);


    }

    display() {

        this.scene.pushMatrix();
        this.semi.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI,1,0,0)
        this.semi.display();
        this.scene.popMatrix();
    }


};

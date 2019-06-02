class MyBirdBody extends CGFobject {
    constructor(scene) {
        super(scene);

        //Texture
        this.feathers = new CGFappearance(scene)
        this.feathers.loadTexture('images/bird2.jpg');


        var eyes = new CGFappearance(scene)
        eyes.loadTexture('images/beak.jpeg');

        var eyesbird = [eyes, eyes, eyes, eyes];

        this.beakText = new CGFappearance(scene)
        this.beakText.loadTexture('images/beak3.jpeg');

        this.tailText = new CGFappearance(scene)
        this.tailText.loadTexture('images/beak2.jpeg');

        //Body
        this.bodyhead = new MySphere(scene,20,20);
        this.eyes = new MyUnitCubeQuad(scene, eyesbird);
        this.beak = new MyCone(scene, 20, 2);
        this.tail = new MyTriangle(scene);

    }

    displayBody() {

        //Eyes
        this.scene.pushMatrix();
        this.scene.translate(0.1, 0.4, -0.2);
        this.scene.scale(0.1, 0.1, 0.1);
        this.eyes.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.1, 0.4, -0.2);
        this.scene.scale(0.1, 0.1, 0.1);
        this.eyes.display();
        this.scene.popMatrix();

        //Beak
        this.scene.pushMatrix();
        this.beakText.apply();
        this.scene.translate(0, 0.2, -0.1);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.1, 0.4, 0.1);
        this.beak.display();
        this.scene.popMatrix();

        //Head
        this.scene.pushMatrix();
        this.feathers.apply();
        this.scene.scale(0.25,0.25,0.25)
        this.scene.translate(0, 1, 0);
        this.bodyhead.display();
        this.scene.popMatrix();

        //Body
        this.scene.pushMatrix();
        this.feathers.apply();
        this.scene.scale(0.25,0.30,0.5);
        this.scene.translate(0, 0.2, 1);
        this.bodyhead.display();
        this.scene.popMatrix();

        //Tail
        this.scene.pushMatrix();
        this.tailText.apply();
        this.scene.translate(-0.1, 0, 1);
        this.scene.scale(0.1,0.1,0.2);
        this.scene.rotate(-Math.PI ,0,1,0)
        this.scene.rotate(Math.PI/2,1,0,0)
        this.tail.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.tailText.apply();
        this.scene.translate(0.1, 0, 1);
        this.scene.scale(0.1,0.1,0.2);
        this.scene.rotate(-Math.PI/2,1,0,0)
        this.tail.display();
        this.scene.popMatrix();


    }


}

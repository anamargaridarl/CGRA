class MyBirdBody extends CGFobject {
    constructor(scene) {
        super(scene);

        //Texture
        var feathers = new CGFappearance(scene)
        feathers.loadTexture('images/bird.jpg');
        var texturesbird = [feathers, feathers, feathers, feathers];

        //Body
        this.bodyhead = new MyUnitCubeQuad(scene, texturesbird);
        this.beak = new MyCone(scene, 20, 2);

    }

    displayBody() {

        //Eyes
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0.7, -0.5);
        this.scene.scale(0.2, 0.2, 0.2);
        this.bodyhead.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0.7, -0.5);
        this.scene.scale(0.2, 0.2, 0.2);
        this.bodyhead.display();
        this.scene.popMatrix();

        //Beak
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, - 0.5);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.2, 0.5, 0.2);
        this.beak.display();
        this.scene.popMatrix();

        //Body
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.bodyhead.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.bodyhead.display();
        this.scene.popMatrix();

    }


}

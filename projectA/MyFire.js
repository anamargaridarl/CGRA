class MyFire extends CGFobject {
    constructor(scene) {
        super(scene);

        //Objects
        this.wood = new MyCylinder(scene, 20);
        this.fire = new MyQuad(scene);

        //Textures
        this.woodT = new CGFappearance(scene)
        this.woodT.setDiffuse(92 / 255, 51 / 255, 23 / 255, 1.0);
        this.woodT.setSpecular(92 / 255 * 0.1, 51 / 255 * 0.1, 23 / 255 * 0.1, 1.0);
        this.woodT.setShininess(0.1);
        this.woodT.loadTexture('images/column3.png');

        this.fireT = new CGFappearance(scene)
        this.fireT.loadTexture('images/fire2.jpg');
    }

    display() {
        //Wood fire
        this.scene.pushMatrix();
        this.woodT.apply();
        this.scene.translate(0, 0, 2.5);
        this.scene.rotate(- Math.PI / 4, 0, 1, 0)
        this.scene.rotate(- Math.PI / 2, 1, 0, 0)
        this.scene.scale(0.1, 1, 0.1);
        this.wood.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.woodT.apply();
        this.scene.translate(Math.sqrt(1 / 2), 0, 2.5);
        this.scene.rotate(Math.PI / 4, 0, 1, 0)
        this.scene.rotate(- Math.PI / 2, 1, 0, 0)
        this.scene.scale(0.1, 1, 0.1);
        this.wood.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.woodT.apply();
        this.scene.translate(-0.15, 0, 2.5 - Math.sqrt(1 / 2) / 2);
        this.scene.rotate(- Math.PI / 2, 0, 1, 0)
        this.scene.rotate(- Math.PI / 2, 1, 0, 0)
        this.scene.scale(0.1, 1, 0.1);
        this.wood.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.woodT.apply();
        this.scene.translate(Math.sqrt(1 / 2) / 2, 0, 2.5 + 0.15);
        this.scene.rotate(- Math.PI / 2, 1, 0, 0)
        this.scene.scale(0.1, 1, 0.1);
        this.wood.display();
        this.scene.popMatrix();

        //Fire
        this.scene.pushMatrix();
        this.fireT.apply();
        this.scene.translate(Math.sqrt(1 / 2) / 2, 0.5, 2.5 - Math.sqrt(1 / 2) / 2);
        this.scene.scale(0.5, 0.8, 0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.fire.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.fireT.apply();
        this.scene.translate(Math.sqrt(1 / 2) / 2, 0.5, 2.5 - Math.sqrt(1 / 2) / 2);
        this.scene.scale(0.5, 0.8, 0.5);
        this.fire.display();
        this.scene.popMatrix();

    }
}
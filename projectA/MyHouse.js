class MyHouse extends CGFobject {
    constructor(scene) {
        super(scene);

        //House textures

        //Diffuse texture with grey color (stone)
        var material_house = new CGFappearance(scene)
        material_house.setDiffuse(211 / 256, 211 / 256, 211 / 256, 1.0);
        material_house.setSpecular(211 / 256 * 0.1, 211 / 256 * 0.1, 211 / 256 * 0.1, 1.0);
        material_house.setAmbient(211 / 256 * 0.1, 211 / 256 * 0.1, 211 / 256 * 0.1, 1.0);
        material_house.setShininess(0.1);
        material_house.loadTexture('images/wall5.jpg');

        //Diffuse texture with grey color (stone)
        var material_door_side = new CGFappearance(scene)
        material_door_side.setDiffuse(211 / 256, 211 / 256, 211 / 256, 1.0);
        material_door_side.setSpecular(211 / 256 * 0.1, 211 / 256 * 0.1, 211 / 256 * 0.1, 1.0);
        material_door_side.setAmbient(211 / 256 * 0.1, 211 / 256 * 0.1, 211 / 256 * 0.1, 1.0);
        material_door_side.setShininess(0.1);
        material_door_side.loadTexture('images/doorside.png');

        //Diffuse texture with brown color (wood)
        this.material_collumns = new CGFappearance(scene)
        this.material_collumns.setDiffuse(92 / 256, 51 / 256, 23 / 256, 1.0);
        this.material_collumns.setSpecular(92 / 256 * 0.1, 51 / 256 * 0.1, 23 / 256 * 0.1, 1.0);
        this.material_collumns.setShininess(0.1);
        this.material_collumns.loadTexture('images/column3.png');

        this.material_roof = new CGFappearance(scene)
        this.material_roof.loadTexture('images/roof3.jpg');

        //House objects
        var texturesHouse = [material_house, material_house, material_house, material_door_side];

        this.column = new MyPrism(scene, 10);
        this.roof = new MyPyramid(scene, 4, 1);
        this.cube = new MyUnitCubeQuad(scene, texturesHouse);

    }

    display() {
        //House walls
        this.scene.pushMatrix();
        this.scene.scale(2, 1, 1)
        this.scene.translate(0, 0.5, 0);
        this.cube.display();
        this.scene.popMatrix();

        //Roof
        this.scene.pushMatrix();
        this.material_roof.apply();
        this.scene.translate(0, 0.5, 0.15);
        this.scene.rotate(Math.PI / 4, 0, 1, 0);
        this.scene.scale(1.5, 0.5, 1.5);
        this.scene.translate(0, 1, 0);
        this.roof.display();
        this.scene.popMatrix();

        //House columns
        this.scene.pushMatrix();
        this.material_collumns.apply();
        this.scene.translate(-0.9, 0, 0.7);
        this.scene.scale(0.1, 1, 0.1);
        this.column.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.9, 0, 0.7);
        this.scene.scale(0.1, 1, 0.1);
        this.column.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.4, 0, 0.7);
        this.scene.scale(0.1, 1, 0.1);
        this.column.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.4, 0, 0.7);
        this.scene.scale(0.1, 1, 0.1);
        this.column.display();
        this.scene.popMatrix();
    }
}

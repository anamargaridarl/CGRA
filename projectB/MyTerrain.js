/**
* MyTerrain
* @constructor
*/
class MyTerrain extends CGFobject {
    constructor(scene, nrDivs) {
        super(scene);

        this.plane = new Plane(scene, nrDivs);
        this.plane_material = new CGFappearance(scene);
        this.plane_material.loadTexture('images/terrain.jpg');
    }

    display() {
        this.plane_material.apply();
        this.plane.display();
    }
}
/**
* MyTerrain
* @constructor
*/
class MyTerrain extends CGFobject {
    constructor(scene, nrDivs) {
        super(scene);

        this.plane = new Plane(scene, nrDivs);
        this.plane_material = new CGFtexture(scene, 'images/terrain.jpg');
        
        this.heightmap_material = new CGFtexture(scene, 'images/heightmap.jpg');

        scene.appearance.setTexture(this.plane_material);
        scene.appearance.setTextureWrap('REPEAT', 'REPEAT');
        this.heightmap_material.bind(1);

        this.plane_shader = new CGFshader(scene.gl, 'shaders/terrain.vert', 'shaders/terrain.frag');
        this.plane_shader.setUniformsValues({uSampler: 1});
    }

    display() {
        this.scene.setActiveShader(this.plane_shader);
        this.plane.display();
        this.scene.setActiveShader(this.scene.defaultShader);
    }
}
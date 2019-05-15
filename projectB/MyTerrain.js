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

        this.altimetry_material = new CGFtexture(scene, 'images/altimetry.png');

        this.plane_shader = new CGFshader(scene.gl, 'shaders/terrain.vert', 'shaders/terrain.frag');
        this.plane_shader.setUniformsValues({uSampler2: 1, uSampler3: 2});
    }
    
    display() {
        this.scene.appearance.setTexture(this.plane_material);
        this.scene.appearance.setTextureWrap('REPEAT', 'REPEAT');
        this.heightmap_material.bind(1);
        this.altimetry_material.bind(2);

        this.scene.setActiveShader(this.plane_shader);
        this.plane.display();
        this.scene.setActiveShader(this.scene.defaultShader);
    }
}
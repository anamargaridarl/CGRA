/**
* MyTree
* @constructor
*/
class MyTree extends CGFobject {
    constructor(scene, trunk_height, trunk_radius, tree_top_height, tree_top_radius, trunk_texture, tree_top_texture) {
        super(scene);
        
        this.current_scene = scene

        this.trunk = new MyCylinder(scene, 8)
        this.top = new MyCone(scene, 8, 10)

        this.trunk_height = trunk_height
        this.trunk_radius = trunk_radius
        this.tree_top_height = tree_top_height
        this.tree_top_radius = tree_top_radius

        if (this.tree_top_radius <= this.trunk_radius) {
            this.tree_top_radius = this.trunk_radius + 2
        }

        this.trunk_material = new CGFappearance(scene)
        this.trunk_material.loadTexture(trunk_texture)
        this.trunk_material.setDiffuse(1, 1, 1, 1.0);
        this.trunk_material.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.trunk_material.setShininess(0.1);

        this.tree_top_material = new CGFappearance(scene)
        this.tree_top_material.loadTexture(tree_top_texture)
    }

    display() {
        this.current_scene.pushMatrix()
        this.trunk_material.apply()
        this.current_scene.scale(this.trunk_radius, this.trunk_height, this.trunk_radius)
        this.trunk.display()
        this.current_scene.popMatrix()

        this.current_scene.pushMatrix()
        this.tree_top_material.apply()
        this.current_scene.translate(0, this.trunk_height, 0)
        this.current_scene.scale(this.tree_top_radius, this.tree_top_height, this.tree_top_radius)
        this.top.display()
        this.current_scene.popMatrix()
    }
}
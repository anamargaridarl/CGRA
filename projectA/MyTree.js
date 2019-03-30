/**
* MyPrism
* @constructor
*/
class MyTree extends CGFobject {
    constructor(scene, trunk_height, trunk_radius, tree_top_height, tree_top_radius, trunk_texture, tree_top_texture) {
        super(scene);
        
        this.current_scene = scene

        this.trunk = new MyCylinder(scene, 8)
        this.top = new MyCone(scene, 8, 10)

        this.trunk_height = trunk_height
        
        if (trunk_radius < tree_top_radius)
            this.trunk_radius = trunk_radius
        else
            this.trunk_radius = tree_top_radius - 1
        
        this.tree_top_radius = tree_top_radius
        this.tree_top_height = tree_top_height
        this.trunk_texture = trunk_texture
        this.tree_top_texture = tree_top_texture
    }

    display() {
        this.current_scene.pushMatrix()
        this.current_scene.scale(this.trunk_radius, this.trunk_height, this.trunk_radius)
        this.trunk.display()
        this.current_scene.popMatrix()

        this.current_scene.pushMatrix()
        this.current_scene.translate(0, this.trunk_height, 0)
        this.current_scene.scale(this.tree_top_radius, this.tree_top_height, this.tree_top_radius)
        this.top.display()
        this.current_scene.popMatrix()
    }
}
/**
* MyTreeRowPatch
* @constructor
*/
class MyTreeRowPatch extends CGFobject {
    constructor(scene) {
        super(scene)

        this.trees = []
        this.offsets = []

        for (var i = 0; i < 6; ++i) {
            this.trunk_height = Math.trunc(Math.random() * 2 + 1) + 0.5
            this.trunk_radius = Math.random() * (0.4 + 0.2) + 0.2;
            this.tree_top_height = Math.trunc(Math.random() * 2 + 1)
            this.tree_top_radius = Math.trunc(Math.random() * 2 + 1)

            this.trees.push(new MyTree(scene, this.trunk_height, this.trunk_radius, this.tree_top_height, this.tree_top_radius))
            this.offsets.push([(Math.random() * 10) % 3 - 1, (Math.random() * 10) % 3 - 1])
        }
    }

    display() {
        for (var i = 0; i < 6; ++i) {
            this.scene.pushMatrix()
            this.scene.translate(3 * i + this.offsets[i][0], 0, this.offsets[i][1])
            this.trees[i].display()
            this.scene.popMatrix()
        }
    }
}
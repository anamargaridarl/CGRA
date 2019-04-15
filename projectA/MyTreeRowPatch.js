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
            this.trunk_height = Math.random() * (2 - 1) + 1;
            this.trunk_radius = Math.random() * (0.7 - 0.2) + 0.2;
            this.tree_top_height = Math.random() * (2 - 1.2) + 1.2;
            this.tree_top_radius = Math.random() * (1.3 - 1) + 1;

            this.trees.push(new MyTree(scene, this.trunk_height, this.trunk_radius, this.tree_top_height, this.tree_top_radius, 'images/trunk.jpg', 'images/treetop.jpg'))
            this.offsets.push([((Math.trunc(Math.random() * 10) % 3) - 1) / 2, ((Math.trunc(Math.random() * 10) % 3) - 1) / 2])
        }
    }

    display() {
        this.scene.pushMatrix()
        for (var i = 0; i < 6; ++i) {
            this.scene.translate(i == 0 ? 0 : 3.6 + this.offsets[i][0], 0, this.offsets[i][1])
            this.trees[i].display()
        }
        this.scene.popMatrix()
    }
}
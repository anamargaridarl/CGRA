/**
* MyTreeGroupPatch
* @constructor
*/
class MyTreeGroupPatch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.trees = []
        this.offsets = []

        for (var i = 0; i < 9; ++i) {
            // TODO: Change to other values to randomize a bit
            this.trunk_height = Math.trunc(Math.random() * 2 + 1)
            this.trunk_radius = Math.trunc(Math.random() * 1 + 1) - 0.5;
            this.tree_top_height = Math.trunc(Math.random() * 2 + 1)
            this.tree_top_radius = Math.trunc(Math.random() * 2 + 1)
            
            this.trees.push(new MyTree(scene, this.trunk_height, this.trunk_radius, this.tree_top_height, this.tree_top_radius))
            this.offsets.push([(Math.trunc((Math.random() * 10)) % 3) - (1 / 2), (Math.trunc((Math.random() * 10)) % 3) - (1 / 2)])
        }
    }

    display() {
        for (var i = 0; i < 9; i += 3) {
            this.scene.pushMatrix()
            this.scene.translate(0, 0, 7 * (i / 3))
            this.trees[i].display()

            this.scene.translate(5 + this.offsets[i + 1][0], 0, this.offsets[i + 1][1])
            this.trees[i + 1].display()

            this.scene.translate(5 + this.offsets[i + 2][0], 0, this.offsets[i + 2][1])
            this.trees[i + 2].display()

            this.scene.popMatrix()
        }
    }
}
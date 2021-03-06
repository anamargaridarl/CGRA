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
            this.trunk_height = Math.random() * (2 - 1) + 1;
            this.trunk_radius = Math.random() * (0.7 - 0.2) + 0.2;
            this.tree_top_height = Math.random() * (2 - 1.2) + 1.2;
            this.tree_top_radius = Math.random() * (1.3 - 1) + 1;

            this.trees.push(new MyTree(scene, this.trunk_height, this.trunk_radius, this.tree_top_height, this.tree_top_radius, 'images/trunk.jpg', 'images/treetop.jpg'))
            this.offsets.push([((Math.trunc(Math.random() * 10) % 3) - 1) / 2, ((Math.trunc(Math.random() * 10) % 3) - 1) / 2])
        }

        console.log(this.offsets)
    }

    display() {
        for (var i = 0; i < 9; i += 3) {
            this.scene.pushMatrix()
            this.scene.translate(this.offsets[i][0], 0, 3.6 * (i / 3) + this.offsets[i][1])
            this.trees[i].display()

            this.scene.translate(3.6 + this.offsets[i + 1][0], 0, this.offsets[i + 1][1])
            this.trees[i + 1].display()

            this.scene.translate(3.6 + this.offsets[i + 2][0], 0, this.offsets[i + 2][1])
            this.trees[i + 2].display()

            this.scene.popMatrix()
        }
    }
}
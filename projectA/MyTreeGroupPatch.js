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
            this.trees.push(new MyTree(scene, 2, 2, 2, 2)) // TODO: Change to other values to randomize a bit
            this.offsets.push([(Math.trunc((Math.random() * 10)) % 3) - 1, (Math.trunc((Math.random() * 10)) % 3) - 1])
        }
    }

    display() {
        for (var i = 0; i < 9; i += 3) {
            this.scene.pushMatrix()
            this.scene.translate(0, 0, 5 * (i / 3))
            this.trees[i].display()

            this.scene.translate(5 + this.offsets[i + 1][0], 0, this.offsets[i + 1][1])
            this.trees[i + 1].display()

            this.scene.translate(5 + this.offsets[i + 2][0], 0, this.offsets[i + 2][1])
            this.trees[i + 2].display()

            this.scene.popMatrix()
        }
    }
}
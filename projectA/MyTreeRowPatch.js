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
            this.trees.push(new MyTree(scene, 2, 2, 2, 2)) // TODO: Change to other values to randomize a bit
            this.offsets.push([(Math.trunc((Math.random() * 10)) % 3) - 1, (Math.trunc((Math.random() * 10)) % 3) - 1])
        }
    }

    display() {
        for (var i = 0; i < 6; ++i) {
            this.scene.pushMatrix()
            this.scene.translate(5 * i + this.offsets[i][0], 0, this.offsets[i][1])
            this.trees[i].display()
            this.scene.popMatrix()
        }
    }
}
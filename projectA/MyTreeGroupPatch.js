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
            this.trees.push(new MyTree(scene, 2, 2, 2, 2))
            this.offsets.push([(Math.trunc((Math.random() * 10)) % 3) - 1, 0, (Math.trunc((Math.random() * 10)) % 3) - 1])
        }

        console.log(this.offsets)
    }

    display() {
        for (var i = 0; i < 3; ++i) {
            this.scene.pushMatrix()
            this.scene.translate(0, 0, j > 0 ? 5 * i: 0);
            
            for (var j = 0, tree_index = 3 * i + j; j < 3; ++j) {
                this.scene.pushMatrix()

                this.scene.translate(5 * j, 0, 0);
                
                this.trees[tree_index].display();
                this.scene.popMatrix();
            }

            this.scene.popMatrix();

        }
    }
}
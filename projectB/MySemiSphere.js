class MySemiSphere extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);

        this.slices = slices;
        this.stacks = stacks;

        this.initBuffers();
    }

    initBuffers() {

        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var alpha = (2 * Math.PI) / this.slices;

        var betaSphere = (Math.PI * 0.5) / this.stacks;

        for (var j = 0; j < this.stacks + 1; j++) {
            for (i = 0; i < this.slices; i++) {

                this.vertices.push(Math.cos(alpha * i) * Math.cos(betaSphere * j), Math.sin(alpha * i) * Math.cos(betaSphere * j), Math.sin(betaSphere * j));

                this.normals.push(Math.cos(alpha * i) * Math.cos(betaSphere * j), Math.sin(alpha * i) * Math.cos(betaSphere * j), Math.sin(betaSphere * j));

                this.texCoords.push((Math.cos(i * alpha) * Math.cos(betaSphere * j) + 1) / 2, (Math.sin(i * alpha) * Math.cos(betaSphere * j) + 1) / 2);

            }
        }

        for (var j = 0; j < this.stacks; j++) {
            for (var i = 0; i < this.slices; i++) {

                if (i == this.slices - 1) {
                    //0
                    this.indices.push(this.slices * j, this.slices * (j + 1), i + this.slices * (j + 1));
                    this.indices.push(this.slices * j, i + this.slices * (j + 1), i + this.slices * j);
                } else {
                    //1
                    this.indices.push(i + this.slices * j, 1 + i + this.slices * j, i + this.slices * (j + 1));
                    this.indices.push(1 + i + this.slices * j, 1 + i + this.slices * (j + 1), i + this.slices * (j + 1));
                }

            }
        }
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
};
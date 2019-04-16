/**
* MyCilinder
* @constructor
*/
class MyCylinder extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2 * Math.PI / this.slices;

        for (var i = 0; i < this.slices; i++) {
            var sa = Math.sin(ang)
            var saa = Math.sin(ang + alphaAng)
            var ca = Math.cos(ang)
            var caa = Math.cos(ang + alphaAng)

            this.vertices.push(ca, 1, -sa)
            this.vertices.push(ca, 0, -sa)
            this.vertices.push(caa, 0, -saa)
            this.vertices.push(caa, 1, -saa)

            // Compute normal direction
            var normal = [
                caa,
                0,
                -saa
            ]

            var normal2 = [
                ca,
                0,
                -sa
            ]

            // Normalize vector
            var nsize = Math.sqrt(
                normal[0] * normal[0] +
                normal[1] * normal[1] +
                normal[2] * normal[2]
            )

            normal[0] /= nsize
            normal[1] /= nsize
            normal[2] /= nsize

            var nsize = Math.sqrt(
                normal2[0] * normal2[0] +
                normal2[1] * normal2[1] +
                normal2[2] * normal2[2]
            )

            normal2[0] /= nsize
            normal2[1] /= nsize
            normal2[2] /= nsize

            // push normal once for each 0vertex of this rectangle
            this.normals.push(...normal2)
            this.normals.push(...normal2)
            this.normals.push(...normal)
            this.normals.push(...normal)

            this.texCoords.push((1 / this.slices) * i, 1,
                (1 / this.slices) * i, 0,
                1 / this.slices * (i + 1), 0,
                1 / this.slices * (i + 1), 1);

            this.indices.push(4 * i, (4 * i + 1), (4 * i + 2), (4 * i + 2), (4 * i + 3), 4 * i)
            ang += alphaAng;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
        this.initNormalVizBuffers();
    }

}



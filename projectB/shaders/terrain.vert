attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform sampler2D uSampler2;
uniform sampler2D uSampler3;

varying vec2 vTextureCoord;
varying vec4 newColor;

void main() {
	vec4 heightmap_color = texture2D(uSampler2, aTextureCoord);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition.x, aVertexPosition.y, aVertexPosition.z + (heightmap_color.z * 10.0), 1.0);
	
	vTextureCoord = aTextureCoord;
}


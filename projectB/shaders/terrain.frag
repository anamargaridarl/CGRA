#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying vec4 newColor;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform sampler2D uSampler3;

void main() {
	vec4 color = texture2D(uSampler, vTextureCoord);
	vec4 heightmap_color = texture2D(uSampler2, vTextureCoord);
	vec4 altimetry_color = texture2D(uSampler3, vec2(0, 1.0 - heightmap_color.r));

	gl_FragColor = altimetry_color * color;
}
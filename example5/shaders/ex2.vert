#ifdef GL_ES 
precision highp float; 
#endif 

 attribute vec3 aVertexPosition;

 uniform mat4 uMVMatrix; 
 uniform mat4 uPMatrix; 
 uniform mat4 uNMatrix; 
 uniform float normScale; 
 uniform float timeFactor;

varying vec4 screenPosition; 

void main() {
	
    vec3 offset = vec3(sin(timeFactor) ,0.0,0);

	vec4 pos = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset , 1.0);

	gl_Position = pos;
	screenPosition = pos;

}
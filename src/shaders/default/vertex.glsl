// #pragma glslify: import('../chunks/common-vertex.glsl')
//#pragma glslify: import('../chunks/extra-vertex.glsl')

// #pragma glslify: random = require(glsl-random) //2d

// #pragma glslify: snoise2 = require(glsl-noise/simplex/2d) 
// #pragma glslify: snoise3 = require(glsl-noise/simplex/3d) 
// #pragma glslify: snoise4 = require(glsl-noise/simplex/4d) 
// #pragma glslify: cnoise2 = require(glsl-noise/classic/2d) 
// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 
// #pragma glslify: cnoise4 = require(glsl-noise/classic/4d) 
// #pragma glslify: pnoise2 = require(glsl-noise/periodic/2d) 
// #pragma glslify: pnoise3 = require(glsl-noise/periodic/3d) 
// #pragma glslify: pnoise4 = require(glsl-noise/periodic/4d) 

// #pragma glslify: curl = require(glsl-curl-noise/curl) 

// #pragma glslify: worley3D = require(glsl-worley/worley3D.glsl) 
// #pragma glslify: worley2x2x2 = require(glsl-worley/worley2x2x2.glsl) 
// #pragma glslify: worley2D = require(glsl-worley/worley2D.glsl) 
// #pragma glslify: worley2x2 = require(glsl-worley/worley2x2.glsl) 

uniform float uTime;

varying vec2 vUv;
varying float vTime; 

void main() {

	vec4 modelPosition = modelMatrix * vec4(position, 1.0);
	vec4 modelViewPosition = viewMatrix * modelPosition;
	vec4 projectionPosition = projectionMatrix * modelViewPosition; 
	gl_Position = projectionPosition;

	// Fullscreen
	// gl_Position = vec4(position.x * 2.0, position.y * 2.0, position.z, 1.0);

	// Varyings
	vUv = uv;
	vTime = uTime; 
}
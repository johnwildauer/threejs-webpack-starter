// #pragma glslify: import('../chunks/common-fragment.glsl')
//#pragma glslify: import('../chunks/extra-fragment.glsl')

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

//#pragma glslify: curl = require(glsl-curl-noise/curl) 

// #pragma glslify: worley3D = require(glsl-worley/worley3D.glsl) 
// #pragma glslify: worley2x2x2 = require(glsl-worley/worley2x2x2.glsl) 
// #pragma glslify: worley2D = require(glsl-worley/worley2D.glsl) 
// #pragma glslify: worley2x2 = require(glsl-worley/worley2x2.glsl) 

varying vec2 vUv;
varying float vTime; 

void main() {

	gl_FragColor = vec4(vUv, 0.5, 1.0);
	
} 
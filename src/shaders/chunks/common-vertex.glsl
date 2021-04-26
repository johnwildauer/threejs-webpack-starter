#version 300 es

#define attribute in
#define varying out

precision highp float;
precision highp int;

#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
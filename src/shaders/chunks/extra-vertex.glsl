#define texture2D texture

#define HIGH_PRECISION
#define SHADER_NAME ShaderMaterial
#define VERTEX_TEXTURES
#define GAMMA_FACTOR 2
#define MAX_BONES 0
#define BONE_TEXTURE

uniform mat3 normalMatrix;
uniform vec3 cameraPosition;
uniform bool isOrthographic;

#ifdef USE_INSTANCING
	attribute mat4 instanceMatrix;
#endif
#ifdef USE_INSTANCING_COLOR
	attribute vec3 instanceColor;
#endif

#ifdef USE_TANGENT
	attribute vec4 tangent;
#endif
#ifdef USE_COLOR
	attribute vec3 color;
#endif
#ifdef USE_MORPHTARGETS
	attribute vec3 morphTarget0;
	attribute vec3 morphTarget1;
	attribute vec3 morphTarget2;
	attribute vec3 morphTarget3;
	#ifdef USE_MORPHNORMALS
		attribute vec3 morphNormal0;
		attribute vec3 morphNormal1;
		attribute vec3 morphNormal2;
		attribute vec3 morphNormal3;
	#else
		attribute vec3 morphTarget4;
		attribute vec3 morphTarget5;
		attribute vec3 morphTarget6;
		attribute vec3 morphTarget7;
	#endif
#endif
#ifdef USE_SKINNING
	attribute vec4 skinIndex;
	attribute vec4 skinWeight;
#endif
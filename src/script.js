import './style.css'
import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import defaultVertextShader from './shaders/default/vertex.glsl'
import defaultFragmentShader from './shaders/default/fragment.glsl'

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Loaders
const textureLoader = new THREE.TextureLoader()

// Plane
const geometry = new THREE.PlaneGeometry(1, 1, 32, 32)
const material = new THREE.RawShaderMaterial({
	uniforms: {
		uTime: { value: 0 },
	},
	//wireframe: true,
	// side: THREE.DoubleSide,
	transparent: true,
	vertexShader: defaultVertextShader,
	fragmentShader: defaultFragmentShader,
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Window Size and Resize
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}
window.addEventListener('resize', () => {
	// Update sizes
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight

	// Update camera
	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()

	// Update renderer
	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

let mouse
window.addEventListener('mousemove', e => {
	mouse = {
		x: e.clientX / window.innerWidth,
		y: e.clientY / window.innerHeight,
	}
})

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 0, 1)
scene.add(camera)

// Orbit Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
	canvas,
	antialias: true,
})
renderer.setClearColor(0x151515, 1)
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animation
const clock = new THREE.Clock()
const tick = () => {
	const elapsedTime = clock.getElapsedTime()

	// Update Materials
	if (material) {
		material.uniforms.uTime.value = elapsedTime
	}

	// Update controls
	controls.update()

	// Render
	renderer.render(scene, camera)

	// Call tick again on the next frame (23.976 fps option)
	window.requestAnimationFrame(tick)
	// setTimeout(() => {
	// 	window.requestAnimationFrame(tick)
	// }, 1000 / 23.976)
}
tick()

import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as dat from 'dat.gui'
import defaultVertextShader from './shaders/default/vertex.glsl'
import defaultFragmentShader from './shaders/default/fragment.glsl'

/**
 * Constants
 */
// Clock
const clock = new THREE.Clock()

// Debug
const gui = new dat.GUI()

/**
 * Variables
 */
let sceneReady = false
let sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}
var scene, camera, canvas, renderer, controls

/**
 * Init
 */
const init = () => {
	// Loaders
	const loadingManager = new THREE.LoadingManager(
		() => {
			//Loaded
		},

		// Progress
		(itemUrl, itemsLoaded, itemsTotal) => {
			const progressRatio = itemsLoaded / itemsTotal
		}
	)
	const gltfLoader = new GLTFLoader(loadingManager)
	const textureLoader = new THREE.TextureLoader(loadingManager)
	const cubeTextureLoader = new THREE.CubeTextureLoader(loadingManager)

	// Scene
	scene = new THREE.Scene()

	// Camera
	camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
	camera.position.set(0, 0, 1)
	scene.add(camera)

	// Renderer
	canvas = document.querySelector('canvas.webgl')
	renderer = new THREE.WebGLRenderer({
		canvas,
		antialias: true,
	})
	renderer.setClearColor(0x151515, 1)
	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

	// Orbit Controls
	controls = new OrbitControls(camera, canvas)
	controls.enableDamping = true

	// Plane
	const geometry = new THREE.PlaneGeometry(1, 1, 32, 32)
	const material = new THREE.ShaderMaterial({
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

	listeners()
	update()
}

/**
 * Listeners
 */
const listeners = () => {
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

	// Mouse Events
	let mouse
	window.addEventListener('mousemove', e => {
		mouse = {
			x: e.clientX / window.innerWidth,
			y: e.clientY / window.innerHeight,
		}
	})
}

/**
 * Update
 */
const update = () => {
	const elapsedTime = clock.getElapsedTime()

	// Update Materials
	// if (material) {
	// 	material.uniforms.uTime.value = elapsedTime
	// }

	// Update controls
	controls.update()

	// Render
	renderer.render(scene, camera)

	// Call tick again on the next frame (23.976 fps option)
	window.requestAnimationFrame(update)
	// setTimeout(() => {
	// 	window.requestAnimationFrame(tick)
	// }, 1000 / 23.976)
}

init()

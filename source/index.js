var THREE = require("three")
var VRButton = require("./VRButton")

// Loading screen
var loadingScreen = document.createElement("div")
loadingScreen.classList.add("loading-screen")
loadingScreen.innerText = "Loading..."
document.body.appendChild(loadingScreen)

// Set up scene prerequisites

var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera()
scene.add(camera)

var audioListener = new THREE.AudioListener()
camera.add(audioListener)

var renderer = new THREE.WebGL1Renderer({antialias: true})
renderer.xr.enabled = true
document.body.appendChild(renderer.domElement)
document.body.appendChild(VRButton.createButton(renderer))
onResize()
renderer.setAnimationLoop(renderLoop.bind(this))
window.addEventListener("resize", onResize.bind(this))

function renderLoop() {
    renderer.render(scene, camera)
}

function onResize() {
    var width = window.innerWidth
    var height = window.innerHeight
    renderer.setSize(width, height)
    camera.aspect = width/height
    camera.updateProjectionMatrix()
}

// Set up scene

var sphereGeom = new THREE.SphereGeometry(0.5, 20, 20)
var wireframeMat = new THREE.MeshBasicMaterial({"color": "white", "wireframe": true})
var sphereMesh = new THREE.Mesh(sphereGeom, wireframeMat)
sphereMesh.position.copy(new THREE.Vector3(0,0.5,-2))
scene.add(sphereMesh)

var audioLoader = new THREE.AudioLoader()
var audioSource
audioLoader.load("./levanpolkka.mp3", (audioBuffer)=>{
    audioSource = new THREE.PositionalAudio(audioListener)
    audioSource.setBuffer(audioBuffer)
    audioSource.setLoop(true)
    sphereMesh.add(audioSource)
    loadingScreen.innerText = "Click anywhere when ready."
    window.addEventListener("click", ()=>{
        audioSource.play()
        loadingScreen.style.display = "none"
    })
})

var planeGeom = new THREE.PlaneGeometry(100,100,100,100)
var planeMesh = new THREE.Mesh(planeGeom, wireframeMat)
planeMesh.rotation.x = Math.PI/2
scene.add(planeMesh)



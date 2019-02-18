 // We need 3 things everytime we use Three.js
 // Scene + Camera + Renderer
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
// sets renderer background color
renderer.setClearColor("#222222")
document.body.appendChild( renderer.domElement )
camera.position.z = 5

var geometry = new THREE.IcosahedronGeometry(1, 1)
var material = new THREE.MeshStandardMaterial( { color: 0x013ADF1, flatShading: true, metalness: 0, roughness: 1 })
var icosahedron = new THREE.Mesh ( geometry, material )
scene.add( icosahedron )

var geometry = new THREE.IcosahedronGeometry( 3, 1)
var material = new THREE.MeshBasicMaterial( {
	color: "#9A2EFE", wireframe: true, transparent: true
})
var wireframeIcosahedron = new THREE.Mesh ( geometry, material )
scene.add( wireframeIcosahedron )

var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )

var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

function animate() {
	requestAnimationFrame( animate )
	icosahedron.rotation.x += 0.03;
	icosahedron.rotation.y += 0.03;
	wireframeIcosahedron.rotation.x -= 0.01;
	wireframeIcosahedron.rotation.y -= 0.01;
	renderer.render( scene, camera )
}
animate()

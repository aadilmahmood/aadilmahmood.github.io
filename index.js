import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.IcosahedronGeometry( 1.0,3 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 , wireframe: true} );
const shape = new THREE.Mesh( geometry, material );
scene.add( shape );


function animate() {

  shape.rotation.x += 0.01;
  shape.rotation.y += 0.01;

  renderer.render( scene, camera );

}
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.119.1/build/three.module.js";
import {OrbitControls} from "https://cdn.jsdelivr.net/npm/three@0.119.1/examples/jsm/controls/OrbitControls.js";

/*
SETTING UP NEW SCENE
when starting new three.js scene must have scene, camera, renderer
*/
//create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('cornflowerblue');
const camera = new THREE.PerspectiveCamera(
    50, //field of view
    window.innerWidth / window.innerHeight, //aspect ratio
    0.1, //nearest plane
    1000 //farthest plane
);

camera.position.z = 4;
camera.position.y = 1;

//create a renderer
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

//add controls
const controls = new OrbitControls(camera,renderer.domElement);
//create cube
// const geometry = new THREE.BoxGeometry(1,1,1, 10,10);
// const material = new THREE.MeshBasicMaterial({color: 'cornflowerblue', wireframe: true});
// const cube = new THREE.Mesh(geometry,material);
// scene.add(cube);

//create snowball
const snowGeometry = new THREE.SphereGeometry(0.25,32,16);
const snowMaterial = new THREE.MeshPhongMaterial({color:'#b8deed', emissive:'#406bb2', specular:'#f4f6ff', shininess:100, reflectivity:1, wireframe:false});
// const snowball = new THREE.Mesh(snowGeometry,snowMaterial);
// scene.add(snowball);
let snowball;
let snowbody = [];
for(let i=0;i<3;i++){
    snowball = new THREE.Mesh(snowGeometry,snowMaterial);
    snowball.position.y = i/2.5;
    // scene.add(snowball);
    snowbody.push(snowball);

    const group = new THREE.Group();
    group.add(snowball);
    scene.add(group);
};

//create lights
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0x404040, 1);
scene.add(directionalLight);

function animate(){
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    controls.update();
};
animate();

window.addEventListener('resize', onWindowResize);
function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene,camera);
};
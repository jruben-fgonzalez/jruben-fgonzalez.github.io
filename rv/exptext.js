function setup(){

THREE.ImageUtils.crossOrigin='';

var pared=new THREE.BoxGeometry(500, 100, 10);
var pared_1=new THREE.BoxGeometry(10, 100, 500);
var ladrillo = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/brick_diffuse.jpg');
var material2 = new THREE.MeshPhongMaterial({map: ladrillo });

Pared1= new THREE.Mesh(pared, material2);
Pared2= new THREE.Mesh(pared, material2);
Pared3= new THREE.Mesh(pared_1, material2);
Pared4= new THREE.Mesh(pared_1, material2);

function setup(){

THREE.ImageUtils.crossOrigin='';

var pared=new THREE.BoxGeometry(500, 100, 10);
var pared_1=new THREE.BoxGeometry(10, 100, 500);
var ladrillo = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/brick_diffuse.jpg');
var dragon= THREE.ImageUtils.loadTexture('http://thumbs.dreamstime.com/z/drag%C3%B3n-blanco-y-negro-39474403.jpg');
var material2 = new THREE.MeshPhongMaterial({map: ladrillo });
var material = new THREE.MeshBasicMaterial({map: dragon });

Pared1= new THREE.Mesh(pared, material2);
Pared2= new THREE.Mesh(pared, material2);
Pared3= new THREE.Mesh(pared_1, material2);
Pared4= new THREE.Mesh(pared_1, material2);

escena=new THREE.Scene();
escena.add(malla);
escena.add(Pared1);
escena.add(Pared2);
escena.add(Pared3);
escena.add(Pared4);

var forma=new THREE.CylinderGeometry(25,25,50,20);
var cilindro=new THREE.Mesh(forma,material);

camara=new THREE.PerspectiveCamera();
camara.position.z=1500;
camara.position.y = 600 ;  

escena.add(cilindro)

spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set(cilindro.position);

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

escena.add( spotLight );

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*0.95,window.innerHeight*0.95);
document.body.appendChild(renderer.domElement);
}
function loop(){
  
  renderer.render(escena,camara);
  requestAnimationFrame(loop);
  cilindro.rotation.y +=0.1;
}
  
var escena, camara, renderer, malla;
var spotLight
var Pared1,Pared2,Pared3,Pared4;
setup();
loop();

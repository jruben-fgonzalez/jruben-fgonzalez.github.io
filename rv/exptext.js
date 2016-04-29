function setup(){

THREE.ImageUtils.crossOrigin='';

var pared=new THREE.BoxGeometry(500, 100, 10);
var pared_1=new THREE.BoxGeometry(10, 100, 500);
var ladrillo = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/brick_diffuse.jpg');
var dragon= THREE.ImageUtils.loadTexture('http://www.conmishijos.com/assets/posts/6000/6013-dibujos-dinosaurio.jpg');
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

Pared1.position.z=250;
Pared2.position.z=-250;
Pared3.position.x=250;
Pared4.position.x=-250;

var forma=new THREE.CylinderGeometry(35,35,60,20);
cilindro=new THREE.Mesh(forma,material);

camara=new THREE.PerspectiveCamera();
camara.position.z=1200;
camara.position.y = 400 ;  

escena.add(cilindro)

light = new THREE.PointLight( 0xff0000, 1, 500 );
light.position.set( 0, 0, 0 );
escena.add( light );

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*0.95,window.innerHeight*0.95);
document.body.appendChild(renderer.domElement);
}
function loop(){
  
  renderer.render(escena,camara);
  requestAnimationFrame(loop);
  cilindro.rotation.y +=0.01;
}
  
var escena, camara, renderer, malla;
var light
var Pared1,Pared2,Pared3,Pared4;
var cilindro;
setup();
loop();

function setup(){

THREE.ImageUtils.crossOrigin='';

var pared=new THREE.BoxGeometry(500, 100, 10);
var pared_1=new THREE.BoxGeometry(10, 100, 500);
var ladrillo = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/brick_diffuse.jpg');
var material2 = new THREE.MeshLambertMaterial({map: ladrillo });
var textura = THREE.ImageUtils.loadTexture('http://akata93.github.io/r2d2.jpg');
var material = new THREE.MeshPhongMaterial({map: textura });

var Pared1= new THREE.Mesh(pared, material2);
var Pared2= new THREE.Mesh(pared, material2);
var Pared3= new THREE.Mesh(pared_1, material2);
var Pared4= new THREE.Mesh(pared_1, material2);

var figurabasepie=new THREE.Shape();
figurabasepie.moveTo(8,-35);
figurabasepie.lineTo(5,-32);
figurabasepie.lineTo(-5,-32);
figurabasepie.lineTo(-8,-35);
figurabasepie.lineTo(8,-35);
  
var formabasepie=new THREE.ExtrudeGeometry(figurabasepie, {amount:10});
  
var brazo1 = new THREE.CylinderGeometry( 4, 4, 50, 100 );
var brazo2 = new THREE.CylinderGeometry( 4, 4, 50, 100 );
var cabezaForma=new THREE.SphereGeometry(15, 100, 100);
var cuerpoForma=new THREE.CylinderGeometry(15, 15, 40, 100, 10);
var pie1Forma=new THREE.CylinderGeometry(5, 5, 10, 100, 10);

var cabeza= new THREE.Mesh(cabezaForma,material);
var cuerpo= new THREE.Mesh(cuerpoForma,material);
var pie1=new THREE.Mesh(pie1Forma,material);
var mallabasepie=new THREE.Mesh(formabasepie,material);
var mallabrazo1= new THREE.Mesh(brazo1,material);
var mallabrazo2= new THREE.Mesh(brazo2,material);

cabeza.position.y=20;
pie1.position.y=-25;
mallabrazo1.position.x=18;
mallabrazo2.position.x=-18;
mallabrazo1.position.y=-10;
mallabrazo2.position.y=-10;

var forma= new THREE.Geometry();

THREE.GeometryUtils.merge(forma,cabeza);
THREE.GeometryUtils.merge(forma,cuerpo);
THREE.GeometryUtils.merge(forma,pie1);
THREE.GeometryUtils.merge(forma,formabasepie);
THREE.GeometryUtils.merge(forma,mallabrazo1);
THREE.GeometryUtils.merge(forma,mallabrazo2);

malla=new THREE.Mesh(forma, material);

Pared1.position.z=250;
Pared2.position.z=-250;
Pared3.position.x=250;
Pared4.position.x=-250;

var luzPuntual = new THREE.PointLight(0xffffff);
  luzPuntual.position.x=500;
  luzPuntual.position.y=500;
  luzPuntual.position.z=500;
  
  var luzPuntual1 = new THREE.PointLight(0xffffff);
  luzPuntual1.position.x=-500;
  luzPuntual1.position.y=-500;
  luzPuntual1.position.z=500;
  var luzPuntual2 = new THREE.PointLight(0xffffff);
  luzPuntual2.position.x=0;
  luzPuntual2.position.y=500;
  luzPuntual2.position.z=0;
  
raycaster1= new THREE.Raycaster(malla.position , new THREE.Vector3(1,0,0));
raycaster2= new THREE.Raycaster(malla.position , new THREE.Vector3(-1,0,0));
raycaster3= new THREE.Raycaster(malla.position , new THREE.Vector3(0,1,0));
raycaster4= new THREE.Raycaster(malla.position , new THREE.Vector3(0,-1,0));
raycaster5= new THREE.Raycaster(malla.position , new THREE.Vector3(0,0,1));
raycaster6= new THREE.Raycaster(malla.position , new THREE.Vector3(0,0,-1));

escena=new THREE.Scene();
escena.add(malla);
escena.add(Pared1);
escena.add(Pared2);
escena.add(Pared3);
escena.add(Pared4);
escena.add(luzPuntual);
escena.add(luzPuntual1);
escena.add(luzPuntual2);

//escena.add(Pared3);
//escena.add(Pared4);

camara=new THREE.PerspectiveCamera();
//camara.rotation.x = 90 * Math.PI / 180;
camara.position.z=1500;
camara.position.y = 600 ;  
//camara.position.y=;

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*0.95,window.innerHeight*0.95);
document.body.appendChild(renderer.domElement);

step=0.8;


raycaster=new THREE.Raycaster(malla.position,new THREE.Vector3(0,1,0));
}

function loop(){
  
  var intersects=raycaster.intersectObjects(escena.children);
  if (intersects.length>0)dir=dir+1;
  
  
  requestAnimationFrame(loop);
  //malla.rotation.y+=0.01;
  //camara.rotation.y = 20 * Math.PI / 180;
  //camara.rotation.z = 10 * Math.PI / 180;
  if (dir=1){
    malla.position.x+=step;
    raycaster.set(malla.position,new THREE.Vector3(0,0,1));
  }
  else if(dir=2){
    malla.position.z+=step;
    raycaster.set(malla.position,new THREE.Vector3(-1,0,0));
  }
  else if(dir=3){
    malla.position.x-=step;
    raycaster.set(malla.position,new THREE.Vector3(0,0,-1));
  }
  else {
    malla.position.z-=step;
    dir=1;
    raycaster.set(malla.position,new THREE.Vector3(1,0,0));
  }

  renderer.render(escena,camara);
}
  
var escena, camara, renderer, malla,obstaculo;
var raycaster;
var dir; 
dir=1;
setup();
loop();

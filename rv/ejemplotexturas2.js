function setup(){
  THREE.ImageUtils.crossOrigin='';
  var textura= THREE.ImgaeUtils.loadTexture('http://threeejs.org/examples/textures/brick_diffuse.jpg');
  var material= new THREE.MeshLambertMaterial({map:textura});
  var forma=new THREE.BoxGeometry(1,4,9);
  mall= new THREE.Mesh(forma,material);
  
  var luzpuntual=new THREE.PointLight(0xFFFFFF);
  luzpuntual.position.x=10;
  luzpuntual.position.y=10;
  luzpuntual.position.z=10;
  
  escena=new THREE.scene
  
  }

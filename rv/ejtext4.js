function setup(){
        THREE.ImageUtils.crossOrigin='';
        var textura= THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
        var material= new THREE.MeshPhongMaterial({map:textura});
        var forma=new THREE.SphereGeometry(1,100,100);
        malla= new THREE.Mesh(forma,material);
        malla.rotation.z+=0.25;
  
        var luzpuntual=new THREE.PointLight(0xFFFFFF);
        luzpuntual.position.x=10;
        luzpuntual.position.y=10;
        luzpuntual.position.z=10;
        
        escena=new THREE.Scene();
        escena.add(malla);
        escena.add(luzpuntual);
        
        camara=new THREE.PerspectiveCamera();
        camara.position.z=5;
        renderer=new THREE.WebGLRenderer();
        renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
        document.body.appendChild(renderer.domElement);
        }
      function loop(){
        requestAnimationFrame(loop);
        
        malla.rotation.y+=0.01;
        
        renderer.render(escena,camara);
        }
        
      var escena, camara, renderer, malla;
      setup();
      loop();

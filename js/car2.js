let scene, camera, renderer, container;

function init(){
  container = document.querySelector(".scene");
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);

  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 5000);
  //add
  camera.rotation.y = 45/180*Math.PI;
  camera.position.x = 800;
  camera.position.y = 100;
  camera.position.z = 1000;
  //

  const hlight = new THREE.AmbientLight(0x404040, 100);
  scene.add(hlight);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  let loader = new THREE.GLTFLoader();
  loader.load('./lancia_fulvia_rallye/scene.gltf', function(gltf){
    //add
    car = gltf.scene.children[0];
    car.scale.set(0.5, 0.5, 0.5);
    //
    scene.add(gltf.scene);
    renderer.render(scene, camera);
  }) ;
}
init();


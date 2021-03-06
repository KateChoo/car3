//Variables for setup
let container;
let camera;
let renderer;
let scene;
let car;

function init() {
  container = document.querySelector(".scene");
  //=============1.scene, camera ===============//
  scene = new THREE.Scene();

  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 1000;

  //Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 1, 5);
  //add
  const controls = new THREE.OrbitControls( camera, renderer.domElement );
  //controls = new THREE.OrbitControls(camera)
  //controls.addEventListener('change', renderer);
  //
  //=============1.END================//

  //=============4. light================//
  const ambient = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambient);
 
  const light = new THREE.DirectionalLight(0xffffff, 5);
  light.position.set(50, 50, 100);
  scene.add(light);
  //=============4.END================//

  //=============3.renderer================//
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);
  //=============3.renderer END================//

  //==============2. GLTF ================//
  let loader = new THREE.GLTFLoader();
  loader.load("./lancia_fulvia_rallye/scene.gltf", function(gltf) {
    scene.add(gltf.scene);
    car = gltf.scene.children[0];
    
    // let controls = new THREE.DragControls( car, camera, renderer.domElement );
		// controls.addEventListener( 'drag', animate);
    animate();
  });
}

function animate() {
  
  //car.rotation.z += 0.005;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);


// Parâmetros do WhatsApp
const numeroWhatsApp = '5511993360112';

let selectedArt = 'img/LAKERS-NBA.jpg'; // Padrão
document.getElementById('whatsappBtn').onclick = function () {
  let texto = encodeURIComponent(
    `Olá, quero uma caneca personalizada com a arte: ${selectedArt.split('/').pop()}`
  );
  window.open(`https://wa.me/${numeroWhatsApp}?text=${texto}`, '_blank');
};

// THREE.JS + GLTFLoader para caneca
let scene, camera, renderer, controls, mug, textureLoader;

function setTexture(path) {
  selectedArt = path;
  if (!mug) return;
  textureLoader.load(path, function(tex) {
    mug.traverse(function(child){
      if (child.isMesh) {
        child.material.map = tex;
        child.material.needsUpdate = true;
      }
    });
  });
}

function init3D() {
  const container = document.getElementById('viewer');
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 0.1, 2);

  renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Luzes
  scene.add(new THREE.AmbientLight(0xffffff, 0.7));
  let dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(5, 10, 7);
  scene.add(dirLight);

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  // Load Modelo
  let loader = new THREE.GLTFLoader();
  loader.load('model/11oz-Mug.glb', function(gltf){
    mug = gltf.scene;
    mug.scale.set(1,1,1);
    scene.add(mug);
    setTexture(selectedArt);
    animate();
  });
  textureLoader = new THREE.TextureLoader();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

window.onload = init3D;

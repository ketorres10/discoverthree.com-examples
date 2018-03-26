// these need to be accessed inside more than one function so we'll declare them first
let camera;
let renderer;
let scene;
let mesh;

function init() {

  // create a Scene
  scene = new THREE.Scene();

  // set up the options for a perspective camera
  const fov = 35; // fov = Field Of View
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 1000;

  camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

  // every object is initially created at ( 0, 0, 0 )
  // we'll move the camera back a bit so that we can view the scene
  camera.position.set( 0, 0, 40 );

  // create a geometry
  const geometry = new THREE.BoxBufferGeometry( 15, 15, 15 );

  const textureLoader = new THREE.TextureLoader();

  const texture = textureLoader.load( 'textures/crate.jpg' );

  // if you are trying to load the file from your local file system, you will
  // run into security errors. You'll need to set up a server to load the
  // files, but for now a workaround is to load them from another website.
  // Replace the above line with this one:
  // const texture = textureLoader.load( 'https://raw.githubusercontent.com/looeee/discoverthree.com-examples/master/section-1/ch-4-textures-intro/textures/crate.jpg' );

  // create a Standard material
  const material = new THREE.MeshStandardMaterial( {
    color: 0xffffff,
    map: texture,
  } );

  // create a Mesh containing the geometry and material
  mesh = new THREE.Mesh( geometry, material );

  // add the mesh to the scene object
  scene.add( mesh );

  // create a global illumination light
  const ambientLight = new THREE.AmbientLight( 0xffffff, 1.0 );

  // remember to add the light to the scene
  scene.add( ambientLight );

  // Create an omnidirectional point light
  const pointLight = new THREE.PointLight( 0xffffff, 1.0 );

  pointLight.position.set( 0, 0, 20 );

  scene.add( pointLight );

  // create a WebGLRenderer and set its width and height
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );

  // add the automatically created <canvas> element to the page
  document.querySelector( '#container' ).appendChild( renderer.domElement );

  renderer.animate( () => {

    update();
    render();

  } );

}

// perform any updates to the scene, called once per frame
// avoid heavy computation here
function update() {

  // increase the mesh's rotation each frame
  mesh.rotation.z += 0.01;
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

}

// render, or 'draw a still image', of the scene
function render() {

  renderer.render( scene, camera );

}

// a function that will be called every time the window gets resized.
// It can get called a lot, so don't put any heavy computation in here!
function onWindowResize() {

  // set the aspect ratio to match the new browser window aspect ratio
  camera.aspect = window.innerWidth / window.innerHeight;

  // update the camera's frustum
  camera.updateProjectionMatrix();

  // update the size of the renderer AND the canvas
  renderer.setSize( window.innerWidth, window.innerHeight );

}

window.addEventListener( 'resize', onWindowResize );

// call the init function to set everything up
init();

import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import setupControls from './controls.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';

async function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 0.4;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( -20, 30, 30 );

  app.start();

  setupControls( app );

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  const meshes = createMeshes();
  app.scene.add( meshes.plinth, meshes.shapes );

  // todo targets

}

initScene();

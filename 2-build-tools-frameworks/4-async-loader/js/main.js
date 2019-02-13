import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';

import loadModels from './models.js';

import setupAnimation from './animation.js';

async function initScene() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( -2.5, 2.5, 6.5 );

  app.start();

  const lights = createLights();

  const models = await loadModels();

  setupAnimation( models );

  app.scene.add(

    lights.ambient,
    lights.main,

    models.parrot,
    models.flamingo,
    models.stork,

  );

}

initScene();
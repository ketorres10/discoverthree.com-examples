import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

export default function createApp() {

  const app = new App( { container: '#scene-container' } );

  app.init();

  app.renderer.toneMappingExposure = 0.4;
  app.scene.background = new Color( 0x8FBCD4 );
  app.camera.position.set( 3, 5, 6 );

  app.controls.autoRotate = true;
  app.controls.autoRotateSpeed = -0.5;

  return app;

}

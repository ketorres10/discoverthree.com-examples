import {
  RenderPass,
} from './vendor/three/postprocessing/RenderPass.js';

import {
  ShaderPass,
} from './vendor/three/postprocessing/ShaderPass.js';

import {
  KaleidoShader,
} from './vendor/three/shaders/KaleidoShader.js';

export default function initPostProcessing( composer, app ) {

  // first we need a render pass, which renders the actual scene
  // so that later passes can apply effects to it.
  const renderPass = new RenderPass( app.scene, app.camera );
  composer.addPass( renderPass );

  // next we'll add a funky kaleido pass
  // The effects should be easily apparent!
  const kaleidoPass = new ShaderPass( KaleidoShader );

  // look inside the KaleidoShader.js file to see that there are three
  // "uniforms" defined - these are variables that we can set, either
  // at load time, or changing up to once per frame

  // uniforms: {
  //
  //  "tDiffuse": { value: null },
  //  "sides":    { value: 6.0 },
  //  "angle":    { value: 0.0 }
  //
  // }

  // we can access them like this:

  kaleidoPass.uniforms.angle.value = 0;
  kaleidoPass.uniforms.sides.value = 3;

  // the last one is a special uniform that takes the result of the
  // previous pass in as a texture. You shouldn't modify this
  // kaleidoPass.uniforms.tDiffuse

  kaleidoPass.renderToScreen = true;

  composer.addPass( kaleidoPass );

  return composer;

}

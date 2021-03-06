import {
  AnimationMixer,
  Math as MathUtils,
} from './vendor/three/three.module.js';

function setupAnimationClips( model, offset ) {

  offset = offset || 0;

  const mixer = new AnimationMixer( model );

  model.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

  model.animations.forEach( ( clip ) => {

    const action = mixer.clipAction( clip );

    // set the birds to start at random times so that they  don't flap in sync
    action.startAt( offset ).play();


  } );

}

function setupSimpleRotation( mesh ) {

  mesh.userData.onUpdate = ( delta ) => {

    mesh.rotation.y += delta / 4;

  };

}

export default function setupAnimations( meshes, models, birdGroup ) {

  setupSimpleRotation( meshes.box );
  setupSimpleRotation( birdGroup );

  setupAnimationClips( models.parrot );

  models.birdsArray.forEach( ( bird ) => {

    setupAnimationClips( bird, MathUtils.randFloat( 0, 1.2 ) );

  } );

}

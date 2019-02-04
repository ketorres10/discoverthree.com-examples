function initLights( scene ) {

  const hemiLight = new THREE.HemisphereLight( 0xddeeff, 0x0f0e0d, 1 );
  scene.add( hemiLight );

  const mainLight = new THREE.SpotLight(
    0xffffff,
    1, // calculated using light.power below
    0, // distance
    Math.PI / 8, // angle
    0.5, // penumbra
    2, // decay
  );

  mainLight.power = 1700;

  mainLight.position.set( 2, 4, 6 );
  mainLight.castShadow = true;
  mainLight.shadow.mapSize.width = 1024;
  mainLight.shadow.mapSize.height = 1024;
  mainLight.shadow.camera.near = 3;
  mainLight.shadow.camera.far = 8;
  // mainLight.shadow.radius = 1.5;
  mainLight.shadow.bias = -0.0001;

  const diffuseLight = new THREE.SpotLight(
    0x444444,
    30,
    30, // distance
    Math.PI / 5, // angle
    0.5, // penumbra
    2, // decay
  );
  diffuseLight.position.set( -3, 1, 4 );
  diffuseLight.castShadow = true;
  diffuseLight.shadow.mapSize.width = 1024;
  diffuseLight.shadow.mapSize.height = 1024;
  diffuseLight.shadow.camera.near = 2;
  diffuseLight.shadow.camera.far = 8;
  // diffuseLight.shadow.radius = 1.5;
  diffuseLight.shadow.bias = -0.0001;

  const topLight = new THREE.SpotLight(
    0xffffff,
    25,
    20, // distance
    Math.PI / 6, // angle
    0.5, // penumbra
    2, // decay
  );
  topLight.position.set( 2, 7, -1 );
  topLight.castShadow = true;
  topLight.shadow.mapSize.width = 1024;
  topLight.shadow.mapSize.height = 1024;
  topLight.shadow.camera.near = 4;
  topLight.shadow.camera.far = 8;
  // topLight.shadow.radius = 3;
  topLight.shadow.bias = -0.0001;

  scene.add( mainLight, mainLight.target,
    diffuseLight, diffuseLight.target,
    topLight, topLight.target );


  return { mainLight, diffuseLight, topLight };

}
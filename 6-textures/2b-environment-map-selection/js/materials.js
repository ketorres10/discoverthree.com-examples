function initMaterial( scene ) {

  const brassColor = 0xB5A642;
  const silverColor = 0xC4CACE;

  const materials = {

    brassLambert: new THREE.MeshLambertMaterial( { color: brassColor } ),
    brassPhong: new THREE.MeshPhongMaterial( { color: brassColor } ),
    brassStandard: new THREE.MeshStandardMaterial( { metalness: 0.9, roughness: 0.2, color: brassColor } ),

    silverLambert: new THREE.MeshLambertMaterial( { color: silverColor } ),
    silverPhong: new THREE.MeshPhongMaterial( { color: silverColor } ),
    silverStandard: new THREE.MeshStandardMaterial( { metalness: 0.9, roughness: 0.2, color: silverColor } ),

  };

  // remember to convert the color to linear so that it looks correct
  // by the time it ends up on our screens!
  for ( material in materials ) {

    materials[ material ].color.convertSRGBToLinear();

  }

  const envMaps = loadEnvMaps();

  setupMaterialControls( materials, envMaps, scene );

  return materials;

}

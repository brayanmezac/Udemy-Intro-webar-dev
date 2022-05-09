const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener("DOMContentLoaded", () => {
  const start = async () => {
    // initialize MindAR
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      // imageTargetSrc: '../../assets/targets/course-banner.mind',
      imageTargetSrc: "../../assets/targets/Side-.mind",
      maxTrack: 2,
    });
    const { renderer, scene, camera } = mindarThree;

    // create AR object
    const geometry1 = new THREE.PlaneGeometry(1.5, 1.5);
    const material1 = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.5,
    });
    const plane1 = new THREE.Mesh(geometry1, material1);

    const geometry2 = new THREE.PlaneGeometry(1.5, 1.5);
    const material2 = new THREE.MeshBasicMaterial({
      color: 0xebf1f5,
      transparent: false,
      opacity: 0.5,
    });
    const plane2 = new THREE.Mesh(geometry2, material2);

    // create anchor
    const anchorside1 = mindarThree.addAnchor(0);
    anchorside1.group.add(plane1);
    const anchorside2 = mindarThree.addAnchor(1);
    anchorside2.group.add(plane2);

    // start AR
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  };
  start();
});

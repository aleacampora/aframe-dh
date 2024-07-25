import 'aframe'

export const AFrameBody = ({myModel3D, bodyImg}) => {
  return (
    <a-scene>
      <a-assets>
        <a-asset-item id="my-model" src={myModel3D}></a-asset-item>
      </a-assets>
      <a-sky src={bodyImg}></a-sky>
      <a-entity
        gltf-model="#my-model"
        position="0 0 5"
        scale="1 1 1"
        rotation="0 0 0"
      ></a-entity>
    </a-scene>
  );
}
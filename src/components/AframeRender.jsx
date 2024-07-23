import 'aframe'
import bodyImg from '../assets/background360.jpg'
import myModel3D from '../assets/models/myModel.glb'

export const AFrameBody = () => {
  return (
    <a-scene>
      {/* Assets */}
      <a-assets>
        <img id="background" src={bodyImg} alt="Background" />
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
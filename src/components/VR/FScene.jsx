import 'aframe'
import React from 'react'
import bodyImg from '../../assets/images/bg3.jpg'
import myModel3D from '../../assets/models/myModel.glb'
import { AFrameBody } from './render/AframeRender'

export const FScene = () => {
  // return (
  //   <a-scene>
  //     {/* Assets */}
  //     <a-assets>
  //       <a-asset-item id="my-model" src={myModel3D}></a-asset-item>
  //     </a-assets>
  //     <a-sky src={bodyImg}></a-sky>
      
  //     <a-entity
  //       gltf-model="#my-model"
  //       position="0 0 5"
  //       scale="1 1 1"
  //       rotation="0 0 0"
  //     ></a-entity>
  //   </a-scene>
  // );
  return <AFrameBody bodyImg={bodyImg} myModel3D={myModel3D}/>
}
import 'aframe'
import React from 'react'
import bodyImg from '../../assets/images/background360.jpg'
import myModel3D from '../../assets/models/myModel.glb'
import { AFrameBody } from './render/AframeRender'

export const SScene = () => {
  return <AFrameBody bodyImg={bodyImg} myModel3D={myModel3D}/>
}
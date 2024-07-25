import 'aframe'
import React from 'react'
import bodyImg from '../../assets/images/bg2.jpg'
import myModel3D from '../../assets/models/myModel.glb'
import { AFrameBody } from './render/AframeRender'

export const TScene = () => {
  return <AFrameBody bodyImg={bodyImg} myModel3D={myModel3D}/>
}
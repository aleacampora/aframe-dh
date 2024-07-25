import React from 'react'
import { RouteMapper } from '../router/RouteMapper'
import { Routes } from 'react-router-dom'

const Switch = () => {

  return (
    <Routes>
      {RouteMapper()}
    </Routes>
  )
}

export default Switch
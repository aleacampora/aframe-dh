import React from 'react'
import { Button } from '../components/Button'
import useHandleClickBackToHP from '../assets/utils/backToHomePage'

const PageNF = () => {

  const errorStatus = 404
  const message = "Page not found"

  const handleClickBackToHP = useHandleClickBackToHP()

  return (
    <React.Fragment>
      <div className="body-hp">
        <h1>Pagina non trovata!</h1>
        <h2>{message}: {errorStatus}</h2>
        {/* <button className='btn-hp' onClick={handleClickBackToHP}>
          Ritorna alla Homepage
        </button> */}
        <Button onClick={handleClickBackToHP} message={'Ritorna alla Homepage'}/>
      </div>
    </React.Fragment>
  )
}

export default PageNF
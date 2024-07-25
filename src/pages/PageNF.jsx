import React from 'react'
import { Button } from '../components/Button'
import useHandleClickBackToHP from '../assets/utils/backToHomePage'

const PageNF = () => {

  //handle click for back to home
  const handleClickBackToHP = useHandleClickBackToHP()
  
  return (
    <React.Fragment>
      <div className="body-hp">
        <h1>Pagina non trovata!</h1>
        <h2>Page not found: 404</h2>
        <Button 
          message={'Ritorna alla Homepage'}
          onClick={handleClickBackToHP} 
        />
      </div>
    </React.Fragment>
  )
}

export default PageNF
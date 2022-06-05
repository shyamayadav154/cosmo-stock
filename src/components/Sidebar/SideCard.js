import axios from 'axios'
import React, { useEffect } from 'react'

export default function SideCard({symbol}) {

  useEffect(() => {
    
  
   
  }, [])
  

  return (
    <div className='side-card'>
      <h1>{symbol.toUpperCase()}</h1>
    </div>
  )
}

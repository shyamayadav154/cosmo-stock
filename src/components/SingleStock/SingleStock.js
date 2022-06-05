import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function SingleStock() {
  const param = useParams()
  console.log(param);

  useEffect(()=>{
    
  },[])
  return (
    <div>
      <h1>{param.symbol}</h1>
    </div>
  )
}

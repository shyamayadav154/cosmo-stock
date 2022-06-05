import React from 'react'

export default function SingleFooterData({data,name}) {
  return (
    <div>
      <p>{name}</p>
      <h4>{data}</h4>
    </div>
  )
}

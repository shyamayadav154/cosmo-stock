import React from 'react'
import SideCard from './SideCard'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <h3>Top Stock this week</h3>
      <SideCard symbol='msft' />
      <SideCard symbol='amzn' />
      <SideCard symbol='dis'/>
    </div>
  );
}

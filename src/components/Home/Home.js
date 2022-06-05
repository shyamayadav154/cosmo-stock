import React from 'react'
import Header from '../Header/Header'
import Search from '../Search/Search'
import Sidebar from '../Sidebar/Sidebar'

export default function Home() {
  return (
    <div>

        <Header/>
        <div className='tail'>
        <Search/>
        <Sidebar/>
        

        </div>
        

    </div>
  )
}

import React from 'react'
import {Sidebar, Banner} from '../../components'

const Home = () => {
  return (
    <div className='w-main flex'>
      <div className='flex flex-col gap-5 w-[25%] flex-auto'>
          <Sidebar />
          <span> Deal daily</span>
      </div>
      <div className='flex flex-col gap-5 pl-5 w-[75%] flex-auto'>
          <Banner />
          <span> Deal daily</span>
      </div>
    </div>
  )
}

export default Home
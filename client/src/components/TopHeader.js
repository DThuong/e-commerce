import React, {memo} from 'react'
import { Link } from 'react-router-dom'
import path from '../utils/path'
const TopHeader = () => {
  return (
    <div className='h-[38px] w-full bg-main flex items-center justify-center'>
        <div className='w-main flex items-center justify-center text-xs text-white'>
            <Link to = {`${path.LOGIN}`} className='hover:text-gray-800'>Sign In or create account</Link>
        </div>
    </div>
  )
}

export default memo(TopHeader)
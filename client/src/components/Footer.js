import React, {memo} from 'react'
import icons from '../utils/icons'

const {MdEmail} = icons
const Footer = () => {
  return (
    <div className='w-full'>
        <div className='h-[103px] w-full bg-main flex items-center justify-center'>
            <div className='w-main flex items-center justify-center'>
                <div className='flex flex-col flex-1'>
                    <span className='text-[20px] text-gray-100'>SIGN UP TO NEWSLETTER</span>
                    <small className='text-[13px] text-gray-300'>Subcribe now and receive weekly newsletter</small>
                </div>
                <div className='flex flex-1 items-center'>
                    <input className='p-4 pr-0 rounded-l-full bg-[#f04646] outline-none text-gray-100 placeholder:text-sm placeholder:text-gray-200 placeholder:italic placeholder:opacity-50' type='text' placeholder='Email address'/>
                    <div className='w-[56px] h-[56px] rounded-r-full bg-[#f04646] flex items-center justify-center text-white'><MdEmail size={16}/> </div>
                </div>
            </div>
        </div>
        <div className='h-[407px] w-full bg-gray-800 flex items-center justify-center text-[13px]'>
            <div className='w-main flex items-center'>
                <div className='flex-1'>About us</div>
                <div className='flex-1'>Information</div>
                <div className='flex-1'>Who we are</div>
                <div className='flex-1'>#DigitalWorldStore</div>
            </div>
        </div>
    </div>

  )
}

export default memo(Footer)
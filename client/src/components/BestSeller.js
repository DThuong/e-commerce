import React, {useEffect, useState} from 'react'
import { apigetProduct } from '../apis'

const tabs = [
  {id: 1, name: 'Best Sellers'},
  {id: 2, name: 'New Arrivals'}
]
const BestSeller = () => {
    const [bestSeller, setbestSeller] = useState(null)
    const [newProducts, setnewProducts] = useState(null)
    const [activedtab, setactivedtab] = useState(1)
  
    useEffect(() => async () => {
      try {
        const response = await Promise.all([apigetProduct({sort: '-sold'}), apigetProduct({sort: '-createdAt'})])
        if(response[0].success) setbestSeller(response[0].products)
        if(response[1].success) setnewProducts(response[1].products)
      } catch (error) {
        console.error("Failed to fetch products:", error.response?.data || error.message);
      }
    }, [])
  return (
    <div>
      <div className='flex text-[20px] gap-8 pb-4 border-b-2 border-main'>
      {tabs.map(el => (
          <span
            key={el.id}
            className={`font-bold capitalized border-r cursor-pointer ${activedtab === el.id ? 'text-main' : ''}`}
            onClick={() => setactivedtab(el.id)}
          >
            {el.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default BestSeller
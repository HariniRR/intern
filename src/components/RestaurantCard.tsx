import React from 'react'
import {Star} from 'lucide-react'
import res from "../images/download.jpg" 
function RestaurantCard() {
  return (
    <div className='w-[350px] m-2'>
        <img className="w-full h-48 rounded-lg object-cover" src={res} />
        <div className='text-bold text-xl'>Dindigul Thalappakatti</div>
        <div className='flex'>
        <Star color='green' strokeWidth={3} size={20}></Star>
        <div className='text-bold'>4.3 • 20-25 mins</div>
        </div>
        
        <div className='text-gray-500'>Biryani, Barbecue, South Indian, Chinese</div>
        <div className='text-gray-500'>SS Colony</div>
    </div>
  )
}

export default RestaurantCard

import React from 'react'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-700 bg-white/40 text-2xl font-bold">Resorts</h3>
        <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" className="w-full h-full object-cover relative border-4 border-white shadow-lg" />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-700 bg-white/40 text-2xl font-bold">Cruises</h3>
        <img src="https://images.pexels.com/photos/260584/pexels-photo-260584.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" className="w-full h-full object-cover relative border-4 border-white shadow-lg" />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-700 bg-white/40 text-2xl font-bold">Excursions</h3>
        <img src="https://images.pexels.com/photos/4392990/pexels-photo-4392990.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" className="w-full h-full object-cover relative border-4 border-white shadow-lg" />
      </div>
    </div>
  )
}

export default Activities
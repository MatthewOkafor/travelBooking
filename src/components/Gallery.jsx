import React from 'react'

const Gallery = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full px-4 py-16' id='gallery'>
      <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
        <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/4385707/pexels-photo-4385707.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
      </div>
      <div>
        <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/5472298/pexels-photo-5472298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
      <div>
        <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/235837/pexels-photo-235837.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
      </div>
      <div>
        <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/618902/pexels-photo-618902.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
      </div>
      <div>
        <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/6140458/pexels-photo-6140458.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
      </div>
      </div>
    </div>
  )
}

export default Gallery
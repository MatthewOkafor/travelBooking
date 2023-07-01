import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" className="w-full h-full object-cover" />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-gray-700 p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekaway</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem odit eveniet! Consequuntur quae molestiae, nobis voluptatibus aperiam tempora recusandae. Quas nemo excepturi explicabo architecto.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
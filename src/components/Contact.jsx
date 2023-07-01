import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full p-4 py-16' id='contact'>
      <h2 className="text-center text-gray-700">Send Us a Message</h2>
      <p className="text-center text-gray-700 py-2">We're standing by.</p>
      <div className="grid md:grid-cols-2">
        <img src="https://images.unsplash.com/photo-1611043714658-af3e56bc5299?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="/" className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]" />
        <form>
          <div className="grid grid-cols-2">
            <input className='border m-2 p-2' type="text" placeholder='First' />
            <input className='border m-2 p-2' type="text" placeholder='Last' />
            <input className='border m-2 p-2' type="email" placeholder='Email' />
            <input className='border m-2 p-2' type="tel" placeholder='Phone' />
            <input className='border col-span-2 m-2 p-2' type="text" placeholder='Address' />
            <textarea className='border col-span-2 m-2 p-2' name="" id="" cols="30" rows="10"></textarea>
            <button className='col-span-2 m-2'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
import React from 'react'

const VideoTitle = (props) => {
  return (
    <div className=' bg-gradient-to-r from-black  px-14 absolute py-[30%] w-screen'>
    
      <h1 className='text-5xl font-bold text-white'>{props.title}</h1>
      <p className='py-6 text-lg w-2/4 text-white '>{props.overview}</p>
      <div className=''>
        <button className='bg-gray-500  font-bold text-white  p-4 px-16 text-lg rounded-xl hover:bg-opacity-40 hover:-translate-y-5'> ▶️Play</button>
        <button className='bg-white font-bold mx-2 text-black p-4 px-16 text-lg rounded-xl hover:bg-opacity-40 hover:-translate-y-5'> More Info</button>
      </div>

    </div>
  )
}

export default VideoTitle

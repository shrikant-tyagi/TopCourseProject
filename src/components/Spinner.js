import React from 'react'

function Spinner() {
  return (
    <div className=' flex flex-col items-center justify-center space-y-2 h-[100vh]'>
        <div className='spinner'></div>
        <p>Loading....</p>
    </div>
  )
}

export default Spinner;
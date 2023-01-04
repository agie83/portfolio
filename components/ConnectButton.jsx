import React from 'react'

function ConnectButton({icon}) {
  return (
    <div className='rounded-full p-4 shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300 text-xl'>
     {icon}
  </div>
  )
}

export default ConnectButton

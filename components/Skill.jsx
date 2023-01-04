import Image from 'next/image'
import React from 'react'

function Skill({img, skillName}) {
  return (
    <div className='p-6 shadow-lg border hover:scale-105 duration-300'>
      <div className='grid sm:grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={`/assets/skills/${img}`} alt="" width="50" height="50"/>
        </div>
        <div className='hidden sm:flex flex-col items-center justify-center'>
          <h3>{skillName}</h3>
        </div>
      </div>
    </div>
  )
}

export default Skill

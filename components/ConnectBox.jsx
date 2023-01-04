import React from 'react'
import ConnectButton from './ConnectButton'

function ConnectBox({iconList}) {
  const iconsUrl = 
    {
      FaLinkedinIn: 'https://www.linkedin.com/in/agnes-edina-agocs/',
      FaGithub: 'https://github.com/agie83',
      MdOutlineAlternateEmail: '/#contact'
    };
    console.log(iconList[0]());
  return (
    <div className='flex w-full sm:w-[80%] justify-between items-center my-4 text-[#d9379a]'>
      {
        iconList.map((item, index) => (
          (iconsUrl[item.name])
          ?
          <a key={index}
            href={iconsUrl[item.name]}
            target= {(iconsUrl[item.name].indexOf('#') === -1) ? "_blank" : '_self'}
            rel="noreferrer"
            className="flex flex-row gap-2 items-center justify-center"
          >
            <ConnectButton key={index} icon={item()} />
          </a>
          : (
            <div key={index} >
            {item.name}
            <ConnectButton icon={item()} />
            </div>
          
          )
        )
        )
      }
    </div>
  )
}

export default ConnectBox

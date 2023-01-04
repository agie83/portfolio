import React from 'react'
import Link from 'next/link'

function NavList({ulStyle, liStyle, setNav}) {
  
  return (
    <ul className={ulStyle}>
      <li onClick={()=> setNav(false)} className={liStyle}>
        <Link href="/">Home</Link>
      </li>
      <li onClick={()=> setNav(false)} className={liStyle}>
        <Link href="/#about">About</Link>
      </li>
      <li onClick={()=> setNav(false)} className={liStyle}>
        <Link href="/#skills">Skills</Link>
      </li>
      <li onClick={()=> setNav(false)} className={liStyle}>
        <Link href="/#projects">Projects</Link>
      </li>
      <li onClick={()=> setNav(false)} className={liStyle}>
        <Link href="/#contact">Contact</Link>
      </li>
  </ul>
  )
}

export default NavList

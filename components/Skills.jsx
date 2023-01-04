import Image from 'next/image'
import React from 'react'
import Skill from './Skill';

function Skills() {
  // const skillList = `
  //   HTML5
  //   CSS/SCSS/SASS
  //   Bootstrap
  //   Javascript
  //   jQuery
  //   React
  //   NodeJS
  //   Swagger
  //   Docker
  //   MongoDB
  //   mySQL
  //   Firebase
  //   Jest
  //   Jira
  //   PHP
  //   Photoshop`;
    const skillList = 'html,css,sass,tailwind,javascript,react,nextjs,node,mongo,firebase,php,mySQL,github,photoshop';
    const skillArray = skillList.split(',');


  return (
    <div id="skills" className='container w-full md:h-screen p-2'>
      <div className='flex flex-col justify-center max-w-[1240px] h-full mx-auto py-8 pt-20 md:py-16 md:pt-20'>
        <p className='text-xl tracking-widest uppercase text-main-color'>Skills</p>
          <h2 className='py-4'>What I do</h2>
          <p className='pb-3'>Below is a quick overview of my main technical skill sets and technologies I use.</p>
          <div className='grid grid-cols-3 sm:grid-cols-2 md:grid-cols-5 gap-6'>
          {
            skillArray.map((skill, index) => (
              <Skill key={skill+index} img={`${skill}.png`} skillName={skill} />
            ))
          }
          </div>
      </div>
    </div>
  )
}

export default Skills

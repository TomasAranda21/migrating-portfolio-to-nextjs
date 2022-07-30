import React, { useState } from 'react'
import Experiencia from '../skills/Experiencia'
import MisSkills from '../skills/MisSkills'

import { useInView } from 'react-intersection-observer'


const Skills = ({dark, experiencia, skills}) => {

  const {ref: refSkills, inView: skillsView } = useInView({triggerOnce: true});

  return (
    
    <section className=" bg-verdeClaro5 bg-azul5  "  >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
        <path fill={`${dark ? '#334155' : "#f1f5f9"}`} fillOpacity="1" d="M0,160L30,160C60,160,120,160,180,176C240,192,300,224,360,218.7C420,213,480,171,540,149.3C600,128,660,128,720,133.3C780,139,840,149,900,176C960,203,1020,245,1080,266.7C1140,288,1200,288,1260,282.7C1320,277,1380,267,1410,261.3L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
      </svg>

      <div id="skills"
      className={`${skillsView ? "lg:w-4/6 mx-auto py-10 flex flex-col gap-6 p-5 lg:p-0 items-center 2xl:items-start relative top-0 delay-200 duration-700 opacity-100 ease-in-out" 
      : "lg:w-4/6 mx-auto py-10 flex flex-col gap-6 p-5 lg:p-0 relative top-96 opacity-0 "}`} ref={refSkills}>

        <h2 className="text-4xl font-black text-left">Skills & Experiencia</h2>

      <div className="flex flex-col 2xl:flex-row  w-full mx-auto justify-between gap-10">
        <div className="lg:w-1/2 mx-auto w-full">
        

          <div className="py-3">

            <MisSkills skills={skills}/>

          </div>
        
        </div>


      <div className="flex flex-col mt-5 items-center gap-8 2xl:w-1/2 lg:w-3/4 mx-auto" >
        <div className="flex gap-3 items-center">
          <h3 className="font-medium text-2xl">Experiencia</h3>

        </div>

          <div className="flex justify-center gap-8 flex-wrap">

          {experiencia?.map(exp => (

            <div key={exp.name} className="">

              <Experiencia date={exp.date} title={exp.name} description={exp.description} client={exp.client} link={exp.link} img={exp.img}/>

            </div>


          ))}

        </div>
        
      </div>

      </div>

      </div>

{/* 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={`${dark ? '#0f172a' : "#f9fafb"}`} fillOpacity="1" d="M0,32L30,37.3C60,43,120,53,180,96C240,139,300,213,360,245.3C420,277,480,267,540,234.7C600,203,660,149,720,144C780,139,840,181,900,213.3C960,245,1020,267,1080,266.7C1140,267,1200,245,1260,208C1320,171,1380,117,1410,90.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
      </svg> */}

    </section>
  )
}

export default Skills
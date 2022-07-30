import React, {useEffect, useRef} from 'react'
import ButtonAbout from '../buttons/ButtonAbout'
import { useInView } from 'react-intersection-observer'
import style from './section.module.css'


const About = ({dark}) => {

  const {ref, inView } = useInView({triggerOnce: true});


  return (

    <section className="pt-20 lg:pt-32" id="about">

      <div className={inView ? `relative top-0 opacity-100 delay-300 duration-700 ease-in-out` : 'relative top-96 opacity-0 duration-700 ease-in-out'} ref={ref}>

        <div className="relative lg:pt-40 lg:w-5/6 mx-auto p-5 lg:p-0 " >
          <div className="flex lg:flex-row flex-col justify-center gap-20 relative z-10 items-center">


            <div className="lg:w-1/3 flex flex-col gap-5 font-medium dark:text-gray-50">

              <h1 className="text-3xl font-fontTitles uppercase font-bold ">Sobre mi</h1>
              <p>A mi corta edad realicé un negocio online que me permitió comprar mi primera computadora y pude encontrar este maravilloso mundo de la programación. Lo que al principio solo fue un pasatiempo, con estudio y dedicación se convirtió de las cosas que más amo hacer en mi día a día. Por lo que siempre trabajo para lograr el mejor resultado en cada proyecto que tengo en mis manos.</p>
              
              <p>Lo próximo que quiero en mi vida es tener una oportunidad laboral y colaborar con mis conocimientos, además de seguir aprendiendo para seguir creciendo como persona y como profesional.</p>
            
              <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1YVsHxjlzsqtcL1OiGve8F7mkfVRIKHmS/view">
              <ButtonAbout text="Descargar CV"/>
              </a>

            </div>

            <div className='overflow-hidden  rounded-full relative bg-gray-50 dark:bg-gray-900'>
              <img className="object-cover" src="https://res.cloudinary.com/dj1pp4ivb/image/upload/v1658883669/foto-cs-min_gllnfr.png" alt="" width="340"  />
            </div>

            <div className={`lg:block hidden ${style.bg_about}`}>

            </div>

          </div>

          <div className='absolute z-0 text-center text-gray-100 dark:text-gray-800 text-8xl xl:text-11xl 2xl:text-10xl font-bold top-0 lg:left-1/3'>
            <h2>About</h2>

          </div>

        </div>

        <div className="block">
        
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
            <path fill={`${dark ? '#334155' : "#f1f5f9"}`} fillOpacity="1" d="M0,224L48,229.3C96,235,192,245,288,213.3C384,181,480,107,576,112C672,117,768,203,864,229.3C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>

        </div>
      </div>

    </section>


  )
}

export default About
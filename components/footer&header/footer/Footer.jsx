import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,  faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { useInView } from 'react-intersection-observer'

const Footer = ({dark}) => {

    const {ref, inView } = useInView({triggerOnce: true});


  return (

    
        <footer  className="bg-verdeClaro1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path fill={`${dark ? '#0f172a' : "#f9fafb"}`} fillOpacity="1" d="M0,96L60,106.7C120,117,240,139,360,144C480,149,600,139,720,122.7C840,107,960,85,1080,85.3C1200,85,1320,107,1380,117.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>

            <div className={inView ? ` pb-5 px-2 relative   opacity-100 delay-300 duration-700 ease-in-out ` : ' pb-5 relative opacity-0 delay-300  duration-700 ease-in-out'}  ref={ref}
            >
                <div className="flex justify-center 2xl:hidden py-5">
                    <ul className="flex text-3xl text-gray-800 gap-10 items-center">
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/tomas--aranda"><li className="hover:text-cyan-500"><FontAwesomeIcon icon={faLinkedinIn}/></li></a>
                        <a rel="noopener noreferrer" target="_blank" href="https://github.com/TomasAranda21"><li className="hover:text-cyan-500"><FontAwesomeIcon icon={faGithub} className=""/></li></a>
                        <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/tomas_aranda24/?utm_medium=copy_link"><li className="hover:text-cyan-500"><FontAwesomeIcon icon={faInstagram}/></li></a>
                    </ul>
                </div>

                <div className="text-center flex flex-col mb-5 justify-end gap-2 text-gray-800">
                    <h2>Diseñado y construido por <span className="hover:text-sky-600 font-bold duration-200 ease-linear">Tomás Aranda</span></h2>
                    <p>&copy; copyright 2022 Todos los derechos reservados</p>
                </div>
                
            </div>
            
                
        </footer>
  )
}

export default Footer
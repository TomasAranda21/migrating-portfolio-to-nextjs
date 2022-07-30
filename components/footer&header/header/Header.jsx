import React, { useEffect, useState } from 'react'
import style from './Header.module.css'
import NavDesktop from './NavDesktop'
import NavMovile from './NavMovile'
import { useInView } from 'react-intersection-observer'


const Header = ({dark, isDark}) => {

    const [isMovil, setIsMovil] = useState(false)

    
    const {ref: refHello, inView: helloView } = useInView({triggerOnce: true});
    
    const {ref: refName, inView: nameView } = useInView({triggerOnce: true});

    useEffect(() => {

        if(window.screen.width <= 1024) {

            setIsMovil(true)
        }

    }, [])

  return (

    <header className={`${style.header_container}  xl:h-screen bg-verdeClaro2 `} >

    <div >


        {!isMovil ?

            <NavDesktop dark={dark} isDark={isDark}/>

        : <NavMovile dark={dark} isDark={isDark}/>

    
        }

        <section className="flex justify-center text-gray-900 pt-16 pb-48 lg:pb-52 xl:pb-20 2xl:pb-12 " id="home" >

            <div className="flex flex-col gap-3 pt-20 lg:pt-40 "  ref={refHello}>
                <div className={helloView ? `relative bottom-0 opacity-100 delay-300 duration-700 ease-in-out ` : 'relative bottom-96 opacity-0 duration-700 ease-in-out'} >
                    <p className="text-2xl md:text-4xl font-semibold text-center lg:text-left">Hola!👋🏻  Me llamo</p>
                    <h1 className="xl:text-10xl md:text-7xl text-5xl text-center font-bold my-5">Tomás Aranda.</h1>
                </div>
                
                <div className={nameView ? `relative top-0 flex justify-end opacity-100 pb-20 delay-500 duration-700 ease-in-out` : 'relative  top-64 opacity-0 duration-700 ease-in-out'} ref={refName}>
                
                    <p className={`${style.borderText} ${style.spanText}`}>Soy Frontend Developer.</p>
                    <p className={`${style.wave} ${style.spanText}`}>Soy Frontend Developer.</p>

                </div>
            </div>

        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill={`${dark ? '#0f172a' : "#f9fafb"}`} fillOpacity="1" d="M0,0L48,37.3C96,75,192,149,288,197.3C384,245,480,267,576,266.7C672,267,768,245,864,224C960,203,1056,181,1152,192C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
    </div>


    </header>
        
        
  )
}

export default Header
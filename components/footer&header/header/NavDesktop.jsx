import React from 'react'
import ButtonCV from '../../buttons/Button'
import style from './Header.module.css'
import Links from './Links'
import { useInView } from 'react-intersection-observer'



const NavDesktop = ({dark, isDark}) => {

    const {ref: refHome, inView: homeView } = useInView({triggerOnce: true});


  return (
    <>
    <div ref={refHome}>
        <div 
        className={`${homeView ? "fixed top-0  w-full px-7 2xl:px-0 z-50 bg-verdeClaro2 delay-1000 duration-700 ease-in-out" 
        : ` ${style.nav_desktop_hidden} delay-500 duration-700 ease-in-out  fixed w-full px-7 2xl:px-0 z-50 bg-verdeClaro2`}`} >

            <nav 
            className="2xl:w-2/3 w-full flex mx-auto justify-between py-5 items-center font-fontSecundaria">

                

                <Links text={'T/A'} className="font-bold text-xl" nav="home"/>
                


                    <div>
                        <Links text='Inicio' nav="home"/>

                        <Links text='Portfolio' nav="portfolio"/>
                        <Links text='Skills' nav="skills"/>
                        <Links text='Contacto' nav="contacto"/>
                    </div>

                    <div className="flex items-center gap-10">

                        <div className="w-48 relative h-14">
                            <div className="absolute ">

                            <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1YVsHxjlzsqtcL1OiGve8F7mkfVRIKHmS/view">
                                    <ButtonCV text="descargar cv"/>
                            </a>
                                
                            </div>
                        </div>
                </div>

            </nav>

        </div>

    </div>
    </>
  )
}

export default NavDesktop
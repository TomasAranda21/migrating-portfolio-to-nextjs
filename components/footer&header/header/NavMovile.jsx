import React, { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faBriefcase, faCode , faEnvelope, faHome, faXmark} from '@fortawesome/free-solid-svg-icons'
import ButtonCV from '../../buttons/Button'
import style from './Header.module.css'
import Links from './Links'
import LinksMovile from './LinksMovile'
import { useInView } from 'react-intersection-observer'


const NavMovile = ({dark, isDark}) => {

    const navRef = useRef(null)

    const [nav, setNav] = useState(false)

    const {ref, inView } = useInView();


    useEffect(() => {

        if(nav) {
            navRef.current.classList.add(style.nav_view)
            navRef.current.classList.remove(style.nav_hidden)

        }else{

            navRef.current.classList.remove(style.nav_view)
            navRef.current.classList.add(style.nav_hidden)

        }

    }, [nav])

    console.log(navRef)



  return (
    <> 
        <div className="fixed top-0 w-full z-50 bg-verdeClaro2 right-0" ref={ref} >
            <nav className={`${inView ?  "flex justify-between pt-4 p-3 lg:px-10 items-center relative bottom-0 delay-700 duration-700 ease-in-out " : "flex justify-between pt-4 p-3 items-center relative bottom-96"} `}>


                <Links text={'T/A'} className="font-bold text-xl" nav="home"/>
                
                <FontAwesomeIcon onClick={() => setNav(true)} icon={faBars} className="text-2xl" width="40"/>

                    <div ref={navRef} className={style.nav_hidden}>
 
                        <div className="px-5">
                            <button className="uppercase text-3xl font-bold" onClick={() => setNav(false)}><FontAwesomeIcon icon={faXmark}/></button>
                        </div>

                        <div className="flex flex-col gap-8 items-center pt-20 text-xs">
                            <LinksMovile nav={"home"} text={"Inicio"} onClick={() => setNav(false)} icon={faHome}/>
                            <LinksMovile nav={"portfolio"} text={"Portfolio"} onClick={() => setNav(false)} icon={faBriefcase}/>
                            <LinksMovile nav={"skills"} text={"Skills"} onClick={() => setNav(false)} icon={faCode}/>
                            <LinksMovile nav={"contacto"} text={"Contacto"} onClick={() => setNav(false)} icon={faEnvelope}/>

                            <div className="px-5 mt-8">
                                <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1YVsHxjlzsqtcL1OiGve8F7mkfVRIKHmS/view">
                                    <ButtonCV text="descargar cv"/>
                                </a>
                            </div>
                        </div>
                    </div>

            </nav>

        </div>
    

    
    </>


  )


}

export default NavMovile
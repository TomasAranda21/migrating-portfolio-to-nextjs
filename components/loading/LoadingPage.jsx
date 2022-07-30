import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faBriefcase, faCode , faEnvelope, faHome, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import style from './loading.module.css'
import Img_fondo from '../../public/fondoLoading.jpg'
import Image from 'next/image'


const LoadingPage = () => {
  return (
    <div className={style.no_freeze_spinner}>
  
        <img className="h-screen w-full brightness-75 object-cover" src="/fondoLoading.jpg" />

            <div id={style.no_freeze_spinner}>
                <div className="">

                    <i>
                        <FontAwesomeIcon icon={faHome} className="icons"/>
                    </i>

                    <i>
                        <FontAwesomeIcon icon={faBriefcase} className="icons"/>
                    </i>

                    <i>
                        <FontAwesomeIcon icon={faCode} className="icons"/>
                    </i>
                    
                <div>

                </div>
                </div>
            </div>
        </div>
  )
}

export default LoadingPage
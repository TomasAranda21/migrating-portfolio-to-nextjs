import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'


const HardSkills = ({text}) => {
  return (
    <div 
    className="flex  gap-2 md:text-base hover:text-azul4 duration-300 text-sm 
    hover:cursor-default cursor-default ease-in-out items-center">
        <FontAwesomeIcon icon={faCircleCheck} className="text-xs"/>
        <h3 className="">{text}</h3>
    </div>
  )
}

export default HardSkills
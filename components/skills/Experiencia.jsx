import React from 'react'
import style from './skills.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'



const Experiencia = ({date, title, description, client, link, img}) => {
  return (

    <div className="shadow-lg border-2 rounded-sm flex flex-col sm:flex-row items-center text-base border-violet-800">

      <div className=" p-4 mt-3 sm:mt-0  text-gray-50 font-bold h-68 w-72 overflow-hidden ">
            <img src={img} alt="" width="" 
            className="rounded-md shadow-lg shadow-gray-900 border object-cover w-full hover:scale-105 duration-300 ease-in-out"/>
      </div>

      <div className="p-4 bg-gray-50 flex flex-col gap-2 sm:w-2/3 mx-auto">

          <h3 className="text-center bg-gray-100 uppercase border font-bold border-gray-500  py-2">"{title}"</h3>

          <p className="text-center mb-2">{description}</p>

          <p className="font-semibold ">Cliente: <span className="font-normal">{client}</span></p>

          <p><span className="font-bold">Fecha:{" "}</span>{date}</p>

          <div className="flex flex-col mt-20">
            <a href={link} target="_blank" rel="noopener noreferrer"
            className="border px-4 py-1
            bg-gray-900 text-white text-center font-semibold rounded-md duration-200 ease-in-out hover:bg-gray-700 hover:border hover:border-azul2">
              
              <FontAwesomeIcon icon={faArrowUpRightFromSquare}/> Link de la app </a>
          </div>
      </div>
    </div>

  )
}

export default Experiencia
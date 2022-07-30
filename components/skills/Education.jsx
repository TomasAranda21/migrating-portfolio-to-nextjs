import React from 'react'

const Education = () => {

  return (

    <div className="shadow-sm border rounded-sm flex text-base border-violet-400 absolute">

      <div className="bg-sky-800 p-4 text-gray-50 font-bold">
          <p></p>
          <p className="text-center text-xl">Curso JavaScript</p>
      </div>

      <div className="p-4 bg-gray-50 flex flex-col gap-2">
          <p className="font-semibold">Institucion: <span className="font-normal">Udemy</span></p>

          <p className=" font-semibold">Nombre: <span className="font-normal">JavaScript Moderno Guía Definitiva Construye +15 Proyectos</span></p>

          <p className=" font-semibold">Fecha: <span className="capitalize font-normal">Octubre 2021 a Febrero 2022</span></p>

          <div className="flex justify-end mt-2">
            <a href="" rel="noopener noreferrer" 
            className="border px-4 py-1
            bg-gray-900 text-white font-semibold rounded-md">
              
              Link de credencial</a>
          </div>
      </div>


    </div>


  )

}

export default Education
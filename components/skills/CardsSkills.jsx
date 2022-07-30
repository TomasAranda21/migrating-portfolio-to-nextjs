import React from 'react'

const CardsSkills = ({text, children}) => {

  return (

    <div className=" hover:shadow-2xl rounded-md text-gray-800 px-8 py-3 border cursor-pointer hover:bg-amarillo duration-300">
        <div className="text-2xl">
            <h2 className="font-semibold">{text}</h2>
        </div>

        <div 
        className="grid justify-center grid-cols-2 gap-8 my-10">

            {children}

        </div>
    </div>

  )
}

export default CardsSkills
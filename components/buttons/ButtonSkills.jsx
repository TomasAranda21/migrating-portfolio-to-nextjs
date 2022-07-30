import React from 'react'

const ButtonSkills = ({text, onClick, education}) => {

  return (

    <button onClick={onClick}
    
    className={`px-10 p-3 border-2 rounded-lg text-gray-800 font-bold focus:bg-naraja focus:text-white`}
    
    
    >{text}</button>

  )

}

export default ButtonSkills
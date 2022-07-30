import React from 'react'
import style from './button.module.css'

const Button = ({text, type}) => {
  return (

    <button className={` ${style.button_principal} 
    border uppercase rounded-sm border-l-4 p-3 border-b-4 border-azul2 hover:border-slate-200  w-full
    text-rojoOscuro font-bold
    hover:text-gray-900`}
    type={type}
    >{text}</button>

  )
}

export default Button
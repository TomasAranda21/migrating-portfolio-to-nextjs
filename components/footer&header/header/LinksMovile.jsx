import React from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LinksMovile = ({nav, text, texto_links, onClick, icon }) => {
  return (

        <Link to={nav} activeClass="active" spy={true} smooth={true} offset={-80} duration={1300} isDynamic={true} delay={400} 
        onClick={onClick}
        className="text-xl flex flex-col items-center gap-2"> 
            {text}
            <FontAwesomeIcon  icon={icon} className="text-2xl" width="40"/>
      </Link>

  )
}

export default LinksMovile
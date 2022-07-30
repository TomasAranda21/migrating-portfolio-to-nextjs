import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const DivRight = () => {

    const {ref, inView } = useInView({triggerOnce: true});

  return (
    <div  className="w-full m-0 p-0 text-2xl  hidden 2xl:block">

    <div className={inView ? `relative top-0 opacity-100 delay-300 duration-700 ease-in-out ` : 'relative top-96 opacity-0 duration-700 ease-in-out'}  ref={ref}>
        <div className="fixed w-1/6 right-0 bottom-0  z-50">
            
            <div 
                className="text-lg hidden md:flex md:flex-col md:items-center text-gray-900 dark:text-gray-50 ml-20 mb-10">
                    <div className='font_mail rotate-90 block hover:text-cyan-500'>
                        <a rel="noopener noreferrer" href="mailto:tomasaranda2018@gmail.com" className=""><h2>tomasaranda2018@gmail.com</h2></a>
                    </div>
                <div className='border border-l-3 rotate-90 w-24 mt-44 mb-6 border-gray-400 dark:text-gray-50'></div>
            </div>
        </div>

    </div>
</div>
  )
}

export default DivRight
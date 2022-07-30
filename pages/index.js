import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer&header/footer/Footer'
import Header from '../components/footer&header/header/Header'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Portfolio from '../components/sections/Portfolio'
import Skills from '../components/sections/Skills'

import DivLeft from '../components/aside/DivLeft'
import DivRight from '../components/aside/DivRight'

import { collection, addDoc, getDocs, doc,onSnapshot,  } from "firebase/firestore";
import {db} from '../config/firebase'
import LoadingPage from '../components/loading/LoadingPage'
import { useEffect, useState } from 'react'


export default function Home() {

  const [dark, isDark] = useState(false)


  const [experiencia, setExperiencia] = useState([])

  
  const [proyects, setProyects] = useState([])
  
  const [skills, setSkills] = useState([])

  const [loading, setLoading] = useState(true)


  
  useEffect(() => {
    
    setTimeout(() => {
      
      setLoading(false)
      
    }, 1500)
    
    
    const getUser = onSnapshot(
      collection(db, "user"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        setExperiencia(list[0].experiencia)
        setProyects(list[0].proyects)
        setSkills(list[0].skills)
        },

        (error) => {
          console.log(error);
        }
        );
        
        return () => {
          
          getUser();
          
        };
      }, [])
      
      
      useEffect(() => {
        
        if (dark === true) {
          
          document.documentElement.classList.add('dark')
          
          console.log("Modo dark")
        } else {
          
          document.documentElement.classList.remove('dark')
          console.log("Modo light")
        }

      }, [dark])
      
      if(loading) return <LoadingPage/>


  return (
    <div className={""}>
      <Head>
      <link rel="icon" type="image/svg+xml" href='/favicon.png' />
      <meta name="description" content="Hola!, Me llamo Tomás Aranda y soy Front End Developer, este es mi portfolio."/>
      <meta name="author" content="Tomás Aranda"/>
      <meta name="keywords" content="desarrolo web, web, mi sitio, pagina web, pagina, portfolio, tomas aranda"/>
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&family=Inter:wght@300;400;500;600;700;900&family=Mulish:wght@400;500;600&display=swap" rel="stylesheet"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tomás Aranda</title>
      </Head>

    <div className=" font-fontPrincipal bg-gray-50 dark:bg-slate-900 overflow-x-hidden">
      <Header/>
      <DivLeft/>
      <DivRight/>
      <main className="">
          <About dark={dark}/>
          <Portfolio proyects={proyects} dark={dark}/>
          <Skills experiencia={experiencia} skills={skills} dark={dark}/>
          <Contact dark={dark}/>
        
      </main>


      <Footer/>
      </div>

     
    </div>
  )
}

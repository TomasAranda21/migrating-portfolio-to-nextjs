import React from 'react'
import CardsPortfolio from '../portfolio/Cards'
import { useInView } from 'react-intersection-observer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function SamplePrevArrow({className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", padding: "0px", color: "black", borderRadius: "100%" }}
      onClick={onClick}
    />
  );
}


const Portfolio = ({dark, proyects}) => {

  const {ref, inView } = useInView({triggerOnce: true});
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
 
    responsive: [
      {
        breakpoint: 1425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  }



  return (

    <section className="bg_portfolio bg-gray-100 dark:bg-slate-700" id="portfolio">

      <div className={inView ? `relative top-0 delay-200 opacity-100 duration-700 ease-in-out` : 'relative top-96 opacity-0 duration-700 ease-in-out'} ref={ref}>

        <div className=" flex flex-col gap-10 w-4/5 mx-auto ">

          <div className="pt-10 text-center ">
              <h1 className="text-4xl uppercase font-black">Portfolio</h1>
              
          </div>

          <div className="responsiveCarousel">

          <Slider {...settings}>
                {proyects?.map(proy => (
                    <div key={proy.name} className="">
                      <CardsPortfolio img={proy.img} name={proy.name} description={proy.description} linkWeb={proy.linkWeb} linkGit={proy.linkGit}/>

                    </div>
                ))}
          </Slider>


          </div>
        </div>

      </div>

    </section>
  )
}

export default Portfolio
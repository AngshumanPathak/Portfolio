import { useState, useEffect } from "react"

import {
    Carousel,
    
    
  } from "@/components/ui/carousel"

  import 'react-responsive-carousel/lib/styles/carousel.min.css'
  import NavBarRight from "../Shared/NavBarRight"


  const AutoPlayCarousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);


        return () => clearInterval(interval);
    }, [images.length]);
  
    return (
        <div className="flex justify-center items-center w-full">
          <div className="w-full overflow-hidden">
            <img
              src={images[currentIndex]}
              alt={`Carousel ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      );
    };



const RightComponent = () => {


    const ecommerceImages = [
        "https://i.postimg.cc/TPQ00Gnp/Dandelions-Of-Mind-Google-Chrome-12-20-2024-12-06-11-PM.png",
        "https://i.postimg.cc/8czq4tFV/Dandelions-Of-Mind-Google-Chrome-12-20-2024-12-06-40-PM.png",
        "https://i.postimg.cc/y6p5Bhgk/Dandelions-Of-Mind-Google-Chrome-12-20-2024-12-06-51-PM.png",
        "https://i.postimg.cc/g2WKPrDx/Dandelions-Of-Mind-Google-Chrome-12-20-2024-12-07-10-PM.png",
        "https://i.postimg.cc/43h4b4D1/Dandelions-Of-Mind-Google-Chrome-12-20-2024-12-07-19-PM.png",
        "https://i.postimg.cc/YSBZZp4R/Dandelions-Of-Mind-Google-Chrome-12-20-2024-12-09-10-PM.png",
      ];
    
      const carRentalImages = [
        "https://i.postimg.cc/Gt1RVHS4/IMG-20250306-WA0017.jpg",
        "https://i.postimg.cc/28GY9jd5/IMG-20250306-WA0018.jpg",
        "https://i.postimg.cc/NF7tcBWp/IMG-20250306-WA0019.jpg",
        "https://i.postimg.cc/v8Wb9tcf/IMG-20250306-WA0020.jpg",
        "https://i.postimg.cc/ncpZ19D5/IMG-20250306-WA0021.jpg",
      ];
    
  

  

    

  return (
    <div className='bg-gray-300 flex-col w-full h-full'>
        
        <NavBarRight />

        <div className='flex flex-col justify-center items-center'>            
        <div className='mt-8 border-2 border-black rounded-lg'>
        <h1 className="text-6xl font-bodoni-bold font-extrabold mb-2 text-black p-4">PROJECTS</h1>
        </div>
        
        
        <div className=" flex relative w-100" >
        <div className='m-8 bg-yellow-400 p-6 rounded-2xl shadow-lg h-100 w-4/5'>
         <h1 className='text-xl font-bodoni font-bold'>E-Commerce site</h1>
         <h2 className='text-md font-bodoni font-semibold mb-2'>Website Link: <a href="https://dandelions-of-mind-4bcdb8bd3434.herokuapp.com/"  className="text-white underline">Click here</a></h2>

         <p className="mb-2">
            Description: An end to end E-Commerce site with features like user authentication, product search, cart, payment gateway, order history and admin-dashboard.
            
         </p>

         <div className="flex justify-center items-center w-100">
         <Carousel>
         <AutoPlayCarousel images={ecommerceImages} />
         
          </Carousel>      
         
         </div>          
                                     
        </div>


        <div className='m-8 bg-yellow-400 p-6 rounded-2xl shadow-lg h-100 w-4/5'>
         <h1 className='text-xl font-bodoni font-bold'>NH 37 Car Rentals</h1>
         <h2 className='text-md font-bodoni font-semibold mb-2'>Website Link: <a href="https://www.nh37carrent.in/">Click here</a></h2>
         <p className="mb-2">
            Description: A self driving car rental booking site with filter based searches and more.
            
         </p>

         <div className="flex justify-center items-center w-100">
         <Carousel>
            <AutoPlayCarousel images={carRentalImages} />

          </Carousel> 

              
         
         </div>          
                                     
        </div>


        <div className='m-8 bg-yellow-400 p-6 rounded-2xl shadow-lg h-100 w-4/5'>
         <h1 className='text-xl font-bodoni font-bold'>Xongroh</h1>
         <h2 className='text-md font-bodoni font-semibold mb-4'>Under Development</h2>

         <div className="flex justify-center items-center w-100">
         <Carousel>
          
          </Carousel>      
         
         </div>          
                                     
        </div>


        </div>
        
        </div>
        
    </div>
  )
}

export default RightComponent

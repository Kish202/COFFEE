import React from "react";
import Tumbler from "../../assets/tumble.png";
import { motion } from "framer-motion";
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
function Hero() {
 const [sidebar, setSidebar]=useState(false);
 
  
 
 
 return (
         <main className="                                                min-h-screen overflow-x-hidden w-full bg-slate-700">
                <section className=  " bg-slate-700 w-full">

        <Navbar sidebar={sidebar} setSidebar={setSidebar}/>      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container place-items-center px-4 min-h-[850px]">
          <div className="text-lightOrange mt-[70px] md:mt-0 p-4 space-y-28 ">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffnes: 100,
                damping: 10,
                delay: 0.4,
              }}
              className="text-7xl font-bold  ml-14 leading-tight"
            >
              Light Tumbler
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "string",
              }}
              className="relative"
            >
              <div className="relative z-10 space-y-4 ">
                <h1 className="text-2xl">White Lifestle Lovers</h1>


<div className="bg-slate-900/50 h-full w-[50%] ml-[100px] pt-2 pb-2">


  <div className="top-0    relative -right-[-50px]">



 

                <h1 className="text-sm opacity-55 leading-loose ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit voluptatibus consequuntur odio, debitis cumque facilis
                  aut vero non maxime earum quo voluptas, illum quos voluptates
                  minima doloribus.
                </h1>
           
           </div>
           </div>
              </div>
              <div className="absolute -top-6 -left-10 w-[250px] h-[180px] bg-gray-700/25 "></div>
            </motion.div>
          </div>

          <div className="relative w-full ">
            <motion.img

initial={{opacity:0, scale:0}}
animate={{opacity:1, scale:1}}
transition={{type:"string",
  stiffness:100,
  damping:10,
  delay:0.4
}}

              src={Tumbler}
              alt=""
              className="relative z-20 h-[500px] md:h-[700px] img-shadow w-full"
            />

            <motion.div 
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{
              type:"spring",
              stiffnes:100,
              damping:10,
              delay:0.8
            }}
            className="h-[150px] absolute w-[150px] md:h-[180px]   md:w-[180px] top-4 -right-[-190px] border-primary md:-right-[-100px]  rounded-full z-10 border-[20px]"></motion.div>
</div>

<div className="text-lightOrange mt-[260px]  p-4 space-x-28 ">
      
     < div  className="flex relative">
            <motion.div
            initial={{opacity:0, x:-100}}
            animate={{opacity:1, x:0}}
            transition={{
              type:"spring",
              stiffnes:100,
              damping:10,
              delay:0.8
            }}
            
            
                                     className=" absolute inset-0 pointer-events-none justify-center max-sm:top-[900px] left-[-200px] sm:top-[-300px] flex items-center  overflow-x-clip">
              <h1 className="text-[140px] scale-150 font-bold text-darkGray/20 leading-none opacity-100 z-1 ">
                {" "}
                WHITE TUMBLER
              </h1>
            </motion.div>

         </div>
          
              <div className="relative ">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }}
                  className=" z-10 space-y-4  relative  "
                >
 
                  <h1 className="text-2xl ">White Lifestle Lovers</h1>


      <div className="bg-slate-900  h-full w-[70%]    ml-12 pt-2 pb-2">

<div           className="  relative -left-[-50px] ">
                  <h1 className="text-sm opacity-55 leading-loose -10 ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Impedit voluptatibus consequuntur odio, debitis cumque
                    facilis aut vero non maxime earum quo voluptas, illum quos
                    voluptates minima doloribus.
     
                  </h1>
     </div>
             
           </div>  
                </motion.div>
              </div>
           
          </div>
          {sidebar &&
          
          <motion.div 
          initial={{x:100}}
          animate={{x:0}}
          
          className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10">
<div className="w-full h-full  justify-center items-center gap-6">
<div className="w-full h-full flex flex-col justify-center items-center gap-6">
<div className="w-[1px] h-[70px] bg-white">
</div>




<div className="inline-block p-2 rounded-full cursor-pointer border-white border-2">
  <FaFacebookF className="text-3xl text-white"/>
</div>
<div className="inline-block rounded-full p-2 cursor-pointer border-2 border-white">
<FaInstagram className="text-3xl text-white"/>
</div>



<div className="inline-block border-white border-2 cursor-pointer rounded-full p-2">
<FaTwitter className="text-3xl text-white"/>
</div>






<div className="h-[70px] w-[1px] bg-white"></div>
</div>
</div>
          
          </motion.div>
          
}
          
        </div>
      </section>
    </main>
  );
}

export default Hero;

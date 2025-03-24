import React from "react";
import Tumbler from "../../assets/tumble.png";
import { motion } from "framer-motion";
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
function Hero() {
 const [sidebar, setSidebar]=useState(false);
 
  return (
    <main className="min-h-[750px] w-full">
      <section className="container">

        <Navbar sidebar={sidebar} setSidebar={setSidebar}/>      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
          <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
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
              <div className="relative z-10 space-y-4">
                <h1 className="text-2xl">White Lifestle Lovers</h1>

                <h1 className="text-sm opacity-55 leading-loose">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit voluptatibus consequuntur odio, debitis cumque facilis
                  aut vero non maxime earum quo voluptas, illum quos voluptates
                  minima doloribus.
                </h1>
              </div>
              <div className="absolute -top-6 -left-10 w-[250px] h-[180px] bg-gray-700/25"></div>
            </motion.div>
          </div>

          <div className="relative">
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
              classsName="relative z-40 h-[300px] md:h-[700px] img-shadow"
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
            className="h-[180px] w-[180px] top-24 -right-16 border-primary rounded-full z-10 border-[20px]"></motion.div>

            <motion.div
            initial={{opacity:0, x:-100}}
            animate={{opacity:1, x:0}}
            transition={{
              type:"spring",
              stiffnes:100,
              damping:10,
              delay:0.8
            }}
            
            
            className="absolute -top-20 left-[200px] z-[1]">
              <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                {" "}
                WHITE TUMBLER
              </h1>
            </motion.div>

            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="text-7xl font-bold  ml-14 leading-tight opacity-0">
                Light Tumbler
              </h1>
              <div className="relative">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4,
                  }}
                  className="relative z-10 space-y-4"
                >
                  <h1 className="text-2xl ">White Lifestle Lovers</h1>

                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Impedit voluptatibus consequuntur odio, debitis cumque
                    facilis aut vero non maxime earum quo voluptas, illum quos
                    voluptates minima doloribus.
                  </h1>
                </motion.div>
              </div>
           
            </div>
          {sidebar &&
          
          <motion.div 
          initial={{x:100}}
          animate={{x:0}}
          
          className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b ffrom-primary/80 t0-primaryDark/80 backdrop-blur-sm z-10">
<div className="w-full h-full  justify-center items-center gap-6">
<div className="w-full h-full flex flex-col justify-center items-center gap-6">
<div className="w-[1px] h-[70px] bg-white">
</div>




<div className="inline-block p-2 rounded-full cursor-pointer border-white">
  <FaFacebookF className="text-3xl text-white"/>
</div>
<div>
<FaInstagram className="text-3xl text-white"/>
</div>



<div>
<FaTwitter className="text-3xl text-white"/>
</div>






<div className="h-[70px] w-[1px] bg-white"></div>
</div>
</div>
          
          </motion.div>
          
}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;

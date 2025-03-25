import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {motion} from 'framer-motion'
function Navbar  ({sidebar,setSidebar}) {
  return (
    <nav className="absolute w-full z-50 top-0 left-0 pt-3 text-white ">
    <div className="container">
   <div className="flex justify-between items-center">
   <motion.h1 
   
   
    initial={{opacity:0, y:-100}}
    animate={{opacity:1, y:0}}
    transition={{
      type:"spring",
      stiffness:100,
      damping:10,
      delay:0.2
    }}
   className="text-2xl font-semibold uppercase">
    <span className="text-primary">
CODERS
    </span>
   COFFEE
    </motion.h1> 
      



    <motion.div
      initial={{opacity:0, y:-100}}
      animate={{opacity:1, y:0}}
      transition={{
        type:"spring",stiffness:100,damping:10,delay:0.4}}
        
        >
        <GiHamburgerMenu className="text-3xl cursor-pointer" onClick={()=>setSidebar(!sidebar)}/>
            </motion.div>    
  
            </div>  
  </div>
    </nav>
  )
}

export default Navbar

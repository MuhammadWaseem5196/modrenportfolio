"use client"

import { motion } from "framer-motion";



const stairanimation = {
    initial:{
        top:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%" , "0%"],
    }
}


const reverseindex = (index)=>{
   const totalsteps = 8;
   return totalsteps - index - 1
}

const Stairs = ()=>{
    return(
        <>
        {[...Array(8)].map((_,index)=>{
            return(
                <motion.div 
            
            key={index} variants={ stairanimation} initial="initial" animate="animate" exit="exit"
            
            transition={{
                duration:0.4,
                ease:"easeInOut",
                delay:reverseindex(index) * 0.1,

            }}
            className="w-full h-full relative bg-white"
            />
            )
        })}
        </>
    )
}

export default Stairs;
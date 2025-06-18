"use client"

import { delay, motion } from "framer-motion";
import React ,{useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight , BsGithub } from "react-icons/bs";
import { Tooltip , TooltipContent , TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import Workslidebtn from "@/components/Workslidebtn";

const Projects  = [
    {
        num : "01",
        category : "frontend",
        title : "Project 1",
        description : "this my description",
        stacks:[{name: "HTML5"}, {name:"CCS3 & Tailwind "} ,{name:"TypeScript"} ],
        image : "/waseem12345.png",
        Link : ""

    },
    {
        num : "02",
        category : "frontend",
        title : "Project 2",
        description : "this my description",
        stacks:[{name: "HTML5"}, {name:"CCS3 & Tailwind "} ,{name:"TypeScript"} ],
        image : "",
        Link : ""

    },
    {
        num : "03",
        category : "frontend",
        title : "Project 3",
        description : "this my description",
        stacks:[{name: "HTML5"}, {name:"CCS3 & Tailwind "} ,{name:"TypeScript"} ],
        image : "",
        Link : ""

    },
    {
        num : "04",
        category : "frontend",
        title : "Project 4",
        description : "this my description",
        stacks:[{name: "HTML5"}, {name:"CCS3 & Tailwind "} ,{name:"TypeScript"} ],
        image : "",
        Link : ""

    },
    
]

const Work= ()=>{
    const [project , setproject] = useState(Projects[0])

    const handleslidechange = (swiper)=>{
        const currentindex = swiper.activeIndex;
        setproject(Projects[currentindex])
    }
    return(
        <motion.section initial={{opacity:0}} animate={{opacity:1 , transition:{delay:2.4 , duration:0.4 , ease:"easeIn"}}}  className="min-h-[80vh]  flex flex-col justify-center py-12 xl:px-0">
            <div className=" container mx-auto ">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                                 {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize" >{project.category}</h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stacks.map((item , index)=>{
                                    return <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stacks.length -1 && "," }
                                    </li>
                                })} 
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.Link}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent "/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live Project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>
                                <Link href={project.Link}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent "/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live Project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                    <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={ handleslidechange } className="xl:h-[520px] mb-12 ">
                        {Projects.map((project, index1)=>{
                            return <SwiperSlide  key={index1} className="w-full">
                              <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                           <div className="absolute w-full h-full top-0 bottom-0 bg-black/10 z-10"></div>
                                           <div className="relatvie w-full h-full">
                                            <Image src={project.image} fill className="object-cover" />
                                           </div>
                              </div>
                              

                            </SwiperSlide>
                        })}
                        <Workslidebtn
                                    containerStyle="flex gap-2 absolute right-0  bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                    btnStyle="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
                                    />
                    </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work;
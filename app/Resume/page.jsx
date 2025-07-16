
"use client"

import { FaHtml5, FaCss3 , FaFigma, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript  } from "react-icons/si";
import { Tabs , TabsContent , TabsList , TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent , TooltipProvider , TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";



const about ={
    title:"About Me",
    Description:"hello i am muhammad waseem i wanna build my self alone no one gone with me",
    info:[
        {
            FieldName:"Name",
            FieldValue:"Muhammad Waseem"
        },
        {
            FieldName:"Phone",
            FieldValue:"(+92) 303 2183846"
        },
        {
            FieldName:"Experience",
            FieldValue:"1 year"
        },
        {
            FieldName:"Nationality",
            FieldValue:"Pakistani"
        },
        {
            FieldName:"Language",
            FieldValue:"English , Urdu"
        },
        {
            FieldName:"Email",
            FieldValue:"m.waseem5196@gmail.com"
        },
        {
            FieldName:"FreeLance",
            FieldValue:"Available"
        },
    ]
}

const Experience ={
    icon:"my icon",
    title:"My Experience",
    Description:"its my descrtiption",
    items:[
        {
            company:"Sindh_Police",
            position:"Criminal Records Analyst",
            Duration:"2023 - Present"
        },
        {
            company:"ShanFoods Pvt Ltd",
            position:"Admin Assistant",
            Duration:"2020 - 2023"
        },
        {
            company:"ShanFoods Pvt Ltd",
            position:"KPO",
            Duration:"2018 - 2020"
        },

        
    ]
}

const Education ={
    icon:"my icon",
    title:"My Education",
    Description:"its my descrtiption",
    items:[
        {
            Institution:"Fedral Urdu University",
            Certification:"BS Commerce (Account & Finance)",
            Period:"2022 - 2026"
        },
        {
            Institution:"Governor-House Affiliate from Karachi University",
            Certification:"Agentic AI & Robotics",
            Period:"2024 - Continue"
        },
        {
            Institution:"Governor-House Affiliate from Karachi University",
            Certification:"Web Development",
            Period:"2024"
        },
        {
            Institution:"Pakistan Institute of Management ",
            Certification:"Advance Excel and Power-BI",
            Period:"2021"
        },
        {
            Institution:"Memon Institute ",
            Certification:"Industrial Electrition",
            Period:"2019"
        },
        {
            Institution:"Korean Computer Academy ",
            Certification:"Ms Office",
            Period:"2021"
        },

        
    ]
}

const skills = {
    title:"My Skills",
    description:"here is my Description",
    skillist:[
         {
            icon:<FaHtml5/>,
            name : "HTML5"
         },
         {
            icon:<FaCss3/>,
            name : "CSS 3"
         },
         {
            icon:<SiTypescript/>,
            name : "TypeScript"
         },
         {
            icon:<FaPython/>,
            name : "Python"
         },
         {
            icon:<FaFigma/>,
            name : "Figma"
         },
         {
            icon:<FaNodeJs/>,
            name : "Node.js"
         },
         {
            icon:<SiNextdotjs/>,
            name : "Next.js"
         },
         {
            icon:<SiTailwindcss/>,
            name : "Tailwind.css"
         },

    ]
}



const Resume = ()=>{
    return(
       <motion.div
       initial={{opacity: 0}}
       animate={{opacity: 1 ,transition:{delay:2.4 , duration:0.4,ease:"easeIn"}}}
       className=" min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
       >
        <div className=" container mx-auto">
            <Tabs defaultValue="Experience" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className=" flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6" >
                        <TabsTrigger value="Experience">Experience</TabsTrigger>
                        <TabsTrigger value="Education">Education</TabsTrigger>
                        <TabsTrigger value="Skills">Skills</TabsTrigger>
                        <TabsTrigger value="About">About Me</TabsTrigger>
                </TabsList>
                <div className="min-h-[70vh] w-full">
                      <TabsContent value="Experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className=" text-4xl font-bold " > { Experience.title } </h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0" > { Experience.Description } </p>
                            <ScrollArea className="h-[400px]" >
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]" >
                                    {Experience.items.map((item , index)=>{
                                        return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded:xl flex flex-col justify-center items-center lg:items-start gap-1" >
                                             <span className="text-accent">{item.Duration}</span>
                                             <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left" >{item.position}</h3>
                                             <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60" >{item.company}</p>
                                             </div>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                      </TabsContent>
                      <TabsContent value="Education" className="w-full"><div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className=" text-4xl font-bold " > { Education.title } </h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0" > { Education.Description  } </p>
                            <ScrollArea className="h-[400px]" >
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]" >
                                    {Education.items.map((item , index)=>{
                                        return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded:xl flex flex-col justify-center items-center lg:items-start gap-1" >
                                             <span className="text-accent">{item.Period}</span>
                                             <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left" >{item.Certification}</h3>
                                             <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60" >{item.Institution}</p>
                                             </div>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div></TabsContent>
                      <TabsContent value="Skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left" >
                                <h3 className="text-4xl font-bold" >{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{skills.description}</p>
                            </div>
                              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skillist.map((skill , index)=>{
                                    return <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize">{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                })}
                              </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="About" className="w-full text-center xl:text-left">
                                   <div className="flex flex-col gap-[30px]" >
                                    <h3 className="text-4xl font-bold">{about.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0" >{about.Description}</p>
                                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                        {about.info.map((item , index)=>{
                                            return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.FieldName}</span>
                                                <span className="text-xl">{item.FieldValue}</span>
                                            </li>
                                        })}
                                    </ul>
                                   </div>
                                 
                      </TabsContent>
                 </div>
            </Tabs>
        </div>
       </motion.div>
    )
}

export default Resume; 
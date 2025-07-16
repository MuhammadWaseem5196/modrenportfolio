"use client"

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion"
const services = [
  {
    num: "01",
    title: "Modern Portfolio Website",
    Description: "I build professional, stylish portfolio websites to showcase personal or business projects with interactive and responsive design.",
    href: ""
  },
  {
    num: "02",
    title: "Digital Store (E-Commerce)",
    Description: "I develop fully functional e-commerce stores with smooth checkout, product filters, cart features, and backend integration.",
    href: ""
  },
  {
    num: "03",
    title: "Vlogging & Blogging Page",
    Description: "I create engaging vlogging and blogging platforms with clean UI, post categories, comment systems, and content management.",
    href: ""
  },
  {
    num: "04",
    title: "Business or Company Website",
    Description: "I design modern business websites with clear branding, services sections, and contact forms to help companies grow online.",
    href: ""
  },
  {
    num: "05",
    title: "Backend with Sanity CMS",
    Description: "I integrate headless CMS like Sanity for dynamic content management, allowing real-time updates without touching code.",
    href: ""
  },
  {
    num: "06",
    title: "Landing Pages for Campaigns",
    Description: "I build high-converting landing pages for marketing campaigns, product launches, and targeted promotions.",
    href: ""
  },
  {
    num: "07",
    title: "Mobile-Responsive Web Design",
    Description: "I ensure every project is fully mobile-optimized and responsive across all screen sizes for the best user experience.",
    href: ""
  }
]


const Services = ()=>{
    return(
        <section className="min-h-[80vh]  flex flex-col justify-center px-5  py-12 xl:py-0">
            <div className="container xl:mx-auto  ">
                <motion.div initial={{opacity: 0}}
                animate={{
                    opacity:1,
                    transition:{delay: 2.4 , duration:0.4 , ease:"easeIn"},
                    
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                    {services.map((item, index)=>{
                        return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ">{item.num}</div>
                              {/* <Link href={item.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-cyan-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45"><BsArrowDownRight className="text-primary text-3xl"/></Link> */}

                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{item.title}</h2>
                            <p>{item.Description}</p>
                            <div className="border-b  border-white/20 w-full"></div>
                        </div>
                    })}

                </motion.div>
            </div>
        </section>
    )
}

export default Services;
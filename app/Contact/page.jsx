
"use client"

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select , SelectContent , SelectGroup , SelectItem, SelectLabel , SelectTrigger,SelectValue } from "@/components/ui/select";
import { FaPhoneAlt , FaEnvelope , FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info =[
    {
        icon:<FaPhoneAlt/>,
        name:"Phone",
        description:"(+92)3032183846"
    },
    {
        icon:<FaEnvelope/>,
        name:"Email",
        description:"m.waseem5196@gmail.com"
    },
    {
        icon:<FaPhoneAlt/>,
        name:"Phone",
        description:"(+92)3032183846"
    },
    {
        icon:<FaMapMarkerAlt/>,
        name:"Adress",
        description:"Muhammad Society korangi karachi"
    },
    
]

const Contact = ()=>{
    return(
        <motion.dev initial={{opacity:0}} animate={{opacity:1 , transition:{delay:2.4 , duration:0.4 , ease:"easeIn"}}} className="py-12">
            <div className="container mx-auto">
                 <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none"><form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                        <h3 className="text-4xl text-accent">Let's Work Together</h3>
                        <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore aliquam a? Architecto, libero dolorem rem et, modi doloribus neque culpa nemo unde suscipit a quam ipsum perspiciatis accusantium laboriosam.</p>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firstname" placeholder="First Name" />
                            <Input type="lastname" placeholder="Last Name" />
                            <Input type="Email" placeholder="Email Adress" />
                            <Input type="phone" placeholder="Phone Number" />
                         </div>
                         <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a Serivce"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select a Service</SelectLabel>
                                    <SelectItem value="est">Modern Portfolio Website</SelectItem>
                                    <SelectItem value="cst">Digital Store E-Commerce</SelectItem>
                                    <SelectItem value="mst">Vlogging & Blogging Page</SelectItem>
                                    <SelectItem value="mt">Business or Company Website</SelectItem>
                                    <SelectItem value="st">Backend with Sanity CMS</SelectItem>
                                    <SelectItem value="ms">Landing Pages for Campaigns</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                         </Select>
                         <Textarea className="h-[200px]" placeholder="Type Your Message Here"/>
                         <Button size="md" className="max-w-40">
                                 Send Message
                         </Button>
                        </form></div>
                         <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                            <ul className="flex flex-col gap-10">
                                {info.map((item , index)=>{
                                    return <li key={index} className="flex items-center gap-6">
                                        <div className="h-[52px] w-[52px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.name}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                })}
                            </ul>
                         </div>
                 </div>
            </div>
        </motion.dev>
    )
}

export default Contact;
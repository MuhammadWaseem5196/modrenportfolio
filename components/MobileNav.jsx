"use client"

import { Sheet , SheetContent , SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdMenu } from "react-icons/io";

  const links = [
        {
            name :"Home",
            path :"/"
        },
        {
            name :"Services",
            path :"/Services"
        },
        {
            name :"Resume",
            path :"/Resume"
        },
        {
            name :"Work",
            path :"/work"
        },
        {
            name :"Contact",
            path :"/Contact"
        },
    ]

const MobileNav  =()=>{
  const pathname = usePathname();
    return <Sheet>
        <SheetTrigger className=" flex justify-center items-center ">
            <IoMdMenu  className="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">

            <div className="mt-32 mb-40 text-center text-2xl" >
                <Link href="/">
                <h1 className="text-4xl font-semibold">Waseem <span className=" text-accent">.</span></h1>
                </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-8 ">
                {links.map((path , index)=>{
                    return <Link href={path.path} key={index} className= {`${path.path === pathname && "text-accent border-b-2 border-accent"} text-xl hover:text-accent capitalize transition-all`}> {path.name} </Link>
                })}
            </div>
            
            </SheetContent>
    </Sheet>
}

export default MobileNav;
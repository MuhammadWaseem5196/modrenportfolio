"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const Links = [
    { name : "Home",
    path : "/"},

    { name : "Services",
    path : "/Services"},

    { name : "Resume",
    path : "/Resume"},

    { name : "Work",
    path : "/work"},

    { name : "Contact",
    path : "/Contact"},
    
]

const NevBar = ()=>{
    const pathname = usePathname();
    return(
        <nav className=" flex gap-8 ">
           {Links.map((link , index)=>{
            return(
                <Link href={link.path} key={index} className={`${link.path === pathname && " text-accent border-b-2 border-accent "} capitalize font-medium hover:text-accent transition-all `}>{link.name}</Link>
            )
           })}
        </nav>
    )
}

export default NevBar;
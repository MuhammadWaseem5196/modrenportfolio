
import Link from "next/link";
import {FaGithub , FaLinkedinIn , FaYoutube, FaTwitter} from "react-icons/fa"

const Social = [
    {icon:<FaGithub/> , path:"/"},
    {icon:<FaLinkedinIn/> , path:"www.linkedin.com/in/muhammad-waseem-5013a21a4"},
    {icon:<FaYoutube/> , path:"/"},
    {icon:<FaTwitter/> , path:"/"},
]


const Solve = ({containerStyles , iconStyles})=>{
    return <div className={containerStyles}>
           {Social.map((item , index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
           })}
    </div>
}

export default Solve;
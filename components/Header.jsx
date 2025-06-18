import Link from "next/link";
import NevBar from "./Nevbar";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = ()=>{
    return(
        <header className="py-6 px-4 xl:py-12 text-white">
            <div className=" container mx-auto flex justify-between items-center ">
                {/* logo */}
                <Link href="/">
                  
                  <h1 className="text-4xl  font-semibold">
                    <span className="font-extrabold text-cyan-500">Waseem</span> <span className="text-accent">.</span>
                  </h1>
                
                </Link>
                {/* dekstop nevigations and hire me button*/}
                <div className="hidden xl:flex gap-8 ">
                    <NevBar/>
                    <Link href="/">
                    <Button>Hire Me</Button>
                    </Link>

                </div>

                {/* Mobile nevigations */}
                <div className="xl:hidden">
                    <MobileNav/>
                </div>
            </div>
        </header>
    )
}
    

export default Header;
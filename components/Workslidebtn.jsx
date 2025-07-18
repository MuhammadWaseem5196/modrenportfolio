"use client"


import { useSwiper } from "swiper/react";
import { PiCaretLeftBold , PiCaretRightBold} from "react-icons/pi"



const Workslidebtn = ( {containerStyle, iconsStyle , btnStyle} )=>{
   const swiper = useSwiper();

    return(
        <div className={containerStyle}>
            <button className={btnStyle} onClick={()=>{swiper.slidePrev()}} ><PiCaretLeftBold  className={iconsStyle}/></button>
            <button className={btnStyle} onClick={()=>{swiper.slideNext()}}  ><PiCaretRightBold className={iconsStyle}/></button>
        </div>
    )
}

export default Workslidebtn;
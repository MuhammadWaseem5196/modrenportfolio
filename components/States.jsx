"use client"

import CountUp from "react-countup";

const state = [
    {
        num:1,
        text:"year of Experience"
    },
    {
        num:8,
        text:"Projects Completed"
    },
    {
        num:4,
        text:"Technologies Mastered"
    },
    {
        num:100,
        text:"Code Commits"
    }
]

const States = ()=>{
    return <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {state.map((item , index)=>{
                    return <div key={index} className="flex-1  flex gap-4 items-center justify-center xl:justify-start" >
                        <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold"/>
                        <p className={`${item.text.length < 20 ? "max-w-[100px] " : "max-w-[150px]"} leading-snug text-white/80 `}>{item.text}</p>
                    </div>
                })}
            </div>
        </div>
    </section>
}


export default States;
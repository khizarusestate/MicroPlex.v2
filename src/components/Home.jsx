import { Clock, Headphones, Code2 } from "lucide-react";
import Particles from "./Particles";
export default function Home(){
    return(
        <main className="h-screen w-screen flex flex-col justify-center items-center  gap-[40px] bg-black relative overflow-hidden">
            <h1 className="w-[70%] text-[15px] md:text-[40px] text-gray-200 text-center font-[inter] leading-tight bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8] bg-clip-text text-transparent font-bold z-10">Building Innovative Digital Solutions for a Smarter Tomorrow.</h1>
            <article className="flex justify-center items-center gap-[30px] z-10 orbitron">
               <button className="px-8 py-3 rounded-full font-bold text-gray-900 bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#5A8EF6] shadow-[0_0_35px_rgba(90,142,246,0.5)] hover:shadow-[0_0_60px_rgba(90,142,246,0.8)] hover:scale-105 transition-all duration-300 border border-white/20">EXPLORE OUR SERVICES</button>
               <button className="px-8 py-3 rounded-full font-bold text-white bg-white/5 backdrop-blur-xl border border-[#D06AE8]/50 shadow-[0_0_30px_rgba(208,106,232,0.4)] hover:bg-[#D06AE8]/20 hover:shadow-[0_0_60px_rgba(208,106,232,0.8)] hover:scale-105 transition-all duration-300">SEE OUR PRODUCTS</button>
            </article>
           <article className="flex justify-center items-center gap-[80px] lg:gap-[180px] absolute top-[88%] z-10 orbitron">
             <div className="flex justify-center items-center text-white gap-[12px] px-[20px] py-[12px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(90,142,246,0.2)] hover:scale-105 transition-all duration-300">
                <Clock className="h-7 w-7 text-[#49D9E8]"/>
                <p className="font-semibold">24 / 7 Availability</p>
             </div>
             <div className="flex justify-center items-center text-white gap-[12px] px-[20px] py-[12px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(90,142,246,0.2)] hover:scale-105 transition-all duration-300">
                 <Headphones className="h-7 w-7 text-[#5A8EF6]"/>
                 <p className="font-semibold">Dedicated Support</p>
            </div>
            <div className="flex justify-center items-center text-white gap-[12px] px-[20px] py-[12px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(208,106,232,0.2)] hover:scale-105 transition-all duration-300">
                 <Code2 className="h-7 w-7 text-[#D06AE8]"/>
                 <p className="font-semibold">Custom IT Solutions</p>
            </div>
           </article>
            <div className="absolute top-[20%] left-[-17%] h-[200px] w-[200px] rounded-full bg-[rgba(90,142,246,0.2)] shadow-[0_0_900px_rgb(90,142,246)]"></div>
            <div className="absolute top-[40%] left-[100%] h-[200px] w-[200px] rounded-full bg-[rgb(217,94,234)] shadow-[0_0_900px_rgb(217,94,234)]"></div>
            <Particles/>
        </main>
    )
}
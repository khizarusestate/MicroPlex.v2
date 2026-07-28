export default function Header(){
    const navLinks = ["Home","About","Services","Products"];

    return(
        <header className="h-[10vh] w-screen flex justify-center items-center fixed top-0 z-50 orbitron">
            <div className="w-[90%] max-w-[1400px] flex justify-between items-center px-8 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(90,142,246,0.15)]">

                <img 
                    src="/Images/Logo.png" 
                    className="h-[55px] hover:scale-105 transition-all duration-300"
                />

                <nav className="text-gray-200">
                    <ul className="flex items-center gap-[45px]">
                        {
                            navLinks.map((item,i)=>(
                                <li 
                                    key={i}
                                    className="cursor-pointer hover:text-[#49D9E8] transition-all duration-300"
                                >
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <button className="
                    px-7 py-2.5 
                    rounded-full 
                    font-bold 
                    text-gray-900
                    bg-gradient-to-r from-[#49D9E8] via-[#5A8EF6] to-[#D06AE8]
                    shadow-[0_0_25px_rgba(90,142,246,0.5)]
                    hover:scale-105
                    hover:shadow-[0_0_45px_rgba(90,142,246,0.8)]
                    transition-all duration-300
                ">
                    CONTACT US
                </button>

            </div>
        </header>
    )
}
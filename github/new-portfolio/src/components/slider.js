import Photo from "../assets/foto_final.jpg"

const Slider = () => {
    return (
        <div className="w-80 bg-gray-200 fixed hidden h-full flex flex-col items-center py-36 shadow-xl shadow-black">
            <div className="h-full flex flex-col">
                <div className="flex flex-col items-center w-100 ">
                    <img className="h-42 w-52 rounded-full hover:border-blue-500 hover:border-2" src={Photo} alt="Me" />
                    <div className="flex flex-col items-center py-5">
                        <h2 className="text-xl text-black font-bold">Diogo Guimarães</h2>
                        <h3 className="text-gray-600">Junior Web Developer</h3>
                    </div>
                </div>
                <nav className="flex justify-center items-center h-full">
                    <ul className="flex flex-col items-center gap-5">
                        <a href="#home"><li className="transition delay-250ms hover:bg-gray-300 hover:border-blue-500 items-self-center text-lg text-black font-medium cursor-pointer border border-slate-400 text-center w-80 py-2">
                            Home
                            </li></a>
                        <a href="#skills"><li className="transition delay-250ms hover:bg-gray-300 hover:border-blue-500 text-lg text-black font-medium cursor-pointer border border-slate-400 text-center w-80 py-2">
                            Skills
                            </li></a>
                        <a href="#projects"><li className="transition delay-250ms hover:bg-gray-300 hover:border-blue-500 text-lg text-black font-medium cursor-pointer border border-slate-400 text-center w-80 py-2">
                            Projects
                            </li></a>
                        <a href="#links"><li className="transition delay-250ms hover:bg-gray-300 hover:border-blue-500 text-lg text-black font-medium cursor-pointer border border-slate-400 text-center w-80 py-2">
                            Links
                            </li></a>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Slider;
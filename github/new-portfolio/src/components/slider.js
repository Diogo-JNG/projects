import {useState} from 'react';
import Icofont from 'react-icofont';
import Photo from "../assets/foto_final.jpg"

const Slider = () => {

    const [menu, setMenu] = useState(true);
    const [menuClass, setMenuClass] = useState('');
    const [xClass, setxClass] = useState('right-4');
    const [menuIcon, setMenuIcon] = useState('close');
    const [backOpacity, setBackOpacity] = useState('block');

    const menuToggle = () =>{
        setMenu(!menu);
        if (!menu){
            setMenuClass('translate-x-0');
            setxClass('right-4');
            setMenuIcon('close');
            setBackOpacity('block');
        }else{
            setMenuClass('-translate-x-full');
            setxClass('-right-10');
            setMenuIcon('navigation-menu');
            setBackOpacity('hidden');
        }
    }

    return (
        <>
        <div className={` ${menuClass} w-full xl:w-[20vw] bg-gray-200 fixed h-full flex flex-col items-center sm:hidden lg:flex py-36 shadow-xl shadow-black bg-gradient-to-t from-gray-300 z-10`}>
            <p onClick={menuToggle} className={`absolute top-2 ${xClass} text-xl text-bold cursor-pointer text-gray-500 px-2 transition delay-250ms hover:bg-gray-300`}><Icofont icon={menuIcon}/></p>
        <div className={`h-full flex flex-col`}>
            <div className="flex flex-col items-center w-100 ">
                <img className=" h-42 w-52 rounded-full hover:border-blue-500 hover:border-2" src={Photo} alt="Me" />
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
        <div className={` ${menuClass} w-full xl:w-[20vw] bg-gray-200 fixed h-full flex flex-col items-center sm:flex lg:hidden py-36 shadow-xl shadow-black z-10`}>
            <p onClick={menuToggle} className={`absolute top-2 ${xClass} text-xl text-bold cursor-pointer text-gray-500 px-2 transition delay-250ms hover:bg-gray-300`}><Icofont icon={menuIcon}/></p>
            <div className={`h-full flex flex-col`}>
                <div className="flex flex-col items-center w-100 ">
                    <img className=" h-42 w-52 rounded-full hover:border-blue-500 hover:border-2" src={Photo} alt="Me" />
                    <div className="flex flex-col items-center py-5">
                        <h2 className="text-xl text-black font-bold">Diogo Guimarães</h2>
                        <h3 className="text-gray-600">Junior Web Developer</h3>
                    </div>
                </div>
                <nav className="flex justify-center items-center h-full">
                    <ul className="flex flex-col items-center gap-5">
                        <a onClick={menuToggle} href="#home"><li className="transition delay-250ms hover:bg-gray-300 hover:border-blue-500 items-self-center text-lg text-black font-medium cursor-pointer border border-slate-400 text-center w-80 py-2">
                            Home
                            </li></a>
                        <a onClick={menuToggle} href="#skills"><li className="transition delay-250ms hover:bg-gray-300 hover:border-blue-500 text-lg text-black font-medium cursor-pointer border border-slate-400 text-center w-80 py-2">
                            Skills
                            </li></a>
                        <a onClick={menuToggle} href="#projects"><li className="transition delay-250ms hover:bg-gray-300 hover:border-blue-500 text-lg text-black font-medium cursor-pointer border border-slate-400 text-center w-80 py-2">
                            Projects
                            </li></a>
                        <a onClick={menuToggle} href="#links"><li className="transition delay-250ms hover:bg-gray-300 hover:border-blue-500 text-lg text-black font-medium cursor-pointer border border-slate-400 text-center w-80 py-2">
                            Links
                            </li></a>
                    </ul>
                </nav>
            </div>
        </div>
        <div className={`w-[100vw] h-full ${backOpacity} fixed bg-black opacity-30 z-0`}></div>
        </>
        
    );
}

export default Slider;


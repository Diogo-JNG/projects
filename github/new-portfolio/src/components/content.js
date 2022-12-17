import Logo from "../assets/portugal.png"

const Content = () => {
    return (
        <div className="w-screen flex flex-col">
            {/* Home Section */}
            <div id="home" className="lg:pl-8 lg:pb-36 flex flex-col lg:flex-row h-screen justify-center items-center gap-4 lg:gap-24">
                <div className="flex flex-col">
                    <p className="text-center xl:text-left text-4xl lg:text-8xl lg:pb-8 ">I'm a <strong>Web Developer</strong><br /> from Portugal</p>
                    <a href="https://www.linkedin.com/in/diogojng" rel="noreferrer" target="_blank" className="mx-auto xl:mx-0 transition delay-250ms hover:bg-gray-200 hover:border-blue-500 border border-black w-40 text-center cursor-pointer text-xl h-16 pt-4 mt-8">Meet me</a>
                </div>
                <img src={Logo} alt="Web Logo" className="w-48 lg:w-72 order-1" />
            </div>
            {/* Skills Section */}
            <div id="skills" className="bg-gray-100 flex flex-col h-screen justify-center items-start">
                <div className="bg-yellow-500 w-full h-16 mb-8">
                    <p className="text-5xl text-center xl:text-7xl text-black pl-32 mb-12 text-bold">My skills</p>
                    <p className="text-xl bg-red-500">15-12-2022</p>
                </div>
                <div className="flex flex-row border-b border-b-1 border-black w-full lg:w-5/6 mx-auto"> {/*FRONT END / BACK END */}
                    <p className="text-center w-full text-4xl mb-2">Front-end</p>
                    <p className="text-center w-full text-4xl mb-2">Back-end</p>
                </div>
                <div className="flex flex-row mt-4 w-5/6 mx-auto">
                    <div className="flex justify-end w-3/6 ">
                        <div className="w-5/6 bg-blue-500 mr-1 my-1"></div>
                        <p className=" text-center font-bold w-16 mr-2">HTML5</p>
                    </div>
                    <div className="flex justify-start w-3/6">
                        <p className=" text-center font-bold w-16 ml-2">MYSQL</p>
                        <div className="w-3/6 bg-blue-500 ml-1 my-1"></div>
                    </div>
                    {/*
                <table className="table flex mx-auto w-5/6 border border-black">
                    <thead className="bg-black text-white">
                        <tr>
                            <th className="border-l text-center py-3 w-32">
                                HTML5
                            </th>
                            <th className="border-l py-3 w-32">
                                CSS3
                            </th>
                            <th className="border-l py-3 w-32">
                                Sass
                            </th>
                            <th className="border-l py-3 w-32">
                                Tailwind
                            </th>
                            <th className="border-l py-3 w-32">
                                Javascript
                            </th>
                            <th className="border-l py-3 w-32">
                                React
                            </th>
                            <th className="border-l py-3 w-32">
                                Angular
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr>
                            <td className="text-center py-2"><span className="text-green-500 text-center w-1/3">✓</span></td>
                            <td className="text-center"><span className="text-green-500 text-center w-1/3">✓</span></td>
                            <td className="text-center"><span className="text-green-500 text-center w-1/3">✓</span></td>
                            <td className="text-center"><span className="text-green-500 text-center w-1/3">✓</span></td>
                            <td className="text-center"><span className="text-green-500 text-center w-1/3">✓</span></td>
                            <td className="text-center"><span className="text-green-500 text-center w-1/3">✓</span></td>
                            <td className="text-center"><span className="text-yellow-700 text-center">/</span></td>
                        </tr>
                    </tbody>
                    <tfoot className="bg-black w-full text-white">
                        <tr>
                            <td className="w-32 text-center"></td>
                            <td className="w-32 text-center"></td>
                            <td className="w-32 text-center"><span className="text-green-500 text-center">✓</span> -> Good</td>
                            <td className="w-32 text-center"><span className="text-yellow-500 text-center">/</span> -> Average</td>
                            <td className="w-32 text-center"><span className="text-red-500 text-center">X</span> -> Learning</td>
                            <td className="w-32 text-center"></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                <p className="text-center w-full text-4xl my-2">Back-end</p>
                <table className="table flex mx-auto w-5/6 border border-black">
                    <thead className="bg-black text-white">
                        <tr>
                            <th className="border-l py-3 w-32">
                                PHP
                            </th>
                            <th className="border-l py-3 w-32">
                                Java
                            </th>
                            <th className="border-l py-3 w-32">
                                Node.js
                            </th>
                            <th className="border-l py-3 w-32">
                                MySQL
                            </th>
                            <th className="border-l py-3 w-32">
                                MariaDB
                            </th>
                            <th className="border-l py-3 w-32">
                                MongoDB
                            </th>
                            <th className="border-l py-3 w-32">
                                Node.js
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr>
                            <td className="text-center py-2"><span className="text-yellow-700 text-center">/</span></td>
                            <td className="text-center"><span className="text-red-500 text-center">X</span></td>
                            <td className="text-center"><span className="text-red-500 text-center">X</span></td>
                            <td className="text-center"><span className="text-green-500 text-center">✓</span></td>
                            <td className="text-center"><span className="text-red-500 text-center">X</span></td>
                            <td className="text-center"><span className="text-red-500 text-center">X</span></td>
                            <td className="text-center"><span className="text-red-500 text-center">X</span></td>
                        </tr>
                    </tbody>
                    <tfoot className="bg-black w-full text-white">
                        <tr>
                            <td className="w-32 text-center"></td>
                            <td className="w-32 text-center"></td>
                            <td className="w-32 text-center"><span className="text-green-500 text-center">✓</span> -> Good</td>
                            <td className="w-32 text-center"><span className="text-yellow-700 text-center">/</span> -> Average</td>
                            <td className="w-32 text-center"><span className="text-red-500 text-center">X</span> -> Learning</td>
                            <td className="w-32 text-center"></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                */}
                </div>
                <div className="flex flex-row mt-1 w-5/6 mx-auto">
                    <div className="flex justify-end w-3/6 ">
                        <div className="w-5/6 bg-blue-500 mr-1 my-1"></div>
                        <p className=" text-center font-bold w-16 mr-2">CSS3</p>
                    </div>
                    <div className="flex justify-start w-3/6">
                        <p className=" text-center font-bold w-16 ml-2">MongoDB</p>
                        <div className="w-0/6 bg-blue-500 ml-1 my-1"></div>
                    </div>
                </div>
                <div className="flex flex-row mt-1 w-5/6 mx-auto">
                    <div className="flex justify-end w-3/6 ">
                        <div className="w-3/6 bg-blue-500 mr-1 my-1"></div>
                        <p className=" text-center font-bold w-16 mr-2">Tailwind</p>
                    </div>
                    <div className="flex justify-start w-3/6">
                        <p className=" text-center font-bold w-16 ml-2">PHP</p>
                        <div className="w-3/6 bg-blue-500 ml-1 my-1"></div>
                    </div>
                </div>
                <div className="flex flex-row mt-1 w-5/6 mx-auto">
                    <div className="flex justify-end w-3/6 ">
                        <div className="w-4/6 bg-blue-500 mr-1 my-1"></div>
                        <p className=" text-center font-bold w-16 mr-2">JS</p>
                    </div>
                    <div className="flex justify-start w-3/6">
                        <p className=" text-center font-bold w-16 ml-2">Node.js</p>
                        <div className="w-1/6 bg-blue-500 ml-1 my-1"></div>
                    </div>
                </div>
                <div className="flex flex-row mt-1 w-5/6 mx-auto">
                    <div className="flex justify-end w-3/6 ">
                        <div className="w-3/6 bg-blue-500 mr-1 my-1"></div>
                        <p className=" text-center font-bold w-16 mr-2">React</p>
                    </div>
                    <div className="flex justify-start w-3/6">
                        <p className=" text-center font-bold w-16 ml-2">Python</p>
                        <div className="w-0/6 bg-blue-500 ml-1 my-1"></div>
                    </div>
                </div>

                {/*
                <table className="table flex mx-auto w-5/6 border border-black">
                    <thead className="bg-black text-white">
                        <tr>
                            <th className="border-l text-center py-3 w-32">
                                HTML5
                            </th>
                            <th className="border-l py-3 w-32">
                                CSS3
                            </th>
                            <th className="border-l py-3 w-32">
                                Sass
                            </th>
                            <th className="border-l py-3 w-32">
                                Tailwind
                            </th>
                            <th className="border-l py-3 w-32">
                                Javascript
                            </th>
                            <th className="border-l py-3 w-32">
                                React
                            </th>
                            <th className="border-l py-3 w-32">
                                Angular
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr>
                            <td className="text-center py-2"><span className="text-green-500 text-center w-1/3">✓</span></td>
                            <td className="text-center"><span className="text-green-500 text-center w-1/3">✓</span></td>
                            <td className="text-center"><span className="text-green-500 text-center w-1/3">✓</span></td>
                            <td className="text-center"><span className="text-green-500 text-center w-1/3">✓</span></td>
                            <td className="text-center"><span className="text-green-500 text-center w-1/3">✓</span></td>
                            <td className="text-center"><span className="text-green-500 text-center w-1/3">✓</span></td>
                            <td className="text-center"><span className="text-yellow-700 text-center">/</span></td>
                        </tr>
                    </tbody>
                    <tfoot className="bg-black w-full text-white">
                        <tr>
                            <td className="w-32 text-center"></td>
                            <td className="w-32 text-center"></td>
                            <td className="w-32 text-center"><span className="text-green-500 text-center">✓</span> -> Good</td>
                            <td className="w-32 text-center"><span className="text-yellow-500 text-center">/</span> -> Average</td>
                            <td className="w-32 text-center"><span className="text-red-500 text-center">X</span> -> Learning</td>
                            <td className="w-32 text-center"></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                <p className="text-center w-full text-4xl my-2">Back-end</p>
                <table className="table flex mx-auto w-5/6 border border-black">
                    <thead className="bg-black text-white">
                        <tr>
                            <th className="border-l py-3 w-32">
                                PHP
                            </th>
                            <th className="border-l py-3 w-32">
                                Java
                            </th>
                            <th className="border-l py-3 w-32">
                                Node.js
                            </th>
                            <th className="border-l py-3 w-32">
                                MySQL
                            </th>
                            <th className="border-l py-3 w-32">
                                MariaDB
                            </th>
                            <th className="border-l py-3 w-32">
                                MongoDB
                            </th>
                            <th className="border-l py-3 w-32">
                                Node.js
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr>
                            <td className="text-center py-2"><span className="text-yellow-700 text-center">/</span></td>
                            <td className="text-center"><span className="text-red-500 text-center">X</span></td>
                            <td className="text-center"><span className="text-red-500 text-center">X</span></td>
                            <td className="text-center"><span className="text-green-500 text-center">✓</span></td>
                            <td className="text-center"><span className="text-red-500 text-center">X</span></td>
                            <td className="text-center"><span className="text-red-500 text-center">X</span></td>
                            <td className="text-center"><span className="text-red-500 text-center">X</span></td>
                        </tr>
                    </tbody>
                    <tfoot className="bg-black w-full text-white">
                        <tr>
                            <td className="w-32 text-center"></td>
                            <td className="w-32 text-center"></td>
                            <td className="w-32 text-center"><span className="text-green-500 text-center">✓</span> -> Good</td>
                            <td className="w-32 text-center"><span className="text-yellow-700 text-center">/</span> -> Average</td>
                            <td className="w-32 text-center"><span className="text-red-500 text-center">X</span> -> Learning</td>
                            <td className="w-32 text-center"></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                */}
            </div>
            {/* Projects Section */}
            <div id="projects" className="bg-gray-100 flex flex-col h-screen justify-center items-start">
                <div className="w-5/6 mx-auto h-5/6">
                    <p className="text-7xl text-black  text-bold"><strong>Projects</strong></p>
                    <div className=" w-full h-5/6 gap-2 flex flex-row items-center">
                        <div className="flex flex-col justify-evenly items-center border border-blue-500 border-2 w-1/3 h-4/5">
                            <h2 className="text-bold text-3xl">Streaming Website (React)</h2>
                            <p className="text-xl text-gray-600 px-2 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima alias sed consequuntur
                                dolore iusto ipsum libero illo, nulla a magnam commodi ea pariatur tempora eaque maxime corporis laudantium, veniam doloremque.
                            </p>
                            <button className="transition delay-250ms hover:bg-gray-200 border rounded-xl border-black p-4 hover:border-blue-500">Click Here</button>

                        </div>
                        <div className="flex flex-col justify-evenly items-center border border-blue-500 border-2 w-1/3 h-4/5">
                            <h2 className="text-bold text-3xl">Streaming Website (Vanilla Js)</h2>
                            <p className="text-xl text-gray-600 px-2 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima alias sed consequuntur
                                dolore iusto ipsum libero illo, nulla a magnam commodi ea pariatur tempora eaque maxime corporis laudantium, veniam doloremque.
                            </p>
                            <button className="transition delay-250ms hover:bg-gray-200 border rounded-xl border-black p-4 hover:border-blue-500">Click Here</button>

                        </div>
                        <div className="flex flex-col justify-evenly items-center border border-blue-500 border-2 w-1/3 h-4/5">
                            <h2 className="text-bold text-3xl">W.I.P</h2>
                            <p className="text-xl text-gray-600 px-2 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima alias sed consequuntur
                                dolore iusto ipsum libero illo, nulla a magnam commodi ea pariatur tempora eaque maxime corporis laudantium, veniam doloremque.
                            </p>
                            <button className="transition delay-250ms hover:bg-red-500 border rounded-xl border-black p-4">Click Here</button>

                        </div>
                    </div>
                </div>
            </div>
            {/* Links Section */}
            <div id="links" className="bg-gray-100 flex flex-col justify-center h-screen">
                <div className="w-5/6 h-3/6 mx-auto">
                    <p className="text-7xl text-black  text-bold mx-auto"><strong>Links</strong></p>
                    <div className="w-full h-5/6 flex flex-col justify-center gap-4">
                        <div className="transition delay-250ms hover:bg-[#0a66c2] hover:text-white cursor-pointer flex flex-row items-center justify-center border border-blue-500 border-2 w-full h-12 text-4xl font-bold">
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/diogojng">LinkedIn</a>
                        </div>
                        <div className="transition delay-250ms hover:bg-black hover:text-white cursor-pointer flex flex-row items-center justify-center border border-blue-500 border-2 w-full h-12 text-4xl font-bold">
                            <a rel="noreferrer" target="_blank" href="https://github.com/Diogo-JNG/projects">GitHub</a>
                        </div>
                        <div className="transition delay-250ms hover:bg-[#005850] hover:text-white cursor-pointer flex flex-row items-center justify-center border border-blue-500 border-2 w-full h-12 text-4xl font-bold">
                            <a rel="noreferrer" target="_blank" href="https://www.credly.com/users/diogo-guimaraes.5642f1de/badges">Credly</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
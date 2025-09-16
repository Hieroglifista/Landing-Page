'use client'

import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Navbar */}
            <nav
                className="p-4 bg-center"
                style={{
                    backgroundImage: "url('https://external-preview.redd.it/GB5Adyp5zzQcoI4Jpbgf8tKfJ6GxgHmT8NHgtcrpi3o.png?width=1080&crop=smart&auto=webp&s=61d2bc28e5204bc4135432bcb40acc7c0d55b137')",
                    backgroundSize: "250px", // Tamanho menor da imagem
                    backgroundRepeat: "repeat" // Repete a imagem
                }}
            >
                <div className="container mx-auto flex items-center justify-between flex-wrap">
                    {/* Logo */}
                    <div className="flex flex-wrap" style={{ fontFamily: 'MinhaFonte, sans-serif', color: 'white', fontSize: '24px' }}>
                        SplashYard
                    </div>


                    {/* Hamburger menu for small screens */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Navigation links */}
                    <div className={`lg:flex flex-col lg:flex-row ${isOpen ? 'block' : 'hidden'} lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl`}>
                        <a href="/" className="text-white  px-4 py-2  hover:text-blue-900 ">Home</a>
                        <a href="/pagina2" className="text-white  px-4 py-2  hover:text-blue-900">Variações</a>
                        <a href="/" className="text-white  px-4 py-2  hover:text-blue-900">Trocar dps</a>
                        <a href="/" className="text-white  px-4 py-2  hover:text-blue-900">Conclusão</a>
                    </div>
                </div>

            </nav>


        </div >
    );
}



import React, { useState, useContext } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { ThemeContext } from '@emotion/react';

const Header = () => {
    const links = [
        { name: 'About', link: 'about' },
        { name: 'Services', link: 'services' },
    ];

    const [open, setOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const toggleMenu = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className={`sticky top-0 left-0 w-full h-16 ${isDarkMode ? 'bg-black text-white' : 'bg-[#e1f0ff] text-black'} bg-opacity-85 border-b-2 border-[#101010] z-50 flex justify-center items-center `}>
            <div className="md:flex items-center justify-between py-4 md:px-10 px-2 w-full max-w-7xl">
                {/* img */}
                <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">

                    {/* Conditionally render a dark or light mode icon based on the value of `isDarkMode`. */}
                    {isDarkMode ? (<svg onClick={() => toggleTheme()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                    </svg>)
                        : (<svg onClick={() => toggleTheme()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                        )
                    }

                </div>
                <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
                    <Link to="/"> <span className={`${isDarkMode ? "text-white" : "text-black"} text-primary transition ease-in-out delay-150`}>AI Gen</span></Link>
                </div>

                {/* md: mobile icons */}
                <div
                    onClick={toggleMenu}
                    className="w-7 h-7 right-8 top-6 cursor-pointer md:hidden text-black absolute"
                >
                    {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                </div>

                {/* navbar */}
                <ul
                    className={`md:flex md:items-center md:pd-0 md:static md:z-auto left-0 w-full md:w-auto mt-4 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in-out mobile-menu ${open ? 'open' : ''}`}
                >
                    {links.map((item, index) => (
                        <li key={index} className="md:ml-8 md:my-0 my:7 font-semibold">
                            {item.link.startsWith('http') ? (
                                <a
                                    href={item.link}
                                    className={`text-black transition-all duration-500 hover:text-primary ${isDarkMode ? 'text-white' : 'text-black'}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.name}
                                </a>
                            ) : (
                                <Link
                                    to={item.link}
                                    activeClass="active"
                                    smooth={true}
                                    spy={true}
                                    className={`text-black transition-all duration-500 hover:text-primary ${isDarkMode ? 'text-white' : 'text-black'}`}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;

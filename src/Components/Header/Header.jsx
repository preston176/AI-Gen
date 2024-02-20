import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    const links = [
        { name: 'About', link: 'about' },
        { name: 'Pricing', link: 'projects' },
        { name: 'Login', link: 'contact' },
    ];

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className="sticky top-0 left-0 w-full h-16 bg-[#e1f0ff] bg-opacity-85 border-b-2 border-[#101010] z-50 flex justify-center items-center ">
            <div className="md:flex items-center justify-between py-4 md:px-10 px-2 w-full max-w-7xl">
                {/* img */}
                <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
                    <span className="text-primary text-black"><SocialIcon url='https://www.github.com/preston176/AI-GEN' bgColor='none' fgColor='black' /></span>
                </div>
                <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
                    <Link to="/"> <span className="text-primary text-black">AI Gen</span></Link>
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
                                    className="text-black transition-all duration-500 hover:text-primary"
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
                                    className="text-black transition-all duration-500 hover:text-primary"
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

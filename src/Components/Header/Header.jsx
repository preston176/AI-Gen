import React, { useState, useEffect } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link, animateScroll as scroll } from 'react-scroll';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SocialIcon } from 'react-social-icons';

const Header = () => {
    const links = [

        { name: 'About', link: 'about' },
        { name: 'Pricing', link: 'projects' },
        { name: 'Login', link: 'contact' },
    ];

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false); // Close the mobile menu when the component mounts
    }, []);

    const toggleMenu = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className="w-full max-w-7xl border-b-2 border-[#101010]">
            <div className="md:flex items-center justify-between py-4 md:px-10 px-2">
                {/* img */}
                <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
                    <span className="text-primary text-black"><SocialIcon url='https://www.github.com' bgColor='none' fgColor='black' /></span>
                </div>
                <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
                    <span className="text-primary text-black">AI Image Generator</span>
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
                    className={`sticky md:flex md:items-center md:pd-0 md:static md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in-out mobile-menu ${open ? 'open' : ''}`}
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

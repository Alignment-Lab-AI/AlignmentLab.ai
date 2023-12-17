// import logo?

import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";


export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter()
    const route = router.pathname


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [route])

    return (
        <header className="border-b">
            <div className="flex justify-between py-4 items-center mx-2 md:mx-4">
                <Link href="/">
                    <div className="flex items-center gap-0 hover:text-teal-400 transition duration-300">
                        <svg aria-hidden="true" fill="none" height="55" width="83" viewBox="0 0 25 32" xmlns="http://www.w3.org/2000/svg">
                                <g transform="skewX(-20)">
                                    <path transform="scale(0.6, 1)" clipRule="evenodd" d="M2 3.5C2 2.67157 2.67157 2 3.5 2C4.32843 2 5 2.67157 5 3.5V28.5C5 29.3284 4.32843 30 3.5 30C2.67157 30 2 29.3284 2 28.5V3.5ZM19 4C19 2.89543 19.8954 2 21 2H28C29.1046 2 30 2.89543 30 4V28C30 29.1046 29.1046 30 28 30H21C19.8954 30 19 29.1046 19 28V4ZM11 2C9.89543 2 9 2.89543 9 4V28C9 29.1046 9.89543 30 11 30H13C14.1046 30 15 29.1046 15 28V4C15 2.89543 14.1046 2 13 2H11Z" fill="currentColor" fillRule="evenodd"></path>
                                </g>
                            </svg>
                        <span className="text-5xl -ml-12">
                            \LAI
                        </span>
                    </div>
                </Link>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className={isMobileMenuOpen ? "hidden" : "inline-flex"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path><path className={isMobileMenuOpen ? "inline-flex" : "hidden"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>

                {/* Desktop Menu */}
                <nav className={`md:flex md:items-center hidden`}>
                    <ul className="flex space-x-6">
                        <li className={route == "/" ? "underline font-extrabold text-teal-400 transition duration-300 cursor-pointer" : "hover:text-teal-400 transition duration-300 cursor-pointer"}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={route == "/about" ? "underline font-extrabold text-teal-400 transition duration-300 cursor-pointer" : "hover:text-teal-400 transition duration-300 cursor-pointer"}>
                            <Link href="/about">About</Link>
                        </li>
                        <li className={route == "/team" ? "underline font-extrabold text-teal-400 transition duration-300 cursor-pointer" : "hover:text-teal-400 transition duration-300 cursor-pointer"}>
                            <Link href="/team">Team</Link>
                        </li>
                        <li className={route == "/projects" ? "underline font-extrabold text-teal-400 transition duration-300 cursor-pointer" : "hover:text-teal-400 transition duration-300 cursor-pointer"}>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li className={route == "/contact" ? "underline font-extrabold text-teal-400 transition duration-300 cursor-pointer" : "hover:text-teal-400 transition duration-300 cursor-pointer"}>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>


                {/* Mobile Menu */}
                <div className={`w-full h-screen top-0 left-0 bg-white dark:bg-slate-900 z-50 ${isMobileMenuOpen ? "fixed" : "hidden"} md:hidden`}>
                    <div className='absolute top-0 right-0 py-4 px-2 cursor-pointer' onClick={toggleMobileMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className={isMobileMenuOpen ? "inline-flex" : "hidden"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </div>
                    <nav className="flex flex-col justify-center items-center text-center h-full">
                        <ul className="flex flex-col space-y-6">
                            <li className={route == "/" ? "underline font-extrabold text-teal-400 transition duration-300 cursor-pointer" : "hover:text-teal-400 transition duration-300 cursor-pointer"}>
                                <Link href="/">Home</Link>
                            </li>
                            <li className={route == "/about" ? "underline font-extrabold text-teal-400 transition duration-300 cursor-pointer" : "hover:text-teal-400 transition duration-300 cursor-pointer"}>
                                <Link href="/about">About</Link>
                            </li>
                            <li className={route == "/team" ? "underline font-extrabold text-teal-400 transition duration-300 cursor-pointer" : "hover:text-teal-400 transition duration-300 cursor-pointer"}>
                                <Link href="/team">Team</Link>
                            </li>
                            <li className={route == "/projects" ? "underline font-extrabold text-teal-400 transition duration-300 cursor-pointer" : "hover:text-teal-400 transition duration-300 cursor-pointer"}>
                                <Link href="/projects">Projects</Link>
                            </li>
                            <li className={route == "/contact" ? "underline font-extrabold text-teal-400 transition duration-300 cursor-pointer" : "hover:text-teal-400 transition duration-300 cursor-pointer"}>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);
    const handleToggleTheme = (e) => {
        setTheme(e.target.checked ? 'synthwave' : 'light');
    }

    const links =
        <>
            <li><NavLink to='/' className={({ isActive }) => isActive ? 'border border-green-500 font-semibold rounded-sm md:rounded-md px-4 md:py-2 text-green-500 hover:text-green-600 duration-100 text-xs md:text-base' : 'text-natural hover:underline duration-100 text-xs md:text-base'}>Home</NavLink></li>
            <li><NavLink to='/listed-book' className={({ isActive }) => isActive ? 'border border-green-500 font-semibold rounded-sm md:rounded-md px-4 md:py-2 text-green-500 hover:text-green-600 duration-100 text-xs md:text-base' : 'text-natural hover:underline duration-100 text-xs md:text-base'}>Listed Book</NavLink></li>
            <li><NavLink to='/pages-to-read' className={({ isActive }) => isActive ? 'border border-green-500 font-semibold rounded-sm md:rounded-md px-4 md:py-2 text-green-500 hover:text-green-600 duration-100 text-xs md:text-base' : 'text-natural hover:underline duration-100 text-xs md:text-base'}>Pages To Read</NavLink></li>
        </>

    return (
        <div className="navbar bg-base-100 shadow-md font-lato fixed top-0 z-50 px-3 md:px-16">
            <div className="navbar-start">
                <div className="dropdown -ml-5 md:ml-0">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 md:h-5 w-4 md:w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="ml-5 menu-sm dropdown-content bg-base-100 rounded-md z-[1] mt-3 w-32 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="text-3xl font-black">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal gap-4">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-1 md:gap-3">
                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input onChange={handleToggleTheme} type="checkbox" className="theme-controller" checked={theme === 'synthwave'} />
                    {/* sun icon */}
                    <svg
                        className="swap-off h-4 md:h-8 w-4 md:w-8 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    {/* moon icon */}
                    <svg
                        className="swap-on h-4 md:h-8 w-4 md:w-8 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
                <div className="flex gap-1 md:gap-3">
                    <a className="text-xs md:text-base md:px-6 px-2 text-white py-1 md:py-[9px] rounded-sm md:rounded-md bg-[#23BE0A] hover:bg-green-500 cursor-pointer duration-100">Sign In</a>
                    <a className="text-xs md:text-base md:px-6 px-2 text-white py-1 md:py-[9px] rounded-sm md:rounded-md bg-[#59C6D2] hover:bg-[#48d7e7] cursor-pointer duration-100">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
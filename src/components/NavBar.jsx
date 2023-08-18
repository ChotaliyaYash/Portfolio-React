import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const NavBar = () => {

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]

    // nav toggle
    const [nav, setNav] = useState(false);

    return (
        <div className='flex justify-between items-center w-full h-20 bg-black top-0 left-0 text-white fixed px-4'>
            {/* Name */}
            <div className="text-4xl md:text-5xl font-titlename ml-2">Yash Chotaliya</div>

            {/* options */}
            <ul className='hidden md:flex'>
                {links.map((linker) => (
                    <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-gray-100" key={linker.id}>
                        <Link to={linker.link} smooth duration={500}>{linker.link}</Link>
                    </li>
                ))}
            </ul>

            {/* bar icons */}
            <div className='md:hidden cursor-pointer text-gray-400 hover:text-gray-100 z-10' onClick={() => setNav(!nav)}>
                {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>

            {/* list on button click */}
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800 w-full h-screen'>
                    {links.map((linker) => (
                        <li className="px-4 cursor-pointer capitalize py-6 text-4xl font-medium text-gray-500 hover:scale-105 duration-200 hover:text-gray-100" key={linker.id}>
                            <Link to={linker.link} smooth duration={500} onClick={() => setNav(!nav)}>{linker.link}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default NavBar
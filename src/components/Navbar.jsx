import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { Link } from "react-scroll";
const Navbar = () => {
    const [getNav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home',

        },
        {
            id: 2,
            link: 'about',

        },
        {
            id: 3,
            link: 'portfolio',

        },
        {
            id: 4,
            link: 'experience',

        },
        {
            id: 5,
            link: 'contact',
        }

    ]
    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
            <div>
                <h1 className='text-5xl font-signature ml-2'>Sahil</h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px4 cursor-pointer capitalize font-medium text-2xl text-gray-500 hover:scale-105 duration-500 px-3'><Link to={link} smooth duration={500}>{link}</Link></li>
                ))}


            </ul>
            <div onClick={() => { setNav(!getNav) }} className='cursor-pointer pr-4 z-10 text-gray-500 md:invisible'>

                {getNav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {getNav && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
            bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                <div className='flex text-4xl '>
                    <a href="https://github.com/Sahil8402" className='pr-5'>
                        <FaGithub />
                    </a>&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/in/sahil-gandhi-b16380202/" className='pr-5'>
                        <FaLinkedin />
                    </a>&nbsp;&nbsp;
                    <a href="https://api.whatsapp.com/send?phone=6356144561" className='pr-5'>
                        <FaWhatsapp />
                    </a>
                </div>
                <br />
                {
                    links.map(({ id, link }) => (<li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={() => setNav(!getNav)} to={link} smooth duration={500}>{link}</Link></li>
                    ))}

            </ul>}

        </div>
    )
}

export default Navbar

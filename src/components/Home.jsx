import React from 'react'
import Second from '../assets/ss.jpeg';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-scroll';
import { BsFillPersonLinesFill } from "react-icons/bs";
import ExampleDoc from 'D:/React_JS/myportfolio/src/assets/Files/Resume.pdf';

const Home = () => {

    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>
            <br />
            <br />
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <br />
                <br />
                <div className='flex flex-col justify-center h-full'><h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm Full Stack Web Developer</h2>
                    <br />
                    <p className='text-gray-500 max-wd-md'>
                        I have good knowledge of front-end technologies as well as back-end technologies
                        and I am also familiar about different frameworks in it and also Passionate to leran about new technologies.
                    </p>
                    <br />
                    <div className='flex'>
                        <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
                            Projects&nbsp;
                            <span className='hover:rotate-90 duration-300'><FaLongArrowAltRight size={25}
                                className='ml-1'
                            /></span>
                        </Link>&nbsp;&nbsp;&nbsp;


                        <a href={ExampleDoc} download="SahilResume  ">
                            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-300 to-green-800 cursor-pointer'>
                                <BsFillPersonLinesFill size={25}
                                />&nbsp; Resume
                                <span className='hover:rotate-90 duration-300'></span>
                            </button>

                        </a>
                    </div>
                </div>
                <div><img src={Second} alt="my pics" className='rounded-2xl mx-auto w-2/3 md:w-full' /></div>
            </div>
        </div>
    )
}

export default Home

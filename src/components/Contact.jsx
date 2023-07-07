import React from 'react';
import { Link } from 'react-scroll'

const Contact = () => {
    return (
        <div >
            <div name="contact" className='w-full h-full bg-gradient-to-b from-black to-gray-800 text-white '>
                <br />
                <br /><br />

                <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full w-full'>
                    <br />
                    <br />

                    <div className='pb-10 mt-20'><br />

                        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                            Contact
                        </p>
                        <p className='py-6'>
                            Submit the form below to get in touch with me..
                        </p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <form action="https://getform.io/f/17be3846-76b5-404c-b5f7-6f00cb607c7c" method="POST" className='flex flex-col w-full md:w-1/2'>
                            <input type="text" name="name" placeholder='Enter Your Name' className='p-2 bg-transparent
                        border-2 rounded-md text-white focus:outline-none'></input>
                            <input type="text" name="email" placeholder='Enter Your Email' className='my-4 p-2 bg-transparent
                        border-2 rounded-md text-white focus:outline-none'></input>
                            <textarea name='message' placeholder='Enter Your Message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
                            </textarea>
                            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex-items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                        </form>
                    </div>
                </div>
                <div className='bg-black h-10 w-full'>
                    <p className='text-center text-white pt-3'>© Designed and Develop by <Link to="home" smooth duration={700} className='cursor-pointer text-white'>Sahil Gandhi</Link> </p>
                </div>
            </div>

        </div>
    )
}

export default Contact

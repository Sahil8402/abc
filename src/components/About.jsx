import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white 
        '>
            <br />
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <br />
                <br />
                <p className='text-xl '>
                    Myself Sahil Gandhi, Full Stack web Developer I am interested in making user friendly and responsive websites. I have also knowledge about different programming languages.I have soft skills like problem solving ,stratic planning,organizational
                    skill,Active listning ,time management.
                </p>

                <p className='text-xl mt-8'>I have also done Internship in Full stack web development in Teachnook company where I have done
                    work on HTML, CSS, JavaScript and in Backend Nodejs and by using Mysql Database.</p>


            </div>

        </div>

    )
}

export default About

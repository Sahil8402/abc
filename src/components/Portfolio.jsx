import React from 'react';
import My1st from '../assets/portfolio/My1.jpg';
import My2nd from '../assets/portfolio/MY2.jpg';
import My3rd from '../assets/portfolio/My3.jpg';
import My4th from '../assets/portfolio/My4.jpg';
import My5th from '../assets/portfolio/My5.jpg';
import My6th from '../assets/portfolio/My6.jpg';
const Portfolio = () => {
  const portfolio = [{
    id: 1,
    src: My1st,
    href: 'https://grand-kashata-9d1220.netlify.app/',
    href2: 'https://github.com/Sahil8402/FoodReact'
  },
  {
    id: 2,
    src: My2nd,
    href: 'https://sahil8402.github.io/Techverse/',
    href2: 'https://github.com/Sahil8402/Techverse'
  },
  {
    id: 3,
    src: My3rd,
    href: 'https://sahil8402.github.io/Earboat/',
    href2: 'https://github.com/Sahil8402/Earboat'
  },
  {
    id: 4,
    src: My4th,
    href: 'https://sahil8402.github.io/ChatNode/',
    href2: 'https://github.com/Sahil8402/ChatNode'
  },
  {
    id: 5,
    src: My5th,
    href: 'https://voluble-frangollo-d86bbe.netlify.app/',
    href2: 'https://github.com/Sahil8402/WeatherApp/tree/main/build'
  },
  {
    id: 6,
    src: My6th,
    href: 'https://sahil8402.github.io/Guess_Number/',
    href2: 'https://github.com/Sahil8402/Guess_Number'
  }
  ]
  return (<div name="portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen" >
    <div className='max-w-screen-lg p-4 flex-auto mx-auto flex-col justify-center w-full h-full' >
      <div className='pb-8' > <p className='text-4xl font-bold inline border-b-4 border-gray-500' > Portfolio </p>
        <p className='py-6' > Check out my work right here. </p></div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px0' >

        {portfolio.map(({ id, src, href, href2 }) => (

          <div key={id} className='shadow-md shadow-gray-600 rounded-lg' >
            <img src={src} className='rounded-md duration-200 hover:scale-105' alt="" />
            <div className='flex items-center justify-center' >
              <a href={href} > <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' > Demo </button></a>
              <a href={href2} > <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' > Code </button></a>
            </div> </div>
        ))}</div> </div> </div>
  )
}
export default Portfolio
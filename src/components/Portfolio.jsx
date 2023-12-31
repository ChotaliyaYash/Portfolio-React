import React from 'react'

import Ecommerce from '../assets/ecommerce.png'
import Food from '../assets/food.avif'
import Portfolio0 from '../assets/portfolio.png'

const Portfolio = () => {

    const links = [
        {
            id: 1,
            src: Ecommerce,
            href: 'https://github.com/ChotaliyaYash/E-commerce-React-Node',
        },
        {
            id: 2,
            src: Food,
            href: 'https://github.com/ChotaliyaYash/FoodDelivery---Flutter',
        },
        {
            id: 3,
            src: Portfolio0,
            href: 'https://github.com/ChotaliyaYash/Portfolio-React',
        },
    ]

    return (
        <div name='portfolio' id='portfolio' className='w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 justify-center flex flex-col w-full h-full'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>
                        Portfolio
                    </p>

                    <p className='py-6'>
                        Check out some of my work right here
                    </p>
                </div>

                {/* Card */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0'>

                    {links.map((linker) => (
                        <div className='shadow-md shadow-gray-600 rounded-lg' key={linker.id}>
                            <img src={linker.src} alt="" className='rounded-md duration-200 hover:scale-105 object-cover h-56' />

                            <div className='flex items-center justify-center'>
                                <a href={linker.href} target='_blank' rel='noreferrer' className='w-1/2 px-6 m-2 duration-200 hover:scale-105 flex justify-center items-center'>Code</a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Portfolio
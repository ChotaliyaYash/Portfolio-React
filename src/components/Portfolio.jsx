import React from 'react'

import Demo from '../assets/demoPort.jpeg'

const Portfolio = () => {

    const links = [
        {
            id: 1,
            src: Demo,
            href: '',
        },
        {
            id: 2,
            src: Demo,
            href: '',
        },
        {
            id: 3,
            src: Demo,
            href: '',
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
                            <img src={linker.src} alt="" className='rounded-md duration-200 hover:scale-105 object-cover' />

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
import React from 'react'

import ReactPNG from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Html from '../assets/html.png'
import CSS from '../assets/css.png'
import MongoDB from '../assets/mongodb.png'
import Dart from '../assets/dart.png'
import Flutter from '../assets/flutter.png'
import Firebase from '../assets/firebase.png'
import Github from '../assets/github.png'

const Experience = () => {

    const links = [
        {
            id: 1,
            src: ReactPNG,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 2,
            src: Tailwind,
            title: 'Tailwind',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: Html,
            title: 'HTML',
            style: 'shadow-blue-500'
        },
        {
            id: 4,
            src: CSS,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: MongoDB,
            title: 'Mongo DB',
            style: 'shadow-blue-500'
        },
        {
            id: 6,
            src: Dart,
            title: 'Dart',
            style: 'shadow-blue-500'
        },
        {
            id: 7,
            src: Flutter,
            title: 'Flutter',
            style: 'shadow-blue-500'
        },
        {
            id: 8,
            src: Firebase,
            title: 'Firebase',
            style: 'shadow-blue-500'
        },
        {
            id: 9,
            src: Github,
            title: 'Github',
            style: 'shadow-blue-500'
        },
    ]

    return (
        <div id='experience' name='experience' className='w-full bg-gradient-to-b to-black from-gray-800 text-white md:h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 justify-center flex flex-col w-full h-full'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>
                        Experience
                    </p>

                    <p className='py-6'>
                        These are the technologies I've worked with
                    </p>
                </div>

                {/* Card */}
                <div className='grid w-full grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:p-0'>

                    {links.map((linker) => (
                        <div className={`shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 py-2 ${linker.style}`} key={linker.id}>
                            <img src={linker.src} alt="" className='w-20 mx-auto h-20 object-contain' />
                            <p className='mt-4'>{linker.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
import React from 'react'
import { Link } from 'react-scroll'

const About = () => {
    return (
        <div className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white' id='about' name='about'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>
                        About
                    </p>
                </div>

                <p className='text-xl mt-10 md:mt-20'>
                    Hi, I'm Yash Chotaliya! I'm pursuing B-Tech in Computer Science and Engineering at Ahmedabad. My passion for web and mobile application. From the beginning of my college journey, I have ventured into various fields such as Data Science, Machine Learning, and Software Development.

                </p>

                <br />

                <p className='text-xl'>
                    However, my interest lies in web and Android-iOS application development, and I am practicing back since. As I am fresher, I have created multiple project! Check out my portfolio
                    <span className='text-blue-500 cursor-pointer'>
                        <Link to='portfolio'>{` here `}</Link>
                    </span>
                    to see for yourself.
                    <span className='text-blue-500 cursor-pointer'>
                        <Link to='contact'>{` Contact me `}</Link>
                    </span>
                    today to learn more!
                </p>
            </div>
        </div>
    )
}

export default About
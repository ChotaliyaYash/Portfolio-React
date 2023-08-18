import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'
import { Typewriter } from 'react-simple-typewriter'

import Profile from '../assets/profile.jpeg'

const Home = () => {

    // const { text } = useTypewriter({
    //     words: ['Full Stack Developer', 'Front-end Developer', 'Back-end Developer', 'Android Developer', 'iOS Developer'],
    //     loop: {},
    // })

    return (
        <div name='home' className='h-screen bg-gradient-to-b from-black to-gray-800 via-black w-full mt-40 md:mt-0' id='home'>
            <div className='text-white max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row'>

                {/* <div className=''></div> */}

                {/* text image */}
                <div className='flex flex-col justify-center h-full md:w-2/3'>
                    <h2 className='text-3xl md:text-5xl font-bold'>I'm a</h2>
                    <span className='text-4xl md:text-6xl font-bold pt-5'>
                        <Typewriter
                            words={['Full Stack Developer', 'Front-end Developer', 'Back-end Developer', 'Android Developer', 'iOS Developer']}
                            loop={0}
                            cursor
                            // cursorStyle='_'
                            typeSpeed={150}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                    <p className='text-gray-500 py-4 max-w-md'>Since I am a fresher, I have an experiend of creating my own projects building and designing and software. Currently love to work with web & Android-Ios application using React, Sass, MongoDB and Flutter. </p>

                    {/* button */}
                    <div>
                        <button className='group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300'>
                            <Link to='portfolio' smooth duration={500}>Portfolio</Link>
                            <span className='group-hover:rotate-90 duration-300 ml-1'>
                                <MdOutlineKeyboardArrowRight size={25} />
                            </span>
                        </button>
                    </div>
                </div>

                {/* image */}
                <div className='md:w-1/2 flex items-center w-1/2 h-full justify-center p-2'>
                    <img src={Profile} alt="myImage" className='rounded-2xl mx-auto md:w-2/3 object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Home
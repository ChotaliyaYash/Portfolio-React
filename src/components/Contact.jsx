import React from 'react'
import data from '../utils/url'

const Contact = () => {
    return (
        <div className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white' id='contact' name='contact'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>

                {/* title */}
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>
                        Contact
                    </p>

                    <p className='py-6'>
                        Submit the form below to get in touch with me
                    </p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action={data.contactAction} className='flex flex-col w-full md:w-1/2' method='POST'>
                        <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <input type="text" name='email' placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4' />

                        <textarea name="message" id="" rows="10" placeholder='Enter your message...' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 cursor-pointer duration-300'>Let's talk</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact
import React from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (<>
                LinkedIn <FaLinkedin size={30} />
            </>),
            href: 'https://www.linkedin.com/in/yash-chotaliya-69024b250',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (<>
                Github <FaGithub size={30} />
            </>),
            href: 'https://github.com/ChotaliyaYash',
        },
        {
            id: 3,
            child: (<>
                Mail <HiOutlineMail size={30} />
            </>),
            href: 'mailto:yashkumar.c@ahduni.edu.in',
        },
        {
            id: 4,
            child: (<>
                Resume <BsFillPersonLinesFill size={30} />
            </>),
            href: '/Yash_Resume.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ]

    return (
        <div className='flex-col top-[35%] left-0 fixed hidden lg:flex'>
            <ul>
                {
                    links.map((linker) => (
                        <li key={linker.id} className={`flex justify-between items-center w-40 h-14 px-4 text-white bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${linker.style}`}>
                            <a href={linker.href} className='flex justify-between items-center w-full' download={linker.download} target='_blank' rel='noreferrer'>
                                {linker.child}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SocialLinks
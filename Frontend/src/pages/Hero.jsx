import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {GroupAnimation, GroupAnimationWithThen, motion, scale} from "framer-motion"

function Hero() {
    return (
        <div className='flex min-h-screen md:flex-row flex-col-reverse items-center justify-center max-w-7xl'>

            <div className='p-4'>

                <div className='flex gap-4 flex-col justify-center items-center'>
                    <motion.h1
                      initial={{filter:"blur(3px)",x:-100}}
                      whileInView={{x:0}}
                      onScroll={{scale:1.2}}
                      animate={{filter:"none"}}
                      transition={{duration:2}}
                    
                    className='md:text-3xl font-semibold text-blue-400 '>Anuj Karn</motion.h1>
                    <motion.h3
                     initial={{x:100}}
                     whileInView={{x:0}}
                     transition={{duration:0.9}}
                     
                     className='text-gray-500'>Full Stack Developer and Trainer</motion.h3>
                    <p className='text-center'>I am a full stack developer from Nepal. I design and build highly scalable and responsive web application using Mongodb, Express , React and Nodejs.</p>
                </div>

                <div className='flex md:flex-row gap-4 justify-center p-10'>

                    <a href="/cv.pdf" download>
                        <motion.button 
                        onClick={(e)=>{
                            initial={screen:GroupAnimation}
                            whileInView={}
                            transition={duration:2}

                        }}
                        className='bg-green-300 p-4 text-white font-semibold'>Download CV</motion.button>
                    </a>

                    <Link to="/contact" className=''>
                        <button className='border border-gray-300 py-4 px-6 text-blue-400 font-bold'>Contact me</button>

                    </Link>

                </div>

                <div className='flex gap-4 justify-center text-xl text-blue-400'>
                    <a href="https://www.facebook.com/" target='_blank'><FaFacebook /></a>

                    <a href="https://www.instagram.com/" target='_blank'><FaInstagram /></a>
                    <a href="https://www.linkedin.com/" target='_blank'><FaLinkedin /></a>
                    <a href="https://www.github.com/" target='_blank'><FaGithub /></a>
                </div>
            </div>


            <div>
                <img src="/profile.jpg" alt="" className='md:h-90 md:w-102 h-52 w-54 md:p-4 mt-20 md:mt-0 rounded-full' />
            </div>



        </div>
    )
}

export default Hero
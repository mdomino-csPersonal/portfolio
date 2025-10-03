import React from 'react'
import { serviceData } from '@/assets/assets'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"
import { useState } from 'react'

const Services = () => {
    const [openIndex,setOpenIndex] = useState(null);

    const toggle = (index)=>{
        setOpenIndex(openIndex === index ? null : index)

    }

    return (
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
            
            <motion.h4 
            initial={{opacity: 0,y: -20}}
            whileInView={{opacity: 1,y: 0}}
            transition={{duration: 0.5,delay: 0.3}}
            className='text-center mb-2 text-lg font-Ovo'>What I Offer</motion.h4>
            <motion.h2 
            initial={{opacity: 0,y: -20}}
            whileInView={{opacity: 1,y: 0}}
            transition={{duration: 0.5,delay: 0.7}}
            className='text-center text-5xl font-Ovo'>My Services</motion.h2>
            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5,delay: 0.7}}
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I offer hands-on skills in cybersecurity, software development, and cloud-based solutions. My services include building and securing full-stack applications, designing and analyzing algorithms, and implementing threat detection workflows using tools like Microsoft Sentinel, AWS, and Azure. I also provide support in network configuration, vulnerability assessment, and system monitoring, with a strong focus on applying best practices in security and reliability. I am eager to bring these skills into a professional internship where I can help strengthen organizational cybersecurity while continuing to grow as a professional.</motion.p>

            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6,delay: 0.9}}
            className='grid grid-cols-auto gap-6 my-10'>
                {serviceData.map(({icon,title,description,more},index)=>(
                    <motion.div 
                    whileHover={{scale: 1.05}}
                    key={index}
                    className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-lg hover:shadow-black/20 cursor-pointer hover:bg-gray-50 hover:-translate-y-1 duration-500 transitiona-all'>
                        <Image src={icon} alt='' className='w-10'/>
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>
                            {description}
                        </p>
                        <button 
                        onClick={()=>toggle(index)}
                        className="flex items-center gap-2 text-sm mt-5 text-blue-600">
                            {openIndex === index ? 'Show Less' : 'Read More'}
                            <Image src={assets.right_arrow} alt='' className='w-4'/>
                        </button>
                        {openIndex === index && (   // NEW: only shows if this card is active
                        <div className="mt-4 text-gray-600 text-sm">
                            <p>
                                {more}
                            </p>
                        </div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services
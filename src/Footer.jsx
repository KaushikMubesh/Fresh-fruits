import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter,FaWhatsapp, FaLeaf } from 'react-icons/fa'
import { motion } from 'framer-motion'

export const Footer = () => {
    return (
        <footer className=' bg-secondary/10 p-11 mt-6 '>
            <motion.div
            initial={{opacity:0}} 
            whileInView={{opacity:1}}
            transition={{duration:1,dalay:0.2}}
            className='flex items-center gap-[550px] ml-[200px]'>
                <div className='flex font-bold text-2xl gap-2 uppercase items-center'>
                    <p className='text-primary'>Fruit</p>
                    <p className='text-secondary'>Store</p>
                    <FaLeaf className='text-green-700' />
                </div>
                <div className='text-3xl text-gray-700 flex gap-4'>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaFacebookF/>
                    <FaWhatsapp/>
                </div>
            </motion.div>
        </footer>
    )
}

import React from 'react'
import Image10 from "./assets/image10.png";
import { motion } from "framer-motion"
import { IoBagHandleOutline } from "react-icons/io5";
import { Fadeleaf, Fadeup, Faderight } from './Utility/Animation';



export const Banner2 = () => {
    return (
        <div>
            <div className='pt-[100px] ml-[150px] grid md:grid-cols-2 gap-8 items-center'>
                <div>
                    <motion.div
                    variants={Fadeleaf(.5)}
                    initial="hidden"
                    whileInView="visible"
                    className='w-[550px]'>
                        <h1 className='text-2xl font-bold text-primary/80'>JUICY DELIGHT</h1>
                        <h1 className='text-gray-500 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas, aut facilis perspiciatis sit explicabo vel temporibus sequi ipsam necessitatibus iusto, numquam quos distinctio debitis molestias totam est minus laborum exercitationem odit magni ut. Labore, ab rerum rem voluptatibus dignissimos minima modi in ipsum praesentium? Eius est blanditiis rerum doloremque.</h1>
                    </motion.div>
                    <motion.div
                        variants={Fadeleaf(.8)}
                        initial="hidden"
                        whileInView="visible"
                        className='pt-4'
                    >
                        <button className='flex gap-2 max-md-kg:ml-[40%] items-center mt-3 px-[8px] bg-primary p-2 rounded-lg  text-white shadow-lg shadow-primary hover:scale-110'>
                            <IoBagHandleOutline />Download Now
                        </button>

                    </motion.div>
                </div>
                <div>
                    <img src={Image10} alt="" className='drop-shadow w-[450px] ' />
                </div>
            </div>
        </div>
    )
}

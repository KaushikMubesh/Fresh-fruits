import React from 'react'
import { IoBagHandleOutline } from "react-icons/io5";
import Image1 from "./assets/image1.png"
import Image2 from "./assets/image2.png"
import Image3 from "./assets/image3.png"
import {motion} from "framer-motion"
import { Faderight} from './Utility/Animation';
import { Fadeleaf } from './Utility/Animation';
import { Fadeup } from './Utility/Animation';


export const Hero = () => {
  return (
    <section>
      <div className="container md:ml-[5%] ml-[100px] grid grid-cols-1 md:grid-cols-2 min-h-[650px] items-center relative w-screen overflow-hidden">
        <div className='flex flex-col ml-[100px] justify-center py-10 z-10'>
          <div className='text-center md:text-left space-y-6 lg:max-[400px]'>
            <motion.h1
            variants={Faderight(1)}
            initial="hidden"
            animate="visible"
            className='text-5xl lg:lext-6xl font-bold xl:leading-loose font-averia'>Healthy
              <br />
              Fresh <span className='text-secondary'>Fruits !</span></motion.h1>
            <motion.p
             variants={Faderight(1.2)}
             initial="hidden"
             animate="visible"
            className='text-2xl'>Order now for <span className='text-secondary tracking-wide font-averia font-bold'>Healthy</span> life !</motion.p>
            <motion.p
             variants={Faderight(1.3)}
             initial="hidden"
             animate="visible"
            className="min-md-po:w-[310px] text-gray-500">Healthy and yummy food for fresh morning breakfast. Eat daily for good health and mind. Order now and get 20% Off on first order.</motion.p>
            <motion.div
             variants={Faderight(1.5)}
             initial="hidden"
             animate="visible"
             className='pt-4'
            >
              <button className='flex gap-2 max-md-kg:ml-[40%] items-center px-[8px] bg-primary p-2 rounded-lg  text-white shadow-lg shadow-primary hover:scale-110'>
                <IoBagHandleOutline />Order Now
              </button>
            </motion.div>
          </div>
        </div>
        <div className="relative z-20 mr-[0px] top-[50px]">
          <motion.img
          initial={{opacity:0,x:200,rotate:65}}
          animate={{opacity:1,x:0,rotate:0}}
          transition={{duration:1,delay:0.2} }
          src={Image1} alt="" className='w-[800px] max-md-kg:w-[500px] max-md-kg:ml-[180px]  max-md-kg:mt-[120px] drop-shadow' />
        </div>
        <div className=''>
          <motion.img
          initial={{opacity:-8,y:500,rotate:140}}
          animate={{opacity:1,y:0,rotate:260}}
          transition={{duration:1,delay:0.2} } src={Image2} alt="" className='absolute z-0 top-[-80px] blur-sm right-[-200px] w-[800px] max-md-kg:top-[400px] rotate-[250deg] drop-shadow1' />
        </div>
        {/* <div className=''>
          <img src={Image3} alt="" className='absolute top-[100px] blur-sm rotate-[-20deg] w-[600px] right-[300px]' />
        </div> */}
      </div>
    </section>
  )
}

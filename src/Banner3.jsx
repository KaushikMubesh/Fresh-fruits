import React from 'react'
import Image11 from "./assets/image11.avif";
import { motion } from "framer-motion";
import { Fadeleaf, Fadeup, Faderight } from './Utility/Animation';
import { IoBagHandleOutline } from "react-icons/io5";

const bgStyle = {
    backgroundImage: `url(${Image11})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition:"fixed",
    height: "100%",
    width: "100%",
}

const Banner3 = () => {
    return (
        <section className='flex justify-end gap-8 p-[40px]'>
            <div className='container grid md:grid-cols-2 items-center rounded-3xl ' style={bgStyle}>
                <div>
                    {/* <img
          src={Image11} alt="" className='w-[300px] transform translate-x-[210px] h-full object-cover scale-125' /> */}
                </div>
                <div>
                    <div className='p-12'>
                        <motion.h1
                            variants={Fadeleaf(0.5)}
                            initial='hidden'
                            // viewport={{once:true}}
                            whileInView='visible'
                            className='text-secondary pb-6 font-bold text-3xl'>Juicy Delight</motion.h1>
                        <motion.h1
                            variants={Fadeleaf(1.2)}
                            initial='hidden'
                            // viewport={{once:true}}
                            whileInView="visible"
                            className='text-gray-800 text-left mb-9'> <span className='font-bold text-black'> Juicy Delight</span> is your go-to destination for the freshest and most flavorful fruits. At Juicy Delight, we believe in bringing nature's best directly to your table, offering a wide variety of hand-picked, ripe, and succulent fruits that burst with natural sweetness. Whether you're looking for everyday essentials or exotic treats, our carefully curated selection ensures you get the highest quality produce. We are committed to sustainability, partnering with local farmers to support eco-friendly practices. With Juicy Delight, you can enjoy the pure, unadulterated taste of nature, perfect for healthy snacking or adding a vibrant touch to any dish.</motion.h1>

                    
                        <div>
                            <motion.div
                                variants={Fadeleaf(1.5)}
                                initial="hidden"
                                whileInView="visible"
                                // viewport={{once:true}}
                                className='pt-4'
                            >
                                <button className='flex gap-2 max-md-kg:ml-[40%] items-center px-[8px] bg-primary p-2 rounded-lg  text-white shadow-lg shadow-primary hover:scale-110'>
                                    <IoBagHandleOutline />Order Now
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Banner3
import React from 'react'
import Image4 from "./assets/image4.png"
import Image5 from "./assets/image5.png"
import Image6 from "./assets/image6.png"
import Image7 from "./assets/image7.png"
import Image8 from "./assets/image8.png"
import {motion} from "framer-motion";
import { Fadeleaf } from './Utility/Animation'

const MenusData =[
    {
        id:1,
        Title:"Fresh apple",
        linl:"/",
        Price:"$ 2.00",
        img:Image4,
        delay:0.5,
    },
    {
        id:2,
        Title:"Fresh Orange",
        linl:"/",
        Price:"$ 3.00",
        img:Image5,
        delay:0.8,
    },
    {
        id:3,
        Title:"Fresh Grapes",
        linl:"/",
        Price:"$ 4.00",
        img:Image6,
        delay:1.1,
    },
    {
        id:4,
        Title:"Fresh Cherry",
        linl:"/",
        Price:"$ 5.00",
        img:Image7,
        delay:1.4,
    },
    {
        id:5,
        Title:"Fresh Cherry",
        linl:"/",
        Price:"$ 5.00",
        img:Image8,
        delay:1.7,
    }
]

const Menus = () => {
  return (
    <section className=''>
        <motion.div
        initial={{opacity:0,x:-200}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1,delay:0.2} }
         className="container pt-[10px] ml-[00px] pb-24">
            <h1 className='text-2xl font-bold uppercase text-left ml-[160px]'>Our Menu </h1>
            <div className='grid pt-11 grid-cols-1 sm:grid-cols-2 md:grid-cols-5 pr-8 gap-8 ml-[220px]'>
                {MenusData.map((menu)=>(
                    <motion.div
                    variants={Fadeleaf(menu.delay)}
                    initial="hidden"
                    whileInView={"visible"}
                    whileHover={{scale:1.1}}
                    className='bg-white rounded-3xl pt-5 px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex items-center gap-4'>
                        <img src={menu.img} alt="" className='w-[60px] scale-125 transform -translate-y-10 ' />
                        <div>
                            <h1 className='text-lg font-semibold'>{menu.Title}</h1>
                            <h1 className='text-secondary font-bold '>{menu.Price}</h1>
                        </div>
                    </motion.div>   
                ))}        
            </div>
        </motion.div>

    </section>
  )
}

export default Menus
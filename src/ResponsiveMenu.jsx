import React from 'react';
import {motion,AnimatePresence} from "framer-motion";

export const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence mode='wait'>
    {
        open && (

            <motion.div 
            initial={{opacity:0,y:-100}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-100}}
            transition={{duration:.8}}
            
            className='absolute top-20 left-0 w-full h-full z-20'>
                <div className='text-xl font-semibold uppercase bg-primary py-10 m-6 text-white rounded-xl'>
                    <ul className='flex flex-col items-center gap-3'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contacts</li>
                    </ul>
                </div>
            </motion.div>
        )
    }
    </AnimatePresence>
  )
}
 
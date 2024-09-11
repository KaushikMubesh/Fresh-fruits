import React from 'react'
import { FaLeaf } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { ResponsiveMenu } from './ResponsiveMenu';




const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "Products",
        link: "/",
    },
    {
        id: 3,
        title: "About",
        link: "#",
    },
    {
        id: 4,
        title: "Shop",
        link: "#",
    },
    {
        id: 5,
        title: "Contacts",
        link: "$",
    },
]



export const Navbar = () => {
    const [open, setopen] = React.useState(false)
    return (<>
        <nav className='flex justify-center items-center max-md-lg:gap-[40px] duration-700'>
            <div className='flex items-center gap-[100px] max-md-lg:gap-[30px]  max-md-kg:gap-[10px] duration-1000'>
                <div>
                    <div className="cointainer flex justify-between items-center py-4 md: pt-4">
                        {/* logo */}
                        <div className='flex font-bold text-2xl gap-2 uppercase items-center'>
                            <p className='text-primary'>Fruit</p>
                            <p className='text-secondary'>Store</p>
                            <FaLeaf className='text-green-700' />
                        </div>
                    </div>
                </div>
                <div>

                    <div className='hidden md:block z-50'>
                        <ul className='flex gap-6 max-md-sg:gap-[10px] items-center text-gray-600 duration-700'>
                            {
                                NavbarMenu.map((menu) => (
                                    <li key={menu.id} className='text-xl'>
                                        <a href={menu.link} className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] z-50 hover:duration-300'>{menu.title}</a>
                                    </li>
                                ))}
                            <button className='hover:bg-primary text-gray-400 text-[25px] rounded-3xl hover:text-white p-2 duration-200 items-center'>
                                <MdShoppingCart />
                            </button>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Mobile menu */}
            <div className='md:hidden items-center' onClick={() => setopen(!open)} >
                <MdMenu className='text-5xl' />

            </div>

        </nav>
        <ResponsiveMenu open={open} />
    </>
    )
}

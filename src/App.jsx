import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Navbar'
import { ResponsiveMenu } from './ResponsiveMenu'
import { Hero } from './Hero'
import Menus from './Menus'
import Banner from './Banner'
import { Banner2 } from './Banner2'
import Banner3 from './Banner3'
import { Footer } from './Footer'


function App() {

  return (
    <>
    <div className='w-full overflow-hidden'>
    <Navbar />
    {/* <ResponsiveMenu /> */}
    <Hero />
    <Menus />
    <Banner />
    <Banner2 />
    <Banner3 />
    <Footer />
    </div>
    </>
  )
}

export default App

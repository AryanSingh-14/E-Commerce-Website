import React from 'react'
import Navbar from "../Components/Navbar.jsx"
import Announcement from '../Components/Announcement.jsx'
import Slider from '../Components/Slider.jsx'
import Categories from '../Components/Categories.jsx'
import Products from '../Components/Products.jsx'
import  Newsletter  from '../Components/Newsletter.jsx'
import Footer from '../Components/Footer.jsx'



export default function Home() {
  return (
    <div>
      <Announcement/>
      <Navbar />
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>


  )
}

import { Link } from 'react-router-dom'
import dropicons from '../assets/DropDown.svg'
import iphone from '../assets/iphone.svg'
import icon from '../assets/icon.svg'
import telefon from '../assets/Telefon-iphone.svg'
import React, { useEffect, useState } from "react";
import { SlidersIcon } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: "Iphone 14 Series",
    discount: "Up to 10% off Voucher",
    image: telefon,
    logo: iphone,
    bgColor: "bg-black"
  },
  {
    id: 2,
    title: "Iphone 14 Series",
    discount: "Up to 10% off Voucher",
    image: telefon,
    logo: iphone,
    bgColor: "bg-black"
  },
  {
    id: 3,
    title: "Iphone 14 Series",
    discount: "Up to 10% off Voucher",
    image: telefon,
    logo: iphone,
    bgColor: "bg-black"
  },
  {
    id: 4,
    title: "Iphone 14 Series",
    discount: "Up to 10% off Voucher",
    image: telefon,
    logo: iphone,
    bgColor: "bg-black"
  },
  {
    id: 5,
    title: "Iphone 14 Series",
    discount: "Up to 10% off Voucher",
    image: telefon,
    logo: iphone,
    bgColor: "bg-black"
  },
]


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className='container mx-auto'>
      <div className='flex gap-[45px]'>
        <nav>
          <li className='list-none'>
            <Link className='font-normal flex pt-[40px] pl-[147px] items-center  text-base leading-6 tracking-[0%] text-center poppins-heading' to='/'>Woman’s Fashion <img className='pl-[51px]' src={dropicons} alt="" /></Link>
          </li>
          <li className='pt-[16px] list-none'>
            <Link className='font-normal flex items-center pl-[147px] text-base leading-6 tracking-[0%] text-center poppins-heading' to='/'>Men’s Fashion <img className='pl-[80px]' src={dropicons} alt="" /></Link>
          </li>
          <li className='pt-[16px] list-none'>
            <Link className='font-normal text-base leading-6 pl-[147px] tracking-[0%] text-center poppins-heading' to='/'>Electronics</Link>
          </li>
          <li className='pt-[16px] list-none'>
            <Link className='font-normal text-base leading-6 pl-[147px] tracking-[0%] text-center poppins-heading' to='/'>Home & Lifestyle</Link>
          </li>
          <li className='pt-[16px] list-none'>
            <Link className='font-normal text-base leading-6 pl-[147px] tracking-[0%] text-center poppins-heading' to='/'>Medicine</Link>
          </li>
          <li className='pt-[16px] list-none'>
            <Link className='font-normal text-base leading-6 pl-[147px] tracking-[0%] text-center poppins-heading' to='/'>Sports & Outdoor</Link>
          </li>
          <li className='pt-[16px] list-none'>
            <Link className='font-normal text-base leading-6 pl-[147px] tracking-[0%] text-center poppins-heading' to='/'>Baby’s & Toys</Link>
          </li>
          <li className='pt-[16px] list-none'>
            <Link className='font-normal text-base leading-6 pl-[147px] tracking-[0%] text-center poppins-heading' to='/'>Groceries & Pets</Link>
          </li>
          <li className='pt-[16px] list-none'>
            <Link className='font-normal text-base leading-6 pl-[147px] tracking-[0%] text-center poppins-heading' to='/'>Health & Beauty</Link>
          </li>
          <div className='w-px ml-[400px] mt-[-390px] h-[384px] bg-gray-600'></div>
        </nav>
        <div className='w-[892px] h-[344px] overflow-hidden relative ml-[20px] mt-[40px]'>
          <div className='flex transition-transform duration-700 ease-in-out' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slides.map((slides) => (
              <div key={slides.id} className={`flex gap-[38px] flex-shrink-0 w-[892px] h-[344px] ${slides.bgColor}`}>
                <div>
                  <div className='flex items-center gap-[24px] pt-[58px] pl-[64px]'>
                    <img src={slides.logo} alt="" />
                    <p className='font-normal text-base leading-6 tracking-[0%] poppins-heading text-white'>{slides.title}</p>
                  </div>
                  <p className='text-white pt-[20px] pl-[64px] font-semibold text-5xl leading-[60px] tracking-[4%] arial-heading'>{slides.discount}</p>
                  <div className='mt-[22px] ml-[67px]'>
                    <Link to='/' className='text-white poppins-heading gap-2 flex items-center font-medium text-base leading-6 tracking-[0%] text-center underline'>Shop Now <img src={icon} alt="" /></Link>
                  </div>
                </div>
                <img className='pt-[16px]' src={slides.image} alt="" />
              </div>))}
          </div>
          <div className='absolute bottom-4 left-100 righ-0 flex  space-x-2'>
            {slides.map((_, index) => (
              <div key={index} className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-white"}`} />))}</div>
        </div>
      </div>
    </div>
    
  )
}

export default Home 

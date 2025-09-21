import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png'
import search from '../assets/search.svg'
import yure from '../assets/yurak.svg'
import magazin from '../assets/magazin.svg'
import user from '../assets/user.svg'

const Navbar = () => {
    const [selectedValue, setselectedValue] = useState('eng');

    const handleCHange = (e) => {
        setselectedValue(e.target.value);
        console.log("Tanlangan til", e.target.value);
    };


    return (
        <>
            <div>
                <div className='bg-black h-[48px] text-white'>
                    <div className='flex items-center justify-center gap-[12px] ml-[150px] pt-[12px] pb-[12px]'>
                        <p className='font-normal text-sm leading-[21px] tracking-[0%] poppins-heading'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                        <Link className='font-semibold text-sm leading-6 tracking-[0%] text-center underline decoration-solid decoration-[0%] poppins-heading' to='/'>ShopNow</Link>
                        <section className='ml-[260px]'>
                            <select id='mySelect'
                                value={selectedValue}
                                onChange={handleCHange}
                                className='bg-black border-white text-white font-normal leading-[0%] tracking-[0%] poppins-heading text-sm rounded w-[72px] h-[24px]'
                            >
                                <option value='en'>English</option>
                                <option value='ru'>Russion</option>
                                <option value='uz'>uzbek</option>
                            </select>
                        </section>
                    </div>
                </div>
                <div className='container mx-auto'>
                    <div className='flex items-center mt-[47px] ml-[147px] gap-[190px]'>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <nav className='navbar'>
                            <Link to='/' className='nav-link text-black'>Home</Link>
                            <Link to='/contact' className='nav-link text-black'>Contact</Link>
                            <Link to='/About' className='nav-link text-black'>About</Link>
                            <Link to='/signup' className='nav-link text-black'>Sign Up</Link>
                        </nav>
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <input className='absolute w-[243px] h-[38px] pl-[20px] bg-[#F5F5F5] rounded-4px' type="text" placeholder='What are you looking for?' />
                                <img className='relative ml-[207px]' src={search} alt="" />
                            </div>
                            <div className='flex items-center ml-[24px] gap-[16px]'>
                                <img src={yure} alt="yure" />
                                <img src={magazin} alt="magazin" />
                                <img src={user} alt="user" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Navbar

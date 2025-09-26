import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png'
import search from '../assets/search.svg'
import yure from '../assets/yurak.svg'
import magazin from '../assets/magazin.svg'
import user from '../assets/user.svg'
import { Dropdown, Space } from 'antd';
import mallbag from '../assets/icon-mallbag.svg'
import cancel from '../assets/icon-cancel.svg'
import reviews from '../assets/icon-Reviews.svg'
import logout from '../assets/icon-logout.svg'


const items = [
    {
        label: (
            <div className='flex items-center gap-2'>
                <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
                    <img src={user} alt="" />
                </a>
                <p className='poppins-heading font-normal text-sm leading-[21px] tracking-[0%] text-center text-black'>Manage My Account</p>
            </div >
        ),
        key: '0',
    },
    {
        label: (
            <div className='flex items-center gap-2 pl-1'>
                <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
                    <img src={mallbag} alt="" />
                </a>
                <p className='text-black poppins-heading font-normal pt-1 text-sm leading-[21px] tracking-[0%] text-center'>My Order</p>
            </div>
        ),
        key: '1',
    },
    {
        label: (
            <div className='flex items-center gap-2 pl-1 pt-1'>
                <a href="https://www.aliyun.com" target='-blank' rel='noopener norefferer'>
                    <img src={cancel} alt="" />
                </a>
                <p className='text-black poppins-heading font-normal text-sm leading-[21px] tracking-[0%] text-center'>My Cancellations</p>
            </div>
        ),
        key: '3',
    },
    {
        label: (
            <div className='flex items-center gap-2 pl-1 pt-1'>
                <a href="https://www.aliyun.com" target='-blank' rel='noopener norefferer'>
                    <img src={reviews} alt="" />
                </a>
                <p className='text-black poppins-heading font-normal text-sm leading-[21px] tracking-[0%] text-center'>My Reviews</p>
            </div>
        ),
        key: '4',
    },
    {
        label: (
            <div className='flex items-center gap-2 pl- pt-1'>
                <a href="https://www.aliyun.com" target='-blank' rel='noopener norefferer'>
                    <img src={logout} alt="" />
                </a>
                <p className='text-black poppins-heading font-normal text-sm leading-[21px] tracking-[0%] text-center'>My Cancellations</p>
            </div>
        ),
        key: '5',
    },
];

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
                    <div className='flex items-center justify-center gap-[12px] ml-[280px] pt-[12px] pb-[12px]'>
                        <p className='font-normal text-sm leading-[21px] tracking-[0%] poppins-heading'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                        <Link className='font-semibold text-sm leading-6 tracking-[0%] text-center underline decoration-solid decoration-[0%] poppins-heading' to='/'>ShopNow</Link>
                        <section className='ml-[250px]'>
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
                            <div className='flex items-center ml-[-40px]'>
                                <input className='absolute w-[243px] h-[38px] pl-[20px] bg-[#F5F5F5] rounded-4px' type="text" placeholder='What are you looking for?' />
                                <img className='relative ml-[207px]' src={search} alt="" />
                            </div>
                            <div className='flex items-center ml-[24px] gap-[10px]'>
                                <img src={yure} alt="yure" />
                                <img src={magazin} alt="magazin" />
                                <Dropdown menu={{ items }} trigger={['click']}>
                                    <a onClick={e => e.preventDefault()}>
                                        <Space>
                                                <img className='hover' src={user} alt="user" />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='mt-[16px]' />
            </div>
        </>
    )
};

export default Navbar

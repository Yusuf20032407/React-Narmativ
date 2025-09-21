import React, { useState } from 'react'
import { Link } from 'react-router-dom';

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
            </div>
        </>
    )
};

export default Navbar

import React, { useEffect, useState } from 'react';
import icon from '../assets/Arrow.svg'
import icon1 from '../assets/RightArrow.svg'

const Cardproduct = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date("2025-10-01T00:00:00"); // deadline
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Cleanup interval on unmount
    }, []);

    return (
        <div className='container mx-auto'>
            <div className='flex items-center gap-4 mt-[140px] ml-[147px]'>
                <div className='w-[20px] h-[40px] rounded-[4px] bg-[#DB4444]'></div>
                <p className='font-semibold text-base leading-5 tracking-[0%] poppins-heading text-[#DB4444]'>Today’s</p>
            </div>
            <div className='mt-[24px] flex gap-[87px] ml-[147px]'>
                <h1 className='text-black font-semibold text-4xl leading-[48px] tracking-[4%] arial-heading'>Flash Sales</h1>
                <div className='flex items-center gap-[17px] mt-[-20px]'>
                    {['days', 'hours', 'minutes', 'seconds'].map((label, index) => (
                        <React.Fragment key={label}>
                            <div className='flex flex-col'>
                                <p className='font-medium text-xs leading-[18px] tracking-[0%] poppins-heading'>{label.charAt(0).toUpperCase() + label.slice(1)}</p>
                                <p className='font-bold text-[32px] leading-[30px] tracking-[4%] arial-heading'>
                                    {String(timeLeft[label]).padStart(2, '0')}
                                </p>
                            </div>
                            {index < 3 && (
                                <div className='mt-[25px]'>
                                    <div className='w-[4px] h-[4px] bg-[#E07575] rounded-full'></div>
                                    <div className='w-[4px] h-[4px] mt-1 bg-[#E07575] rounded-full'></div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className='flex ml-[460px] items-center gap-2'>
                    <img src={icon} alt="" />
                    <img src={icon1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Cardproduct;


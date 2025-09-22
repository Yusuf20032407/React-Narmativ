import { Link } from 'react-router-dom'
import dropicons from '../assets/DropDown.svg'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <nav>
        <li>
          <Link className='font-normal flex pt-[40px] pl-[147px] items-center  text-base leading-6 tracking-[0%] text-center poppins-heading' to='/'>Woman’s Fashion <img className='pl-[51px]' src={dropicons} alt="" /></Link>
        </li>
        <li className='pt-[16px]'>
          <Link className='font-normal flex items-center pl-[147px] text-base leading-6 tracking-[0%] text-center poppins-heading' to='/'>Men’s Fashion <img className='pl-[80px]' src={dropicons} alt="" /></Link>
        </li>
        <li className='pt-[16px]'>
          <Link className='font-normal text-base leading-6 pl-[147px] tracking-[0%] text-center poppins-heading' to='/'>Electronics</Link>
        </li>
        <li className='pt-[16px]'>
          <Link className='font-normal text-base leading-6 pl-[147px] tracking-[0%] text-center poppins-heading' to='/'>Home & Lifestyle</Link>
        </li>
        <li className='pt-[16px]'>
          <Link className='font-normal text-base leading-6 pl-[147px] tracking-[0%] text-center poppins-heading' to='/'>Medicine</Link>
        </li>
        <li className='pt-[16px]'>
          <Link className='font-normal text-base leading-6 pl-[147px] tracking-[0%] text-center poppins-heading' to='/'>Sports & Outdoor</Link>
        </li>
        <li className='pt-[16px]'>
          <Link className='font-normal text-base leading-6 pl-[147px] tracking-[0%] text-center poppins-heading' to='/'>Baby’s & Toys</Link>
        </li>
        <li className='pt-[16px]'>
          <Link className='font-normal text-base leading-6 pl-[147px] tracking-[0%] text-center poppins-heading' to='/'>Groceries & Pets</Link>
        </li>
        <li className='pt-[16px]'>
          <Link className='font-normal text-base leading-6 pl-[147px] tracking-[0%] text-center poppins-heading' to='/'>Health & Beauty</Link>
        </li>
      </nav>
      <div className='w-px ml-[400px] mt-[-390px] h-[384px] bg-gray-600'></div>
    </div>
  )
}

export default Home 

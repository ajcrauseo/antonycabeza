import Link from 'next/link';
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';
import { footerLinks } from '../constants/constants';

const Footer = () => {
  return (
    <footer className='bg-tertiary text-white-100 px-8 py-6 md:py-10 h-auto w-full flex flex-col items-center'>
      <h3 className='text-xl md:text-2xl'>Follow me in Social Media</h3>
      <div className='flex justify-around mt-6 w-full md:w-1/2'>
        <Link
          href={footerLinks[0].url}
          className='transition duration-150 ease-out hover:ease-in hover:text-[#915eff]'
        >
          <BsLinkedin className='w-6 h-6' />
        </Link>
        <Link
          href={footerLinks[1].url}
          className='transition duration-150 ease-out hover:ease-in hover:text-[#915eff]'
        >
          <BsGithub className='w-6 h-6' />
        </Link>
        <Link
          href={footerLinks[2].url}
          className='transition duration-150 ease-out hover:ease-in hover:text-[#915eff]'
        >
          <BsTwitter className='w-6 h-6' />
        </Link>
        <Link
          href={footerLinks[3].url}
          className='transition duration-150 ease-out hover:ease-in hover:text-[#915eff]'
        >
          <BsInstagram className='w-6 h-6' />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

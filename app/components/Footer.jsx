import Link from 'next/link';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { footerLinks } from '../constants/constants';

const Footer = () => {
  return (
    <footer className='bg-tertiary text-white-100 px-8 py-6 md:py-10 h-auto w-full flex flex-col items-center'>
      <h3 className='text-xl md:text-2xl'>Follow me in Social Media</h3>
      <div className='flex justify-evenly mt-6 w-full md:w-1/2 xl:w-1/3'>
        <Link
          href={footerLinks[0].url}
          target='_blank'
          className='transition duration-150 ease-out hover:ease-in hover:text-accent'
        >
          <BsLinkedin className='w-6 h-6' />
        </Link>
        <Link
          href={footerLinks[1].url}
          target='_blank'
          className='transition duration-150 ease-out hover:ease-in hover:text-accent'
        >
          <BsGithub className='w-6 h-6' />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

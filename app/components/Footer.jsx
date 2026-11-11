import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className='bg-tertiary text-white-100 px-8 py-6 md:py-10 h-auto w-full flex flex-col items-center'>
      <h2 className='text-xl md:text-2xl'>Contact me in Social Media</h2>
      <SocialLinks
        className='flex justify-evenly mt-6 w-full md:w-1/2 xl:w-1/3'
        iconClassName='w-6 h-6'
      />
    </footer>
  );
};

export default Footer;

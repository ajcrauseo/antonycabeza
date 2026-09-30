'use client';

import Image from 'next/image';
import { github, web2 } from '@/public/assets';

const OverlayButton = ({ href, icon, alt, offset }) => (
  <button
    type='button'
    onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
    aria-label={alt}
    className={`black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ${
      offset ? 'ml-2' : ''
    }`}
  >
    <Image src={icon} alt='' aria-hidden='true' className='w-1/2 h-1/2 object-contain' />
  </button>
);

const ProjectLinks = ({ source_code_link, project_link }) => {
  return (
    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
      <OverlayButton href={source_code_link} icon={github} alt='Código fuente en GitHub' />
      <OverlayButton href={project_link} icon={web2} alt='Demo del proyecto' offset />
    </div>
  );
};

export default ProjectLinks;

import Image from 'next/image';
import { github, web2 } from '@/public/assets';

// Un link vacío o '#' no es un destino real: no se renderiza el botón.
const isValidLink = (href) => Boolean(href) && href !== '#';

const OverlayLink = ({ href, icon, label, offset }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    aria-label={label}
    className={`black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ${
      offset ? 'ml-2' : ''
    }`}
  >
    <Image src={icon} alt='' aria-hidden='true' className='w-1/2 h-1/2 object-contain' />
  </a>
);

const ProjectLinks = ({ name, source_code_link, project_link }) => {
  const hasSource = isValidLink(source_code_link);
  const hasDemo = isValidLink(project_link);

  return (
    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
      {hasSource && (
        <OverlayLink
          href={source_code_link}
          icon={github}
          label={`${name} source code on GitHub`}
        />
      )}
      {hasDemo && (
        <OverlayLink
          href={project_link}
          icon={web2}
          label={`${name} live demo`}
          offset={hasSource}
        />
      )}
    </div>
  );
};

export default ProjectLinks;

import { BsLinkedin, BsGithub } from 'react-icons/bs';

import { siteConfig } from '../constants/site';
import { footerLinks } from '../constants/constants';

// Solo se muestran las redes con icono definido aquí.
const ICONS = {
  LinkedIn: BsLinkedin,
  Github: BsGithub,
};

const LINKS = footerLinks.filter(({ name }) => ICONS[name]);

const SocialLinks = ({ className = '', iconClassName = '' }) => (
  <div className={className}>
    {LINKS.map(({ name, url }) => {
      const Icon = ICONS[name];

      return (
        <a
          key={name}
          href={url}
          target='_blank'
          rel='me noopener noreferrer'
          aria-label={`${siteConfig.name} on ${name === 'Github' ? 'GitHub' : name}`}
          className='transition duration-150 ease-out hover:ease-in hover:text-accent'
        >
          <Icon aria-hidden='true' className={iconClassName} />
        </a>
      );
    })}
  </div>
);

export default SocialLinks;

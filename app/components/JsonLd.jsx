import { siteConfig } from '../constants/site';
import { footerLinks } from '../constants/constants';

import profilePhoto from '@public/assets/foto-perfil-2026.png';

const PERSON_ID = `${siteConfig.url}/#person`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

// Términos técnicos de las keywords (excluye nombre, roles y términos genéricos).
const NON_SKILL_KEYWORDS = [
  siteConfig.name,
  siteConfig.title,
  'Computer Science Student',
  'Portfolio',
  'UBA',
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: siteConfig.name,
      url: siteConfig.url,
      image: new URL(profilePhoto.src, siteConfig.url).toString(),
      jobTitle: siteConfig.title,
      description: siteConfig.description,
      affiliation: {
        '@type': 'CollegeOrUniversity',
        name: 'Universidad de Buenos Aires',
        alternateName: 'UBA',
        url: 'https://www.uba.ar',
      },
      knowsAbout: siteConfig.keywords.filter(
        (keyword) => !NON_SKILL_KEYWORDS.includes(keyword)
      ),
      sameAs: footerLinks.map(({ url }) => url),
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: 'en',
      author: { '@id': PERSON_ID },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteConfig.url}/#profilepage`,
      url: siteConfig.url,
      name: `${siteConfig.name} | ${siteConfig.title}`,
      inLanguage: 'en',
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: { '@id': PERSON_ID },
    },
  ],
};

const JsonLd = () => (
  <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
    }}
  />
);

export default JsonLd;

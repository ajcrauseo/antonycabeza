import {
  mobile,
  backend,
  creator,
  web,
  calendarApp,
  cryptoverse,
  comisio,
  comitrack,
  iphoneStock,
} from '@public/assets';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: creator,
  },
  {
    title: 'API Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
];

const projects = [
  {
    name: 'Comisio',
    description:
      'Robust application for managing appointments and commissions for independent professionals. Currently in development.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'pink-text-gradient',
      },
    ],
    image: comisio, // Placeholder image
    source_code_link: 'https://github.com/ajcrauseo/',
    project_link: '#',
  },
  {
    name: 'ComiTrack',
    description:
      'Robust application for managing inventory, technical services, and calculating sales commissions for independent professionals.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'pink-text-gradient',
      },
      {
        name: 'prisma',
        color: 'blue-text-gradient',
      },
    ],
    image: comitrack, // Placeholder image
    source_code_link: 'https://github.com/ajcrauseo/comitrack',
    project_link: 'https://comitrack.vercel.app/',
  },
  {
    name: 'iPhone Stock Manager',
    description:
      'Professional inventory management system for iPhone stock across multiple branches with advanced filtering and smart color validation.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'pink-text-gradient',
      },
      {
        name: 'prisma',
        color: 'blue-text-gradient',
      },
    ],
    image: iphoneStock, // Placeholder image
    source_code_link: 'https://github.com/ajcrauseo/iphones-stock',
    project_link: 'https://iphones-stock.vercel.app/',
  },
  {
    name: 'Cryptoverse',
    description:
      'Web application that enables users to search for cryptos, view their prices, and last news.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'rapid api',
        color: 'pink-text-gradient',
      },
    ],
    image: cryptoverse,
    source_code_link: 'https://github.com/ajcrauseo/cryptoverse',
    project_link: 'https://cryptoverse-ajcrauseo.vercel.app/',
  },
  {
    name: 'Calendar App',
    description:
      'Web application to schedule events in the calendar, with an authentication system. This was my very first complete full-stack project, and I keep it here out of fondness to remember how much I have learned and grown since then.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
    ],
    image: calendarApp,
    source_code_link: 'https://github.com/ajcrauseo/Calendar-App-API',
    project_link: 'https://toti-calendar-app.netlify.app/',
  },
  // {
  //   name: 'Toti Store',
  //   description:
  //     'Ecommerce with a list of products, a cart and checkout section.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'commercejs',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'material ui',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: totiStore,
  //   source_code_link: 'https://github.com/ajcrauseo/toti-store',
  //   project_link: 'https://totistore.netlify.app/',
  // },
];

const footerLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/antony-cabeza' },
  { name: 'Github', url: 'https://github.com/ajcrauseo/' },
  { name: 'Twitter', url: 'https://twitter.com/ajcrauseo' },
  { name: 'Instagram', url: 'https://www.instagram.com/ajcrauseo/' },
];

export { services, projects, footerLinks };

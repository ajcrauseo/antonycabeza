import {
  mobile,
  backend,
  creator,
  web,
  calendarApp,
  cryptoverse,
  naturalbrows,
  comisio,
  comitrack,
  iphoneStock,
} from '@public/assets';

import {
  html5,
  css3,
  javascript,
  typescript,
  tailwindcss,
  react,
  nextdotjs,
  nodedotjs,
  git,
  html5Colored,
  css3Colored,
  javascriptColored,
  typescriptColored,
  tailwindcssColored,
  reactColored,
  nextdotjsColored,
  nodedotjsColored,
  gitColored,
} from '@public/assets/techs';

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

const techs = [
  {
    name: 'HTML',
    icon: html5,
  },
  {
    name: 'CSS',
    icon: css3,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwindcss,
  },
  {
    name: 'React',
    icon: react,
  },
  {
    name: 'Next',
    icon: nextdotjs,
  },
  {
    name: 'Node',
    icon: nodedotjs,
  },
  {
    name: 'Git',
    icon: git,
  },
];

const techsWithColor = [
  {
    name: 'HTML with Color',
    icon: html5Colored,
  },
  {
    name: 'CSS with Color',
    icon: css3Colored,
  },
  {
    name: 'JavaScript with Color',
    icon: javascriptColored,
  },
  {
    name: 'TypeScript with Color',
    icon: typescriptColored,
  },
  {
    name: 'Tailwind CSS with Color',
    icon: tailwindcssColored,
  },
  {
    name: 'React with Color',
    icon: reactColored,
  },
  {
    name: 'Next with Color',
    icon: nextdotjsColored,
  },
  {
    name: 'Node with Color',
    icon: nodedotjsColored,
  },
  {
    name: 'Git with Color',
    icon: gitColored,
  },
];

// const experiences = [
//   {
//     title: 'React.js Developer',
//     company_name: 'Starbucks',
//     // icon: starbucks,
//     iconBg: '#383E56',
//     date: 'March 2020 - April 2021',
//     points: [
//       'Developing and maintaining web applications using React.js and other related technologies.',
//       'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
//       'Implementing responsive design and ensuring cross-browser compatibility.',
//       'Participating in code reviews and providing constructive feedback to other developers.',
//     ],
//   },
//   {
//     title: 'React Native Developer',
//     company_name: 'Tesla',
//     // icon: tesla,
//     iconBg: '#E6DEDD',
//     date: 'Jan 2021 - Feb 2022',
//     points: [
//       'Developing and maintaining web applications using React.js and other related technologies.',
//       'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
//       'Implementing responsive design and ensuring cross-browser compatibility.',
//       'Participating in code reviews and providing constructive feedback to other developers.',
//     ],
//   },
//   {
//     title: 'Web Developer',
//     company_name: 'Shopify',
//     // icon: shopify,
//     iconBg: '#383E56',
//     date: 'Jan 2022 - Jan 2023',
//     points: [
//       'Developing and maintaining web applications using React.js and other related technologies.',
//       'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
//       'Implementing responsive design and ensuring cross-browser compatibility.',
//       'Participating in code reviews and providing constructive feedback to other developers.',
//     ],
//   },
//   {
//     title: 'Full stack Developer',
//     company_name: 'Meta',
//     // icon: meta,
//     iconBg: '#E6DEDD',
//     date: 'Jan 2023 - Present',
//     points: [
//       'Developing and maintaining web applications using React.js and other related technologies.',
//       'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
//       'Implementing responsive design and ensuring cross-browser compatibility.',
//       'Participating in code reviews and providing constructive feedback to other developers.',
//     ],
//   },
// ];

const experiences = [];

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

export { services, projects, experiences, footerLinks, techs, techsWithColor };

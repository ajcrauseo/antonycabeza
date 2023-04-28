import {
  mobile,
  backend,
  creator,
  web,
  calendarApp,
  cryptoverse,
  totiStore,
} from '@public/assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
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
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
];

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    // icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    // icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    // icon: shopify,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    // icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const projects = [
  {
    name: 'Calendar App',
    description:
      'Web application to schedule events in the calendar, with authentication system',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
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
        name: 'rapidapi',
        color: 'pink-text-gradient',
      },
    ],
    image: cryptoverse,
    source_code_link: 'https://github.com/ajcrauseo/cryptoverse',
    project_link: 'https://toti-cryptoverse.netlify.app/',
  },
  {
    name: 'Toti Store',
    description:
      'Ecommerce with a list of products, a cart and checkout section.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'commercejs',
        color: 'green-text-gradient',
      },
      {
        name: 'material ui',
        color: 'pink-text-gradient',
      },
    ],
    image: totiStore,
    source_code_link: 'https://github.com/ajcrauseo/toti-store',
    project_link: 'https://totistore.netlify.app/',
  },
];

const footerLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/antony-cabeza' },
  { name: 'Github', url: 'https://github.com/ajcrauseo/' },
  { name: 'Twitter', url: 'https://twitter.com/ajcrauseo' },
  { name: 'Instagram', url: 'https://www.instagram.com/ajcrauseo/' },
];

export { services, experiences, projects, footerLinks };

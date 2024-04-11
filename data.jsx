import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './src/assets/project-1.png';
import Work2 from './src/assets/project-2.jpg';
import Work3 from './src/assets/project-3.jpeg';
import Work4 from './src/assets/project-4.jpeg';
import Work5 from './src/assets/project-5.jpg';
import Work6 from './src/assets/project-6.jpg';

import Theme1 from './src/assets/purple.png';
import Theme2 from './src/assets/red.png';
import Theme3 from './src/assets/blueviolet.png';
import Theme4 from './src/assets/blue.png';
import Theme5 from './src/assets/goldenrod.png';
import Theme6 from './src/assets/magenta.png';
import Theme7 from './src/assets/yellowgreen.png';
import Theme8 from './src/assets/orange.png';
import Theme9 from './src/assets/green.png';
import Theme10 from './src/assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className="nav__icon" />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className="nav__icon" />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className="nav__icon" />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Jean',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Gomes',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '22 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Brazilian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+5521975571953',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'jeangomes1567@gmail.com',
  },

  {
    id: 9,
    title: 'linkedin : ',
    description: 'https://www.linkedin.com/in/jean-gomes-035297193/',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'English',
  },
];

export const stats = [
  {
    id: 1,
    no: '03+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '04+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '04+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '04+',
    title: ' Certificates <br />',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - 2024',
    title: 'Data  IT Project Assistant at  <span> EY (Ernst Young) </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },

  /*{
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2013 - 2018',
    title: 'UI/UX Designer <span> Themeforest </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2005 - 2013',
    title: 'Consultant <span> Videohive </span>',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },*/

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title: 'Full Stack Programming <span> Recode Pro </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021',
    title:
      'Computer technician <span> - Institute Federal of Education, Science and Technology of Rio de Janeiro (IFRJ) </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024',
    title: 'Systems Development Analysis <span> Estacio University </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
    imgLogo: './html-icon.png',
    pSkills: 'Advanced',
  },

  {
    id: 2,
    title: 'Css',
    percentage: '85',
    imgLogo: './css-icon.png',
    pSkills: 'Advanced',
  },

  {
    id: 3,
    title: 'Javascript',
    percentage: '85',
    imgLogo: './js-icon.png',
    pSkills: 'Advanced',
  },

  {
    id: 4,
    title: 'Java',
    percentage: '55',
    imgLogo: './java_language.png',
    pSkills: 'Begginer',
  },

  {
    id: 5,
    title: 'Python',
    percentage: '25',
    imgLogo: './Python-icon.png ',
    pSkills: 'Begginer',
  },

  {
    id: 6,
    title: 'Node Js',
    percentage: 'Begginer',
    imgLogo: './node-js-icon.png',
    pSkills: 'Begginer',
  },

  {
    id: 7,
    title: 'SQL',
    percentage: '65',
    imgLogo: './sql-icon.png',
    pSkills: 'Intermediate',
  },

  {
    id: 8,
    title: 'React Js',
    percentage: 'Begginer',
    imgLogo: './React-icon.png',
    pSkills: 'Intermediate',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'My First Portfolio',
    url: 'https://dev-jean-gomes.netlify.app',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'My First Portfolio',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS e JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://dev-jean-gomes.netlify.app',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: ' : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];

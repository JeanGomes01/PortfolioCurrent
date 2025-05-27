import {
  FaBriefcase,
  FaCode,
  FaEnvelopeOpen,
  FaFolderOpen,
  FaGraduationCap,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { FiExternalLink, FiFileText, FiUser } from "react-icons/fi";

/*Projects*/
import Work1 from "./src/assets/project-1.png";
import Work2 from "./src/assets/project-2.png";
import Work3 from "./src/assets/project-3.png";
import Work4 from "./src/assets/project-4.png";
import Work5 from "./src/assets/project-5.png";
import Work6 from "./src/assets/project-6.png";

/*Themes */
import Theme4 from "./src/assets/blue.png";
import Theme3 from "./src/assets/blueviolet.png";
import Theme5 from "./src/assets/goldenrod.png";
import Theme9 from "./src/assets/green.png";
import Theme6 from "./src/assets/magenta.png";
import Theme8 from "./src/assets/orange.png";
import Theme1 from "./src/assets/purple.png";
import Theme2 from "./src/assets/red.png";
import Theme10 from "./src/assets/yellow.png";
import Theme7 from "./src/assets/yellowgreen.png";

import certification4 from "./src/assets/Alteryx-udemy-bootcamp.png";
import certification3 from "./src/assets/Alteryx_Foundational_Micro_Credential_Badge.png";
import certification2 from "./src/assets/Javascript-Completo-ES6.png";
import certification1 from "./src/assets/Programacao-full-stack.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const certificates = [
  {
    id: 1,
    img: certification1,
    subtitle: "Programação Full Stack ",
    institution: "Recode Pro",
    url: "https://recodepro.org.br/",
    description:
      "Certificado de conclusão do curso de Programação Full Stack na Recode Pro.",
  },
  {
    id: 2,
    img: certification2,
    subtitle: "Javascript Completo ES6",
    institution: "Origamid",
    url: "https://www.origamid.com/",
    description:
      "Certificado de conclusão da formação de Javascript Completo pela plataforma da Origamid.",
  },
  {
    id: 3,
    img: certification3,
    subtitle: "Alteryx Badge",
    institution: "Alteryx",
    url: "https://community.alteryx.com/",
    description:
      "Credencial obtida através do exame de certificação da ferramenta  alteryx Desginer",
  },
  {
    id: 4,
    img: certification4,
    subtitle: "Alteryx Bootcamp ",
    institution: "Udemy",
    url: "https://www.udemy.com",
    description:
      "Certificado de conclusão do curso do Alteryx que ensina como usar a ferramenta para tratativa e análise de dados.",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Jean",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Gomes",
  },

  {
    id: 3,
    title: "Age : ",
    description: "22 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Brazilian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+5521975571953",
  },

  {
    id: 8,
    title: "Email : ",
    description: "jeangomes1567@gmail.com",
  },

  {
    id: 9,
    title: "Hobbies : ",
    description: "Watch Animes and series, Assemble puzzles, read books",
  },

  {
    id: 10,
    title: "Languages : ",
    description: "Portuguese, English, ",
  },
];

export const stats = [
  {
    id: 1,
    no: "03+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "04+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "04+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "04+",
    title: " Certificates <br />",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2021 - 2024",
    title: "Data  IT Project Assistant at  <span> EY (Ernst Young) </span>",
    desc: "I worked for almost 3 years as an IT project assistant with data analysis using ETL process with data and database manager such as SQL Server",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2024 - (present)",
    title: "Software Developer at <span>RIO Analytics</span>",
    desc: "Working as a front-end developer focused on maintaining and improving the platform’s codebase, fixing bugs, and integrating front-end with backend APIs. I implement interactive and responsive data visualizations using Angular, applying best practices for performance optimization and component reusability",
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
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020",
    title: "Full Stack Programming <span> Recode Pro </span>",
    desc: "",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2021",
    title:
      "Computer technician <span> - Institute Federal of Education, Science and Technology of Rio de Janeiro (IFRJ) </span>",
    desc: "",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2024",
    title: "Systems Development Analysis <span> Estacio University </span>",
    desc: "",
  },
];

export const skills = [
  {
    id: 1,
    title: "Javascript",
    imgLogo: "./js-icon.png",
  },

  {
    id: 2,
    title: "Typescript",
    imgLogo: "./typescript-icon.png",
  },

  {
    id: 3,
    title: "Java",
    percentage: "55",
    imgLogo: "./java_language.png",
  },

  {
    id: 4,
    title: "Node JS",
    imgLogo: "./node-js-icon.png ",
  },

  {
    id: 5,
    title: "Angular",
    imgLogo: "./Angular-icon.png",
  },
  {
    id: 6,
    title: "React JS",
    imgLogo: "./React-icon.png",
  },

  {
    id: 7,
    title: "SQL",
    imgLogo: "./sql-icon.png",
  },
  {
    id: 5,
    title: "Python",
    percentage: "25",
    imgLogo: "./Python-icon.png ",
  },

  {
    id: 8,
    title: "Git",
    imgLogo: "./git-icon.png",
  },
  {
    id: 10,
    title: "Figma",
    imgLogo: "./figma-icon.png",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Previous Portfolio",
    url: "https://dev-jean-gomes.netlify.app",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "My First Portfolio Developed",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS e JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://dev-jean-gomes.netlify.app",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website fantastic Animals",
    url: "https://animais-fantasticos-js.vercel.app",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website created in the Origamida Javascript Complete course",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML,CSS and JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://animais-fantasticos-js.vercel.app",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Landing Page Clinic",
    url: "https://html-tailwind-responsive.vercel.app/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "A Modern Landing Page With HTML and Tailwind CSS",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML and Tailwind CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://html-tailwind-responsive.vercel.app/",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "To-do List",
    url: "https://to-do-list-angular-phi.vercel.app/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "A project simple to-do list for practice with Angular 18+",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Typescript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://to-do-list-angular-phi.vercel.app/",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Ignite Feed",
    url: "https://project-ignite-feed-ts.vercel.app/",
    details: [
      {
        title: "Project : ",
        desc: "A simple feed for learn React with Typescript of Rockseat",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      {
        title: "Language : ",
        desc: "Typescript",
      },
      {
        title: "Preview : ",
        desc: "https://project-ignite-feed-ts.vercel.app/",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Case Rio Analytcs",
    details: [
      {
        icon: <FiFileText />,
        title: "Project: ",
        desc: "Angular app for RIO Analytics test, with country data and charts.",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "RIO Analytics",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Typescript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview: ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];

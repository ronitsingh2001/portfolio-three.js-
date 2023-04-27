import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  angular,
  firebase,
  pojo,
  annie,
  netflix,
  hashtag,
  recipe,
  resume,
  portfolio,
  annieMakeover
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Angular Developer",
    icon: creator,
  },
  {
    title: "Nodejs Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Angular",
    icon: angular
  },
  {
    name: "Firebase",
    icon: firebase
  }
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Pojo Labs",
    icon: pojo,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using Angular and other related technologies.",
      "Implementing responsive design and ensuring good user experience.",
      "Implementing changes as per client requirements",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Annie's Makeovers",
    icon: annie,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "A freelance opportunity at a small business.",
      "Implementing a UI layout from scratch using HTML, CSS and javaScript.",
      "Ensuring responsive design for all screen sizes.",
      "Implementing changes as per client requirements",
    ],
  }
];


const projects = [
  {
    name: "Resume Builder",
    description:
      "An online free Resume builder that allow user to generate a personalized resume or CV with various different templates to choose from. You can even download the finalized resume. It's fully authenticated.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: resume,
    source_code_link: "https://cv-builderr.netlify.app/",
  },
  {
    name: "Netflix Clone",
    description:
      "A clone of very famous OTT platform netflix. It is made using react and third party APIs are used for fetching movies data.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://netflix-react-cl.netlify.app/",
  },
  {
    name: "Recipe Book",
    description:
      "Angular app that resembles a recipe book. User can add, edit and delete the recipe(s). Application is fully Authentic and all data is saved to firebase.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: recipe,
    source_code_link: "https://recipe-book-spa-78464.web.app/recipes",
  },
  {
    name: "Portfolio",
    description:
      "A personalized portfolio website where the client can directly reach out to me. It's a beautifull webpage you probably have already dicovered.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "green-text-gradient",
      },

    ],
    image: portfolio,
    source_code_link: "https://ronit-singh.netlify.app/",
  }, {
    name: "Hashtag",
    description:
      "A webpage full of animations and graphics was made for a competition from scratch. You must definitely visit the page.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: hashtag,
    source_code_link: "https://spa-websi.web.app/",
  }, {
    name: "Makeovers Webpage",
    description:
      "A very simple yet beautiful webpage developed for a small beauty and care business. Client can book there appointment using the webpage.",
    tags: [
      {
        name: "HTML & CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: annieMakeover,
    source_code_link: "https://anniesmakeovers.com/",
  },

];

export { services, technologies, experiences, projects };
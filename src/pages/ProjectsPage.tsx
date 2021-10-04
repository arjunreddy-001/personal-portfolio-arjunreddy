import Project from "../components/projects/Project";
import styles from "./Projects.module.scss";

const projects = [
  {
    name: "NgShop",
    summary:
      "This project is an e-commerce application, built with Angular for front-end and firebase as backend service.",
    img: "https://arjunreddy.in/images/projects-ngshop-banner.svg",
    demo: "https://ngshop-17bfc.web.app/",
    code: "https://github.com/arjunreddy-001/ngShop",
    technologies: [
      { name: "HTML & CSS" },
      { name: "TypeScript" },
      { name: "Angular" },
      { name: "Firebase" },
    ],
  },
  {
    name: "Amazon Clone",
    summary:
      "This project is basic clone of e-commerce application 'amazon', built with React JS for front-end and firebase as backend service. I used stripe for simulating payments via credit/debit cards.",
    img: "https://arjunreddy.in/images/projects-amazon-clone-banner.svg",
    demo: "https://clone-reactjs-cca8b.web.app/",
    code: "private",
    technologies: [
      { name: "HTML & CSS" },
      { name: "JavaScript" },
      { name: "BEM" },
      { name: "React.JS" },
      { name: "Firebase" },
      { name: "Stripe" },
    ],
  },
  {
    name: "YouTube Clone",
    summary:
      "This project is clone of online video streaming application 'YouTube', built with React JS for front-end and firebase & YouTube Data API as backend service.",
    img: "https://arjunreddy.in/images/projects-youtube-clone-banner.svg",
    demo: "https://clone-reactjs-320308.web.app/",
    code: "private",
    technologies: [
      { name: "HTML & CSS" },
      { name: "JavaScript" },
      { name: "React.JS" },
      { name: "SASS" },
      { name: "BEM" },
      { name: "Firebase" },
      { name: "Youtube Data API" },
    ],
  },
  {
    name: "Portfolio",
    summary:
      "The idea behind this project was to showcase my projects. I tried to keep the UI as simple as possible. \n\n This is a Single Page Application (SPA) built using React JS in combination with TypeScript.",
    img: "https://arjunreddy.in/images/projects-portfolio-banner.svg",
    demo: "https://arjunreddy.in/",
    code: "https://github.com/arjunreddy-001/personal-portfolio-arjunreddy",
    technologies: [
      { name: "HTML & CSS" },
      { name: "TypeScript" },
      { name: "SASS" },
      { name: "React.JS" },
      { name: "Responsive" },
    ],
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className={styles["projects"]}>
      {projects.map((project) => (
        <Project
          name={project.name}
          summary={project.summary}
          img={project.img}
          demo={project.demo}
          code={project.code}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

export default ProjectsPage;

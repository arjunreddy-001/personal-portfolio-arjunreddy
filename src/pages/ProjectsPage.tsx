import Project from "../components/projects/Project";
import styles from "./Projects.module.scss";

const projects = [
  {
    name: "Amazon Clone",
    summary:
      "This project is basic clone of e-commerce application 'amazon', built with React JS for front-end and firebase as backend service. I used stripe for simulating payments via credit/debit cards.",
    img: "https://arjunreddy.in/images/projects-amazon-clone-banner.png",
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
    name: "Portfolio",
    summary:
      "The idea behind this project was to showcase my projects. I tried to keep the UI as simple as possible. \n\n This is a Single Page Application (SPA) built using React JS in combination with TypeScript.",
    img: "https://arjunreddy.in/images/projects-portfolio-banner.png",
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "./ecommerce.jpeg"
import expenseTracker from "./expenseTracker.png"
import mail from "./mail.png"
const projects = [
  {
    imgPath : ecommerce,
    title: "E-Commerce",
    description:
      "Built an authentication-centric e-commerce site with user-friendly features. Implemented login, signup, and logout using HTML, CSS, JavaScript, and ReactJS. Used Context API for state management and Firebase for authentication and real-time data storage.",
    technologies: "HTML, CSS, JavaScript, ReactJS, Context API, Firebase",
    ghLink: "https://github.com/Metheswar/Ecommerce",
    demoLink: "https://dependable-fuze-322211.web.app/",
  },
  {
    imgPath: expenseTracker,
    title: "Expense Tracker",
    description:
      "Engineered a streamlined Expense Tracker with premium features. Users can download expense data in Excel format. Ensured robust security for financial data. Tech stack includes HTML, CSS, JavaScript, ReactJS, Redux, and Firebase.",
    technologies: "HTML, CSS, JavaScript, ReactJS, Redux, Firebase",
    ghLink: "https://github.com/Metheswar/Expense-Tracker",
    demoLink: "https://expense--tracker-project.web.app",
  },
  {
    imgPath: mail,
    title: "Mail Box Client",
    description:
      "Developed a Mail Box Client for optimized email communication. Used HTML, CSS, JavaScript, ReactJS, and Redux for a responsive frontend. Implemented individual mailboxes and real-time data management through Firebase.",
    technologies: "HTML, CSS, JavaScript, ReactJS, Redux, Firebase",
    ghLink: "https://github.com/Metheswar/mail",
    demoLink: "https://mail-client-app-project.web.app/",
  },
];



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

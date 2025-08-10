import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Smart News Aggregator",
      description: "MERN Stack Application",
      imgUrl: projImg1,
      github: "https://github.com/Jaya-Sri2005/Smart-News-Aggregator",
    },
    {
      title: "Amazon Clone",
      description: "HTML, CSS, JavaScript",
      imgUrl: projImg2,
      github: "https://github.com/Jaya-Sri2005/Amazon-Clone",
    },
    {
      title: "Currency Converter",
      description: "HTML, CSS, JavaScript",
      imgUrl: projImg3,
      github: "https://github.com/Jaya-Sri2005/CurrencyConverter",
    },
    {
      title: "Sales Dashboard UI",
      description: "HTML, CSS, JavaScript",
      imgUrl: projImg4,
      github: "https://github.com/Jaya-Sri2005/Sales-Dashboard",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some of the projects I’ve worked on recently using the MERN stack and core web technologies.</p>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.imgUrl}
                        github={project.github}
                      />
                    ))}
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};

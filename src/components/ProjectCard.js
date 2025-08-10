import { Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl, github }) => {
  return (
    <Col size={15} sm={8} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {github && (
            <div className="github-link">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub size={18} style={{ marginRight: "6px" }} />
                View on GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};

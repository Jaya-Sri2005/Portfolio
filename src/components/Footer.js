import { Container, Row, Col } from "react-bootstrap";
import githubicon from '../assets/img/github.png';
import linkedin from '../assets/img/linkedin.png';
import mail from '../assets/img/mail.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/vangara-jaya-sri-512698289/"><img src={linkedin} alt="Icon" /></a>
              <a href="https://github.com/Jaya-Sri2005"><img src={githubicon} alt="Icon" /></a>
              <a href="mailto:vangarajayasri2005@gmail.com"><img src={mail} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

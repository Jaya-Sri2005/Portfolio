import React from "react";
import "./Internships.css";
import hashtek from "../assets/img/hashtek.png";

const internships = [
  {
    company: "HashTek Solutions",
    logo: hashtek,
    role: "Cloud Computing with AWS – Intern",
    duration: "June 2024 – July 2024",
    location: "Visakhapatnam, India",
    responsibilities: [
      "Worked with AWS services like EC2, S3, Lambda, RDS, IAM",
      "Used AWS Management Console and CLI to deploy cloud infrastructure",
      "Implemented IAM policies, encryption, and serverless functions using Lambda",
      "Worked with API Gateway to create secure, scalable APIs",
    ],
  },
];

const Internships = () => {
  return (
    <section className="internship-section" id="internships">
      <h2 className="internship-title">Internship</h2>
      <div className="internship-cards">
        {internships.map((intern, index) => (
          <div className="internship-card" key={index}>
            <div className="internship-header">
              <div className="company-with-logo">
                <img
                  src={intern.logo}
                  alt={`${intern.company} logo`}
                  className="intern-logo"
                />
                <h3>{intern.company}</h3>
              </div>
              <p className="intern-role">{intern.role}</p>
              <p className="intern-date">
                {intern.duration} | {intern.location}
              </p>
            </div>
            <ul>
              {intern.responsibilities.map((item, i) => (
                <li key={i}> {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;

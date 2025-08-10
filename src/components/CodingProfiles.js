import React from "react";
import "./CodingProfiles.css";
import leetcodeLogo from "../assets/img/leetcode.png";
import hackerrankLogo from "../assets/img/hackerrank.png";   
import codechefLogo from "../assets/img/codechef.png";

const profiles = [
  {
    name: "LeetCode",
    logo: leetcodeLogo,
    url: "https://leetcode.com/u/Vangara_Jaya_Sri/",
    color: "#FFA116",
  },
  {
    name: "HackerRank",
    logo: hackerrankLogo,
    url: "https://www.hackerrank.com/profile/vangarajayasri21",
    color: "#2EC866",
  },
  {
    name: "CodeChef",
    logo: codechefLogo,
    url: "https://www.codechef.com/users/jaya_sri2005",
    color: "#5B4638",
  },
];

const CodingProfiles = () => {
  return (
    <section className="coding-section" id="coding-profiles">
      <h2 className="coding-title">Coding Profiles</h2>
      <div className="coding-cards">
        {profiles.map((profile, i) => (
          <a
            key={i}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="coding-card"
            style={{ borderColor: profile.color }}
          >
            <img src={profile.logo} alt={profile.name} className="coding-logo" />
            <p>{profile.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;

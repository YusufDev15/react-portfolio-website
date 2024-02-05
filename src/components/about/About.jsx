import React from "react";
import ME from "../../assets/IMG_2776.jpg";
import { FaAward } from "react-icons/fa";
import { VscFiles } from "react-icons/vsc";
import "./about.css";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="Image of myself" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>Junior</small>
            </article>
            <article className="about-card">
              <VscFiles className="about-icon" />
              <h5>Projects</h5>
              <small>6+ completed projects</small>
            </article>
          </div>
          <p>
            Hello! I'm Yusuf Abdullahi, a passionate and resourceful software
            developer freshly graduated from a rigorous coding bootcamp. My
            journey into the world of programming began with an insatiable
            curiosity and a determination to turn ideas into functional, elegant
            solutions. Armed with a solid foundation in Front-End languages, I
            am excited to embark on my professional career in software
            development. During the bootcamp, I immersed myself in various
            projects, honing my skills in HTML, CSS and Javascript to name a
            few. From crafting responsive web applications to solving complex
            coding challenges, I thrive on the satisfaction of bringing concepts
            to life through code.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

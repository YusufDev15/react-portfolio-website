import React from "react";
import "./about.css";
import User from "../../assets/User-avatar.svg.png";
import { FaAward } from "react-icons/fa";

import { GrProjects } from "react-icons/gr";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={User} alt="About Image" />
          </div>
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>Working</small>
          </article>
          <article className="about__card">
            <GrProjects className="about__icon" />
            <h5>Projects</h5>
            <small>5+ completed projects</small>
          </article>
        </div>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet eius doloribus aspernatur. Molestias, praesentium blanditiis? Asperiores, autem suscipit quis quibusdam distinctio repellat! Aspernatur placeat suscipit iure totam quaerat cumque dolores?</p>

        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </section>
  );
}

export default About;

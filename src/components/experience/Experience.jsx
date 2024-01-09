import React from "react"
import "./experience.css"
import { FaCheckCircle } from "react-icons/fa";

function Experience(props) {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article href="" className="experience__details">
            <FaCheckCircle />
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
            </article>
            <article href="" className="experience__details">
            <FaCheckCircle />
            <h4>CSS</h4>
            <small className="text-light">Experienced</small>
            </article>
            <article href="" className="experience__details">
            <FaCheckCircle />
            <h4>JavaScript</h4>
            <small className="text-light">Experienced</small>
            </article>
            <article href="" className="experience__details">
            <FaCheckCircle />
            <h4>Bootstrap</h4>
            <small className=""></small>
            </article>
            <article href="" className="experience__details">
            <FaCheckCircle />
            <h4>HTML</h4>
            <small className=""></small>
            </article>
          </div>
        </div>
        <div className="experience__backend"></div>
      </div>
    </section>
  );
}

export default Experience;

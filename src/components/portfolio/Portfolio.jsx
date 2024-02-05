import React from "react";
import Image1 from "../../assets/snapscreen-wallpaper-netlify-app.jpg";
import Image2 from "../../assets/cinepulse.png";
import Image3 from "../../assets/Weather-Dashboard.png";
import Image4 from "../../assets/Daily-Planner-App.png";
import Image5 from "../../assets/Password-Generator.png";
import Image6 from "../../assets/Bootstrap-Portfolio.png";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image: Image1,
    title: "SnapScreen",
    github: "https://github.com/YusufDev15/SnapScreen-Project",
    demo: "https://snapscreen-wallpaper.netlify.app/",
    alt: "Starry night sky reflected in the ocean and a single sailboat with mountains in the horizon",
  },
  {
    id: 2,
    image: Image2,
    title: "Cinepulse",
    github:
      "https://github.com/YusufDev15/Cinepulse-Project-1?tab=readme-ov-file",
    demo: "https://yusufdev15.github.io/Cinepulse-Project-1/",
    alt: "Home login page with a background of popular movies",
  },
  {
    id: 3,
    image: Image3,
    title: "Weather Dashboard",
    github: "https://github.com/YusufDev15/Weather-Dashboard",
    demo: "https://yusufdev15.github.io/Weather-Dashboard/",
    alt: "A weather dashboard application that you can search the current and forecasted weather around the world",
  },
  {
    id: 4,
    image: Image4,
    title: "Daily Planner App",
    github: "https://github.com/YusufDev15/Daily-Planner-App",
    demo: "https://yusufdev15.github.io/Daily-Planner-App/",
    alt: "Week day scheduler for each specific day",
  },
  {
    id: 5,
    image: Image5,
    title: "Password Generator",
    github: "https://github.com/YusufDev15/Password-Generator",
    demo: "https://yusufdev15.github.io/Password-Generator/",
    alt: "A web page with a password generator box",
  },
  {
    id: 6,
    image: Image6,
    title: "Bootstrap Portfolio",
    github: "https://github.com/YusufDev15/Bootstrap-Portfolio",
    demo: "https://yusufdev15.github.io/Bootstrap-Portfolio/",
    alt: "First portfolio website done using bootstrap",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="start">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {data.map(({ id, image, title, github, demo, alt }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt={alt}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;

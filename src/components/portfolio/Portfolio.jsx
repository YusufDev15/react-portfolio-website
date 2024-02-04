import React from "react";
import Image1 from "../../assets/screencapture-snapscreen-wallpaper-netlify-app-2024-02-04-14_04_17.jpg";
import Image2 from "../../assets/cinepulse-github-io-1st-Project-2024-02-04-16_40_25.png";
import Image3 from "../../assets/yusufdev15-github-io-Daily-Planner-App-2024-02-04-17_02_52.png";
import Image4 from "../../assets/Password-Generator-2024-02-04-17_24_27.png";
import Image5 from "../../assets/portfolio5.png";
import Image6 from "../../assets/portfolio6.jpg";
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
    title: "Daily Planner App",
    github: "https://github.com/YusufDev15/Daily-Planner-App",
    demo: "https://yusufdev15.github.io/Daily-Planner-App/",
    alt: "Week day scheduler for each specific day",
  },
  {
    id: 4,
    image: Image4,
    title: "Password Generator",
    github: "https://github.com/YusufDev15/Password-Generator",
    demo: "https://yusufdev15.github.io/Password-Generator/",
    alt: "A web page with a password generator box",
  },
  {
    id: 5,
    image: Image5,
    title: "Some kind of ",
    github: "https://github.com",
    demo: "https://www.codecademy.com/resources/blog/how-to-make-your-front-end-developer-portfolio-stand-out/",
    alt: "Starry night sky reflected in the ocean and a single sailboat with mountains in the horizon",
  },
  {
    id: 6,
    image: Image6,
    title: "Some kind of ",
    github: "https://github.com",
    demo: "https://www.codecademy.com/resources/blog/how-to-make-your-front-end-developer-portfolio-stand-out/",
    alt: "Starry night sky reflected in the ocean and a single sailboat with mountains in the horizon",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
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

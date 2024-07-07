import React from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import CV from "../../assets/Curriculum - Jean Laranjeira Gomes 2024.pdf";
import Profile from "../../assets/home.png";
import ParticlesBackground from "../../components/ParticlesBackground";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <ParticlesBackground id="particules" />
        <div className="home__data">
          <h1 className="home__title">
            <p>Hi, I am Jean Gomes</p>
            <span>Software Developer</span>
          </h1>

          <p className="home__description">
            I'm a Brazilian based software developer focused on crafting clean &
            user-friendly experiences, I am passionate about technology and
            building excellent software that improves the lives of those around
            me.
          </p>

          <Link to="./about" className="button" id="about-button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
          <a href={CV} download="" className="button" id="download-button">
            Download CV
            <span className="button__icon">
              <FaDownload />
            </span>
          </a>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;

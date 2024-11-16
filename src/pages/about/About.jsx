import React from "react";
import { resume } from "../../../data";
import Certificates from "../../components/Certificates";
import ResumeItem from "../../components/ResumeItem";
import Skills from "../../components/Skills";
import Stats from "../../components/Stats";
import "./about.css";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <h2 className="certificates__title">Certificates</h2>
          <div className="certificates grid">
            <Certificates />
          </div>

          {/*
            <div className="about__info">
              <h3 className="section__subtitle">Personal Infos</h3>
              <ul className="info__list grid">
                <Info />
              </ul>
            </div>
          */}

          <div className="stats__container">
            <div className="stats grid">
              <Stats />
            </div>
          </div>
        </div>
      </section>

      <div className="separator"></div>
      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>
        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
          Experience & Education
        </h3>

        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "experience") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "education") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

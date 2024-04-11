import React from 'react';

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';

import './contact.css';

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !'</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__descr">jeangomes1567@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__descr">+55 2197557-1953</h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a
              target="_blank"
              href="https://www.instagram.com/jean_gms/"
              className="contact__socials-link"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jean-gomes-035297193/"
              className="contact__socials-link"
            >
              <FaLinkedin />
            </a>

            <a
              target="_blank"
              href="https://github.com/JeanGomes01"
              className="contact__socials-link"
            >
              <FaGithub />
            </a>

            <a
              target="_blank"
              href="https://wa.me/+5521975571953"
              className="contact__socials-link"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Your Name"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                className="form__control"
                placeholder="Your Email"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                className="form__control"
                placeholder="Your Subject"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
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
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(event) {
    event.preventDefault();
    if (!name || !subject || !email || !message) {
      alert('Por favor, preencha todos os campos');
      return;
    }
    const templateParams = {
      from_name: name,
      the_subject: subject,
      message: message,
      email: email,
    };

    emailjs
      .send(
        'service_2kedwhb',
        'template_7u576hn',
        templateParams,
        'lLWF6UKXVPh8qcCpG',
      )
      .then(
        (response) => {
          alert('EMAIL ENVIADO !', response.status, response.text);
          setName('');
          setSubject('');
          setEmail('');
          setMessage('');
        },
        (err) => {
          console.log('ERRO: ', err);
        },
      );
  }

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>

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

        <form className="contact__form" onSubmit={sendEmail}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Type your Name"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                className="form__control"
                placeholder="Type your Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Enter the Subject"
                onChange={(event) => setSubject(event.target.value)}
                value={subject}
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Write your message here..."
              className="form__control textarea"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
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

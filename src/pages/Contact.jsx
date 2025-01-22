import React from 'react';
import '../styles/contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <div className="resume-header">
        <p>Get in touch with me</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-wrapper">

        {/* Left contact page */}
        <form id="contact-form" className="form-horizontal" role="form">
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                required
              />
            </div>
          </div>

          <textarea
            className="form-control"
            rows="10"
            placeholder="MESSAGE"
            name="message"
            required
          ></textarea>

          <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
            <div className="alt-send-button">
              <span className="send-text">SEND</span>
            </div>
          </button>
        </form>

        {/* Right direct contact page */}
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i class="fa-solid fa-location-dot">
                <span className="contact-text place">Ahmedabad, India</span>
              </i>
            </li>

            <li className="list-item">
              <i class="fa-solid fa-phone">
                <span className="contact-text phone">
                  <a href="tel:+91 93134 21514" title="Give me a call">+91 93134 21514</a>
                </span>
              </i>
            </li>

            <li className="list-item">
            <i class="fa-solid fa-envelope">
                <span className="contact-text gmail">
                  <a href="mailto:#" title="Send me an email">sinojiyaumang5400@gmail.com</a>
                </span>
              </i>
            </li>
          </ul>

          <div className="ConnectMe">
            <div className="social-icons">
              <p className="social-heading">CONNECT ME ON</p>
              <div className="icon-list">
                <a href="https://www.facebook.com/umang.sinojiya.98" target="_blank"><i className="fab fa-facebook-square"></i></a>
                <a href="https://www.instagram.com/umang_5400/" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/umang-sinojiya-760301289/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/Sinojiyaumang" target="_blank"><i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

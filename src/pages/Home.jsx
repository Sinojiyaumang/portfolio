import React, { useState, useEffect } from "react";
import "../styles/home.css";
import umang from "../images/owner.jpg";

const Home = () => {
  const textArray = [" Front-End Developer.", "Professional Coder."];
  const typingDelay = 150; // Typing speed
  const erasingDelay = 100; // Erasing speed
  const newTextDelay = 2000; // 2-second delay before erasing
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (charIndex < textArray[textArrayIndex].length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + textArray[textArrayIndex].charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        }, typingDelay);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => setIsTyping(false), newTextDelay);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, erasingDelay);
      } else {
        setIsTyping(true);
        setTextArrayIndex((prev) => (prev + 1) % textArray.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, textArray, textArrayIndex]);

  return (
    <div>
      <div className="hero-section">
        <div className="container">
          <div className="row d-flex">
            {/* Left Section */}
            <div className="left-section">
              <p className="welcome-text">WELCOME TO MY WORLD</p>
              <div className="css-typing">
                <h1 className="hero-title">
                  Hi, I’m <span className="highlight">Umang Sinojiya</span>
                  <br />
                  <span className="typed-text">
                    <span className="only-a">a </span>
                    {text}
                  </span>
                  <span className="cursor"></span>
                </h1>
              </div>
              <p className="description">
                Frontend Developer proficient in HTML, CSS, JavaScript,
                React.js, and Bootstrap. Passionate about building responsive
                and interactive web applications that enhance user experience.
                Strong understanding of modern front-end technologies with a
                focus on clean and efficient code. Committed to continuous
                learning and improving user interactions in every project.
                Seeking a position in a growth-oriented company where I can use
                my skills for the advantage of the comapany. Passionate for
                learning new skills that develop my productivity day by day
              </p>
              <div className="ConnectMe">
                <div className="social-icons">
                  <p className="social-heading">CONNECT ME ON</p>
                  <div className="icon-list">
                    <a
                      href="https://www.facebook.com/umang.sinojiya.98"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/umang_5400/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/umang-sinojiya-760301289/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Sinojiyaumang" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-section">
              <div className="image-container">
                <img
                  src={umang}
                  alt="Profile"
                  className="profile-image"
                  style={{
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

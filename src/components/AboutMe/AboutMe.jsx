import React from "react";
import "./aboutme.css";
import image from "../../images/vectorimage.png";


const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="aboutme-image">
        <img src={image} alt="" />
      </div>

    

      <div className="aboutme-right">
        <h1>About Me</h1>

        <p>I am a passionate Front-End Developer specializing in React.js. 📍</p>

        <p>
          {" "}
            I have completed my Web Development training from Nayee Subha Foundation,
            where I learned to design and build modern, responsive web applications using 
            React.js, JavaScript (ES6+), HTML5, and CSS3. My focus is on creating clean, 
            user-friendly interfaces with reusable components, API integration, and
            smooth performance. I enjoy working on real-world projects, exploring new 
            frameworks, and continuously improving my development skills. Along with
            my technical background, I hold strong academic qualifications, including 
            a Master’s degree in Education. My education has helped me develop analytical
            thinking, communication, and problem-solving skills that support my growth as
            a developer. I am always eager to collaborate on creative projects that combine
            design, interactivity, and technology.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

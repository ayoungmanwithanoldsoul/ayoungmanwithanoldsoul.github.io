import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import CircularProgressBar from './mini/CircularProgressBar'; // Import the new component

export const Skills = () => {
  const skills = [
    { percentage: 90, title: "React" },
    { percentage: 85, title: "JavaScript" },
    { percentage: 80, title: "Java" },
    { percentage: 90, title: "PHP" },
    { percentage: 92, title: "Laravel" },
    { percentage: 94, title: "SQL" },
    { percentage: 80, title: "Bootstrap" },
    { percentage: 96, title: "Communication" },
    { percentage: 90, title: "Leadership" },
    { percentage: 93, title: "Problem-Solving" },
    { percentage: 80, title: "Project Management" },
    { percentage: 96, title: "Collaboration" },
    { percentage: 89, title: "Adaptability" },
    { percentage: 90, title: "Client Relations" },
    { percentage: 85, title: "Time Management" },
    { percentage: 90, title: "Professional Writing" },
    { percentage: 70, title: "Data Analysis" },
    { percentage: 90, title: "Presentation Skills" }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Skills learned through experience, continuous learning, and a passion for innovation.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => (
                  <CircularProgressBar key={index} percentage={skill.percentage} title={skill.title} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};

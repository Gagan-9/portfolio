import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import skillsCSS from './../Skills/Skills.module.css';
import cPlusPlusImg from './../../assets/c++.jpg';
import javascriptImg from './../../assets/javascript.jpg';
import reactImg from './../../assets/react.jpg';
import htmlImg from './../../assets/html.jpg';
import cssImg from './../../assets/css.jpg';
import nodeImg from './../../assets/node.jpg';
import mongoImg from './../../assets/mongo.jpg';
import sqlImg from './../../assets/sql.jpg';
import gitImg from './../../assets/git.jpg';

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Ensures animation runs only once
    });
  }, []);

  return (
    <div id="skills" className={`${skillsCSS.SkillsWrapper} section`}>
      <h3 className="sectionheading"><i className="ri-shining-fill">Skills</i></h3>
      <h1 className="section_Title">Explore My Key Skills</h1>
      <div className={skillsCSS.skillsGrid}>
        {/* Individual skill cards with AOS animations */}
        <div className={skillsCSS.skillCard} data-aos="fade-up">
          <h4>C++</h4>
          <img src={cPlusPlusImg} alt="C++" className={skillsCSS.skillImage} />
        </div>

        <div className={skillsCSS.skillCard} data-aos="fade-up">
          <h4>JavaScript</h4>
          <img src={javascriptImg} alt="JavaScript" className={skillsCSS.skillImage} />
        </div>

        <div className={skillsCSS.skillCard} data-aos="fade-up">
          <h4>React</h4>
          <img src={reactImg} alt="React" className={skillsCSS.skillImage} />
        </div>

        <div className={skillsCSS.skillCard} data-aos="fade-up">
          <h4>HTML5</h4>
          <img src={htmlImg} alt="HTML5" className={skillsCSS.skillImage} />
        </div>

        <div className={skillsCSS.skillCard} data-aos="fade-up">
          <h4>CSS3</h4>
          <img src={cssImg} alt="CSS3" className={skillsCSS.skillImage} />
        </div>

        <div className={skillsCSS.skillCard} data-aos="fade-up">
          <h4>Node.js</h4>
          <img src={nodeImg} alt="Node.js" className={skillsCSS.skillImage} />
        </div>

        <div className={skillsCSS.skillCard} data-aos="fade-up">
          <h4>MongoDB</h4>
          <img src={mongoImg} alt="MongoDB" className={skillsCSS.skillImage} />
        </div>

        <div className={skillsCSS.skillCard} data-aos="fade-up">
          <h4>MySQL</h4>
          <img src={sqlImg} alt="MySQL" className={skillsCSS.skillImage} />
        </div>

        <div className={skillsCSS.skillCard} data-aos="fade-up">
          <h4>Git</h4>
          <img src={gitImg} alt="Git" className={skillsCSS.skillImage} />
        </div>
      </div>
    </div>
  );
}

export default Skills;

import React from 'react';
import skillsCSS from './../Skills/Skills.module.css';

function Skills() {
  return (
    <div id="skills" className={`${skillsCSS.SkillsWrapper} section`}>
      <h3 className="sectionheading"><i className="ri-shining-fill">Skills</i></h3>
      <div className={skillsCSS.skillsGrid}>

        {/* Individual skill cards */}
        <div className={skillsCSS.skillCard}>
          <h4>C++</h4>
          <img src="src/assets/c++.jpg" alt="C++" className={skillsCSS.skillImage} />
        </div>

        <div className={skillsCSS.skillCard}>
          <h4>JavaScript</h4>
          <img src="src/assets/javascript.jpg" alt="JavaScript" className={skillsCSS.skillImage} />
        </div>

        <div className={skillsCSS.skillCard}>
          <h4>React</h4>
          <img src="src/assets/react.jpg" alt="React" className={skillsCSS.skillImage} />
        </div>

        <div className={skillsCSS.skillCard}>
          <h4>HTML5</h4>
          <img src="src/assets/html.jpg" alt="HTML5" className={skillsCSS.skillImage} />
        </div>

        <div className={skillsCSS.skillCard}>
          <h4>CSS3</h4>
          <img src="src/assets/css.jpg" alt="CSS3" className={skillsCSS.skillImage} />
        </div>

        <div className={skillsCSS.skillCard}>
          <h4>Node.js</h4>
          <img src="src/assets/node.jpg" alt="Node.js" className={skillsCSS.skillImage} />
        </div>

        <div className={skillsCSS.skillCard}>
          <h4>MongoDB</h4>
          <img src="src/assets/mongo.jpg" alt="MongoDB" className={skillsCSS.skillImage} />
        </div>

        <div className={skillsCSS.skillCard}>
          <h4>MySQL</h4>
          <img src="src/assets/sql.jpg" alt="MySQL" className={skillsCSS.skillImage} />
        </div>

        <div className={skillsCSS.skillCard}>
          <h4>Git</h4>
          <img src="src/assets/git.jpg" alt="Git" className={skillsCSS.skillImage} />
        </div>

      </div>
    </div>
  );
}

export default Skills;

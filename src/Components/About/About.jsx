import React from "react";
import aboutcss from './../About/About.module.css';

function About() {
   return (
      <div id="about" className={`${aboutcss.AboutWrapper} section`}>
         <h3 className="sectionheading"><i className="ri-shining-fill"></i>About</h3>

         <h1 className="section_Title">Who I am</h1>

         <div className={aboutcss.AboutContent}>
            <p className={aboutcss.Intro}>
               Hi there! I am currently pursuing a Bachelor's degree in Information Technology. My journey in tech has fueled my passion for continuous learning and personal growth.
            </p>

            <section className={aboutcss.Section}>
               <h2 className={aboutcss.SubTitle}>Core Competencies</h2>
               <ul className={aboutcss.SkillsList}>
                  <li><i className="ri-check-double-line"></i> Effective Communication</li>
                  <li><i className="ri-check-double-line"></i> Analytical Problem-Solving</li>
                  <li><i className="ri-check-double-line"></i> Collaborative Teamwork</li>
                  <li><i className="ri-check-double-line"></i> Adaptability & Flexibility</li>
               </ul>
            </section>

            <section className={aboutcss.Section}>
               <h2 className={aboutcss.SubTitle}>Interests & Hobbies</h2>
               <p>
                  Outside of academics, I indulge in:
               </p>
               <ul className={aboutcss.HobbiesList}>
                  <li><i className="ri-pencil-line"></i> Educational Tutoring</li>
                  <li><i className="ri-brush-line"></i> Elegant Calligraphy</li>
                  <li><i className="ri-palette-line"></i> Creative Drawing</li>
               </ul>
            </section>

            <section className={aboutcss.Section}>
               <h2 className={aboutcss.SubTitle}>Languages</h2>
               <p>
                  Proficient in <strong>English, Hindi, and Punjabi</strong>, which enhances my ability to interact with a diverse audience and convey ideas effectively.
               </p>
            </section>
         </div>
      </div>
   );
}

export default About;

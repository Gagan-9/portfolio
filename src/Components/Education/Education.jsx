import React from "react";
import educationCSS from './../Education/Education.module.css';
function Education() {
    return (
        <div id="education" className={`${educationCSS.EducationWrapper} section`}>
            <h3 className="sectionheading"><i className="ri-shining-fill"></i>Education</h3>
            <h1 className="section_Title"> Education and<br /> Academic Background</h1>
            <div className={educationCSS.EducationContent}>
                <h1>My Education</h1>
                <div className={educationCSS.education}>
                    <small>2019</small>
                    <h3>10th <span>with <strong>96.46%</strong> </span></h3>
                    <p>Shri Harkrishan Sahib Public High School, Ludhiana</p>
                </div>
                <div className={educationCSS.education}>
                    <small>2021</small>
                    <h3>12th <span> with <strong>94.4%</strong> </span></h3>
                    <p>Shri Harkrishan Sahib Public Sr. Sec. School, Ludhiana</p>
                </div>
                <div className={educationCSS.education}>
                    <small>2021-25</small>
                    <h3>B.Tech.<span> with <strong>9.20 GPA</strong> </span></h3>
                    <p>Guru Nanak Dev Engineering College, Ludhiana</p>
                </div>
            </div>
        </div>
    );
}

export default Education;

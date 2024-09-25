import React from 'react';
import profileCSS from './../Profile/Profile.module.css';
import HeroImg from '../../assets/Hero-img.jpg';
import CV from '../../assets/CV.pdf';

function Profile() {
  return (
    <div className={profileCSS.ProfileWrapper}>
      <div className={profileCSS.ProfileBox}>
        <img src={HeroImg} alt="Profile" className={profileCSS.ProfileImg} />
        <div className={profileCSS.ProfileInfo}>
          <h1>Gagandeep Kaur</h1>
          <h3>Web Developer</h3>
          <p>Crafting exceptional web experiences with a passion for design and technology.</p>
        </div>
        <div className={profileCSS.SocialMedia}>
        <a href="mailto:deepgagan.2309@gmail.com" className={profileCSS.Icon}><i className="ri-mail-line"></i></a>
        <a href="https://linkedin.com/in/gagank9" className={profileCSS.Icon}><i className="ri-linkedin-box-line"></i></a>
        <a href="https://github.com/Gagan-9" className={profileCSS.Icon}><i className="ri-github-line"></i></a>
          <a href="https://instagram.com/in/gagank.o9" className={profileCSS.Icon}><i className="ri-instagram-line"></i></a>
          
        </div>
        <a href={CV} download="Gagandeep_Kaur_CV.pdf" className={profileCSS.DownloadCV}>
          Download CV <i className="ri-download-line"></i>
        </a>
      </div>
    </div>
  );
}

export default Profile;

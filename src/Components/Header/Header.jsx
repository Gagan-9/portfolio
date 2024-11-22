import React from "react";
import headerCSS from './../Header/Header.module.css';

function Header() {
    return (
        <div id="home" className={`${headerCSS.HeaderWrapper} section`}>
            {/* Floating circles */}
            <div className={headerCSS.floatingCircle}></div>
            <div className={headerCSS.floatingCircle}></div>
            <div className={headerCSS.floatingCircle}></div>
            <div className={headerCSS.floatingCircle}></div>
            <div className={headerCSS.floatingCircle}></div>

            <div className={headerCSS.ContentWrapper}>
                <h3 className={headerCSS.SectionHeading}><i className="ri-shining-fill">Let's Meet!</i></h3>
                <h1 className={headerCSS.SectionTitle}>Welcome to My Portfolio!</h1>
                <h2 className={headerCSS.IntroText}>
                    Hi, I’m Gagandeep Kaur, a B.Tech Information Technology student at GNDEC. As a fresh graduate, I’m eager to dive into the world of technology and programming. I’m passionate about learning and exploring new areas in tech, and I’m excited to contribute and grow in this field.
                </h2>
            </div>
        </div>
    );
}

export default Header;

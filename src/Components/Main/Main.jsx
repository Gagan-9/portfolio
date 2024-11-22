import React, { useEffect } from "react";
import mainCSS from './Main.module.css';
import { Link } from 'react-router-dom';

function Main() {
    const Darkmode = () => {
        document.querySelector('body').setAttribute('data-theme', 'Dark');
    };

    const Lightmode = () => {
        document.querySelector('body').setAttribute('data-theme', 'Light');
    };

    const ThemeHandler = () => {
        if (document.querySelector('body').getAttribute('data-theme') === 'Light') {
            Darkmode();
        } else {
            Lightmode();
        }
    };

    useEffect(() => {
        Lightmode();
    }, []);

    const handleConnectClick = () => {
        window.open('https://www.linkedin.com/in/gagandeep-kaur-211961224/', '_blank');
    };

    return (
        <>
            <div className={mainCSS.navbar}>
                <ul>
                    <li><a href="#home"><span>Home</span> <i className="ri-home-line"></i></a></li>
                    <li><a href="#about"><span>About Me</span><i className="ri-user-line"></i></a></li>
                    <li><a href="#portfolio"><span>Portfolio</span> <i className="ri-user-4-line"></i></a></li>
                    <li><a href="#education"><span>Education</span> <i className="ri-contacts-book-line"></i></a></li>
                    <li><a href="#skills"><span>Skills</span><i className="ri-file-list-line"></i></a></li>
                    <li id={mainCSS.nav_ThemeBtn}>
                        <i className="ri-sun-line" onClick={ThemeHandler}></i>
                    </li>
                </ul>
                <div className={mainCSS.navBtns}>
                    <i className="ri-sun-line" onClick={ThemeHandler}></i>
                    <button onClick={handleConnectClick}>Let’s Connect</button>
                </div>
            </div>
        </>
    );
}

export default Main;

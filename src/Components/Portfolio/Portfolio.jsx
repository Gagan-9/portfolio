import React from "react";
import portfolioCSS from './Portfolio.module.css';
import portfolio1 from './../../assets/Portfolio1.webp';
import portfolio2 from './../../assets/Portfolio2.webp';
import portfolio3 from './../../assets/Portfolio3.webp';
import portfolio4 from './../../assets/Portfolio4.webp';
import portfolio5 from './../../assets/Portfolio5.webp';
import portfolio6 from './../../assets/Portfolio6.webp';

function Portfolio() {
    return (
        <div id="portfolio" className={`${portfolioCSS.PortfolioWrapper} section`}>
            <h3 className="sectionheading"><i className="ri-shining-fill">Portfolio</i></h3>
            <h1 className="section_Title">Check Out My <br /> Featured Projects</h1>
            <div className={portfolioCSS.portfolioCards}>
                <div className={portfolioCSS.card}>
                    <img src={portfolio1} alt="Portfolio-img" />
                    <div className={portfolioCSS.cardInfo}>
                        <span className={portfolioCSS.projectName}>Auto Gradation System</span>
                        <div className={portfolioCSS.links}>
                            <a href="https://github.com/Gagan-9/Auto-gradation-system.git" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://live-demo-link.com/auto-gradation-system" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>

                <div className={portfolioCSS.card}>
                    <img src={portfolio2} alt="Portfolio-img" />
                    <div className={portfolioCSS.cardInfo}>
                        <span className={portfolioCSS.projectName}>Code Compiler</span>
                        <div className={portfolioCSS.links}>
                            <a href="https://github.com/Gagan-9/Online-Code-Compiler.git" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://live-demo-link.com/code-compiler" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>

                <div className={portfolioCSS.card}>
                    <img src={portfolio3} alt="Portfolio-img" />
                    <div className={portfolioCSS.cardInfo}>
                        <span className={portfolioCSS.projectName}>Microsoft Loop 2.0</span>
                        <div className={portfolioCSS.links}>
                            <a href="https://github.com/Gagan-9/microsoft-loop.git" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://microsoft-loop-five.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>

                <div className={portfolioCSS.card}>
                    <img src={portfolio4} alt="Portfolio-img" />
                    <div className={portfolioCSS.cardInfo}>
                        <span className={portfolioCSS.projectName}>ToDo List</span>
                        <div className={portfolioCSS.links}>
                            <a href="https://github.com/Gagan-9/checkmate.git" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://checkmate-chi.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>

                <div className={portfolioCSS.card}>
                    <img src={portfolio5} alt="Portfolio-img" />
                    <div className={portfolioCSS.cardInfo}>
                        <span className={portfolioCSS.projectName}>Image Editor</span>
                        <div className={portfolioCSS.links}>
                            <a href="https://github.com/Gagan-9/Image-editor.git" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://image-editor-red-beta.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className={portfolioCSS.card}>
                    <img src={portfolio6} alt="Portfolio-img" />
                    <div className={portfolioCSS.cardInfo}>
                        <span className={portfolioCSS.projectName}>Dental Webapge</span>
                        <div className={portfolioCSS.links}>
                            <a href="https://github.com/Gagan-9/dental-webpage.git" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://dental-webpage-gagan-9s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;

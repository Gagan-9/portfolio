import React from "react";
import portfolioCSS from './../Portfolio/Portfolio.module.css'
import portfolio1 from './../../assets/Portfolio1.webp'
import portfolio2 from './../../assets/Portfolio1.webp'
import portfolio3 from './../../assets/Portfolio1.webp'
function Portfolio() {
    return(
        <div id = "portfolio" className={`${portfolioCSS.PortfolioWrapper} section`}>
        <h3 className="sectionheading"><i className="ri-shining-fill">Portfolio</i></h3>
        <h1 className="section_Title">Check Out My <br/> Featured Projects  </h1>
         <div className={portfolioCSS.portfolioCards}>
            <div className={portfolioCSS.card}>
                <img src ={portfolio1} alt="Portfolio-img" />
                <div className={portfolioCSS.tags}>
                <span>Auto Gradation System</span>
                <span>Branding</span>
                </div>
            </div>
            <div className={portfolioCSS.card}>
                <img src ={portfolio1} alt="Portfolio-img" />
                <div className={portfolioCSS.tags}>
                <span>Code Compiler</span>
                <span>SolveIT</span>
                </div>
            </div>
            <div className={portfolioCSS.card}>
                <img src ={portfolio1} alt="Portfolio-img" />
                <div className={portfolioCSS.tags}>
                <span>ToDoList</span>
                <span>Checkmate</span>
                </div>
            </div>
            <div className={portfolioCSS.card}>
                <img src ={portfolio1} alt="Portfolio-img" />
                <div className={portfolioCSS.tags}>
                <span>ToDoList</span>
                <span>Checkmate</span>
                </div>
            </div>
         </div>
        </div>
    )
}

export default Portfolio
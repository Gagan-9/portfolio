import './App.css'
import Header from './Components/Header/Header'
import Profile from './Components/Profile/Profile'
import Main from './Components/Main/Main'
import Portfolio from './Components/Portfolio/Portfolio'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import Education from './Components/Education/Education'
function App() {


  return (
    <>
      <Profile />
      <div className="Main_Wrapper">
        <Main />
        <Header />
        <About />
        <Portfolio />
        <Education />
        <Skills />
        <Contact />
      </div>
    </>
  )
}

export default App

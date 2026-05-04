import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="portfolio-app bg-dark">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;

// App.js
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Education from './components/Education';
import Work from './components/Work';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className='body'>
        <Home />
        <About />
        <Services />
        <Education />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

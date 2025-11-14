// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Projects />
        <Team />
        <Testimonial />
        <Blog />
      </main>
      <Footer />
    </>
  );
}

export default App;
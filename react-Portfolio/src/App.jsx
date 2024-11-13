// Bringing in the required import from 'react-router-dom'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './pages/ResumePage';
import About from './pages/AboutPage';
import Projects from './pages/ProjectPage';
import Contact from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

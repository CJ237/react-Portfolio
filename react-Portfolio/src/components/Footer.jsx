import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '1rem', backgroundColor: '#333', textAlign: 'center' }}>
      <p className="text-info">&copy; {new Date().getFullYear()} My Portfolio</p>
      <div>
        <a href="https://stackoverflowteams.com/c/cjthompson562" target="_blank" rel="noopener noreferrer" className="text-info" style={{marginRight: '1rem' }}>Stackoverflow</a>
        <a href="https://www.linkedin.com/in/c-j-thompson-7451b8214" target="_blank" rel="noopener noreferrer" className="text-info" style={{ marginRight: '1rem' }}>LinkedIn</a>
        <a href="https://github.com/CJ237" target="_blank" rel="noopener noreferrer" className="text-info">GitHub</a>
      </div>
    </footer>
  );
}

export default Footer;
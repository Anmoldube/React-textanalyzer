import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import LinksFor from './components/LinksFor.js';
//import backgroundVideo from './videob.mp4';
import React, { useState } from 'react';
import About from './components/About.js';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');

  const handleThemeToggle = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = '';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#7f83b5';
    }
  };

  return (
    <Router>
      <>
        <Navbar title="Text Analyzer" color="blue" mode={mode} handleThemeToggle={handleThemeToggle} />
        <div className="c" style={{ position: 'relative' }}>

          <div className="container">
            <Routes>
              <Route exact path="/" element={<TextFrom />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/links" element={<LinksFor />} />
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;

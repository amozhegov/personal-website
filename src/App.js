import React, { useState } from 'react';
import Me from './components/Me';
import Education from './components/Education';
import Work_experience from './components/Work_experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import videoBackground from './5818973-hd_1920_1080_24fps.mp4';

import './styles.css';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('Me');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Me':
        return <Me />;
      case 'Education':
        return <Education />;
      case 'Projects':
        return <Projects />;
      default:
        return <Me />;
    }
  };

  return (
    <div className="app-container">
      <video autoPlay loop muted id="video-background">
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <nav className="navbar">
        <button onClick={() => setActiveComponent('Me')}>Me</button>
        <button onClick={() => setActiveComponent('Education')}>Education</button>
        <button onClick={() => setActiveComponent('Projects')}>Projects</button>
      </nav>
      <div className="content-container">
        {renderComponent()}
      </div>
    </div>
  );
};

export default App;
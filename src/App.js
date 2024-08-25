import React from 'react';
import Me from './components/Me';
import Education from './components/Education';
import Work_experience from './components/Work_experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import './styles.css';


function App() {
  return (
    <div className="App">
      <Me />
      <Education />
      <Work_experience />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;

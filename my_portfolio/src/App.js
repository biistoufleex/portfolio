import React from 'react';

// Styles 
import './App.css';

// Componnents
import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation';
import Project from './components/Project/Project';
import Competences from './components/Competences/Competences';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
        <Header />
        <Presentation />
        <Project />
        <Competences />
        <Contact />
    </div>
  );
}

export default App;

import React from 'react';

// Styles 
import './App.css';

// Componnents
import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation';
import Project from './components/Project/Project';

function App() {
  return (
    <div className="App">
        <Header />
        <Presentation />
        <Project />
    </div>
  );
}

export default App;

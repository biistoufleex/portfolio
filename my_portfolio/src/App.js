import React from 'react';

import './App.css';
import './components/Header/Header.css';
import './components/Presentation/Presentation.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Componnents
import Header from './components/Header/Header';
import Presentation from './components/Presentation/Presentation';

function App() {
  return (
    <div className="App">
        <Header />
        <Presentation />
    </div>
  );
}

export default App;

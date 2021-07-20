import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './components/Pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Pages />
      </Router>
    </div>
  );
}

export default App;

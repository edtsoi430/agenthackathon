// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InitialPage from './InitialPage';
import SecondPage from './SecondPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/articles" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
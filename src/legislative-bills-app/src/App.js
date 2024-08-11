// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import InitialPage from './InitialPage';
import SecondPage from './SecondPage';
import { FormProvider } from './FormContext';

const App = () => {
  return (
    <Router>
      <FormProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/articles" element={<SecondPage />} />
          </Routes>
        </div>
      </FormProvider>
    </Router>
  );
};

export default App;
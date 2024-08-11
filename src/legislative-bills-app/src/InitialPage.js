import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const InitialPage = () => {
  const formRef = useRef(null);

  const scrollToForm = (e) => {
    e.preventDefault();
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="hero-section">
        <h1>Make legislative bills easy to digest and understand</h1>
        <p>Powered by Legislative Guru</p>
        <a href="#form" className="cta-button" onClick={scrollToForm}>Get Started</a>
        <Link to="/articles" className="cta-button secondary">Explore Articles</Link>
      </div>
      <div className="container" id="form" ref={formRef}>
        <Form />
      </div>
    </>
  );
};

export default InitialPage;
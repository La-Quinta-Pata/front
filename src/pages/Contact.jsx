import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Router from '../router/Router.jsx';

function Contact() {
  return (
    <div className="contact-container">
      <h1
        id="hero-heading"
        className="text-4xl lg:text-6xl font-bold tracking-tight"
      >
        <span className="text-gray-900">¿Dónde nos encuentras?</span>
      </h1>
      <p>Barcelona</p>
      <p>📍Carrer Robador 25-27 Raval</p>
      <p>📱+34 672-881-452</p>
      <p>
        <a href="mailto:laquintapataasociacion@gmail.com">
          📧laquintapataasociacion@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Contact;
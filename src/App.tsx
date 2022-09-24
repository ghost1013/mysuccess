import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsPage from './component/ProjectsPage';
import ProjectPage from './component/ProjectPage';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './component/Home';


function App() {
  return (
    // <div className="container">
    //   <ProjectsPage />
    // </div>

    <Router>
      <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects/" className="button rounded">
          Projects
        </NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

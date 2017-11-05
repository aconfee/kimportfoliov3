import React, { Component } from 'react';
import './App.css';
import Header from './organisms/header/header.component.js';

import { Route } from 'react-router-dom';

import Home from './pages/home/home.component.js';
import Projects from './pages/projects/projects.component.js';
import StyleGuide from './pages/styleguide/styleguide.component.js';
import About from './pages/about/about.component.js';

class App extends Component {
  render() {
    return (
      <div className="page-content-container">
        { Header() }
        <Route exact path="/" component={ Home } />
        <Route exact path="/projects" component={ Projects } />
        <Route path="/styleguide" component={ StyleGuide } />
        <Route path="/about" component={ About } />
      </div>
    );
  }
}

export default App;

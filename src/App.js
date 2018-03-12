import React, { Component } from 'react';
import './App.css';
import Header from './organisms/header/header.component.js';
import Footer from './organisms/footer/footer.component.js';

import { Route } from 'react-router-dom';

import Home from './pages/home/home.component.js';
import Projects from './pages/projects/projects.component.js';
import Concept from './pages/concept/concept.component.js';
import Illustration from './pages/illustration/illustration.component.js';
import Fun from './pages/fun/fun.component.js';
import About from './pages/about/about.component.js';
import Contact from './pages/contact/contact.component.js';
import Fishbowls from './pages/projects/fishbowls.component.js';
import Alice from './pages/projects/alice.component.js';
import Jesse from './pages/projects/jesse.component.js';
import Lilly from './pages/projects/lilly.component.js';
import StyleGuide from './pages/styleguide/styleguide.component.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className="page-content-container">
          { Header() }
          <Route exact path="/" component={ Home } />
          <Route exact path="/projects" component={ Projects } />
          <Route exact path="/fishbowls" component={ Fishbowls } />
          <Route exact path="/alice" component={ Alice } />
          <Route exact path="/jesse" component={ Jesse } />
          <Route exact path="/lilly" component={ Lilly } />
          <Route path="/concept" component={ Concept } />
          <Route path="/illustration" component={ Illustration } />
          <Route path="/fun" component={ Fun } />
          <Route path="/about" component={ About } />
          <Route path="/contact" component={ Contact } />
          <Route path="/styleguide" component={ StyleGuide } />
        </div>
        { Footer() }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './organisms/header/header.component.js';
import Footer from './organisms/footer/footer.component.js';

import { Route } from 'react-router-dom';

import Home from './pages/home/home.component.js';
import Tv from './pages/tv/tv.component.js';
import Fun from './pages/fun/fun.component.js';
import About from './pages/about/about.component.js';
import Contact from './pages/contact/contact.component.js';
import StyleGuide from './pages/styleguide/styleguide.component.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className="page-content-container">
          <Header />
          <Route exact path="/" component={ Home } />
          <Route exact path="/tv" component={ Tv } />
          {/* OBSOLETE: /projects is here for reverse-compatibility if recruiters still have this link. */}
          <Route exact path="/projects" component={ Home } />
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

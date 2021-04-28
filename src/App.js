import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Project from './components/Project/Project';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/about'  exact component={About} />
          <Route path='/portfolio' exact component={Project} />
          <Route path='/resume' exact component={Resume} />
          <Route path='/contact' exact component={Contact} /> 
          <Route path='/react-portfolio' exact component={About} />
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;

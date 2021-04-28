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
    <div>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Project} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={Contact} /> 
        </Switch>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;

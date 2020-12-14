import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

import React, { Fragment } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Photos from './components/pages/Photos';
import Film from './components/pages/Film';
import Code from './components/pages/Code';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/photos' component={Photos} />
                <Route exact path='/film' component={Film} />
                <Route exact path='/code' component={Code} />
              </Switch>
          </div>
          <Footer />
        </Fragment>
      </Router>
    </Provider>

  );
}

export default App;

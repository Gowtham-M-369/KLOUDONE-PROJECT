import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile1 from './pages/Profile1';
import Products from './pages/Products';
import Map from './pages/Map';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Profile1' component={Profile1} />
          <Route path='/products' component={Products} />
          <Route path='/Map' component={Map}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

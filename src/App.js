import React from 'react';
import './App.css';

import PLP from './app/component/PLP';
import PDP from './app/component/PDP';
import Suggestion from './app/component/Suggestion';
import Header from './app/component/Header';
import Footer from './app/component/footer';
import Form from './app/component/Form';
import ProductDeletion from './app/component/ProductDeletion';
import Button__ from './app/component/Button__';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import brand_logo from './app/component/images/logo.png';


function App() {

  
  return (

    <header className="App-header">
      <div className="App">
       
      <Header />
         <Button__ />
    
        <div>
          <Router>
            <Switch>
              <Route exact path='/' component={PLP}></Route>
              <Route path='/PLP' component={PLP}></Route>
              <Route path='/details/:id' component={PDP}></Route>
              <Route path='/Form' component={Form}></Route>
              <Route path='/ProductDeletion' component={ProductDeletion}></Route>
            </Switch>
          </Router>
        </div>

        <Footer /> 

      </div>

    </header>
  );
}

export default App;

import React, { Component } from 'react';
import {Route, NavLink, HashRouter,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './menu.css';
import Home from './Home';
import Contact from'./Contact';
import About from'./About';

class App extends Component {
  render() {
    console.log(this.props.state)
    
    return (
     
          <HashRouter>
             <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

          
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      
        <nav>
            <li><NavLink  to='/'>Home</NavLink> </li>
            <li><NavLink  to='/about'>About</NavLink> </li>
            <li><NavLink  to='/contact'>Contact</NavLink> </li>
            <li><NavLink  to='/client'>Client</NavLink> </li>

        </nav>
          <div  className='content'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path='/client' />
              <Route path='*' component={() => (<h1>File not found</h1>)} />
             </Switch> 
                      </div>
      </div>
        </HashRouter>
    );
  }
}

export default App;

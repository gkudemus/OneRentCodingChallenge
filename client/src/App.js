import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import  Properties from './components/properties'
import Owners from './components/owners'
import Search from './components/search'
import Header from './components/header'
import './App.css';


class App extends Component {
  render() {
    return (
        <div className="App container">
          <h1 style={{marginBottom: 20}}>Real Estate Look Up...</h1>
          <Header />
          <Switch>
            <Route exact path ='/properties' component={Properties}/>
            <Route exact path ='/owners' component={Owners}/>
            <Route exact path ='/search' component={Search}/>
          </Switch>
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './font-awesome/css/all.min.css';
import Home from './components/home/Home';
import Cerberus from './components/cerberus/Cerberus';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render(){
    return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/cerberus' component={Cerberus}/>
      </Switch>
    </div> 
    );}
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect 
} from "react-router-dom";

import MainPage from "./pages/main";
import Login from "./pages/login";
import Villigers from "./pages/villigers";
import Items from "./pages/items";
import Clothes from "./pages/itemClothes";
import Diylist from "./pages/diylist";


class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path = "/" component= {MainPage}/>
        <Route exact path = "/login" component = {Login}/>
        <Route exact path = "/villigers" component= {Villigers}/>
        <Route exact path = "/items" component= {Items}/>
        <Route exact path = "/items/clothes" component= {Clothes}/>
        <Route exact path = "/diylist" component= {Diylist}/>
        <Redirect to = "/404"/>
      </Switch>
    </Router>
  }
}

export default App;

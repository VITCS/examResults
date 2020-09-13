import React, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import HomePage from "./components/homePage/homePage";
import MenuItems from "./components/menu/menu";
import Header from "./components/banner/banner";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      isUserAuthenticated: true
    };
  }

  render() {
    return (
      <div>
        <Header/>
        <MenuItems/>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
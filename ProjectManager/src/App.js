import React, { Component } from 'react';
import Projects from './Components/Projects'
import './App.css';
var uniqid = require('uniqid');

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
          id:uniqid(),
          title: "Project 1",
          desc: "Project 1 is about Web Development"
        },
        {
          id:uniqid(),
          title: "Project 2",
          desc: "Project 2 is about Database Development"
        },
        {
          id:uniqid(),
          title: "Project 3",
          desc: "Project 3 is about Alogrithm Development"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">My First React JS Application</div>
        <br />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;

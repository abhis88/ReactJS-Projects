import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';
var uniqid = require('uniqid');

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects : [
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
    ]});
  }

  handleAddProject(newProject){
    //console.log(newProject)
    let projects = this.state.projects;
    projects.push(newProject);
    this.setState({projects: projects});
  }

  handleDeleteProject(id){
    //console.log(id);
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">My First React JS Application</div>
        <br />
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

deleteProject(id){
  this.props.onDelete(id);
}

  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem key={project.id} project={project} onDelete={this.deleteProject.bind(this)}/>
        );
      });
    }

    return (
      <div className="Project">
        {projectItems}
      </div>
    );

  }
}

export default Projects;

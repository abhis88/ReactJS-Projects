import React, { Component } from 'react';

class ProjectItem extends Component {

handleDelete(id){
  this.props.onDelete(id);
}

  render() {
    return (
      <li>
        <strong>Project Name </strong>: {this.props.project.title} - {this.props.project.desc} <a href="#" onClick={this.handleDelete.bind(this, this.props.project.id)}>Delete</a>
      </li>
    );
  }
}

export default ProjectItem;

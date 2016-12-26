import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
      <li>
        <strong>Project Name </strong>: {this.props.project.title}
      </li>
    );
  }
}

export default ProjectItem;

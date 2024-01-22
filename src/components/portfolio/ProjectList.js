import React, { Component } from 'react'
import Project from './Project'
import { portfolioData } from '../../data/portfolioData';


export default class ProjectList extends Component {
  state = {
  projects : portfolioData
}

  render() {
    let { projects } = this.state;

    return (
        <div className='projects'>
        {
          projects.map(item => {

            return (
              <Project
                key={item.id}
                item={item}
              />
            )
          })
          }
      </div>
    )
  }
}

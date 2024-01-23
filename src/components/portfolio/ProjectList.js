import React, { Component } from 'react';
import Project from './Project';
import { portfolioData } from '../../data/portfolioData';

export default class ProjectList extends Component {
	state = {
		projects: portfolioData,
		radios: [
			{ id: 1, value: 'javascript' },
      { id: 2, value: 'css' },
      { id: 3, value: 'node.js' },    
			{ id: 4, value: 'react' },
		],
		selectedRadio: 'javaScript', // de base celle-ci est selctionnée
	};

	handleRadio = (event) => {
		let radio = event.target.value;
		this.setState({ selectedRadio: radio }); // au clic, prend la valeur de radio
	};

	render() {
		let { projects, radios, selectedRadio } = this.state;
    // projects : this.state.projects

		return (
			<div className="portfolioContent">
        <ul className="radioDisplay">
          
					{radios.map((radio) => {
						return (
							<li key={radio.id}>
								<input
									type="radio"
									name="radio"
									checked={radio.value === selectedRadio}
									value={radio.value}
									id={radio.value}
									onChange={this.handleRadio}
								/>
								<label htmlFor={radio.value}>{radio.value}</label>
							</li>
						)
          })
          }
				</ul>

				<div className="projects">
          {projects
            .filter(item => item.languages.includes(selectedRadio))
            .map(item => {
						return (<Project key={item.id} item={item} />)
					})}
				</div>
			</div>
		);
	}
}

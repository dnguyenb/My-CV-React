import React from 'react';
import portfolioData from '../../data/portfolioData.json';
import Project from './Project';

const ProjectList = () => {
	return (
		<div className="portfolioContent">
			<ul className="radioDisplay"></ul>
			<div className="projects">
				{portfolioData.map((project) => (
					<Project
						key={project.id}
						name={project.name}
						languages={project.languages}
						languagesIcon={project.languagesIcons}
						source={project.source}
						info={project.info}
						picture={project.picture}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectList;

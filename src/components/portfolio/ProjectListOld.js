import React from 'react';
import portfolioData from '../../data/portfolioData.json';
import Project from './Project';

const ProjectList = () => {
	return (
		<div className="portfolioContent">
			<ul className="radioDisplay"></ul>
			<div className="projects">
				{portfolioData.map(({ id, title, languages,source, info, picture }) => (
					<Project
						key={id}
						title={title}
						languages={languages}
						source={source}
						info={info}
						picture={picture}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectList;

import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({
	id,
	cover,
	name,
	languages,
	languagesIcons,
	source,
	info,
	picture,
}) => {
	return (
		<Link to={`/project/${id}`} className="project-card">
			<img src={cover} alt={name} />
            <h3 className="project-name">{name}</h3>
            <span>{languages}</span>
		</Link>
	);
};

export default Project;

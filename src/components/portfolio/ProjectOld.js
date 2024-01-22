import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({
	id,
	title,
	languages,
	source,
	info,
	picture,
}) => {
	return (
		<div className="project">
			<Link to={`/project/${id}`} className="project-card">
				<h3>{title}</h3>
				<img src={picture} alt={title} />
				<span className='infos'>
					<i className='fas fa-plus-circle'></i>
				</span>
			</Link>
		</div>
	);
};

export default Project;

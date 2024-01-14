import React from 'react';

const SoftSkills = () => {
    return (
		<div className="softSkills">
			<h3>Soft Skills</h3>
				<ul>
					<li className="softSkill">
						<i class="fa-solid fa-people-group"></i>{' '}
						<span>Esprit d'équipe</span>
					</li>
					<li className="softSkill">
						<i class="fa-solid fa-magnifying-glass"></i> <span>Curiosité</span>
					</li>
					<li className="softSkill">
						<i class="fa-regular fa-comment-dots"></i>{' '}
						<span>Communication</span>
					</li>
					<li className="softSkill">
						<i class="fa-solid fa-server"></i> <span>Flexibilité</span>
					</li>
				</ul>
			</div>
		);
};

export default SoftSkills;
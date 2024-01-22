import React from 'react';
import photo from '../assets/photo-id.jpg';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className="sidebar">
			<div className="id">
				<div className="idContent">
					<img src={photo} alt="profil David Blot" />
					<h3>David Blot</h3>
				</div>
			</div>

			<div className="navigation">
				<ul>
					<li>
						<NavLink exact to="/">
							<i className="fas fa-home"></i>
							<span>Accueil</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/Competences">
							<i className="fas fa-mountain"></i>
							<span>Compétences</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/Portfolio">
							<i className="fas fa-images"></i>
							<span>Portfolio</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/Contact">
							<i className="fas fa-address-book"></i>
							<span>Contact</span>
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="socialNetwork">
				<ul>
					<li>
						<a
							href="https://www.linkedin.com/in/davidblot/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-linkedin"></i>
						</a>
					</li>
					<li>
						<a
							href="https://github.com/dnguyenb"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-github"></i>
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/davidblot/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-twitter"></i>
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/davidblot/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-codepen"></i>
						</a>
					</li>
				</ul>
			</div>

			<div className="signature">
				<p>David Blot - 2024</p>
			</div>
		</div>
	);
};

export default Navigation;

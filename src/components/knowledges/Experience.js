import React from 'react';

const Experience = () => {
	return (
		<div className="experience">
			<h3>Expérience</h3>
			<div className="exp-1">
				<h4>Développeur Web Fullstack</h4>
				<h5>Depuis janvier 2024 - Freelance</h5>
				<p>
					Animé par cette passion pour créer des applications web, les optimiser
					et résoudre les problématiques que peuvent rencontrer leurs
					utilisateurs, je propose mes services pour que mes clients soient
					satisfaits à 100%.
				</p>
			</div>
			<div className="exp-2">
				<h4>Formation Développeur Web Fullstack</h4>
				<h5>mai 2022 à novembre 2022 - Openclassrooms</h5>
				<p>
					Formation menant au Titre Professionnel de Développeur Web, axée
					autour de plusieurs projets finaux permettant chacun de valider, lors
					d'une soutenance, les compétences acquises :{' '}
					<a 
						href="https://github.com/dnguyenb?tab=repositories"
						target="_blank"
						rel="noreferrer"
					>
						Visiter ma page GitHub
					</a>
				</p>
			</div>
			<div className="exp-3">
				<h4>Apprentissage et développement de compétences en autodidacte</h4>
				<h5>Depuis 2021</h5>
				<p>
					Avec un fort intérêt pour les technologies et surtout la création
					d'applications utiles à chacun, je me suis tourné vers l'apprentissage
					du code en autodidacte à l'aide de tutoriels sur les plateformes
					telles que FreeCodeCamp, Openclassrooms.
				</p>
			</div>
			<div className="exp-4">
				<h4>Avant l'ère du développement web</h4>
				<h5>Depuis 2001</h5>
				<p>Coordinateur logistique</p>
			</div>
		</div>
	);
};

export default Experience;

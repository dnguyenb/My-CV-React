import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound404 = () => {
	return (
		<div className="notFound">
			<div className="notFoundContent">
				<h3>Désolé !... pas de page ici.</h3>
				<NavLink exact to="/">
					<i className="fas fa-home"></i>
					<span> Retour à l'Accueil</span>
				</NavLink>
			</div>
		</div>
	);
};

export default NotFound404;

import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
	return (
		<div className="home">
			<Navigation />
			<div className="homeContent">
				<div className="content">
					<h1>David Nguyen Blot</h1>
					<h2>Développeur Web React | Node</h2>
					<div className="pdf">
						<a href="./media/DevWeb.pdf" target="_blank">
							Télécharger mon CV
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

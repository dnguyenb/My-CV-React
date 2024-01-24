import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
			<div className="contact">
				<Navigation />
				<div className="contactContent">
					<div className="header"></div>
					<div className="contactBox">
						<h1>Contactez moi !</h1>
						<ul>
							<li>
								<i className="fas fa-map-marker-alt"></i>
								<span>Strasbourg</span>
							</li>
							<li>
								<i className="fas fa-mobile-alt"></i>
								<CopyToClipboard text="0647612153">
									<span
										className="clickInput"
										onClick={() => {
											alert('Téléphone copié!');
										}}
									>
										06 47 61 21 53
									</span>
								</CopyToClipboard>
							</li>
							<li>
								<i className="far fa-envelope"></i>
								<CopyToClipboard text="d.nguyenblot@gmail.com">
									<span
										className="clickInput"
										onClick={() => {
											alert('E-mail copié !');
										}}
									>
										d.nguyenblot@gmail.com
									</span>
								</CopyToClipboard>
							</li>
						</ul>
					</div>
					<div className="socialNetwork">
						<ul>
							<a
								href="https://github.com/dnguyenb"
								target="_blank"
								rel="noopener noreferrer"
							>
								<h4>Github</h4>
								<i className="fab fa-github"></i>
							</a>
							<a
								href="https://codepen.io/davidblt"
								target="_blank"
								rel="noopener noreferrer"
							>
								<h4>CodePen</h4>
								<i className="fab fa-codepen"></i>
							</a>
							<a
								href="https://www.linkedin.com/in/davidblot/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<h4>Linkedin</h4>
								<i className="fa-brands fa-linkedin"></i>
							</a>
						</ul>
					</div>
				</div>
			</div>
		);
};

export default Contact;
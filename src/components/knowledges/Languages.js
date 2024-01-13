import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

export default class Languages extends Component {
	state = {
		languages: [
			{ id: 1, value: 'Javascript', xp: 1.8 },
			{ id: 2, value: 'Python', xp: 0.5 },
		],
		frameworks: [
			{ id: 1, value: 'React', xp: 1.5 },
			{ id: 2, value: 'Sass', xp: 2.5 },
		],
	};

	render() {
		let { languages, frameworks } = this.state;

		return (
			<div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className='languagesDisplay'
                    title='languages'
                />
                <ProgressBar
                    languages={frameworks}
                    className='frameworksDisplay'
                    title='frameworks'
                />
			</div>
		)
	}
}

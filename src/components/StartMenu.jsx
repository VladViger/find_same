import React from 'react';

import levelsData from '../data/levels.json';
import '../styles/StartMenu.less';

class StartMenu extends React.Component {
	constructor() {
		super();
		this.state = {
			level: null
		};
	}

	handleChoose(e) {
		let id = e.target.value;
		let level = Object.assign({}, levelsData[id]);
		this.setState({level: level});
	}

	handleSubmit() {
		let level = this.state.level;
		if (!level) return;
		let data = {
			height: level.sideA,
			width: level.sideB,
			imgArr: []
		};
		this.props.onStart(data);
	}

	render() {
		let level = this.state.level;
		let buttons = levelsData.map((item, id) => {
			return (
				<button
					onClick={ (e) => this.handleChoose(e) }
					value={id}
					key={id}
				>
					{item.levelName} level
				</button>
			);
		});

		return (
			<section className="start-menu">
				{ buttons }
				<div>
					<h2>Current level: {level ? level.levelName : 'not selected'}</h2>
					<button onClick={ () => this.handleSubmit() }>Start</button>
				</div>
			</section>
		);
	}
}

export default StartMenu;
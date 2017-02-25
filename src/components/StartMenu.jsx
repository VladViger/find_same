import React from 'react';

import MenuDefinedLevels from './MenuDefinedLevels';
import '../styles/StartMenu.less';

class StartMenu extends React.Component {
	constructor() {
		super();
		this.state = {
			level: null
		};
	}

	handleChoose(level) {
		this.setState({level: level});
	}

	handleSubmit() {
		if (!this.state.level) return;
		let data = Object.assign({}, this.state.level);
		this.props.onStart(data);
	}

	render() {
		return (
			<section className="start-menu">
				<MenuDefinedLevels onChooseLevel={ (level) => this.handleChoose(level) } />
				<button onClick={ () => this.handleSubmit() }>Start</button>
			</section>
		);
	}
}

export default StartMenu;
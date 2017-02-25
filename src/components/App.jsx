import React from 'react';

import StartMenu from './StartMenu';
import GameField from './GameField';
import '../styles/mine.less';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			levelData: null
		};
	}

	handleSetLevel(data) {
		let newData = Object.assign({}, data);
		this.setState({ levelData: newData });
	}

	handleStopGame() {
		this.setState({ levelData: null });
	}

	render() {
		const levelData = this.state.levelData;
		return (
			<div className="layout">
				{levelData ? (
					<GameField
						onStop={ () => this.handleStopGame() }
						{ ...levelData }
					/>
				) : (
					<StartMenu
						onStart={ (data) => this.handleSetLevel(data) }
					/>
				)}
			</div>
		);
	}
}

export default App;
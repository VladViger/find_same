import React from 'react';

import '../styles/GameField.less';

class GameField extends React.Component {
	constructor() {
		super();
		this.state = {
			active: null,
			found: []
		};
	}

	handleClickImg(link, id) {
		if (this.isHidden(id) || this.isActive(id)) return;
		if (this.state.active) {
			this.compareImgs(link, id);
		} else {
			this.setState({ active: {link, id} });
		}

	}

	compareImgs(link, id) {
		let result = this.state.active.link === link;
		if (result) {
			let activeId = this.state.active.id;
			let currentId = id;
			let newFound = this.state.found.concat(activeId, currentId);
			this.setState({ found: newFound });
		}
		this.setState({ active: null });
	}

	isActive(id) {
		let result;
		if (this.state.active) result = this.state.active.id === id;
		return result ? 'active' : '';
	}

	isHidden(id) {
		let result = ~this.state.found.indexOf(id);
		return result ? 'hidden' : '';
	}

	render() {
		return (
			<section className="game-field">
				<div className="game-table" style={{ width: this.props.sideA*96 }}>
					{this.props.imgArr.map((link, id) => {
						return (
							<img
								className={`game-cell ${this.isActive(id)} ${this.isHidden(id)}`}
								src={link}
								key={id}
								onClick={() => this.handleClickImg(link, id)}
							/>
						);
					})}
				</div>
				{this.props.imgArr.length === this.state.found.length && <div>You win!</div>}
				<button onClick={this.props.onStop}>Back</button>
			</section>
		);
	}
}

export default GameField;
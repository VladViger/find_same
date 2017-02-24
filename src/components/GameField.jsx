import React from 'react';

class GameField extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	handleClickImg(link) {
		console.log(link);
	}

	render() {
		return (
			<section className="game-field">
				<div style={{display: 'flex', flexWrap: 'wrap', width: this.props.sideB*128}}>
				
					{this.props.imgArr.map((img, i) => {
						return <img src={img} key={i} onClick={ () => this.handleClickImg(img) } />
					})}
				</div>
				<button onClick={this.props.onStop}>Back</button>
			</section>
		);
	}
}

export default GameField;
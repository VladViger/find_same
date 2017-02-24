import React from 'react';

import assist from '../scripts/assist';
import levelsData from '../data/levels.json';
import catsImgs from '../data/cats.json';
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
		if (!this.state.level) return;
		let { sideA, sideB, uniqPercent } = this.state.level;
		let imgArr = this.createImgArr(catsImgs, sideA*sideB, uniqPercent);
		let data = { sideA, sideB, imgArr };
		this.props.onStart(data);
	}

	createImgArr(imgs, length, uniqPercent) {
		let outputArr = [ ...imgs ];
		assist.shuffleArr(outputArr);
		outputArr.length = Math.round(length*uniqPercent*0.01);
		outputArr = outputArr.concat(outputArr);

		let i = 0;
		while (outputArr.length < length) {
			outputArr.push(outputArr[i]);
			outputArr.push(outputArr[i]);
			i++;
		}
		assist.shuffleArr(outputArr);
		return outputArr;
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
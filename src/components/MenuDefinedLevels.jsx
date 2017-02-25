import React from 'react';

import dataLoader from '../scripts/dataLoader';
import assist from '../scripts/assist';

class MenuDefinedLevels extends React.Component {
	constructor() {
		super();
		this.state = {
			levelsData: dataLoader.getLevelsData(),
			imagesData: dataLoader.getImagesData(),
			levelName: 'not selected'
		};
	}

	handleSelect(e) {
		let id = e.target.value;
		let { sideA, sideB, uniqPercent, levelName } = this.state.levelsData[id];
		let images = [ ...this.state.imagesData ];
		let imgArr = assist.createImgArr(images, sideA*sideB, uniqPercent);
		this.props.onChooseLevel({ sideA, sideB, imgArr });
		this.setState({levelName: levelName});
	}

	render() {
		let buttons = this.state.levelsData.map((item, id) => {
			return (
				<button
					onClick={ (e) => this.handleSelect(e) }
					value={id}
					key={id}
				>
					{item.levelName} level
				</button>
			);
		});
		return (
			<div classNmae="">
				{ buttons }
				<p>Current level: {this.state.levelName}</p>
			</div>
		);
	}
}

export default MenuDefinedLevels;
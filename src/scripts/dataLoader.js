const dataLoader = {
	getLevelsData: function() {
		let levelsData = require('../data/levels.json');
		return levelsData;
	},

	getImagesData: function(packName) {
		let imagesData;
		switch (packName) {
			case 'cats':
				imagesData = require('../data/cats.json');
				break;
			default:
				imagesData = require('../data/cats.json');
		}
		return imagesData;
	}
}

export default dataLoader;
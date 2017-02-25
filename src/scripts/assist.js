const assist = {
	shuffleArr: function(arr) {
		var i = arr.length;
		var j, t;

		while (i) {
			j = Math.floor((i--) * Math.random());
			t = arr[i];
			arr[i] = arr[j];
			arr[j] = t;
		}
	},

	createImgArr(imgs, length, uniqPercent) {
		/* if you want to use this fn separately,
		   import 'shuffleArr' from another place */
		let shuffleArr = this.shuffleArr;
		let outputArr = [ ...imgs ];
		shuffleArr(outputArr);
		outputArr.length = Math.round(length*uniqPercent*0.01);
		outputArr = outputArr.concat(outputArr);

		let i = 0;
		while (outputArr.length < length) {
			outputArr.push(outputArr[i]);
			outputArr.push(outputArr[i]);
			i++;
		}
		shuffleArr(outputArr);
		return outputArr;
	}
}

export default assist;
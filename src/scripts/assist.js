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
	}
}

export default assist;
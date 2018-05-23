let config = {
	//背景
	bg: {
		color: [180, 240]
	},
	//文字
	text: {
		content: 'ABCEFGHJKLMNPQRSTWXY123456789',
		num: 4,
		color: [50, 160],
		size: [25, 30],
		position: {
			x: 10,
			y: [30, 40]
		},
		wordWidth: 25,
		deg: [-45, 45]
	},
	//线段
	line: {
		useLine:false,
		color: [40, 180],
		num: 8
	},
	//散点
	point: {
		color: [0, 255],
		num: 100,
	},
	//画布
	paper: {
		id:'canvas',
		useWH:true,
		w: 120,
		h: 40
	}
};

export {config};
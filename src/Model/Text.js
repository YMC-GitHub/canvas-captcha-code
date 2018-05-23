import { randomNum, randomColor } from '../helper.js';
import { config } from '../config.js';

let {
	paper,
	text
} = config;
let result = [];

export class Text {
	constrctor() {}
	draw(ctx) {
		let str = text.content;
		ctx.textBaseline = 'bottom';
		result = [];
		for(let i = 0; i < text.num; i++) {
			let txt = str[randomNum(0, str.length)];
			result.push(txt);
			ctx.fillStyle = randomColor(text.color[0], text.color[1]); //随机生成字体颜色
			ctx.font = randomNum(text.size[0], text.size[0]) + 'px SimHei'; //随机生成字体大小
			let x = text.position.x + i * text.wordWidth;
			let y = randomNum(text.position.y[0], text.position.y[1]);
			let deg = randomNum(text.deg[0], text.deg[1]);
			//修改坐标原点和旋转角度
			ctx.translate(x, y);
			ctx.rotate(deg * Math.PI / 180);
			ctx.fillText(txt, 0, 0);
			//恢复坐标原点和旋转角度
			ctx.rotate(-deg * Math.PI / 180);
			ctx.translate(-x, -y);
		}
		return this;
	}
	text(){
		return result.join('');
	}
}
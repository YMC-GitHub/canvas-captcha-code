import {randomNum,randomColor} from '../helper.js'
let w,h;
class Line {
	draw(ctx,width,height) {
		for(let i = 0; i < 8; i++) {
			ctx.strokeStyle = randomColor(40, 180);
			ctx.beginPath();
			ctx.moveTo(randomNum(0, width), randomNum(0, height));
			ctx.lineTo(randomNum(0, width), randomNum(0, height));
			ctx.stroke();
		}
	}
}
export {Line}
import {Text} from './Model/Text.js'
import {Line} from './Model/Line.js'
import {Point} from './Model/Point.js'
import {Sence} from './Model/Sence.js'

/**生成一个随机数**/
export function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
/**生成一个随机色**/
export function randomColor(min, max) {
	var r = randomNum(min, max);
	var g = randomNum(min, max);
	var b = randomNum(min, max);
	return "rgb(" + r + "," + g + "," + b + ")";
}
/**绘制一个背景图**/
export function drawBg(ctx, w, h) {
	/*
	ctx.fillStyle = randomColor(180, 240);
	ctx.fillRect(0, 0, w, h);
	*/
	(new Sence()).draw(ctx,w, h);
}
/**绘制一批干扰线**/
export function drawLine(ctx, w, h) {
	/*
	for(let i = 0; i < 6; i++) {
		ctx.strokeStyle = randomColor(40, 180);
		ctx.beginPath();
		ctx.moveTo(randomNum(0, w), randomNum(0, h));
		ctx.lineTo(randomNum(0, w), randomNum(0, h));
		ctx.stroke();
	}
	*/
	(new Line()).draw(ctx,w, h);
}
/**绘制一批干扰点**/
export function drawPoint(ctx, w, h) {
	/*
	for(let i = 0; i < 50; i++) {
		ctx.fillStyle = randomColor(0, 255);
		ctx.beginPath();
		ctx.arc(randomNum(0, w), randomNum(0, h), 1, 0, 2 * Math.PI);
		ctx.fill();
	}
	*/
	(new Point()).draw(ctx,w, h);
}
/**绘制一批文字**/
export function drawText(ctx) {
	/*
	let str = 'ABCEFGHJKLMNPQRSTWXY123456789';
	ctx.textBaseline = 'bottom';
	for(let i = 0; i < 4; i++) {
		let txt = str[randomNum(0, str.length)];
		ctx.fillStyle = randomColor(50, 160); //随机生成字体颜色
		ctx.font = randomNum(15, 40) + 'px SimHei'; //随机生成字体大小
		let x = 10 + i * 25;
		let y = randomNum(25, 45);
		let deg = randomNum(-45, 45);
		//修改坐标原点和旋转角度
		ctx.translate(x, y);
		ctx.rotate(deg * Math.PI / 180);
		ctx.fillText(txt, 0, 0);
		//恢复坐标原点和旋转角度
		ctx.rotate(-deg * Math.PI / 180);
		ctx.translate(-x, -y);
	}
	*/
	return (new Text()).draw(ctx);
}
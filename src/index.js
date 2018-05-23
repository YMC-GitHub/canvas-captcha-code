import {randomNum,randomColor,drawBg,drawLine,drawPoint,drawText} from './helper.js'
import {config} from './config.js'

let settings = {};
settings.modules = {
	bg:{draw:drawBg},
	Text:{draw:drawText},
	Line:{draw:drawLine},
	Point:{draw:drawPoint}
};
let options = {};
options.useBg = true;
options.useText = true;
options.useLine = false;
options.usePoint = true;
settings.options = options;

export default class ValicationCodeImage {
	make(setting){
		options.Line = setting;
	}
	draw() {
		let {paper} = config;
		let canvas = document.getElementById(paper.id);
		let width = canvas.width;
		let height = canvas.height;
		let {options,modules} = settings;
		if(paper.useWH){
			width = canvas.width = paper.w;
			height = canvas.height = paper.h;
		}
		
		let ctx = canvas.getContext('2d');
		/**绘制背景**/
		if(options.useBg) {
			modules.bg.draw(ctx,width,height);
		}
		/**绘制文字**/
		if(options.useText) {
			this.text = modules.Text.draw(ctx).text();
			//console.log(modules.Text.draw(ctx).text());
		}
		/**绘干扰线**/
		if(options.useLine) {
			modules.Line.draw(ctx,width,height);
		}
		/**绘干扰点**/
		if(options.usePoint) {
			modules.Point.draw(ctx,width,height);
		}
	}
}


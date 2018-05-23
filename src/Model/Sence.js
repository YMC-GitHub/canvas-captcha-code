import {randomNum,randomColor} from '../helper.js'

class Sence{
	draw(ctx,width,height){
	  ctx.fillStyle = randomColor(180,240); 
    	  ctx.fillRect(0,0,width,height);
	}
}
export {Sence}

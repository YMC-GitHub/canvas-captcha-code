(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ymcCaptchaCode = factory());
}(this, (function () { 'use strict';

	var config = {
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
			useLine: false,
			color: [40, 180],
			num: 8
		},
		//散点
		point: {
			color: [0, 255],
			num: 100
		},
		//画布
		paper: {
			id: 'canvas',
			useWH: true,
			w: 120,
			h: 40
		}
	};

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	var text = config.text;

	var result = [];

	var Text = function () {
		function Text() {
			classCallCheck(this, Text);
		}

		createClass(Text, [{
			key: 'constrctor',
			value: function constrctor() {}
		}, {
			key: 'draw',
			value: function draw(ctx) {
				var str = text.content;
				ctx.textBaseline = 'bottom';
				result = [];
				for (var i = 0; i < text.num; i++) {
					var txt = str[randomNum(0, str.length)];
					result.push(txt);
					ctx.fillStyle = randomColor(text.color[0], text.color[1]); //随机生成字体颜色
					ctx.font = randomNum(text.size[0], text.size[0]) + 'px SimHei'; //随机生成字体大小
					var x = text.position.x + i * text.wordWidth;
					var y = randomNum(text.position.y[0], text.position.y[1]);
					var deg = randomNum(text.deg[0], text.deg[1]);
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
		}, {
			key: 'text',
			value: function text() {
				return result.join('');
			}
		}]);
		return Text;
	}();

	var Line = function () {
		function Line() {
			classCallCheck(this, Line);
		}

		createClass(Line, [{
			key: 'draw',
			value: function draw(ctx, width, height) {
				for (var i = 0; i < 8; i++) {
					ctx.strokeStyle = randomColor(40, 180);
					ctx.beginPath();
					ctx.moveTo(randomNum(0, width), randomNum(0, height));
					ctx.lineTo(randomNum(0, width), randomNum(0, height));
					ctx.stroke();
				}
			}
		}]);
		return Line;
	}();

	var Point = function () {
		function Point() {
			classCallCheck(this, Point);
		}

		createClass(Point, [{
			key: 'draw',
			value: function draw(ctx, width, height) {
				for (var i = 0; i < 100; i++) {
					ctx.fillStyle = randomColor(0, 255);
					ctx.beginPath();
					ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
					ctx.fill();
				}
			}
		}]);
		return Point;
	}();

	var Sence = function () {
		function Sence() {
			classCallCheck(this, Sence);
		}

		createClass(Sence, [{
			key: 'draw',
			value: function draw(ctx, width, height) {
				ctx.fillStyle = randomColor(180, 240);
				ctx.fillRect(0, 0, width, height);
			}
		}]);
		return Sence;
	}();

	/**生成一个随机数**/
	function randomNum(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}
	/**生成一个随机色**/
	function randomColor(min, max) {
		var r = randomNum(min, max);
		var g = randomNum(min, max);
		var b = randomNum(min, max);
		return "rgb(" + r + "," + g + "," + b + ")";
	}
	/**绘制一个背景图**/
	function drawBg(ctx, w, h) {
		/*
	 ctx.fillStyle = randomColor(180, 240);
	 ctx.fillRect(0, 0, w, h);
	 */
		new Sence().draw(ctx, w, h);
	}
	/**绘制一批干扰线**/
	function drawLine(ctx, w, h) {
		/*
	 for(let i = 0; i < 6; i++) {
	 	ctx.strokeStyle = randomColor(40, 180);
	 	ctx.beginPath();
	 	ctx.moveTo(randomNum(0, w), randomNum(0, h));
	 	ctx.lineTo(randomNum(0, w), randomNum(0, h));
	 	ctx.stroke();
	 }
	 */
		new Line().draw(ctx, w, h);
	}
	/**绘制一批干扰点**/
	function drawPoint(ctx, w, h) {
		/*
	 for(let i = 0; i < 50; i++) {
	 	ctx.fillStyle = randomColor(0, 255);
	 	ctx.beginPath();
	 	ctx.arc(randomNum(0, w), randomNum(0, h), 1, 0, 2 * Math.PI);
	 	ctx.fill();
	 }
	 */
		new Point().draw(ctx, w, h);
	}
	/**绘制一批文字**/
	function drawText(ctx) {
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
		return new Text().draw(ctx);
	}

	var settings = {};
	settings.modules = {
		bg: { draw: drawBg },
		Text: { draw: drawText },
		Line: { draw: drawLine },
		Point: { draw: drawPoint }
	};
	var options = {};
	options.useBg = true;
	options.useText = true;
	options.useLine = false;
	options.usePoint = true;
	settings.options = options;

	var ValicationCodeImage = function () {
		function ValicationCodeImage() {
			classCallCheck(this, ValicationCodeImage);
		}

		createClass(ValicationCodeImage, [{
			key: 'make',
			value: function make(setting) {
				options.Line = setting;
			}
		}, {
			key: 'draw',
			value: function draw() {
				var paper = config.paper;

				var canvas = document.getElementById(paper.id);
				var width = canvas.width;
				var height = canvas.height;
				var options = settings.options,
				    modules = settings.modules;

				{
					width = canvas.width = paper.w;
					height = canvas.height = paper.h;
				}

				var ctx = canvas.getContext('2d');
				/**绘制背景**/
				if (options.useBg) {
					modules.bg.draw(ctx, width, height);
				}
				/**绘制文字**/
				if (options.useText) {
					this.text = modules.Text.draw(ctx).text();
					//console.log(modules.Text.draw(ctx).text());
				}
				/**绘干扰线**/
				if (options.useLine) {
					modules.Line.draw(ctx, width, height);
				}
				/**绘干扰点**/
				if (options.usePoint) {
					modules.Point.draw(ctx, width, height);
				}
			}
		}]);
		return ValicationCodeImage;
	}();

	return ValicationCodeImage;

})));

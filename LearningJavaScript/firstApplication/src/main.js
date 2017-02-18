$(document).ready(function(){
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));
	
	/*//repetitive circles
	var c;
	for(var x=25;x<400;x+=50){
		for(var y=25; y<400; y+=50){
			c = Shape.Circle(x,y,20);
			c.fillColor = 'green';
		}
	}
	*/

	//mounse click to draw a grid of circles 
	var tool = new Tool();//Paper.js uses an object called a tool to handle user input

	tool.onMouseDown = function(event){
		var c = Shape.Circle(event.point.x, event.point.y, 20);
		c.fillColor='green';
	}




});
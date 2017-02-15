$(document).ready(function(){
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));
	//the center of the canvas lies at (200, 200) with a radius of 50
	var c = Shape.Circle(200,200,50);
	c.fillColor ='green';
	paper.view.draw();
	console.log('main.js loaded');
});
//calculate matrix direct sum of two matrix which are different sizes,a = [[1,2,3], [2,3,4]], b= [[1,1],[2,2],[3,3]] , the result should be [[1,2,3,0,0],[2,3,4,0,0],[0,0,0,1,1],[0,0,0,2,2],[0,0,0,3,3]]
//After inserting command >node directSum.js, the result is displayed on command prompt 
//Author: Wei-Yu Liao
var a = [[1,2,3], [2,3,4]], b= [[1,1],[2,2],[3,3]];
var aRowLength = a[0].length, bRowLength = b[0].length;
for (var i =0; i<a.length; i++){
	var line = "";

	for(var j = 0; j<aRowLength; j++){
		line = line+ a[i][j] + " ";
	}
	for(var j = 0; j<bRowLength; j++){
		line = line + 0 + " ";
	}
	console.log(line);

}

for (var i =0; i<b.length; i++){
	var line = "";

	for(var j = 0; j<aRowLength; j++){
		line = line + 0 + " ";
	}
	for(var j = 0; j<bRowLength; j++){
		line = line+ b[i][j] + " ";
	}
	
	console.log(line);

}


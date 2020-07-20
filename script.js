//find the element for parallax and apply action

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

var scene = document.getElementById('scene2');
var safetyScene = new Parallax(scene);
//disable invert effect, allow movement with cursor direction
safetyScene.invert(false,false)

var scene = document.getElementById('mask-scene');
var maskScene = new Parallax(scene);
maskScene.invert(true);
//change the speed of movement (x,y)
maskScene.scalar(100,500);

var scene = document.getElementById("kobe");
var kobeScene = new Parallax(scene);
kobeScene.scalar(1000,10);
kobeScene.invert(false,false);

var scene = document.getElementById('blm');
var gfScene = new Parallax(scene);


var scene = document.getElementById('fire');
var fireScene = new Parallax(scene);
fireScene.scalar(100,100);

var scene = document.getElementById('fire-container');
var fireLineScene = new Parallax(scene);
fireLineScene.invert(true,true);
fireLineScene.scalar(600,100);


console.log("testingingingin")
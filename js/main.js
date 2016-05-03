$(document).ready(function(){
	var items = $(" #tomatoLeft, #tomatoRight, #rightBrace, #leftBrace"),
	braces = $("#leftBrace, #rightBrace"),
    tomatos = $("#tomatoLeft, #tomatoRight");
	tl = new TimelineMax({repeat:6, repeatDelay:1, yoyo:true});

TweenLite.set("svg", {visibility:"visible"})

tl.from(braces, 1, {drawSVG:0})
  .from(tomatos, 0.5, {drawSVG:"50% 50%"}, "-=0.5")
  .from("#tomatoTop", 0.1, {autoAlpha:0, scale:2, transformOrigin:"50% 50%"}, "end")
	.from(items, 0.2, {fill:"none"}, "end")
	.to(items, 0.2, {strokeWidth:0}, "end")
});
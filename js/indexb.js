// JavaScript Document
document.body.addEventListener('touchstart', function () { }); 
var oHero=document.getElementById('hero');
var oHeropicul=oHero.getElementsByTagName('ul')[0];
var aHeropiculli=oHeropicul.children;
var oHeroLeft=document.getElementById('heroleft');
var oHeroRight=document.getElementById('heroright');
var oHeadNav=document.getElementById('home').getElementsByTagName('nav')[0];
var aHeroliImg=oHeropicul.getElementsByTagName('img');
var cHeight=document.documentElement.clientHeight;
var oSkillswrapper=document.getElementById('skillswrapper');
var oSkillicon=document.getElementById('skillicon');
var aSkillsdiv=oSkillswrapper.children;
aHeroliImg[0].onload=function(){
	oHeadNav.style.width='180px';	
	oHeadNav.style.left='300px';
};
//skillsclick
var arr=["ajax、jsonp","mvc","html5、css3","canvas","seajs","php、nodejs","git、svn","grunt、gulp"];
var oDiv = document.getElementById('mskillsdiv');
var oSkills=document.getElementById('mskills');
var oBtn = oDiv.children[0];
var count = 8;
var oDivtop=getPos(oDiv).top;
var bl = true;
function setPos(obj,ang) {
	var a = Math.sin(a2r(ang)) * oDiv.offsetWidth / 2;
	var b = Math.cos(a2r(ang)) * oDiv.offsetHeight / 2;
	obj.style.left = oDiv.offsetLeft + oDiv.offsetWidth / 2 + a + 'px';
	obj.style.top = oDiv.offsetTop + oDiv.offsetHeight / 2 - b + 'px';
}
function move1(obj,iTarget,fn) {
	var start = obj.radian;
	var dis = iTarget - start;
	var count = Math.round(700 / 30);
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
	  n++;
	  //cur=start+dis/count*n;
	  var a = 1 - n / count;
	  var cur = start + dis * (1 - a * a * a);
	  setPos(obj,cur);
	  obj.radian = cur;
	  if (n == count) {
		  fn&&fn();
		  clearInterval(obj.timer);
	  }
	}, 30);
}
for (var i = 0; i < count; i++) {
	var oBox = document.createElement('div');
	oBox.innerHTML=arr[i];
	oBox.className ='sBox';
	oSkills.appendChild(oBox);
	setPos(oBox,0); //定位小圆到弧线上
	oBox.radian = 0;
}
var oTp=document.getElementById('tupian');
var tph=oTp.offsetHeight;
var oTptop=getPos(oTp).top;

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
setTimeout(function(){
	oHeadNav.style.width='180px';	
	oHeadNav.style.left='300px';
},100);
var Skillswrappertop=getPos(oSkillswrapper).top;
//alert(Skillswrappertop)

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
function getPos(obj){
	var l=t=0;
	var i=0;
	while(obj){
		l+=obj.offsetLeft;
		t+=obj.offsetTop;
		obj=obj.offsetParent;	
		i++;
	}
	
	return {left:l, top:t};
}

function a2r(ang) {
	return ang * Math.PI / 180;
}
//homeliclick
	var aNavli=document.querySelectorAll('#home nav .navol li');
	var oSkillcontainer=document.querySelector('.skills .container');
	var oWorksul=document.getElementById('worksul');
	var oWimg=document.getElementById('worksulimg');
	var aWorkulwp4=document.querySelectorAll('#worksul .wp4');
	var oWmore=document.getElementById('worksmore');
	var oWbtn=document.getElementById('wmorebtn');
	var oWdestination = document.querySelector('#worksul2');
	var oHeadingmyworksbtn=document.querySelector('.down-arrow-btn');
	var oWorkscontainer=document.querySelector('#works .container');
	var oContactuptopbtn=document.querySelector('.up-btn');
	var oHome=document.querySelector('#home');
	var oAboutme=document.querySelector('.aboutme');
	var oContact=document.querySelector('#contact');
	aNavli[1].addEventListener('click', function(ev){
			window.smoothScroll(oSkillcontainer);	
	});
	aNavli[1].addEventListener("touchstart",function(ev){
		window.smoothScroll(oSkillcontainer);	
	});
	aNavli[2].addEventListener('click', function(ev){
		window.smoothScroll(oWorkscontainer);	
	});
	aNavli[2].addEventListener("touchstart",function(ev){
		window.smoothScroll(oWorkscontainer);	
	},false);	
	aNavli[3].addEventListener('click', function(ev){
		window.smoothScroll(oAboutme);	
	});
	aNavli[3].addEventListener("touchstart",function(ev){
		window.smoothScroll(oAboutme);	
	},false);	
	aNavli[4].addEventListener('click', function(ev){
		window.smoothScroll(oContact);	
	});
	aNavli[4].addEventListener("touchstart",function(ev){
		window.smoothScroll(oContact);	
	},false);	
/*skillsclick*/
	oBtn.onclick = function() {
		var aBox = document.getElementsByClassName('sBox');
		if (bl) {
			
			for (var i = 0; i < aBox.length; i++) {
			
				aBox[i].style.display="block";
				aBox[i].style.background="rgba("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+0.8+")";
				//move1(aBox[i], i * (90 / (count - 1))); //0	0*90/6
				move1(aBox[i], i * (360 / count));
			}
			bl = false; //45				180
			
		} else { //60				240
			for (var i = 0; i < aBox.length; i++) {
				//75 300
				move1(aBox[i],0);
			}
			setTimeout(function () {
				for (var i = 0; i < aBox.length; i++) {
					aBox[i].style.display="none";
				}
			},700)
									
			bl = true;
		}
	}
	//headingmyworks
	oHeadingmyworksbtn.addEventListener('click', function(ev){
		window.smoothScroll(oWorkscontainer);	
	});
	oHeadingmyworksbtn.addEventListener("touchstart",function(ev){
		window.smoothScroll(oWorkscontainer);	
	},false);	
	
	//works
	var handleClick = function(ev) {
		//alert(getPos(oWdestination).top);
		var oEvent=ev||event;
	    oEvent.preventDefault();
		oWmore.className='worksmore workshover';
		oWmore.style.height=oWorksul.offsetHeight+'px';
	  	window.smoothScroll(oWdestination);
		
	};
	oWbtn.addEventListener('click', handleClick);
	oWbtn.addEventListener("touchstart",function(ev){
		handleClick(ev);
	},false);	
	//contact
	oContactuptopbtn.addEventListener('click', function(ev){
		window.smoothScroll(oHome);	
	});
	oContactuptopbtn.addEventListener("touchstart",function(ev){
		window.smoothScroll(oHome);	
	},false);	

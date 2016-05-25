// JavaScript Document
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
var Skillswrappertop=getPos(oSkillswrapper).top;
window.onload=function(){
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
			
};
window.onscroll=function(){//  拖动改变classname!!!移动端没加
	var scrTop=document.documentElement.scrollTop||document.body.scrollTop;
	//alert(oSkillicon.offsetHeight)
	//alert(scrTop+cHeight+oSkillicon.offsetHeight)
	if(Skillswrappertop+oSkillicon.offsetHeight<scrTop+cHeight){
			aSkillsdiv[0].className='fl  skillsdiv wp2 animated  fadeInUp';	
			aSkillsdiv[1].className='fl  skillsdiv wp2 animated  fadeInUp delay-05s';
			aSkillsdiv[2].className='fl  skillsdiv wp2 animated  fadeInUp delay-1s';
	}
	if(oTptop+tph/2<scrTop+cHeight){
		oTp.children[0].className='wp3 animated fadeInDown';	
	}
	var oWorksul=document.getElementById('worksul');
	var oWorksul2=document.getElementById('worksul2');
	var oWimg=document.getElementById('worksulimg');
	var oWimg2=document.getElementById('worksulimg2');
	var aWorkulwp4=document.querySelectorAll('#worksul .wp4');
	var aWorkul2wp4=document.querySelectorAll('#worksul2 .wp4');
	var oWmore=document.querySelector('.worksmore');

	if(scrTop+cHeight>getPos(oWorksul).top+oWimg.offsetHeight){
		 for(var i=0;i<aWorkulwp4.length;i++){
			 aWorkulwp4[i].style.animationDelay=(i%3+1)*0.5+'s'
		 }
		//alert(aWorkulwp4[0].style.animationDelay)
		 for(var i=0;i<aWorkulwp4.length;i++){
			aWorkulwp4[i].className='col-md-4 wp4 animated fadeInDown';
		 }
	}
	if(oWmore.offsetHeight>oWorksul.offsetHeight/2){
		 for(var i=0;i<aWorkul2wp4.length;i++){
			 aWorkul2wp4[i].style.animationDelay=(i%3+1)*0.5+'s'
		 }
		//alert(aWorkulwp4[0].style.animationDelay)
		 for(var i=0;i<aWorkul2wp4.length;i++){
			aWorkul2wp4[i].className='col-md-4 wp4 animated fadeInDown';
		 }
	}
	var oMename=document.getElementById('mename');
	var oTeamleaderwp5=document.querySelector('.teamleader ,wp5');
	if(scrTop+cHeight>getPos(oMename).top){
		oTeamleaderwp5.children[0].className='col-md-4 wp5 delay-05s animated fadeInUp';
	}
}

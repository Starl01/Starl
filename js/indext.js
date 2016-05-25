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
var oSkillswrapper=document.getElementById('skillswrapper');
var oSkillicon=document.getElementById('skillicon');
var aSkillsdiv=oSkillswrapper.children;
var Skillswrappertop=getPos(oSkillswrapper).top;
var cHeight=document.documentElement.clientHeight;
var oTp=document.getElementById('tupian');
var tph=oTp.offsetHeight;
var oTptop=getPos(oTp).top;
var oWorksul=document.getElementById('worksul');
var oWorksul2=document.getElementById('worksul2');
var oWimg=document.getElementById('worksulimg');
var oWimg2=document.getElementById('worksulimg2');
var aWorkulwp4=document.querySelectorAll('#worksul .wp4');
var aWorkul2wp4=document.querySelectorAll('#worksul2 .wp4');
var oWmore=document.querySelector('.worksmore');
var oMename=document.getElementById('mename');
var oTeamleaderwp5=document.querySelector('.teamleader .wp5');
window.onscroll=function(){
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
	if(scrTop+cHeight>getPos(oMename).top){
		oTeamleaderwp5.className='col-md-4 wp5 delay-05s animated fadeInUp';
	}
}

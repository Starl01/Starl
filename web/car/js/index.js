// JavaScript Document
window.onload=function (){
	var oIul=document.getElementById('iul');
	var aIli=oIul.getElementsByTagName('li');
	var oIdiv=document.getElementById('idiv');
	var aIdiv=oIdiv.getElementsByTagName('div');
	
	var oSul=document.getElementById('sul');
	var aSli=oSul.getElementsByTagName('li');
	var oSdiv=document.getElementById('sdiv');
	var aSdiv=oSdiv.getElementsByTagName('div');
	
	var oHul=document.getElementById('hul');
	var aHli=oHul.getElementsByTagName('li');
	
	for(var i=0; i<aIli.length; i++)
	{
		aIli[i].index=i;
		aIli[i].onmouseover=function (){
			for(var a=0; a<aIli.length; a++)
			{
					aIli[a].className='';
					aIdiv[a].className='';
			};
			this.className='on';
			aIdiv[this.index].className='show';
		};
	};
	
	for(var e=0; e<aSli.length; e++)
	{
		aSli[e].index=e;
		aSli[e].onclick=function (){
			for(var b=0; b<aSli.length; b++)
			{
					aSli[b].className='';
					aSdiv[b].className='';
			};
			this.className='on';
			aSdiv[this.index].className='show';
		};
	};
	
	for(var c=0; c<aHli.length; c++)
	{
		aHli[c].index=c;
		aHli[c].onmouseover=function (){
			for(var h=0; h<aHli.length; h++)
			{
					aHli[h].className='';
			};
			aHli[this.index].className='show';
		};
	};
};
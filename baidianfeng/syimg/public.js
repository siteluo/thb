//向左滚动
function forle(demo)
{
	var speed=50
	var forleft2=document.getElementById(demo+"2");
	var forleft1=document.getElementById(demo+"1");
	var forleft=document.getElementById(demo);
	forleft2.innerHTML=forleft1.innerHTML
	function Marquee3(){
	if(forleft2.offsetWidth-forleft.scrollLeft<=0){
	forleft.scrollLeft-=forleft1.offsetWidth}
	else{forleft.scrollLeft++}}
	var MyMar3=setInterval(Marquee3,speed)
	forleft.onmouseover=function() {clearInterval(MyMar3)}
	forleft.onmouseout=function() {MyMar3=setInterval(Marquee3,speed)}
}
//向上滚动
function forup(demo)
{
	var speed=50;
	var forup2=document.getElementById(demo+"2");
	var forup1=document.getElementById(demo+"1");
	var forup=document.getElementById(demo);
	forup2.innerHTML=forup1.innerHTML; 
	function Marquee1(){
	if(forup2.offsetTop-forup.scrollTop<=0)
	{forup.scrollTop-=forup1.offsetHeight;}
	else{ forup.scrollTop++}}
	var MyMar1=setInterval(Marquee1,speed)
	forup.onmouseover=function() {clearInterval(MyMar1)}
	forup.onmouseout=function(){MyMar1=setInterval(Marquee1,speed)}
}
//幻灯片
function indexflash(swf_width,swf_height,files,links,texts)
{
	document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+ swf_width +'" height="'+ swf_height +'">');
	document.write('<param name="movie" value="/img/flash/bcastr3.swf"><param name="quality" value="high">');
	document.write('<param name="menu" value="false"><param name=wmode value="opaque">');
	document.write('<param name="FlashVars" value="bcastr_file='+files+'&bcastr_link='+links+'&bcastr_title='+texts+'">');
	document.write('<embed src="/img/flash/bcastr3.swf" wmode="opaque" FlashVars="bcastr_file='+files+'&bcastr_link='+links+'&bcastr_title='+texts+'& menu="false" quality="high" width="'+ swf_width +'" height="'+ swf_height +'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />'); document.write('</object>'); 
}
//文章滑动
function pucker_show(name,no,hiddencss,showcss) {
for (var i=1 ;i<7 ;i++ ){
document.getElementById(name+i).className=hiddencss;}
document.getElementById(name+no).className=showcss;}
//文章滑动01
function pucker_showsix(name,no,hiddencss,showcss) {
for (var i=1 ;i<6 ;i++ ){
document.getElementById(name+i).className=hiddencss;}
document.getElementById(name+no).className=showcss;}


// 滑动
function g(o){return document.getElementById(o);}
function Hovertab(num,counts,tabname,tabclass){
for (i=1;i<=counts;i++)
{
g(tabname+'tab0'+i).className=tabclass+'tabs';
g(tabname+'div0'+i).style.display='none';
}
g(tabname+'tab0'+num).className=tabclass+'tabs_act';
g(tabname+'div0'+num).style.display='block';
}
function zoosnet()//商务通
{	
	changeURL('news', 'http://swt.zoosnet.net/LR/Chatpre.aspx?id=SWT84702458');
}
function qq()//QQ
{
	changeURL('news', 'http://swt.zoosnet.net/LR/Chatpre.aspx?id=SWT84702458');
}
function ask()//ask
{
	changeURL('news', 'http://swt.zoosnet.net/LR/Chatpre.aspx?id=SWT84702458');
}
function changeURL(winName, newURL) 
{ 
　　 win = window.open("", winName); 
　　 win.location.href = newURL; 
} 


function tabchange(x){
     document.getElementById("zzbox"+x).style.display="block";
	 document.getElementById("imgid"+x).src="img/pidaob/hov"+x+"a.jpg";
	 document.getElementById("imgid"+x).style.cursor="pointer"
	 var y=1;
	  while(y<x)
	 {
	 document.getElementById("zzbox"+y).style.display="none"; 
	 document.getElementById("imgid"+y).src="img/pidaob/hov"+y+".jpg";
	 y=y+1;
	 }
	 var z=2;
	 while(z>x)
	 {
	 document.getElementById("zzbox"+z).style.display="none";
	 document.getElementById("imgid"+z).src="img/pidaob/hov"+z+".jpg";
	 z=z-1;
	 }	
	}

//武警总队医院介绍华动切换
function changeConA(xA,styA){ 
     document.getElementById("divboxA"+xA).style.display="block";
	 document.getElementById("btnA"+xA).src=styA;
	 var ya=1;
	  while(ya<xA)
	 {
	 document.getElementById("divboxA"+ya).style.display="none"; 
	 document.getElementById("btnA"+ya).src="img/pidaob/v0"+ya+".gif";
	 ya=ya+1;
	 }
	 var za=6;
	 while(za>xA)
	 {
	 document.getElementById("divboxA"+za).style.display="none";
	 document.getElementById("btnA"+za).src="img/pidaob/v0"+za+".gif";
	 za=za-1;
	 }
   }

function disbtn(idimg){
	document.getElementById(idimg).style.display="block";
	}
function hidbtn(idimg){
	document.getElementById(idimg).style.display="none";
	}
	
function distext(idtext,idtext1){
	document.getElementById(idtext).style.display="block";
	document.getElementById(idtext1).style.display="none";
	}
function hidtext(idtext,idtext1){
	document.getElementById(idtext).style.display="none";
	document.getElementById(idtext1).style.display="block";	
	}

function zhankai(){
	document.getElementById("znlicul").style.display="block";
	document.getElementById("tabbtnimg1").style.display="none";	
	document.getElementById("tabbtnimg2").style.display="block";	
	}
function yincang(){
	document.getElementById("znlicul").style.display="none";
    document.getElementById("tabbtnimg1").style.display="block";	
    document.getElementById("tabbtnimg2").style.display="none";	
	}

















// JavaScript Document
(function(){var c={id:"292e59550c458c0ef2ffd257f7f579f4",dm:["sxbdfyy.com"],etrk:[],js:"tongji.baidu.com/hm-web/js/",icon:'',br:false,ctrk:true,align:1,nv:-1,vdur:1800000,age:31536000000,se:[[1,'baidu.com','word|wd',1,'news,tieba,zhidao,mp3,image,video,hi,baike,wenku,open,jingyan'],[2,'google.com','q',0,'tbm=isch,tbm=vid,tbm=nws|source=newssearch,tbm=blg'],[3,'google.cn','q',0,''],[4,'sogou.com','query',1,'news,mp3,pic,v,zhishi,blogsearch'],[5,'zhongsou.com','w',1,'p,z,gouwu,bbs,mp3'],[6,'search.yahoo.com','p',1,'news,images,video'],[7,'one.cn.yahoo.com','p',1,'news,image,music'],[8,'soso.com','w',1,'image,video,music,sobar,wenwen,news,life,baike,blog'],[9,'114search.118114.cn','kw',0,''],[10,'search.live.com','q',0,''],[11,'youdao.com','q',1,'image,news,gouwu,mp3,video,blog,reader'],[12,'gougou.com','search',1,'movie,mp3,book,soft,game'],[13,'bing.com','q',2,'images,videos,news']]};var g=true,i=null;var j;function k(){if(!j)try{j=document.createElement("input"),j.type="hidden",j.style.display="none",j.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(j)}catch(a){return false}return g};function m(a,b){if(window.sessionStorage)try{window.sessionStorage.setItem(a,b)}catch(d){}}function n(a){return window.sessionStorage?window.sessionStorage.getItem(a):i};function o(a,b){var d=new Image,e="mini_tangram_log_"+Math.floor(Math.random()*2147483648).toString(36);window[e]=d;d.onload=d.onerror=d.onabort=function(){d.onload=d.onerror=d.onabort=i;d=window[e]=i;b&&b(a)};d.src=a};function p(a,b,d){a.attachEvent?a.attachEvent("on"+b,function(b){d.call(a,b)}):a.addEventListener&&a.addEventListener(b,d,false)};function q(a,b){var d=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return d?d[3]:i}function r(a){var b;return(b=(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):i,a=b)?a.replace(/:\d+$/,""):a};var s=/msie (\d+\.\d+)/i.test(navigator.userAgent),t=navigator.cookieEnabled,u=navigator.javaEnabled(),v=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"",w=window.screen.width+"x"+window.screen.height,x=window.screen.colorDepth;var y=["cpro.baidu.com"],z=0,A=(new Date).getTime(),B=window.location.protocol,C="cc,cf,ci,ck,cl,cm,cp,cw,ds,ep,et,fl,ja,ln,lo,lt,nv,rnd,sb,se,si,st,su,sw,sse,v,u".split(",");function D(){if(typeof window["_bdhm_loaded_"+c.id]=="undefined")window["_bdhm_loaded_"+c.id]=g,this.a={},this.b=[],this.k={},this.C()}
D.prototype={A:function(){var a="";try{external.twGetVersion(external.twGetSecurityID(window))&&external.twGetRunPath.toLowerCase().indexOf("360se")>-1&&(a=17)}catch(b){}return a},g:function(a,b){var a=a.replace(/:\d+/,""),b=b.replace(/:\d+/,""),d=a.indexOf(b);return d>-1&&d+b.length==a.length},l:function(a,b){a=a.replace(/^https?:\/\//,"");return a.indexOf(b)==0},d:function(a){for(var b=0;b<c.dm.length;b++)if(c.dm[b].indexOf("/")>-1){if(this.l(a,c.dm[b]))return g}else{var d=r(a);if(d&&this.g(d,c.dm[b]))return g}return false},
w:function(){for(var a=window.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.g(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},z:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(d.indexOf("/")>-1&&this.l(window.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$2")+"/"}return"/"},B:function(){if(document.referrer)for(var a=function(a){for(var b=0,d=a[3]==2?a[1]+"/":"",e=a[3]==1?"."+a[1]:"",a=a[4].split(","),f=0,H=a.length;f<H;f++)if(a[f]!==""&&RegExp(d+a[f]+
e).test(document.referrer)){b=f+1;break}return b},b=function(a){if(/google.(com|cn)/.test(document.referrer)&&/(%25[0-9a-fA-F]{2}){2}/.test(a))try{a=decodeURIComponent(a)}catch(b){}if(/sogou.com/.test(document.referrer)&&/%u[0-9a-fA-F]{4}/.test(a))try{a=unescape(a)}catch(d){}for(var e=0,f=y.length;e<f;e++)document.referrer.indexOf(y[e])>-1&&(a="");return a},d=0,e=c.se.length;d<e;d++){if(RegExp(c.se[d][1]).test(document.referrer)){var f=q(document.referrer,c.se[d][2]);if(f)return this.a.se=c.se[d][0],
this.a.sse=a(c.se[d]),this.a.sw=b(f),2}}else return A-z>c.vdur?1:4;a=false;return(a=this.d(document.referrer)&&this.d(window.location.href)?g:this.g(r(document.referrer)||"",window.location.hostname))?A-z>c.vdur?1:4:3},getData:function(a){try{var b,d=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie);if(!(b=d?d[2]:i)){var e;if(!(e=n(a)))a:{if(window.localStorage){var f=window.localStorage.getItem(a);if(f){var h=f.indexOf("|"),l=f.substring(0,h)-0;if(l&&l<(new Date).getTime()){e=f.substring(h+
1);break a}}}else if(k()){j.load(window.location.hostname);e=j.getAttribute(a);break a}e=i}b=e}return b}catch(G){}},setData:function(a,b,d){try{var e=this.w(),f=this.z(),h;d&&(h=new Date,h.setTime(h.getTime()+d));document.cookie=a+"="+b+(e?"; domain="+e:"")+(f?"; path="+f:"")+(h?"; expires="+h.toGMTString():"")+"";if(d){var l=new Date;l.setTime(l.getTime()+d||31536E6);if(window.localStorage){b=l.getTime()+"|"+b;try{window.localStorage.setItem(a,b)}catch(G){}}else if(k())j.expires=l.toUTCString(),
j.load(window.location.hostname),j.setAttribute(a,b),j.save(window.location.hostname)}else m(a,b)}catch(M){}},G:function(){var a,b,d,e;z=this.getData("Hm_lpvt_"+c.id)||0;b=this.B();a=b!=4?1:0;d=(d=this.getData("Hm_lvt_"+c.id))?Math.round((d-0)/1E3):"";this.setData("Hm_lvt_"+c.id,A,c.age);this.setData("Hm_lpvt_"+c.id,A);e=A==this.getData("Hm_lpvt_"+c.id)?"1":"0";if(c.nv==0&&this.d(window.location.href)&&(document.referrer==""||this.d(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=e;
this.a.lt=d},p:function(){for(var a=[],b=0,d=C.length;b<d;b++){var e=C[b],f=this.a[e];typeof f!="undefined"&&f!==""&&a.push(e+"="+encodeURIComponent(f))}return a.join("&")},H:function(){this.G();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=w;this.a.cl=x+"-bit";this.a.ln=v;this.a.ja=u?1:0;this.a.ck=t?1:0;this.a.lo=typeof _bdhm_top=="number"?1:0;var a=this.a,b="";if(navigator.plugins&&navigator.mimeTypes.length){var d=navigator.plugins["Shockwave Flash"];d&&d.description&&(b=d.description.replace(/^.*\s+(\S+)\s+\S+$/,
"$1"))}else if(window.ActiveXObject)try{if(d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b=d.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}a.fl=b;this.a.sb=this.A();this.a.v="svn: \u201c.\u201d\u4e0d\u662f\u5de5\u4f5c\u526f\u672c";a=window.location.href;this.a.cm=q(a,"hmmd")||"";this.a.cp=q(a,"hmpl")||"";this.a.cw=q(a,"hmkw")||"";this.a.ci=q(a,"hmci")||"";this.a.cf=q(a,"hmsr")||"";this.a.et=0;this.a.ep=""},C:function(){var a=this;try{a.H(),a.a.nv==0?a.F():
a.h(".*"),a.c(),a.q(),a.s(),a.j&&a.j(),a.i&&a.i(),a.f=new E,p(window,"beforeunload",a.D()),a.t(),window._hmt=a.k,a.k.push=function(){a.o.apply(a,arguments)}}catch(b){var d=[];d.push("si="+c.id);d.push("n="+encodeURIComponent(b.name));d.push("m="+encodeURIComponent(b.message));d.push("r="+encodeURIComponent(document.referrer));o(B+"//hm.baidu.com/hm.gif?"+d.join("&"))}},D:function(){var a=this;return function(){a.a.et=3;a.a.ep=(new Date).getTime()-a.f.m+","+((new Date).getTime()-a.f.e+a.f.n);a.c()}},
c:function(){var a=this;a.a.rnd=Math.round(Math.random()*2147483647);var b=B+"//hm.baidu.com/hm.gif?"+a.p();a.a.u?o(b):(a.r(b),o(b,function(b){a.h(b)}))},q:function(){if(c.icon!=""){var a,b=c.icon.split("|"),d="http://tongji.baidu.com/hm-web/welcome/ico?s="+c.id;a=(B=="http:"?"http://eiv":"https://bs")+".baidu.com"+b[0]+"."+b[1];switch(b[1]){case "swf":var e=b[2],b=b[3],d="s="+d,f="HolmesIcon"+A;a='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+f+'" width="'+e+'" height="'+b+'"><param name="movie" value="'+
a+'" /><param name="flashvars" value="'+d+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+f+'" width="'+e+'" height="'+b+'" src="'+a+'" flashvars="'+d+'" allowscriptaccess="always" /></object>';break;case "gif":a='<a href="'+d+'" target="_blank"><img border="0" src="'+a+'" width="'+b[2]+'" height="'+b[3]+'"></a>';break;default:a='<a href="'+d+'" target="_blank">'+b[0]+"</a>"}document.write(a)}},s:function(){var a=window.location.hash.substring(1),
b=RegExp(c.id),d=document.referrer.indexOf("baidu.com")>-1?g:false;a&&b.test(a)&&d&&(b=document.createElement("script"),b.setAttribute("type","text/javascript"),b.setAttribute("src",B+"//"+c.js+q(a,"jn")+"."+q(a,"sx")+"?"+this.a.rnd),a=document.getElementsByTagName("script")[0],a.parentNode.insertBefore(b,a))},o:function(a){if(a.length&&a.length>1&&a[0]=="_trackPageview"&&a[1].charAt&&a[1].charAt(0)=="/"){this.a.et=0;this.a.ep="";var b=this.a.u,d=this.a.su;this.a.u=B+"//"+window.location.host+a[1];
this.a.su=window.location.href;this.c();this.a.u=b;this.a.su=d}},t:function(){var a=window._hmt;if(a&&a.length&&a.shift)for(;a.length>0;)this.o(a.shift())},r:function(a){var b=n("Hm_unsent_"+c.id)||"",b=encodeURIComponent(a+"&u="+encodeURIComponent(window.location.href))+(b?","+b:"");m("Hm_unsent_"+c.id,b)},h:function(a){var b=n("Hm_unsent_"+c.id)||"";b&&((b=b.replace(RegExp(encodeURIComponent(a)+"(%26u%3D[^,]*)?,?","g"),"").replace(/,$/,""))?m("Hm_unsent_"+c.id,b):(a="Hm_unsent_"+c.id,window.sessionStorage&&
window.sessionStorage.removeItem(a)))},F:function(){var a=this,b=n("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),d=0,e=b.length;d<e;d++)o(decodeURIComponent(b[d]),function(b){a.h(b)})}};D.prototype.j=function(){p(document,"click",F(this));for(var a=c.etrk.length,b=0;b<a;b++){var d=c.etrk[b],e=document.getElementById(d.id);e&&p(e,d.eventType,I(this))}};
function I(a){return function(b){(b.target||b.srcElement).setAttribute("HM_fix",b.clientX+":"+b.clientY);a.a.et=1;a.a.ep="{id:"+this.id+",eventType:"+b.type+"}";a.c()}}
function F(a){return function(b){var d=b.target||b.srcElement,e=d.getAttribute("HM_fix"),f=b.clientX+":"+b.clientY;if(e&&e==f)d.removeAttribute("HM_fix");else if(e=c.etrk.length,e>0){for(f={};d&&d!=document.body;)d.id&&(f[d.id]=""),d=d.parentNode;for(d=0;d<e;d++){var h=c.etrk[d];if(f.hasOwnProperty(h.id))a.a.et=1,a.a.ep="{id:"+h.id+",eventType:"+b.type+"}",a.c()}}}}
D.prototype.i=function(){var a=this;c.ctrk&&(p(document,"mouseup",J(this)),p(window,"beforeunload",function(){K(a)}),setInterval(function(){K(a)},6E5))};
function J(a){return function(b){var d,e;s?(e=Math.max(document.documentElement.scrollTop,document.body.scrollTop),d=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),d=b.clientX+d,e=b.clientY+e):(d=b.pageX,e=b.pageY);var f=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:d-=f/2;break;case 2:d-=f}d="{x:"+d+",y:"+e+",";b=b.target||b.srcElement;if(b.tagName.toLowerCase()!="a")a:{for(e="A";(b=b.parentNode)&&b.nodeType==1;)if(b.tagName==
e)break a;b=i}d+=b?"t:a,u:"+encodeURIComponent(b.href)+"}":"t:b}";b=d;if(""!=b)d=(B+"//hm.baidu.com/hm.gif?"+a.p().replace(/ep=[^&]*/,"ep="+encodeURIComponent("["+b+"]"))).length,d+10>1024||(d+encodeURIComponent(a.b.join(",")+(a.b.length?",":"")).length+10>1024&&K(a),a.b.push(b),(a.b.length>=10||/t:a/.test(b))&&K(a))}}function K(a){if(a.b.length!=0)a.a.et=2,a.a.ep="["+a.b.join(",")+"]",a.c(),a.b=[]}
function E(){this.e=this.m=(new Date).getTime();this.n=0;typeof document.I=="object"?(p(document,"focusin",L(this)),p(document,"focusout",L(this))):(p(window,"focus",L(this)),p(window,"blur",L(this)))}function L(a){return function(b){if(!(b.target&&b.target!=window)){if(b.type=="blur"||b.type=="focusout")a.n+=(new Date).getTime()-a.e;a.e=(new Date).getTime()}}}new D;})();

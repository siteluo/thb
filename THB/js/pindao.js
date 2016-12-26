// JavaScript Document\
$(function(){
	//搜索类型焦点
	$('.askType li a').click(function(){
			$('.askType li a').removeClass('askTypeHover');
			$(this).addClass('askTypeHover');
		});
	//导航菜单
	$('.nav li .subNav').hide();
	$('.nav li a.tounav').hover(
	function(){
		$('.nav li a.tounav').removeClass('navHover');
		$(this).addClass('navHover');
		});
	$('.nav li').hover(function(){
		$(this).children('.subNav').fadeToggle(100);
		});

	//slider切换
	new Marquee(
{
	MSClassID : "JINGDONGBox",
	ContentID : "JINGDONGContentID",
	TabID	  : "JINGDONGNumID",
	Direction : 2,
	Step	  : 0.5,
	Width	  : 276,
	Height	  : 206,
	Timer	  : 20,
	DelayTime : 3000,
	WaitTime  : 0,
	ScrollStep: 276,
	SwitchType: 0,
	AutoStart : 1
})


	//选项卡切换
	;(function($){
	
$.fn.tabso=function( options ){

	var opts=$.extend({},$.fn.tabso.defaults,options );
	
	return this.each(function(i){
		var _this=$(this);
		var $menus=_this.children( opts.menuChildSel );
		var $container=$( opts.cntSelect ).eq(i);
		
		if( !$container) return;
		
		if( opts.tabStyle=="move"||opts.tabStyle=="move-fade"||opts.tabStyle=="move-animate" ){
			var step=0;
			if( opts.direction=="left"){
				step=$container.children().children( opts.cntChildSel ).outerWidth(true);
			}else{
				step=$container.children().children( opts.cntChildSel ).outerHeight(true);
			}
		}
		
		if( opts.tabStyle=="move-animate" ){ var animateArgu=new Object();	}
			
		$menus[ opts.tabEvent]( function(){
			var index=$menus.index( $(this) );
			$( this).addClass( opts.onStyle )
				.siblings().removeClass( opts.onStyle );
			switch( opts.tabStyle ){
				case "fade":
					if( !($container.children( opts.cntChildSel ).eq( index ).is(":animated")) ){
						$container.children( opts.cntChildSel ).eq( index ).siblings().css( "display", "none")
							.end().stop( true, true ).fadeIn( opts.aniSpeed );
					}
					break;
				case "move":
					$container.children( opts.cntChildSel ).css(opts.direction,-step*index+"px");
					break;
				case "move-fade":
					if( $container.children( opts.cntChildSel ).css(opts.direction)==-step*index+"px" ) break;
					$container.children( opts.cntChildSel ).stop(true).css("opacity",0).css(opts.direction,-step*index+"px").animate( {"opacity":1},opts.aniSpeed );
					break;
				case "move-animate":
					animateArgu[opts.direction]=-step*index+"px";
					$container.children( opts.cntChildSel ).stop(true).animate( animateArgu,opts.aniSpeed,opts.aniMethod );
					break;
				default:
					$container.children( opts.cntChildSel ).eq( index ).css( "display", "block")
						.siblings().css( "display","none" );
			}
	
		});
		
		$menus.eq(0)[ opts.tabEvent ]();
		
	});
};	

$.fn.tabso.defaults={
	cntSelect : ".content_wrap",
	tabEvent : "mouseover",
	tabStyle : "normal",
	direction : "top",
	aniMethod : "swing",
	aniSpeed : "fast",
	onStyle : "current",
	menuChildSel : "*",
	cntChildSel : "*"
};

})(jQuery);
	
$("#fadetab4").tabso({
		cntSelect:"#fadecon4",
		tabEvent:"mouseover",
		tabStyle:"fade"
	});

//图片鼠标放上效果透明度降低
$('img').not($('img.banner')).not($('img.logo')).hover(function(){
		$(this).css('opacity','0.8');
	},function(){
		$(this).css('opacity','1');
		})
//链接去除虚线
$('a').attr('hidefocus','true');
})
$(function(){
	$("#lb_ul").css("width",221*$("#lb_ul li").length)
	var lb_ul=document.getElementById("lb_ul");
	var lb=document.getElementById("lb");
	var n=-1;
	var move=setInterval(function(){
		
		if(-lb_ul.offsetLeft>=lb_ul.offsetWidth-lb.offsetWidth&&-lb_ul.offsetLeft<=lb_ul.offsetWidth-lb.offsetWidth){
			lb_ul.style.left=0;
		}else{
		lb_ul.style.left=lb_ul.offsetLeft-1+"px";
		}
	},20)
	$(".lb2_left").mouseover(function(){
		n=-1;
		clearInterval(move);
		move=setInterval(function(){
		if(-lb_ul.offsetLeft==lb_ul.offsetWidth-lb.offsetWidth){
			lb_ul.style.left=0;
		}else{
		lb_ul.style.left=lb_ul.offsetLeft-1+"px";
		}
	},20)
	})
	$(".lb2_left").mouseup(function(){
		clearInterval(move);
		move=setInterval(function(){
		if(-lb_ul.offsetLeft==lb_ul.offsetWidth-lb.offsetWidth){
			lb_ul.style.left=0;
		}else{
		lb_ul.style.left=lb_ul.offsetLeft-1+"px";
		}
	},20)
	})
	$(".lb2_left").mousedown(function(){
		n=-1;
		clearInterval(move);
		move=setInterval(function(){
		if(-lb_ul.offsetLeft==lb_ul.offsetWidth-lb.offsetWidth){
			lb_ul.style.left=0;
		}else{
		lb_ul.style.left=lb_ul.offsetLeft-1+"px";
		}
	},7)
	})
	$(".lb2_right").mouseover(function(){
		n=1;
		clearInterval(move);
		move=setInterval(function(){
		if(lb_ul.offsetLeft==0){
			lb_ul.style.left=-lb_ul.offsetWidth+lb.offsetWidth+"px";
		}else{
		lb_ul.style.left=lb_ul.offsetLeft+1+"px";
		}
	},20)
	})
	$(".lb2_right").mouseup(function(){
		n=1;
		clearInterval(move);
		move=setInterval(function(){
		if(lb_ul.offsetLeft==0){
			lb_ul.style.left=-lb_ul.offsetWidth+lb.offsetWidth+"px";
		}else{
		lb_ul.style.left=lb_ul.offsetLeft+1+"px";
		}
	},20)
	})
	$(".lb2_right").mousedown(function(){
		clearInterval(move);
		move=setInterval(function(){
		if(lb_ul.offsetLeft==0){
			lb_ul.style.left=-lb_ul.offsetWidth+lb.offsetWidth+"px";
		}else{
		lb_ul.style.left=lb_ul.offsetLeft+1+"px";
		}
	},7)
	})
	$("#lb_ul li").hover(function(){
		clearInterval(move);
	},function(){
		move=setInterval(function(){
		if(-lb_ul.offsetLeft==lb_ul.offsetWidth-lb.offsetWidth){
			lb_ul.style.left=-1+"px";
		}else if(lb_ul.offsetLeft==0){
			lb_ul.style.left=-lb_ul.offsetWidth+lb.offsetWidth+1+"px";
		}else{
			lb_ul.style.left=lb_ul.offsetLeft+n+"px";
		}
	},20)
	})
	
	
	//header部分JS
	$(".nav li").mouseover(function(){
		$(this).children(".div_a").slideDown("fast")
	})
	$(".nav li").mouseleave(function(){
		$(this).children(".div_a").slideUp("fast")
	})
	
	//微信显示
	$(".weixin").hover(function(){
		$("#ewm").css("display","block")
	},function(){
		$("#ewm").css("display","none")
	})
})
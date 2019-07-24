// WOW 시동
new WOW().init();

// tooltip 시동
$(".tooltip-bt").tooltip();

$(".fa-user").mouseover(function(){
	$(this).next().css({
		"opacity":1, "transform":"translateY(0)"
	});
});
$(".fa-user").mouseleave(function(){
	$(this).next().css({
		"opacity":0, "transform":"translateY(20px)"
	});
});

/* 
$(객체).animate(
	{애니메이션 될 css}, 
	[1000(속도)], 
	[timing func], 
	[function(){
		애니메이션 종료후 발생할 함수
	}]);
*/

// top Navigation
$(".navi").mouseenter(function(){
	$(this).children(".top-sub").css({"display":"flex"});
	$(this).children(".top-sub").stop().animate({
		"opacity": 1, "top": "30px"
	}, 700);
});
$(".navi").mouseleave(function(){
	$(this).children(".top-sub").stop().animate({
		"opacity": 0, "top": "60px"
	}, 400, function(){
		$(this).css({"display":"none"});
	});
});

// items
$(".item").mouseenter(function(){
	$(this).find("img").addClass("item-img-hover");
});
$(".item").mouseleave(function(){
	$(this).find("img").removeClass("item-img-hover");
});
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

// top Navigation
$(".navi").mouseenter(function(){
	$(this).children(".top-sub").css({
		"display": "flex",
		"opacity": 1,
		"transform": "translateY(0)"
	});
});
$(".navi").mouseleave(function(){
	$(this).children(".top-sub").css({
		"display": "none",
		"opacity": 0,
		"transform": "translateY(30px)"
	});
});
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
var items = [
	{
		src: "../img/ecofood_10_400x.png", 
		title: "Weight Loss", 
		desc: "A delicious and easy way to join a healthy diet and control your weight and well-being."
	},
	{
		src: "../img/ecofood_11_400x.png", 
		title: "Balanced Diet", 
		desc: "Tasty and easy way to join a healthy diet, control your weight and health."
	},
	{
		src: "../img/ecofood_12_400x.png", 
		title: "Sports Nutrition", 
		desc: "Active growth of muscle mass, relief formation, drying - choose your own mode."
	},
	{
		src: "../img/ecofood_13_400x.png", 
		title: "Food for Moms", 
		desc: "Nutrition program for women in position and breastfed women."
	},
	{
		src: "../img/ecofood_14_400x.png", 
		title: "Eco-Life", 
		desc: "Juices and smoothies, fruits and vegetables - all for a comfortable and tasty cleansing of the body (detox)."
	},
	{
		src: "../img/ecofood_15_400x.png", 
		title: "Without Meat", 
		desc: "Weight loss programs without animal products."
	}
];

for(var i=0, html=''; i<items.length; i++) {
	html  = '<ul class="item p-3 mb-4 col-sm-6 col-md-4">';
	html += '<li class="rounded-circle overflow-hidden">';
	html += '<img src="'+items[i].src+'" class="w-100"></li>';
	html += '<li class="mt-5 mb-3"><h4>'+items[i].title+'</h4></li>';
	html += '<li class="text-secondary">'+items[i].desc+'</li>';
	html += '</ul>';
	$(".items > .row").append(html);
}

$(".item").mouseenter(function(){
	$(this).find("img").addClass("item-img-hover");
});
$(".item").mouseleave(function(){
	$(this).find("img").removeClass("item-img-hover");
});


// ads
var ads = [
	{
		src: "../img/ecofood_02_x1024.png",
		title: "Vegans Foods",
		desc: "Nutrition program without animal products.",
		link: "https://naver.com",
		position: "left"
	},{
		src: "../img/ecofood_03_x1024.png",
		title: "Diabetic Nutrition",
		desc: "Maximum comfortable gradual weight loss<br>and the establishment of metabolic processes",
		link: "https://daum.net",
		position: "right"
	}
];

// for(var i=0; i<ads.length; i++) {
var html = '';
var adsNow = 0;
var adsEnd = ads.length - 1;
for(var i in ads) {
	html  = '<img src="'+ads[i].src+'" class="slogan-img w-100 position-absolute" style="top: 0; opacity: 0;">';
	html += '<div class="slogan-ads position-absolute pt-serif d-flex justify-content-center align-items-center w-50 h-100" style="top: 0; '+ads[i].position+': 0; z-index: 99; opacity: 0;">';
	html += '<ul>';
	html += '<li class="title">'+ads[i].title+'</li>';
	html += '<li class="desc">'+ads[i].desc+'</li>';
	html += '<li><a href="'+ads[i].link+'" class="btn btn-success">Discover Now!</a></li>';
	html += '</ul>';
	html += '</div>';
	$(".ads").append(html);
	$(".ads-pager").append('<span class="pointer">●</span>');
}

function adsAni() {
	$(".slogan-img").stop().animate({"opacity": 0}, 2000);
	$(".slogan-img").eq(adsNow).stop().animate({"opacity": 1}, 2000);
}

$(".ads-pager span").click(function(){
	adsNow = $(this).index();
	adsAni();
});

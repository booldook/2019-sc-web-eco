var adsNow = 0;

$(".pager span").click(function(){
	adsNow = $(this).index();
	adsAni();
});
function adsAni(){
	$(".ads-img").stop().animate({"opacity": 0}, 1000);
	$(".ads-img").eq(adsNow).stop().animate({"opacity": 1}, 1000);
	$(".ads-slogan").stop().animate({"top": "80%", "opacity": 0}, 1000);
	$(".ads-slogan").eq(adsNow).stop().animate({"top": "40%", "opacity": 1}, 1000);
}
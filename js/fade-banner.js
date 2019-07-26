var adsNow = 0;

$(".pager span").click(function(){
	adsNow = $(this).index();
	adsAni();
});
function adsAni(){
	$(".ads-img").stop().animate({"opacity": 0}, 2000);
	$(".ads-img").eq(adsNow).stop().animate({"opacity": 1}, 2000);
}
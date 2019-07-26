var adsNow = 0;
$(".pager span").click(adsAni);
function adsAni(){
	adsNow = $(this).index();
	$(".ads-img").stop().animate({"opacity": 0}, 2000);
	$(".ads-img").eq(adsNow).stop().animate({"opacity": 1}, 2000);
}
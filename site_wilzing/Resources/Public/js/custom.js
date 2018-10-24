$(".navbar .nav li.sub-menu").each(function() {
	$(this).children("a").after("<span class='arrow'></span>");
});
$(".navbar .nav li.sub-menu span").click(function(){
	if($(this).next("ul").is(":visible"))
	{
		$(this).next("ul").slideUp();
		$(this).removeClass("open");
	}
	else
	{
		$(".navbar .nav li ul").slideUp();
		$(".navbar .nav li.sub-menu span").removeClass("open");
		$(this).next("ul").slideDown();
		$(this).addClass("open");
	}
});

  var slideCount = $('.banner-slider > .item').length;
  var randomStart = Math.floor(Math.random() * slideCount);

$('.banner-slider').slick({
	initialSlide: randomStart,
  	dots: false,
  	infinite: true,
	slidesToShow: 1,
  	arrows:true,
  	fade: false,
  	autoplay: true,
  	autoplaySpeed: 3000,
  	prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa fa fa-angle-left"></i></button>',
	nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fa fa fa-angle-right"></i></button>',
});



$(".portfolio-box").each(function(){
	var cards = $(this).children('.fancybox');
 	var random = Math.floor(Math.random() * cards.length);
	cards.hide().eq(random).show();
});

$(document).ready(function(){

$("body,html").on('click' ,function(){
	$(".navbar-inverse .navbar-collapse").removeClass('in');

	});
$(".navbar-inverse .navbar-collapse").on('click' ,function(event){
	event.stopPropagation();
});
if ($(".fancybox").length){
	$('.fancybox').fancybox();
}
$(window).scroll(function(){
	if($(window).scrollTop() > 1)
	{
		$("#header").addClass("fiexd-header");
	}
	else
	{
		$("#header").removeClass("fiexd-header");
	}

});
});

$(document).ready( function() {
	$("[data-fancybox]").fancybox({
		loop    : true,
		infobar : false,
		closeClickOutside : true,
	});
});
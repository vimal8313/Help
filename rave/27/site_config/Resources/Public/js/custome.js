$(document).ready(function(e) {
   function banner(){
	var banner_bg = $("#banner").children("img").attr("src");
	$("#banner").css("background-image", "url(" + banner_bg + ")");
	var banner_bg = $("#banner").children("img").hide();
	var window_height = $(window).height();
	$("#banner").css("min-height", window_height);
	// $("#banner").children("video").css("min-height", window_height);
	$("#banner .inner_banner").css("height", window_height);
	var head_height = $("#main_header").height();
	$("#banner").css("margin-top", + - + head_height);
 };

var inputs = []
$('.history_page section').each(function(){
  inputs.push($(this).attr('id'))
})
var li = [];

for (var i = 0; i < inputs.length; i++) {
  var string = inputs[i];
  li[i] = ('<li><a href="#'+string+'" data-tab="'+string+'" class="trans"></a><span>'+string+'</span></li>');
}

var litag = li.join('');
var ultag ='<ul class="section_btn">'+litag+'</ul>';
$("section").last().after(ultag);
$('.section_btn li:first').addClass('active');

$('.home-section .video-play').click(function () {
   if ($(".media-video").get(0).paused) {
       $(".media-video").get(0).play();
   } else {
       $(".media-video").get(0).pause();
  }
});

 /*========= Responsive Menu ===========*/

 $(".toggle_menu a").click(function(e) {
    $("#main_header .inner_header .rightbar_head .custom_nav").fadeToggle();
	$("body").toggleClass("hidden_over");
	$("span.mobile").toggleClass("open");
	$("span.desktop").toggleClass("close");
});

 /*========= Responsive Menu ===========*/

  $("#fest_accrd .main_fesaccrd li h3.title").click(function() {
           if($(this).parent().hasClass('active')){
			   $(this).parent().removeClass("active");
         $(this).next().slideUp();
			   }
		else
		{
			$("#fest_accrd .main_fesaccrd li h3.title").parent().removeClass("active");
			$("#fest_accrd .main_fesaccrd li .cnt_accrd").slideUp();
			$(this).parent().addClass("active");
			$(this).next().slideDown();

		}
        });


/*============ Smooth Scrolling ==========*/

    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                window.location.hash = hash;
            });
        }
    });
    /*============ Smooth Scrolling ==========*/


/*========= Equale Height Function Here ========*/
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

/*========= Equale Height Function Here ========*/

 banner();
 equalheight('#festival .artists > ul > li .artist_block');
 equalheight('#info_list .inner_infolist li .infolist_box');

 $(window).resize(function(e) {
    banner();
	equalheight('#festival .artists > ul > li .artist_block');
	equalheight('#info_list .inner_infolist li .infolist_box');
});

});

$(document).ready(function() {
    if ($('#inner_proslider').children('.item').length <= 1) {
        $('#inner_proslider').addClass('homeOneSlide');
        var oneSlide = false;
    }
    else {
        $('#inner_proslider').removeClass('homeOneSlide');
        var oneSlide = true;
    }
    var owl = $('#inner_proslider').owlCarousel(
      {
          navigation: true,
          items: 1,
          loop: oneSlide,
          autoplay: true,
          autoplayTimeout: 8000,
          //navRewind: false,
          //nav: oneSlide,
          dots: oneSlide,
          autoplayHoverPause: true,
          smartSpeed:1800,
          autoplaySpeed:1800,
          navSpeed:1800,
          dotsSpeed:1800,
          dragEndSpeed:1800
          //  lazyLoad: true,

      });

    //var owl = $('.bannerSlide');
    //owl.owlCarousel();
    // Go to the next item
    $('.customNextBtn').click(function() {
      owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl.trigger('prev.owl.carousel');
    })

    // total slides count
    var i = 1, total = $('#inner_proslider .owl-dots div').length;
    $('#inner_proslider .owl-dot').each(function() {
        $(this).text(i);
        i++;
    });
    $('.total-slide').text(total);

    // current slide find
    owl.on('changed.owl.carousel', function(event) {
        var current = $('.owl-dot.active').text();
        $('.current-slide').text(current);
    });

$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('#main_header').addClass('fixed-header');

    }
    else {
        $('#main_header').removeClass('fixed-header');
    }

});

updatePaginationDot(); 
$('ul.section_btn li a').click(function(){
    $('#main_header').addClass('fixed-header');
    var tab_id = $(this).attr('data-tab');

    $('ul.section_btn li a').parent().removeClass('active');
    $('.section_year').removeClass('active-sec');

    $(this).parent().addClass('active');
    $("#"+tab_id).addClass('active-sec');

    updatePaginationDot()

})
function updatePaginationDot (){
  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //    $('nav').fadeIn("fast");
    //} else {
    //    $('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('.section_year').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('ul.section_btn li.active a').parent().removeClass('active');
            $('ul.section_btn li a').parent().eq(i).addClass('active');
    }
    });
}).scroll();
}

});



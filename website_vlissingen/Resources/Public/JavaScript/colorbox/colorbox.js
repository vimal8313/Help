jQuery.extend(jQuery.colorbox.settings, {
	current: "Afbeelding {current} van {total}",
	previous: "Vorige",
	next: "Volgende",
	close: "Sluiten",
	xhrError: "Deze inhoud kan niet geladen worden.",
	imgError: "Deze afbeelding kan niet geladen worden.",
	slideshowStart: "Diashow starten",
	slideshowStop: "Diashow stoppen"
});

jQuery(document).ready(function(){
	jQuery('a.colorbox').colorbox({
		maxWidth: '100%',
		maxHeight: '100%'
	});

	jQuery('a.lightbox-inline').colorbox({
		maxWidth: '100%',
		maxHeight: '100%'
	});

	jQuery('a.lightbox-eventsSingle').colorbox({
		maxWidth: '100%',
		maxHeight: '100%'
	});

	jQuery('a.fancybox').colorbox({
		height: '450px',
		onComplete:function(){
			$('#cboxLoadedContent').append('<div id="cboxDescription">' + $(this).children().attr('alt') + '</div>');
			$.colorbox.resize();
		}
	});

	jQuery('div.news-single-item div.news-single-img a').colorbox({
		maxWidth: '100%',
		maxHeight: '100%',
		opacity: 0.2,
		title:function () {
			return $(this).children().attr('alt');
		}
	});
});
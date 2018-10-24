$(function() {
	var labels = $('form.fce_form label[title]');
	$.each(labels, function() {
		if (this.title != '') {
			$(this).append(' <img src="typo3conf/ext/website_vlissingen/Resources/Public/Images/description.png" alt="" />');
			var image = $(this).find('img:last');
			image.attr('alt', this.title);
			image.attr('title', this.title);
			this.title = '';
		}
	});

	$('form.fce_form label img').tooltip({
		delay: 0,
		fade: 500,
		showURL: false
	});
});

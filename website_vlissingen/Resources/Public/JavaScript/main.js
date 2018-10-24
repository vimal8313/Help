$(function() {

	$('.content_inner div.main-text table tbody tr:odd').addClass('odd');
	$('.content_inner div.main-text table tbody tr:even').addClass('even');

	$('div.header-holder form.search-form input').focus(function() {
		if ($(this).val() == 'Typ hier uw zoekopdracht') {
			$(this).val('');
		}
	});

	$('div.header-holder form.search-form input').blur(function() {
		if ($(this).val() == '') {
			$(this).val('Typ hier uw zoekopdracht');
		}
	});

	$('#tx_windscsearch_keywords').focus(function() {
		if ($(this).val() == 'Zoeken') {
			$(this).val('');
		}
	});

	$('#tx_windscsearch_keywords').blur(function() {
		if ($(this).val() == '') {
			$(this).val('Zoeken');
		}
	});

	$('div#header div.header-frame ul.add-nav li.print a').click(function() {
		window.print();
		return false;
	});

	jQuery('ul#nav .drop a').focus(function() {
		jQuery(this).parents().eq(3).addClass('focus');
	});

	jQuery('ul#nav .drop a').blur(function() {
		jQuery(this).parents().eq(3).removeClass('focus');
	});

	var readspeaker = jQuery('div#header div.header-frame ul.add-nav li.readspeaker');
	jQuery('div#readspeaker_button1').hide();
	var readspeakerButton = jQuery('<div />', {
		text: 'Lees voor',
		click: function() {
			jQuery(this).hide();
			jQuery('div#readspeaker_button1').show();
			jQuery('div#readspeaker_button1 a.rsbtn_play span.rsplay').click();
		}
	});
	readspeakerButton.addClass('showReadspeaker');
	readspeaker.append(readspeakerButton);
});
$(function() {
	var pageMenu = '<div class="fceforms"><ul class="pagesmenu">';
	var childNumber = 1;
	$('form.fce_form div.formpages.formpages_processed .formpage').each(function() {
		if (!$(this).hasClass('subpage') || (childNumber == 1)) {
			var title = $(this).find('h2:first').text();
			pageMenu = pageMenu + '<li title="' + title + '"><span class="number">' + childNumber + '</span>' + title + '</li>';
			childNumber++;
		}
	});

	pageMenu = pageMenu + '<li title="Controleren" class="active"><span class="number">3</span>Controleren</li><li title="Afronden"><span class="number">4</span>Afronden</li></ul></div>'
	$('form.fce_form').before(pageMenu);

	jQuery('form.fce_form div.formpages.formpages_processed .formpage div.formfield.pair.text').each(function(){
		if ($(this).find('span.field').text() == '') {
			$(this).remove();
		}
	});

	var submitButton = jQuery('form.fce_form div.buttons input[type=submit]');
	var originalValue = submitButton.val();
	jQuery('select#tx_fceforms_pi1_check').change(function(){
		var confirmed = jQuery(this).val();
		if (confirmed == '0') {
			submitButton.val('Aanpassen');
		} else {
			submitButton.val(originalValue);
		}
	});
});
$(function() {
	// Add numbers to the menu items
	var pageMenu = jQuery('form.fce_form div.formpages ul.pagesmenu');
	var childNumber = 1;
	jQuery('form.fce_form div.formpages').prepend('<div class="notice">Velden met een <span class="required">*</span> zijn verplicht!</div>');

	// If the user is logged in then the loginpage isn't displayed. Subpage will become the first page.
	var firstElement = pageMenu.find('li:first-child');
	if (firstElement.hasClass('subpage')) {
		firstElement.removeClass('subpage');
	}

	pageMenu.find('li:not(.subpage)').each(function() {
		$(this).html('<span class="number">' + childNumber + '</span>' + $(this).text());
		childNumber++;
	});

	// Add extra steps
	pageMenu.append('<li title="Controleren" class="ignore"><span class="number">3</span>Controleren</li><li title="Afronden" class="ignore"><span class="number">4</span>Afronden</li>');

	// Add class activeParent to the parent of a subpage
	jQuery('form.fce_form div.pagesbuttons input[type=button]').click(function(){
		jQuery('form.fce_form div.formpages ul.pagesmenu li.activeParent').removeClass('activeParent');
		var activeChild = jQuery('form.fce_form div.formpages ul.pagesmenu li.subpage.active');
		if (activeChild.html() != null) {
			activeChild.prevAll('li:not(.subpage):first').addClass('activeParent');
		}
	});

	// Change the text on the buttons
	jQuery('form.fce_form div.formpages div.formpage').each(function(){
		var formpage = $(this);
		var previous = formpage.find('input.previousButtonText').val();
		var next = formpage.find('input.nextButtonText').val();

		if (previous != '') {
			formpage.find('.pagesbuttons input.previous').val(previous);
		}

		if (next != '') {
			formpage.find('.pagesbuttons input.next').val(next);
			formpage.find('.pagesbuttons input[type=submit]').val(next);
		}
	});

		// Hide pages that should be hidden in overview
	if (jQuery('form.fce_form div.overview').length > 0) {
		jQuery('form.fce_form div.formpages div.formpage.notinoverview').hide();
	}
});
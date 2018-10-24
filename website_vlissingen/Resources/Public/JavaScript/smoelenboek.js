jQuery(function() {
	
	if (jQuery('div.tx-windraadsmoelenboek-pi1').length != 0) {
		
		// Popup gegevens vullen.
		if (jQuery('div.tx-windraadsmoelenboek-pi1 .pi-popup').length != 0 && jQuery('div.tx-windraadsmoelenboek-pi1 .personal_info').length != 0) {
			jQuery('div.tx-windraadsmoelenboek-pi1 .pi-popup').html(jQuery('div.tx-windraadsmoelenboek-pi1 .personal_info').html());
			jQuery('div.tx-windraadsmoelenboek-pi1 .pi-popup .smoelenboek-popup').remove();
		}
		
		// Popup tonen.
		jQuery('.wiezitwaar-container a.showpopup').click(function(e) {
			jQuery('div.smoelenboek-popup').hide();
			containerWidth = jQuery('#container').width();
			popupWidth = jQuery('.wiezitwaar-popup').width();

			//jQuery('div.smoelenboek-popup').css('left', (containerWidth-popupWidth)/2 + 'px').show();
			jQuery('div.smoelenboek-popup').css('left', '10px').show();
			e.preventDefault();
			return false;
		});
		
		jQuery('.nevenfuncties a.showpopup').click(function(e) {
			jQuery('div.smoelenboek-popup').hide();
			containerWidth = jQuery('#container').width();
			popupWidth = jQuery('.nevenfuncties-popup').width();

			//jQuery('div.nevenfuncties-popup').css('left', (containerWidth-popupWidth)/2 + 'px').show();
			jQuery('div.nevenfuncties-popup').css('left', '10px').show();
			e.preventDefault();
			return false;
		});
		
		// Popup verbergen.
		jQuery('.smoelenboek-popup span.close').click(function(e) {
			jQuery('div.smoelenboek-popup').hide();
			e.preventDefault();
			return false;
		});
		
		// Overzicht link.
		jQuery('div.tx-windraadsmoelenboek-pi1 .overview tbody tr').click(function() {
			baseURL = "";
			
			if (jQuery('base').length != 0)
				baseURL = jQuery('base').attr('href');

			window.location = baseURL + jQuery('td.partijlidlink a', this).attr('href');
		});
		
		
		// Wie zit waar overzicht.
		jQuery('div.tx-windraadsmoelenboek-pi1 div.wiezitwaar .stoelen').hover(function() {
			if (jQuery('.userinfo', this).length != 0) {
				jQuery(this).addClass('active');
			}
		},
		function() {
			if (jQuery('.userinfo', this).length != 0) {
				jQuery(this).removeClass('active');
			}
		});
	}
});
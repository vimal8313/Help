jQuery(document).ready(function() {

	if (jQuery('.tx-windgooglemaps .selectfields select').length != 0) {

		var form = jQuery('form#windgooglemapssearch');

		jQuery('.selectfields select', form).prepend('<option value="" selected="selected"></option>');
		jQuery('.selectfields select', form).val('');
		jQuery('.buttons', form).hide();

		if (selectedField != '') {
			jQuery('.selectfields select[name="tx_windgooglemaps_windgooglemaps[' + selectedField + ']"] option[value="'+selectedValue+'"]', form).attr('selected', 'selected');
		}

		jQuery('select', form).change(function() {
			var changedSelectBox = jQuery(this).attr('name');
			var selectedValue = jQuery(this).val();

			jQuery('select option', form).removeAttr('selected');
			jQuery('select[name="'+changedSelectBox+'"] option[value="'+selectedValue+'"]', form).attr('selected', 'selected');

			jQuery(form).submit();
		});
	}
});
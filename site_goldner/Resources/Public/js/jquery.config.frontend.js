
/**
 * Hotel Goldner Anker- jQuery $(document).ready configuration
 */

$(document).ready(function() {

	//reset start parameter
	$('input.reset').val('');
	$('#action').val('');

}); //eof document ready


function offer_add(offer_id, category_id, gc_isgift) {
	$('#action-' + offer_id).val('offer_add');
	$('#offer_add' + offer_id).val('1');
	$('#offer_add_category' + offer_id).val(category_id);
	//$('#offer_add_gc_isgift' + offer_id).val(gc_isgift);
	$('#booking-' + offer_id).submit();
	return false;
}

function offer_delete(offerposition_id) {
	rules_remove();
	$('#action').val('offer_delete');
	$('#offer_delete' + offerposition_id).val('1');
	$('#booking').submit();
	return false;
}

function offer_choose_accomodation(offerposition_id, number_nights) {
	rules_remove();
	$('#action').val('offer_choose_accomodation');
	$('#offer_choose_accomodation' + offerposition_id).val('1');
	$('#offer_number_nights' + offerposition_id).val(number_nights);
	$('#booking').submit();
	return false;
}

function offer_delete_accomodation(offerposition_id, mode) {
	rules_remove();
	if (!mode) {
	 mode = 1;
	}
	$('#action').val('offer_delete_accomodation');
	$('#offer_delete_accomodation' + offerposition_id).val('1');
	if (mode == 1) {
	 $('#booking').submit();
	}
	return false;
}

function rules_remove() {
			$('#action').val('');

			//$('input.req, input.req-email').each(
			//	function(index) {
			//		$(this).rules("remove");
			//	}
			//);

}

/* typo3 default */
var browserName=navigator.appName;var browserVer=parseInt(navigator.appVersion);var version="";var msie4=(browserName=="Microsoft Internet Explorer"&&browserVer>=4);if((browserName=="Netscape"&&browserVer>=3)||msie4||browserName=="Konqueror"||browserName=="Opera"){version="n3";}else{version="n2";}
function blurLink(theObject){if(msie4){theObject.blur();}}
function decryptCharcode(n,start,end,offset){n=n+offset;if(offset>0&&n>end){n=start+(n-end-1);}else if(offset<0&&n<start){n=end-(start-n-1);}
return String.fromCharCode(n);}
function decryptString(enc,offset){var dec="";var len=enc.length;for(var i=0;i<len;i++){var n=enc.charCodeAt(i);if(n>=0x2B&&n<=0x3A){dec+=decryptCharcode(n,0x2B,0x3A,offset);}else if(n>=0x40&&n<=0x5A){dec+=decryptCharcode(n,0x40,0x5A,offset);}else if(n>=0x61&&n<=0x7A){dec+=decryptCharcode(n,0x61,0x7A,offset);}else{dec+=enc.charAt(i);}}
return dec;}
function linkTo_UnCryptMailto(s){location.href=decryptString(s,-2);}
/* eof typo3 default */
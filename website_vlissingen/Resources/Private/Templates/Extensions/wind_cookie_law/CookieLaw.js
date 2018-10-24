jQuery(function() {
	if (!readCookie('{cookiename}-cancel')) {
		jQuery('body').prepend(
			'<div id="cookie-outer" {stylingOuterDiv}>' +
				'<div id="cookie" {stylingCookieDiv}>' +
					'<p {stylingP}>{text}</p>' +
					'<input {stylingSubmit} type="submit" name="submitcookies" id="submit-cookies" value="{acceptText}"/>' +
					'<a href="#" {stylingCloseLink} id="cancel-cookie">{closeText}</a>' +
				'</div>' +
			'</div>'
		);
	}

	jQuery('#submit-cookies').click(function() {
		createCookie('{cookiename}', 1, {days});
		jQuery('#cookie-outer').remove();
		location.reload(true);
	});

	jQuery('#cancel-cookie').click(function() {
		createCookie('{cookiename}-cancel', 1);
		location.reload(true);
		return false;
	});
});

function createCookie(name, value, days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	}

	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1,c.length);
		}
		if (c.indexOf(nameEQ) == 0) {
			return c.substring(nameEQ.length,c.length);
		}
	}

	return null;
}
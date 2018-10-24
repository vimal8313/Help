jQuery(document).ready(function() {
	function setupLabel() {
		if ($('.label_check input').length) {
			$('.label_check').each(function(){
				$(this).removeClass('c_on');
			});
			$('.label_check input:checked').each(function(){
				$(this).parent('label').addClass('c_on');
			});
		};
		if ($('.label_radio input').length) {
			$('.label_radio').each(function(){
				$(this).removeClass('r_on');
			});
			$('.label_radio input:checked').each(function(){
				$(this).parent('label').addClass('r_on');
			});
		};
	};
	$('.label_check, .label_radio').click(function(){
		setupLabel();
	});
	setupLabel();
	$('#lostusername').prepend("Please enter your email address. You will receive a Username via email.<br><br>");
});

jQuery(document).ready(function(){
jQuery('.widefat').datepicker({
dateFormat : 'dd/m - yy'
});
});
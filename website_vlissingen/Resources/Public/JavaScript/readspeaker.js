$(function() {
	$('#readspeaker_button1 a').click(function(){
		var url;
		url = $(this).attr('href');
		readpage(url, 'rs_div');
		return false;
	});
});
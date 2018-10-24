jQuery.fn.crop = function() {
	this.each(function() {
		$(this).hide();
		description = $(this).text();

		if(description.length > 180){
			$(this).append('<a href="#" class="read">Lees minder</a>');
			description = description.substr(0,230);
			descriptionCroppedArray = description.split(' ');
			var descriptionCropped = '';
			for(i = 0; i < descriptionCroppedArray.length-1; i++){
				descriptionCropped += ' ' + descriptionCroppedArray[i];
			}
			descriptionCropped += '...';
		}
		else {
			descriptionCropped = description;
			$(this).show();
		}

		if (description.length > 180) {
			var parentEl = $(this).parent();
			parentEl.append('<div class="short-description">' + descriptionCropped + ' <a href="#" class="read">Lees meer</a></div>');

			parentEl.find('div.short-description a').click(function(){
				var parentEl = $(this).parent();
				parentEl.hide();
				parentEl.prev().show();

				return false;
			});
		}
		$('a.read', this).click(function(){
				var parentEl = $(this).parent();
				parentEl.hide();
				parentEl.next().show();
				return false;
			});
	});
}

plugin.tx_jkpoll_pi1 {
	pid = {$poll.id.pid}
	template = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/jk_poll/jk_poll.html
	type = 0
	factor = 1
	list = 0
	css_file = none
	answers_image_width = 300c
	answers_image_height = 300c
	show_zero_percent = 1
	check_ip = 0
	cookie = 60
	#check_ip_time = 48

	path_to_images = typo3conf/ext/website_vlissingen/Resources/Public/Images/
	color = green_vlissingen

	_LOCAL_LANG {
		nl {
			amount_novote_label = Geen stemmen
			amount_onevote_label = 1 stem
			amount_votes_label = stemmen
			submit_button = Stemmen
			submit_js_linktext = Stemmen
		}
	}
}
plugin.tx_windfaq_pi1 {
	templateFile = EXT:wind_faq/templates/index.html
	pid = {$faq.ids.pid}
	answer_stdWrap.parseFunc < tt_content.text.20.parseFunc
}

json = PAGE
json {
	typeNum = 1646
	10 < plugin.tx_windfaq_pi1

	config {
		disableAllHeaderCode = 1
		#additionalHeaders = Content-type:text/plain
		xhtml_cleaning = 0
		admPanel = 0
	}
}
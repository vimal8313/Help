page.includeCSS {
	general = EXT:website_vlissingen/Resources/Public/Css/general.css

	colorbox = EXT:website_vlissingen/Resources/Public/Css/colorbox.css
	print = EXT:website_vlissingen/Resources/Public/Css/print.css
	print.media = print

	jquery_ui = EXT:website_vlissingen/Resources/Public/Css/jquery-ui-1.8.2.custom.css
	fceforms = EXT:website_vlissingen/Resources/Public/Css/fceforms.css
	jquery_tooltip = EXT:website_vlissingen/Resources/Public/Css/jquery.tooltip.css

	wind_sc_search = EXT:website_vlissingen/Resources/Public/Css/ext/wind_sc_search.css
	wind_productcatalog = EXT:website_vlissingen/Resources/Public/Css/ext/wind_productcatalog.css
	wind_faq = EXT:website_vlissingen/Resources/Public/Css/ext/wind_faq.css
	wind_newslettersubscription = EXT:website_vlissingen/Resources/Public/Css/ext/wind_newslettersubscription.css
	wind_googlemaps = EXT:website_vlissingen/Resources/Public/Css/ext/wind_googlemaps.css
	wind_ecards = EXT:website_vlissingen/Resources/Public/Css/ext/wind_ecards.css
	wind_events = EXT:website_vlissingen/Resources/Public/Css/ext/wind_events.css
	yag = EXT:website_vlissingen/Resources/Public/Css/ext/yag.css
	wind_suggest = EXT:website_vlissingen/Resources/Public/Css/ext/wind_suggest.css
	tt_news = EXT:website_vlissingen/Resources/Public/Css/ext/tt_news.css
	wind_comments = EXT:website_vlissingen/Resources/Public/Css/ext/wind_comments.css
	wind_fontsize = EXT:website_vlissingen/Resources/Public/Css/ext/wind_fontsize.css
	wind_raadsmoelenboek = EXT:website_vlissingen/Resources/Public/Css/ext/wind_raadsmoelenboek.css
	ve_guestbook = EXT:website_vlissingen/Resources/Public/Css/ext/ve_guestbook.css
	wind_twitter = EXT:website_vlissingen/Resources/Public/Css/ext/wind_twitter.css
	jk_poll = EXT:website_vlissingen/Resources/Public/Css/ext/jk_poll.css
	wind_gbos_appointments = EXT:website_vlissingen/Resources/Public/Css/ext/wind_gbos_appointments.css
	wind_bekendmakingen = EXT:website_vlissingen/Resources/Public/Css/ext/wind_bekendmakingen.css
	wind_gvop = EXT:website_vlissingen/Resources/Public/Css/ext/wind_gvop.css

	results = EXT:website_vlissingen/Resources/Public/Css/solr_results.css
	pagebrowser = EXT:pagebrowse/res/styles_min.css
}

[browser = msie] && [version = <9]
page.includeCSS {
	ie_7 = EXT:website_vlissingen/Resources/Public/Css/ie7.css
}
[global]

[browser = msie] && [version = <8]
page.includeCSS {
	wind_googlemaps_ie7 = EXT:website_vlissingen/Resources/Public/Css/ext/wind_googlemaps_ie7.css
}
[global]

[browser = msie] && [version= <10]
page.includeCSS {
	general = EXT:website_vlissingen/Resources/Public/Css/general.css
	general.media = all
	mobile >
}
[global]

[browser = msie] && [version = <7]
page.includeCSS {
	fceforms_ie = typo3conf/ext/fceforms/templates/forms/fceforms_ie6.css
}
[global]

[globalVar = GP:print > 0]
page.includeCSS >
page.includeCSS {
	general = EXT:website_vlissingen/Resources/Public/Css/print.css
	fceforms = typo3conf/ext/fceforms/templates/forms/pdffceforms.css
}
[global]

[globalVar = TSFE:type = 70]
page.includeCSS {
	jquery_ui =
	fceforms = EXT:website_vlissingen/Resources/Public/Css/overviewfceforms.css
	jquery_tooltip =
}
[global]

[globalVar = TSFE:type = 70] && [browser = msie] && [version = <7]
page.includeCSS {
	fceforms_ie = typo3conf/ext/fceforms/templates/forms/overviewfceforms_ie6.css
}
[global]

[PIDinRootline = {$pages.uid.newsletter}]
page.includeCSS >
[global]

[PIDinRootline = {$pages.uid.kcc}]
page.includeCSS >
page.includeCSS {
	kcc = EXT:website_vlissingen/Resources/Public/Css/kcc.css
	wind_productcatalog = EXT:website_vlissingen/Resources/Public/Css/wind_productcatalog.css
	solr_results = EXT:website_vlissingen/Resources/Public/Css/solr_results.css
}
[global]

[PIDinRootline = {$pages.uid.orionis}]
page.includeCSS {
	general = EXT:website_vlissingen/Resources/Public/Css/orionis.css
}
[global]

[PIDinRootline = {$pages.uid.orionis-werkgevers}]
page.includeCSS {
	general = EXT:website_vlissingen/Resources/Public/Css/orionis.css
}
[global]
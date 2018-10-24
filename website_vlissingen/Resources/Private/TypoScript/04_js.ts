page.includeJSlibs {
	jquery = EXT:website_vlissingen/Resources/Public/JavaScript/jquery-1.12.1.min.js
	colorboxmin = EXT:website_vlissingen/Resources/Public/JavaScript/colorbox/jquery.colorbox-min.js
	jquery_ui =EXT:website_vlissingen/Resources/Public/JavaScript/jquery-ui.min.js
	jquerycrop = EXT:website_vlissingen/Resources/Public/JavaScript/jquery.crop.js
	jquerycrop.excludeFromConcatenation = 1
	jquerycrop.disableCompression = 1
	jquery_datepicker_nl = EXT:website_vlissingen/Resources/Public/JavaScript/jquery.ui.datepicker-nl.js
}

page.includeJS {
	colorbox = EXT:website_vlissingen/Resources/Public/JavaScript/colorbox/colorbox.js
	crop = EXT:website_vlissingen/Resources/Public/JavaScript/crop.js
	main = EXT:website_vlissingen/Resources/Public/JavaScript/main.js

	getanswer = typo3conf/ext/wind_faq/templates/getanswer.js

	jquery_formpages = EXT:website_vlissingen/Resources/Public/JavaScript/jquery.formpages.js
	fceforms = EXT:website_vlissingen/Resources/Public/JavaScript/fceforms.js
	formpages = typo3conf/ext/fceforms/templates/forms/formpages.js

	jquery_multiple = typo3conf/ext/fceforms/templates/forms/jquery.multiple.js
	multiple = typo3conf/ext/fceforms/templates/forms/multiple.js

	fceforms_extended = EXT:website_vlissingen/Resources/Public/JavaScript/fceforms_extended.js

	photocaroussel = EXT:website_vlissingen/Resources/Public/JavaScript/photocaroussel.js

	solr_suggest = EXT:website_vlissingen/Resources/Public/JavaScript/suggest.js
	ui.datepicker.nl = EXT:website_vlissingen/Resources/Public/JavaScript/jquery.ui.datepicker-nl.js
	suggest = EXT:solr/Resources/JavaScript/EidSuggest/suggest.js

	dateRangeHelper = EXT:solr/Resources/JavaScript/PiResults/date_range_facet.js
	numericRangeHelper = EXT:solr/Resources/JavaScript/PiResults/numeric_range_facet.js
}

[globalVar = _COOKIE | cookielaw_vlissingen=1]
## Display Piwik ##
page.headerData.1000 = TEXT
page.headerData.1000.value (
	<!-- Piwik -->
	<script type="text/javascript">
		var _paq = _paq || [];
		_paq.push(["setCookieDomain", "*.www.vlissingen.nl"]);
		_paq.push(['trackPageView']);
		_paq.push(['enableLinkTracking']);
		(function() {
			var u=(("https:" == document.location.protocol) ? "https" : "http") + "://www.vlissingen.nl/piwik/";
			_paq.push(['setTrackerUrl', u+'piwik.php']);
			_paq.push(['setSiteId', 1]);
			var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.type='text/javascript';
			g.defer=true; g.async=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
		})();
	</script>
	<!-- End Piwik Code -->
)

page.headerData.1001 = TEXT
page.headerData.1001.value (
	<!-- Begin GA -->
	<script type="text/javascript">
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-30565382-1']);
		_gaq.push(['_trackPageview']);

		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();

	</script>
	<!-- End GA -->
)

page.includeJSlibs {
	googlemaps = https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places
	googlemaps.external = 1
}

page.includeJS {
	readspeakerExternal = {$config.baseURL}typo3conf/ext/website_vlissingen/Resources/Public/JavaScript/ReadSpeaker.js?pids=embhl
	readspeakerExternal.external = 1
	readspeakerExternal.excludeFromConcatenation = 1
	readspeakerExternal.disableCompression = 1

	amberalert = https://www.vlissingen.nl/amberalert/FlashAlert_0x0.js
	amberalert.external = 1

	wind_googlemaps = EXT:website_vlissingen/Resources/Public/JavaScript/wind_googlemaps.js
}
[global]


page.headerData.1002 = TEXT
page.headerData.1002.value (
	<script type="text/javascript">
	/*<![CDATA[*/
		var tx_solr_suggestUrl = '/?eID=tx_solr_suggest&id={$pages.uid.search}';
	/*]]>*/
	</script>
	<script type="text/javascript">   var addthis_config = {      ui_language: "nl",      data_ga_property: 'UA-9346115-2'   };</script>
	<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js"></script>
)

[PIDinRootline = {$pages.uid.search}]
page.headerData.1003 = TEXT
page.headerData.1003.value (
	<script type="text/javascript">
	/*<![CDATA[*/
		var searchword = $('.tx-solr-search-form form #search-field').val();
		var _paq = _paq || [];
		_paq.push(['trackSiteSearch', searchword,]);
	/*]]>*/
	</script>
)
[global]

[globalVar = GP:print > 0]
page.includeJSlibs.jquery_ui =
page.includeJS {
	jquery_datepicker_nl =
	jquery_formpages = typo3conf/ext/fceforms/templates/forms/jquery.formpagesalt.js
	multiple = typo3conf/ext/fceforms/templates/forms/multiplealt.js
	jquery_tooltip =
	tooltip =
	fceforms =
}
[global]

[globalVar = TSFE:type = 70]
page.includeJS {
	jquery_formpages = typo3conf/ext/fceforms/templates/forms/jquery.formpagesalt.js
	multiple = typo3conf/ext/fceforms/templates/forms/multiplealt.js
	jquery_tooltip =
	tooltip =
	fceforms_confirm = EXT:website_vlissingen/Resources/Public/JavaScript/fceforms_confirm.js
}
[global]

[PIDinRootline = {$pages.uid.newsletter}]
page.includeJSlibs >
page.includeJS >
page.headerData.10 >
page.headerData.1000 >
page.headerData.1001 >
page.headerData.1002 >
[global]

[PIDinRootline = {$pages.uid.kcc}]
page.includeJSlibs >
page.includeJS >
page.headerData.10 >
page.headerData.1000 >
page.headerData.1001 >
page.headerData.1002 >

page.includeJSlibs {
	jquery = EXT:website_vlissingen/Resources/Public/JavaScript/jquery-1.12.1.min.js
}

page.includeJS {
	main = EXT:website_vlissingen/Resources/Public/JavaScript/main.js
}
[global]

[PIDinRootline = {$pages.uid.orionis}]
	page.includeJS {
		print =EXT:website_vlissingen/Resources/Public/JavaScript/orionis.js
	}
[global]

[PIDinRootline = {$pages.uid.orionis-werkgevers}]
	page.includeJS {
		print = EXT:website_vlissingen/Resources/Public/JavaScript/orionis.js
	}
[global]
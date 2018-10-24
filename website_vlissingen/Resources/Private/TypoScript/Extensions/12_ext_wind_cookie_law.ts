<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_cookie_law/Configuration/TypoScript/setup.txt">

plugin.tx_windcookielaw {
	settings {
		cookiename = cookielaw_vlissingen
		text = Om te kunnen volgen wat u en andere bezoekers belangrijk vinden, gebruikt vlissingen.nl cookies. Wilt u meer weten over <a href="privacy-statement.html">cookies?</a>
		stylingCloseLink =
		stylingOuterDiv =
		acceptText = Accepteren
		stylingCookieDiv =
		stylingSubmit =
		closeText = Niet accepteren
		templateRootPath = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_cookie_law/
	}
}

[globalVar = _COOKIE | cookielaw_vlissingen < 1] && [globalVar = _COOKIE | cookielaw-cancel < 1]
page.bodyTagCObject >
page.bodyTagCObject = TEXT
page.bodyTagCObject.value= cookielaw
page.bodyTagCObject.wrap = <body class="|">
[global]

[globalVar = tx_windlib|pageTO = 53]
plugin.tx_windcookielaw.settings.enabled = 0
page.bodyTagCObject >
[global]

[globalVar = tx_windlib|pageTO = 68]
plugin.tx_windcookielaw.settings.enabled = 0
page.bodyTagCObject >
[global]

[globalVar = tx_windlib|pageTO = 132]
plugin.tx_windcookielaw.settings.enabled = 0
page.bodyTagCObject >
[global]

[globalVar = tx_windlib|pageTO = 134]
plugin.tx_windcookielaw.settings.enabled = 0
page.bodyTagCObject >
[global]

[globalVar = tx_windlib|pageTO = 349]
plugin.tx_windcookielaw.settings.enabled = 0
page.bodyTagCObject >
[global]

[globalVar = GP:print > 0]
plugin.tx_windcookielaw.settings.enabled = 0
[global]
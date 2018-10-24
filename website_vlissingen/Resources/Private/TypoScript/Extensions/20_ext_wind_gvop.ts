<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_gvop/Configuration/TypoScript/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_gvop/Configuration/TypoScript/constants.txt">

page.includeJS {
	file1 <
	gvop = typo3conf/ext/website_vlissingen/Resources/Public/JavaScript/wind_gvop.js
}

plugin.tx_windgvop {
	view {
		templateRootPath = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_gvop/Templates/
	}

	persistence {
		storagePid = {$plugin.tx_windgvop.persistence.storagePid}
	}

	settings {
		detailPid = {$plugin.tx_windgvop.persistence.detailPid}
		user = vlissingen
		coordinate = 28794,386046
	}
}

[PIDinRootline = {$plugin.tx_windgvop.persistence.overviewPid}]
	page.bodyTag >
	page.bodyTagCObject = TEXT
	page.bodyTagCObject.value= full-width
	page.bodyTagCObject.wrap = <body class="|">
[end]


lib.returnLinkGVOP = TEXT
lib.returnLinkGVOP.value = Terug naar overzicht
lib.returnLinkGVOP.typolink {
	parameter = {$plugin.tx_windgvop.persistence.overviewPid}
	title = Terug naar overzicht
}
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_fontsize/Configuration/TypoScript/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_fontsize/Configuration/TypoScript/constants.txt">

plugin.tx_windfontsize {
	view {
		templateRootPath = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_fontsize/templates/
		layoutRootPath = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_fontsize/layouts/
	}
	settings {
		buttons.small.text = kleine letters
		buttons.normal.text = middelgrote letters
		buttons.large.text = grote letters
	}
}

page.bodyTagCObject >

[globalVar = _COOKIE | tx_windfontsize_cookie=large]
page.bodyTagCObject = TEXT
page.bodyTagCObject.value= large
page.bodyTagCObject.wrap = <body class="|">
[global]

[globalVar = _COOKIE | tx_windfontsize_cookie=small]
page.bodyTagCObject = TEXT
page.bodyTagCObject.value= small
page.bodyTagCObject.wrap = <body class="|">
[global]
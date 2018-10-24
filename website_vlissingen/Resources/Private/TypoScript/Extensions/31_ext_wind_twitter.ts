#<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_twitter/Configuration/TypoScript/setup.txt">

plugin.tx_windtwitter {
	view {
		partialRootPath = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_twitter/Partials/
		templateRootPath = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_twitter/Templates/
		layoutRootPath = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_twitter/Layouts/
	}
	settings {
		consumerKey = RX6TI3NMbyviP0ojviTbAA
		consumerSecret = CLBuJ8xcHpT4TNR74L9tuaj8g054t4ZFYXdFd8SygY
		accessToken = 201687072-cOwSv3fmaXXlZTMjAscZPYkgo5InCqeYmYcIFvga
		accessTokenSecret = 7omtaCHQJOfZYPVdHmGWsnJIUgJHM0tNFCZQioAVcEY
		screenName = gem_vlissingen
		includeTwitterJavaScript = 1
		enableTweetEntities = 1
	}
}
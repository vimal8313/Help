lib.skiptocontent_url = COA
lib.skiptocontent_url.10 = TEXT
lib.skiptocontent_url.10.typolink {
	parameter.data = TSFE:id
	parameter.insertData = 1
	section = skipcontent
	addQueryString = 1
	addQueryString.method = GET
	addQueryString.exclude = id
	returnLast=url
}

lib.skiptosearch = COA
lib.skiptosearch.10 = TEXT
lib.skiptosearch.10.typolink {
	parameter.data = TSFE:id
	parameter.insertData = 1
	section = skipsearch
	addQueryString = 1
	addQueryString.method = GET
	addQueryString.exclude = id
	returnLast=url
}

lib.skiptomainmenu = COA
lib.skiptomainmenu.10 = TEXT
lib.skiptomainmenu.10.typolink {
	parameter.data = TSFE:id
	parameter.insertData = 1
	section = skipnav
	addQueryString = 1
	addQueryString.method = GET
	addQueryString.exclude = id
	returnLast=url
}
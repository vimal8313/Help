lib.header = TEXT
lib.header {
	value = Gemeente Vlissingen
	typolink.parameter = {$pages.uid.home}
	typolink.returnLast = url
}

lib.pageurl = TEXT
lib.pageurl.typolink {
	parameter.data = TSFE:id
	returnLast = url
}
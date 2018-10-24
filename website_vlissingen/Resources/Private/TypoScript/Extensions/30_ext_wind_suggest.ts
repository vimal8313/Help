<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_suggest/static/general/setup.txt">

plugin.tx_windsuggest_pi1 {
	templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_suggest/wind_suggest.html
	pid = {$uids.pages.suggestFolder}
	orderBy = sorting
	limit = 0
}
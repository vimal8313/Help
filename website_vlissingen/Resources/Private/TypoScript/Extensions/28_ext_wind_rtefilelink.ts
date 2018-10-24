<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_rte_filelink/static/general/setup.txt">

tx_wind_rte_filelink {
	includeUploads = 0
	displayReadspeaker = 0
	displayFilesize {
		b = B
		kb = KB
		mb = MB
		stdWrap.wrap = (PDF,&nbsp;|)&nbsp;
		round = 0
		kbOnly = 1
		separator {
			thousand = .
		}
	}
}
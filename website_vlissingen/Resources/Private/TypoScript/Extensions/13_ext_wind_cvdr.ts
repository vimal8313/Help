<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_cvdr/static/general/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_cvdr/static/general/constants.txt">

plugin.tx_windcvdr_pi1 {
	urlBase = http://decentrale.regelgeving.overheid.nl/cvdr/XHTMLoutput/Historie/Vlissingen/
	listPid = {$uids.pages.verordeningenList}
	subjectListPid = {$uids.pages.subjectList}
}
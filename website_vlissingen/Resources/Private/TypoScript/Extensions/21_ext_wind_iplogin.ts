<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_iplogin/Configuration/TypoScript/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_iplogin/Configuration/TypoScript/constants.txt">

plugin.tx_windiplogin {
	persistence {
		storagePid = {$iplogin.users}
	}
	settings {
		userId = {$iplogin.userId}
		ipList = {$iplogin.ipList}
	}
}
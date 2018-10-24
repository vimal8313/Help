<?php
$extensionName = 'website_vlissingen';
$folder = 'typo3conf/ext/' . $extensionName . '/Resources/Private/Realurl/';

if (empty($GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/realurl/class.tx_realurl_autoconfgen.php']['extensionConfiguration'])) {
	$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/realurl/class.tx_realurl_autoconfgen.php']['extensionConfiguration'] = array();
}

$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/realurl/class.tx_realurl_autoconfgen.php']['extensionConfiguration'][] = $folder . 'realurl_default.php:tx_default_realurl_config->addConfig';

foreach(glob($folder . 'Extensions/*.php') as $path) {
	$pathInfo = pathinfo($path);
	// make sure the file is in the realurl folder
	if ($pathInfo['dirname'] === $folder . 'Extensions') {
		$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/realurl/class.tx_realurl_autoconfgen.php']['extensionConfiguration'][] = $path . ':tx_' . $pathInfo['filename'] . '_realurl_config->addConfig';
	}
}
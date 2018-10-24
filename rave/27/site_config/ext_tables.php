<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Site Config');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:'.$_EXTKEY.'/Configuration/PageTS/setup.txt">');

$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ElementBrowsers']['file_reference'] = "TYPO3\CMS\Recordlist\Browser\FileBrowser";

//\FluidTYPO3\Flux\Core::registerProviderExtensionKey('site_config', 'Content');
//\FluidTYPO3\Flux\Core::registerProviderExtensionKey('site_config', 'Page');

<?php
defined('TYPO3_MODE') or die();

$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['custom'] = 'EXT:site_config/Configuration/PageTS/RTE/Custom.yaml';

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript('site_config', 'constants', '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:'.$_EXTKEY.'/Configuration/TypoScript/Constant/constant.txt">');

// Add menu item to clear system cache for Development & Testing context
$context = \TYPO3\CMS\Core\Utility\GeneralUtility::getApplicationContext()->__toString();
if ($context === 'Development' || $context === 'Testing') {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('options.clearCache.system = 1');
}

// Modify flexform values
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_befunc.php']['getFlexFormDSClass'][$_EXTKEY] = 'TYPO3\\SiteConfig\\Hooks\\Backend\\BackendUtilityHook';

// Backend layouts
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['BackendLayoutDataProvider']['file'] = 'TYPO3\\SiteConfig\\View\\BackendLayout\\FileProvider';

unset($GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['typo3/template.php']['preStartPageHook']['TYPO3\\CMS\\T3skin\\Hook\\StyleGenerationHook']);

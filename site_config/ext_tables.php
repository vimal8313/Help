<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Site Config');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:'.$_EXTKEY.'/Configuration/PageTS/setup.txt">');

$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ElementBrowsers']['file_reference'] = "TYPO3\CMS\Recordlist\Browser\FileBrowser";

//\FluidTYPO3\Flux\Core::registerProviderExtensionKey('site_config', 'Content');
//\FluidTYPO3\Flux\Core::registerProviderExtensionKey('site_config', 'Page');

// new custom CE wizard entries for custom CE Teaser box(Themenbox)
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig( '
mod {
	wizards.newContentElement.wizardItems.header {
	    header = Modules Content
		elements {
			custom_hero_element {
				iconIdentifier = custom_hero_element
				title = LLL:EXT:site_config/Resources/Private/Language/Backend/Default.xlf:tt_content.CType.custom_hero_element
				description =
				tt_content_defValues {
					CType = custom_hero_element
				}
			}
		}
		show := addToList(custom_hero_element)
	}
}
');
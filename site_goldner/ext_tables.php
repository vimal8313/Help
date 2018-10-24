<?php
defined('TYPO3_MODE') or die();

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Site Goldner');
//\FluidTYPO3\Flux\Core::registerProviderExtensionKey('TYPO3.site_goldner', 'Content');

//\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages('tx_site_goldner_site_goldner_advantage');
<?php
defined('TYPO3_MODE') or die();

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Site Wilzing');
//\FluidTYPO3\Flux\Core::registerProviderExtensionKey('TYPO3.site_wilzing', 'Content');
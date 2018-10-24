<?php
if (!defined('TYPO3_MODE')) {
    die ('Access denied.');
}
//$GLOBALS['TCA']['fe_users']['ctrl']['type'] = 'tx_extbase_type';
/**
 * Add page TSConfig for the two new fields
 */
$tsConfig = 'tx_femanager.flexForm.new.addFieldOptions.categories = Categories' . PHP_EOL;
$tsConfig .= 'tx_femanager.flexForm.new.addFieldOptions.subtitle = Subtitle' . PHP_EOL;
$tsConfig .= 'tx_femanager.flexForm.new.addFieldOptions.county = County' . PHP_EOL;
$tsConfig .= 'tx_femanager.flexForm.edit < tx_femanager.flexForm.new';
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig($tsConfig);
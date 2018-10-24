<?php
defined('TYPO3_MODE') or die();

$GLOBALS['TCA']['tt_news']['columns']['endtime']['config']['size'] = 10;
$GLOBALS['TCA']['tt_news']['columns']['category']['config']['size'] = 3;
$GLOBALS['TCA']['tt_news']['columns']['category']['config']['autoSizeMax'] = 0;
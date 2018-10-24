<?php

defined('TYPO3_MODE') or die();

// Spry-Accordion
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Spry-Accordion',
		'fce_accordion',
		'Accordion-icon'
	],
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_accordion'] = [
	'showitem' => '
		--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
		--palette--;' . $frontendLanguageFilePrefix . 'palette.main;;main,nametabone;Name (Tab 1),pauschaletabone;Auswahl der Pauschale (Tab 1),nametabtwo;Name (Tab 2),pauschaletabtwo;Auswahl der Pauschale (Tab 2),nametabfour;Name (Tab 4),pauschaletabfour;Text (Tab 4)',

];

$GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['fce_accordion'] = 'Accordion-icon';

$tempColumns = array (
	'nametabone' => array(
		'label' => 'Name (Tab 1)',
		'exclude' => 1,
		'config' => array(
			'type' => 'text',
			'cols' => '40',
			'rows' => '1',
			'eval' => 'trim',
		),
	),
	'pauschaletabone' => array(
		'label' => 'Auswahl der Pauschale (Tab 1)',
		'exclude' => 1,
		'config' => array(
				'type' => 'select',
				'renderType' => 'selectSingle',
				'foreign_table' => 'tx_f4n_goldneranker_offers',
				'foreign_table_where' => 'AND tx_f4n_goldneranker_offers.pid="57" AND tx_f4n_goldneranker_offers.deleted=0 AND tx_f4n_goldneranker_offers.hidden=0 ORDER BY tx_f4n_goldneranker_offers.title',
				'maxitems' => 1,
			),
	),
	'nametabtwo' => array(
		'label' => 'Name (Tab 2)',
		'exclude' => 1,
		'config' => array(
			'type' => 'text',
			'cols' => '40',
			'rows' => '1',
			'eval' => 'trim',
		),
	),
	'pauschaletabtwo' => array(
		'label' => 'Auswahl der Pauschale (Tab 2)',
		'exclude' => 1,
		'config' => array(
				'type' => 'select',
				'renderType' => 'selectSingle',
				'foreign_table' => 'tx_f4n_goldneranker_offers',
				'foreign_table_where' => 'AND tx_f4n_goldneranker_offers.pid="58" AND tx_f4n_goldneranker_offers.deleted=0 AND tx_f4n_goldneranker_offers.hidden=0 ORDER BY tx_f4n_goldneranker_offers.title',
				'maxitems' => 1,
			),
	),
	'nametabfour' => array(
		'label' => 'Name (Tab 4)',
		'exclude' => 1,
		'config' => array(
			'type' => 'text',
			'cols' => '40',
			'rows' => '1',
			'eval' => 'trim',
		),
	),
	'pauschaletabfour' => array(
		'label' => 'Text (Tab 4)',
		'exclude' => 1,
		'config' => array(
			'type' => 'text',
			'cols' => '40',
			'rows' => '5',
			'eval' => 'trim',
		),
	),
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', $tempColumns);
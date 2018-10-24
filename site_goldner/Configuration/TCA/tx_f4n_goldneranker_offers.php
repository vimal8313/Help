<?php
if (!defined ('TYPO3_MODE')) {
	die ('Access denied.');
}

return array (
	'ctrl' => array (
		'title'     => 'LLL:EXT:f4n_goldneranker/locallang_db.xml:tx_f4n_goldneranker_offers',
		'label'     => 'title',
		'tstamp'    => 'tstamp',
		'crdate'    => 'crdate',
		'cruser_id' => 'cruser_id',
		'sortby'    => 'sorting',
		'languageField'            => 'sys_language_uid',
		'transOrigPointerField'    => 'l10n_parent',
		'transOrigDiffSourceField' => 'l10n_diffsource',
		'default_sortby' => 'ORDER BY sorting, title',
		'delete' => 'deleted',
		'enablecolumns' => array (
			'disabled' => 'hidden',
		),
		'iconfile'          => 'EXT:f4n_goldneranker/icon_tx_f4ngoldneranker_offers.gif',
	),
		'interface' => array (
		'showRecordFieldList' => 'sys_language_uid,l10n_parent,l10n_diffsource,hidden,title,is_twopeople,anzahl_uebernachtungen,offerbookingtexte,offerfeatures,categories,description,comment,image'
	),
	'columns' => array (
		'sys_language_uid' => array (
			'exclude' => 1,
			'label'  => 'LLL:EXT:lang/locallang_general.xml:LGL.language',
			'config' => array (
				'type'                => 'select',
				'foreign_table'       => 'sys_language',
				'foreign_table_where' => 'ORDER BY sys_language.title',
				'items' => array(
					array('LLL:EXT:lang/locallang_general.xml:LGL.allLanguages', -1),
					array('LLL:EXT:lang/locallang_general.xml:LGL.default_value', 0)
				)
			)
		),
		'l10n_parent' => array (
			'displayCond' => 'FIELD:sys_language_uid:>:0',
			'exclude'     => 1,
			'label'       => 'LLL:EXT:lang/locallang_general.xml:LGL.l18n_parent',
			'config'      => array (
				'type'  => 'select',
				'items' => array (
					array('', 0),
				),
				'foreign_table'       => 'tx_f4n_goldneranker_offers',
				'foreign_table_where' => 'AND tx_f4n_goldneranker_offers.pid=###CURRENT_PID### AND tx_f4n_goldneranker_offers.sys_language_uid IN (-1,0)',
			)
		),
		'l10n_diffsource' => array (
			'config' => array (
				'type' => 'passthrough'
			)
		),
		'hidden' => array (
			'exclude' => 1,
			'label'   => 'LLL:EXT:lang/locallang_general.xml:LGL.hidden',
			'config'  => array (
				'type'    => 'check',
				'default' => '0'
			)
		),
		'title' => array (
			'exclude' => 0,
			'label' => 'LLL:EXT:f4n_goldneranker/locallang_db.xml:tx_f4n_goldneranker_offers.title',
			'config' => array (
				'type' => 'input',
				'size' => '200',
				'eval' => 'required',
			)
		),
		/*'bookingnumber' => array (
			'exclude' => 0,
			'label' => 'LLL:EXT:f4n_goldneranker/locallang_db.xml:tx_f4n_goldneranker_offers.bookingnumber',
			'config' => array (
				'type' => 'input',
				'size' => '200',
				'eval' => 'required',
			)
		),*/
		'is_twopeople' => array (
			'exclude' => 1,
			'label' => 'LLL:EXT:f4n_goldneranker/locallang_db.xml:tx_f4n_goldneranker_offers.is_twopeople',
			'config'  => array (
				'type'    => 'check',
				'default' => '0'
			)
		),
		'anzahl_uebernachtungen' => array (
			'exclude' => 1,
			'label' => 'LLL:EXT:f4n_goldneranker/locallang_db.xml:tx_f4n_goldneranker_offers.anzahl_uebernachtungen',
			'config'  => array (
				'type'    => 'input',
				'size' => '200',
				'eval' => 'required',
			)
		),
		'offerbookingtexte' => array (
			'exclude' => 0,
			'label' => 'LLL:EXT:f4n_goldneranker/locallang_db.xml:tx_f4n_goldneranker_offers.offerbookingtexte',
			'config' => array (
				'type' => 'text',
				'cols' => '30',
				'rows' => '5',
				'wizards' => array(
					'_PADDING' => 2,
					'RTE' => array(
						'notNewRecords' => 1,
						'RTEonly'       => 1,
						'type'          => 'script',
						'title'         => 'Full screen Rich Text Editing|Formatteret redigering i hele vinduet',
						'icon'          => 'wizard_rte2.gif',
						'script'        => 'wizard_rte.php',
					),
				),
			)
		),
		'description' => array (
			'exclude' => 0,
			'label' => 'LLL:EXT:f4n_goldneranker/locallang_db.xml:tx_f4n_goldneranker_offers.description',
			'config' => array (
				'type' => 'text',
				'cols' => '30',
				'rows' => '5',
				'wizards' => array(
					'_PADDING' => 2,
					'RTE' => array(
						'notNewRecords' => 1,
						'RTEonly'       => 1,
						'type'          => 'script',
						'title'         => 'Full screen Rich Text Editing|Formatteret redigering i hele vinduet',
						'icon'          => 'wizard_rte2.gif',
						'script'        => 'wizard_rte.php',
					),
				),
			)
		),
		'comment' => array (
			'exclude' => 0,
			'label' => 'LLL:EXT:f4n_goldneranker/locallang_db.xml:tx_f4n_goldneranker_offers.comment',
			'config' => array (
				'type' => 'text',
				'cols' => '30',
				'rows' => '5',
				'wizards' => array(
					'_PADDING' => 2,
					'RTE' => array(
						'notNewRecords' => 1,
						'RTEonly'       => 1,
						'type'          => 'script',
						'title'         => 'Full screen Rich Text Editing|Formatteret redigering i hele vinduet',
						'icon'          => 'wizard_rte2.gif',
						'script'        => 'wizard_rte.php',
					),
				),
			)
		),
		"offerfeatures" => Array (
			'exclude' => 1,
			'label' => 'LLL:EXT:f4n_goldneranker/locallang_db.xml:tx_f4n_goldneranker_offers.offerfeatures',
			'config' => Array (
				"type" => "inline",
				"foreign_table" => "tx_f4n_goldneranker_offers_offerfeatures_rel",
				"foreign_field" => "offerid",
				"foreign_sortby" => "offersort",
				"foreign_label" => "offerfeatureid",
				'foreign_selector' => 'offerfeatureid',
				"maxitems" => 1000,
				'appearance' => array(
					'collapseAll' => 1,
					'expandSingle' => 1,
					'showSynchronizationLink' => 1,
					'showAllLocalizationLink' => 1,
					'showPossibleLocalizationRecords' => 1,
					'showRemovedLocalizationRecords' => 1,
				),
				'behaviour' => array(
					'localizationMode' => 'select',
					'localizeReferencesAtParentLocalization' => 1,
				),
			),
		),
		"categories" => Array (
			'exclude' => 1,
			'label' => 'LLL:EXT:f4n_goldneranker/locallang_db.xml:tx_f4n_goldneranker_offers.categories',
			'config' => Array (
				"type" => "inline",
				"foreign_table" => "tx_f4n_goldneranker_offers_categories_rel",
				"foreign_field" => "offerid",
				"foreign_sortby" => "offersort",
				"foreign_label" => "categoryid",
				'foreign_selector' => 'categoryid',
				"maxitems" => 1000,
				'appearance' => array(
					'collapseAll' => 1,
					'expandSingle' => 1,
					'showSynchronizationLink' => 1,
					'showAllLocalizationLink' => 1,
					'showPossibleLocalizationRecords' => 1,
					'showRemovedLocalizationRecords' => 1,
				),
				'behaviour' => array(
					'localizationMode' => 'select',
					'localizeReferencesAtParentLocalization' => 1,
				),
			),
		),
		'image' => array (
			'exclude' => 0,
			'label' => 'LLL:EXT:f4n_goldneranker/locallang_db.xml:tx_f4n_goldneranker_offers.image',
			'config' => array (
				'type' => 'group',
				'internal_type' => 'file',
				'allowed' => 'gif,png,jpeg,jpg',
				'max_size' => $GLOBALS['TYPO3_CONF_VARS']['BE']['maxFileSize'],
				'uploadfolder' => 'uploads/tx_f4ngoldneranker',
				'show_thumbs' => 1,
				'size' => 1,
				'minitems' => 0,
				'maxitems' => 1,
			)
		),

	),
	'types' => array (
		'0' => array('showitem' => 'sys_language_uid;;;;1-1-1, l10n_parent, l10n_diffsource, hidden;;1, title, is_twopeople, anzahl_uebernachtungen, offerbookingtexte;;;richtext[]:rte_transform[mode=ts], offerfeatures, categories, description;;;richtext[]:rte_transform[mode=ts], comment;;;richtext[]:rte_transform[mode=ts], image')
	),
	'palettes' => array (
		'1' => array('showitem' => '')
	)
);
?>
<?php
return array(
	'ctrl' => array(
		'label' => 'example_text',
		'sortby' => 'sorting',
		'tstamp' => 'tstamp',
		'crdate' => 'crdate',
		'cruser_id' => 'cruser_id',
		'title' => 'LLL:EXT:website_vlissingen/Resources/Private/Language/Backend.xlf:sidebarwidget',
		'delete' => 'deleted',
		'versioningWS' => 2,
		'versioning_followPages' => true,
		'origUid' => 't3_origuid',
		'hideAtCopy' => false,
		'prependAtCopy' => 'LLL:EXT:lang/locallang_general.xlf:LGL.prependAtCopy',
		'transOrigPointerField' => 'l10n_parent',
		'transOrigDiffSourceField' => 'l10n_diffsource',
		'languageField' => 'sys_language_uid',
		'dividers2tabs' => true,
		'iconfile' => 'EXT:website_vlissingen/Resources/Public/Icons/tx_website_vlissingen_sidebar_widget.png',
		'enablecolumns' => array(
			'disabled' => 'hidden',
			'starttime' => 'starttime',
			'endtime' => 'endtime',
		)
	),
	'interface' => array(
		'showRecordFieldList' => '
			hidden,
			uid_local,
			uid_foreign
		',
	),
	'types' => array(
		'1' => array(
			'showitem' => '
				--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general,
				uid_local,
				uid_foreign,
			--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.access,
				--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.visibility;visibility,
			'
		),
	),
	'palettes' => array(
		'access' => array(
			'showitem' => '
				starttime;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:starttime_formlabel,
				endtime;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:endtime_formlabel
			'
		),
		'header' => array(
			'showitem' => '
				header,
				header_layout,
			'
		),
		'general' => array(
			'showitem' => '
				tt_content,
				item_type;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:CType_formlabel,
			',
			'canNotCollapse' => 1
		),
		'visibility' => array(
			'showitem' => '
				hidden;LLL:EXT:website_vlissingen/Resources/Private/Language/Backend.xlf:sidebarwidget
			'
		),
	),
	'columns' => array(
		'uid_local' => array(
			'exclude' => 0,
			'label' => 'LLL:EXT:website_vlissingen/Resources/Private/Language/Backend.xlf:sidebarwidget.tt_content',
			'config' => array(
				'type' => 'select',
				'renderType' => 'selectSingle',
				'foreign_table' => 'tt_content',
				'foreign_table_where' => 'AND tt_content.pid=###CURRENT_PID### AND tt_content.CType="fce_twocolumns"',
				'maxitems' => 1,
			),
		),
		'uid_foreign' => array(
			'exclude' => 0,
			'label' => 'LLL:EXT:website_vlissingen/Resources/Private/Language/Backend.xlf:sidebarwidget.tt_content',
			'config' => array(
				'type' => 'select',
				'renderType' => 'selectSingle',
				'foreign_table' => 'tt_content',
				'foreign_table_where' => 'AND tt_content.pid=###CURRENT_PID### AND tt_content.CType="fce_twocolumns"',
				'maxitems' => 1,
			),
		),


		'l10n_diffsource' => array(
			'config' => array(
				'type' => 'passthrough'
			)
		),
	),
);
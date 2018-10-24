<?php
return array(
	'ctrl' => array(
		'label' => 'example_text',
		'sortby' => 'sorting',
		'tstamp' => 'tstamp',
		'crdate' => 'crdate',
		'cruser_id' => 'cruser_id',
		'title' => 'LLL:EXT:website_vlissingen/Resources/Private/Language/Backend.xlf:slideshow',
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
			tt_content,
			item_logo,
			item_link,
			item_titel,
			item_verberg,
			item_logo_alt_tekst
		',
	),
	'types' => array(
		'1' => array(
			'showitem' => '
				--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general,
				item_logo,
				item_link,
				item_titel,
				item_verberg,
				item_logo_alt_tekst,
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
				hidden;LLL:EXT:website_vlissingen/Resources/Private/Language/Backend.xlf:slideshow
			'
		),
	),
	'columns' => array(
		'tt_content' => array(
			'exclude' => 0,
			'label' => 'LLL:EXT:website_vlissingen/Resources/Private/Language/Backend.xlf:slideshow.tt_content',
			'config' => array(
				'type' => 'select',
				'renderType' => 'selectSingle',
				'foreign_table' => 'tt_content',
				'foreign_table_where' => 'AND tt_content.pid=###CURRENT_PID### AND tt_content.CType="fce_slideshow"',
				'maxitems' => 1,
			),
		),
		'hidden' => array(
			'exclude' => 1,
			'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.hidden',
			'config' => array(
				'type' => 'check',
				'items' => array(
					'1' => array(
						'0' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:hidden.I.0'
					)
				)
			)
		),
		'starttime' => array(
			'exclude' => 1,
			'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.starttime',
			'config' => array(
				'type' => 'input',
				'size' => '13',
				'max' => '20',
				'eval' => 'datetime',
				'default' => '0'
			),
			'l10n_mode' => 'exclude',
			'l10n_display' => 'defaultAsReadonly'
		),
		'endtime' => array(
			'exclude' => 1,
			'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.endtime',
			'config' => array(
				'type' => 'input',
				'size' => '13',
				'max' => '20',
				'eval' => 'datetime',
				'default' => '0',
				'range' => array(
					'upper' => mktime(0, 0, 0, 12, 31, 2020)
				)
			),
			'l10n_mode' => 'exclude',
			'l10n_display' => 'defaultAsReadonly'
		),
		'sys_language_uid' => array(
			'exclude' => 1,
			'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.language',
			'config' => array(
				'type' => 'select',
				'renderType' => 'selectSingle',
				'foreign_table' => 'sys_language',
				'foreign_table_where' => 'ORDER BY sys_language.title',
				'items' => array(
					array(
						'LLL:EXT:lang/locallang_general.xlf:LGL.allLanguages',
						-1
					),
					array(
						'LLL:EXT:lang/locallang_general.xlf:LGL.default_value',
						0
					)
				)
			)
		),
		'l10n_parent' => array(
			'displayCond' => 'FIELD:sys_language_uid:>:0',
			'exclude' => 1,
			'label' => 'LLL:EXT:lang/locallang_general.xlf:LGL.l18n_parent',
			'config' => array(
				'type' => 'select',
				'renderType' => 'selectSingle',
				'items' => array(
					array('', 0),
				),
				'foreign_table' => 'tx_website_vlissingen_slideshow',
				'foreign_table_where' => 'AND tx_website_vlissingen_slideshow.uid=###REC_FIELD_l10n_parent### AND tx_website_vlissingen_slideshow.sys_language_uid IN (-1,0)',
			)
		),
		'l10n_diffsource' => array(
			'config' => array(
				'type' => 'passthrough'
			)
		),
		'item_logo' => array(
			'exclude' => 1,
			'label' => 'LLL:EXT:website_vlissingen/Resources/Private/Language/Backend.xlf:slideshow.item_logo',
			'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig('images', array(
				'appearance' => array(
					'createNewRelationLinkTitle' => 'LLL:EXT:cms/locallang_ttc.xlf:images.addFileReference'
				),
				// custom configuration for displaying fields in the overlay/reference table
				// to use the imageoverlayPalette instead of the basicoverlayPalette
				'foreign_match_fields' => array(
					'fieldname' => 'images',
					'tablenames' => 'tx_website_vlissingen_slideshow',
					'table_local' => 'sys_file',
				),
				'foreign_types' => array(
					'0' => array(
						'showitem' => '
							--palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
							--palette--;;filePalette'
					),
					\TYPO3\CMS\Core\Resource\File::FILETYPE_IMAGE => array(
						'showitem' => '
							--palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
							--palette--;;filePalette'
					)
				)
			), $GLOBALS['TYPO3_CONF_VARS']['GFX']['imagefile_ext'])
		),
		'item_titel' => array(
			'exclude' => 0,
			'label' => 'LLL:EXT:website_vlissingen/Resources/Private/Language/Backend.xlf:slideshow.item_titel',
			'config' => array(
				'type' => 'input',
				'size' => 50,
				'eval' => 'trim'
			),
		),
		'item_link' => array(
			'exclude' => 0,
			'label' => 'Item Link',
			'config' => array(
				'type' => 'input',
				'size' => '30',
				'softref' => 'typolink',
				'wizards' => array(
					'_PADDING' => 2,
					'link' => array(
						 'type' => 'popup',
						 'title' => 'Link',
						 'icon' => 'link_popup.gif',
						 'module' => array(
							'name' => 'wizard_element_browser',
							'urlParameters' => array(
								'mode' => 'wizard'
							) ,
						 ) ,
						 'JSopenParams' => 'height=600,width=500,status=0,menubar=0,scrollbars=1'
					)
				)
			)
		),
		'item_verberg' => array(
			'exclude' => 0,
			'label' => 'LLL:EXT:website_vlissingen/Resources/Private/Language/Backend.xlf:slideshow.item_verberg',
			'config' => array(
				'type' => 'check',
				'default' => '0'
			),
		),
		'item_logo_alt_tekst' => array(
			'exclude' => 0,
			'label' => 'LLL:EXT:website_vlissingen/Resources/Private/Language/Backend.xlf:slideshow.item_logo_alt_tekst',
			'config' => array(
				'type' => 'input',
				'size' => 50,
				'eval' => 'trim'
			),
		),
	),
);
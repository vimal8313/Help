<?php
defined('TYPO3_MODE') or die();

$GLOBALS['TCA']['tt_content']['columns']['media']['config']['maxitems'] = 30;
$GLOBALS['TCA']['tt_content']['columns']['media']['config']['size'] = 30;

$frontendLanguageFilePrefix = 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:';


// Foto Block
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Foto Block',
		'fce_fotoblok',
		'sliders-icon'
	],
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_fotoblok'] = [
	'showitem' => '
		--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
		--palette--;' . $frontendLanguageFilePrefix . 'palette.headers;header,bodytext;Text,tx_website_vlissingen_foto_block,
	',
	'columnsOverrides' => ['bodytext' => ['defaultExtras' => 'richtext:rte_transform[mode=ts_css]']]
];

$GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['fce_fotoblok'] = 'sliders-icon';

$GLOBALS['TCA']['tt_content']['columns']['tx_website_vlissingen_foto_block'] = [
	'label' => $extensionLanguageFilePrefix . 'fotoblock',
	'config' => [
		'type' => 'inline',
		'foreign_table' => 'tx_website_vlissingen_foto_block',
		'foreign_field' => 'tt_content',
		'appearance' => [
			'useSortable' => true,
			'showSynchronizationLink' => true,
			'showAllLocalizationLink' => true,
			'showPossibleLocalizationRecords' => true,
			'showRemovedLocalizationRecords' => false,
			'expandSingle' => true,
			'enabledControls' => array(
				'localize' => true,
			),
		],
		'behaviour' => [
			'localizationMode' => 'select',
			'mode' => 'select',
			'localizeChildrenAtParentLocalization' => true,
		],
	],
];

// Sidebar Widget
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Sidebar Widget',
		'fce_sidebarwidget',
		'sliders-icon'
	],
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_sidebarwidget'] = [
	'showitem' => '
		--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
		--palette--;' . $frontendLanguageFilePrefix . 'palette.main;;main,header_link;More Link,tx_website_vlissingen_sidebar_widget',
		'columnsOverrides' => ['bodytext' => ['defaultExtras' => 'richtext:rte_transform[mode=ts_css]']]
];

$GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['fce_sidebarwidget'] = 'sliders-icon';

$GLOBALS['TCA']['tt_content']['columns']['tx_website_vlissingen_sidebar_widget'] = [
	'label' => $extensionLanguageFilePrefix . 'Sidebar Widget',
	'config' => [
		'type' => 'inline',
		'foreign_table' => 'tx_website_vlissingen_sidebar_widget',
		'foreign_field' => 'tt_content',
		'appearance' => [
			'useSortable' => true,
			'showSynchronizationLink' => true,
			'showAllLocalizationLink' => true,
			'showPossibleLocalizationRecords' => true,
			'showRemovedLocalizationRecords' => false,
			'expandSingle' => true,
			'enabledControls' => array(
				'localize' => true,
			),
		],
		'behaviour' => [
			'localizationMode' => 'select',
			'mode' => 'select',
			'localizeChildrenAtParentLocalization' => true,
		],
	],
];

// Slideshow
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Slideshow',
		'fce_slideshow',
		'sliders-icon'
	],
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_slideshow'] = [
	'showitem' => '
		--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
		--palette--;' . $frontendLanguageFilePrefix . 'palette.headers;header,bodytext;Description,openingstijden;Openingstijden,plattegrond;Plattegrond,alarmnummers;Alarmnummers,adresgegevens;Adresgegevens,tx_website_vlissingen_slideshow',
		'columnsOverrides' => ['bodytext' => ['defaultExtras' => 'richtext:rte_transform[mode=ts_css]']]
];

$GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['fce_slideshow'] = 'sliders-icon';

$GLOBALS['TCA']['tt_content']['columns']['tx_website_vlissingen_slideshow'] = [
	'label' => $extensionLanguageFilePrefix . 'Social Media Item',
	'config' => [
		'type' => 'inline',
		'foreign_table' => 'tx_website_vlissingen_slideshow',
		'foreign_field' => 'tt_content',
		'appearance' => [
			'useSortable' => true,
			'showSynchronizationLink' => true,
			'showAllLocalizationLink' => true,
			'showPossibleLocalizationRecords' => true,
			'showRemovedLocalizationRecords' => false,
			'expandSingle' => true,
			'enabledControls' => array(
				'localize' => true,
			),
		],
		'behaviour' => [
			'localizationMode' => 'select',
			'mode' => 'select',
			'localizeChildrenAtParentLocalization' => true,
		],
	],
];

$tempColumns = array (
	'openingstijden' => array(
		'label' => 'Openingstijden',
		'exclude' => 1,
		'config' => array(
			'type' => 'input',
			'size' => '50',
			'max' => '256',
			'eval' => 'trim',
			'wizards' => array(
				'_PADDING' => 2,
				'link' => array(
					'type' => 'popup',
					'title' => 'LLL:EXT:cms/locallang_ttc.xml:header_link_formlabel',
					'icon' => 'link_popup.gif',
					'script' => 'browse_links.php?mode=wizard',
					'JSopenParams' => 'height=300,width=500,status=0,menubar=0,scrollbars=1',
				),
			),
			'softref' => 'typolink',
		),
	),
	'plattegrond' => array(
		'label' => 'Plattegrond',
		'exclude' => 1,
		'config' => array(
			'type' => 'input',
			'size' => '50',
			'max' => '256',
			'eval' => 'trim',
			'wizards' => array(
				'_PADDING' => 2,
				'link' => array(
					'type' => 'popup',
					'title' => 'LLL:EXT:cms/locallang_ttc.xml:header_link_formlabel',
					'icon' => 'link_popup.gif',
					'script' => 'browse_links.php?mode=wizard',
					'JSopenParams' => 'height=300,width=500,status=0,menubar=0,scrollbars=1',
				),
			),
			'softref' => 'typolink',
		),
	),
	'alarmnummers' => array(
		'label' => 'Alarmnummers',
		'exclude' => 1,
		'config' => array(
			'type' => 'input',
			'size' => '50',
			'max' => '256',
			'eval' => 'trim',
			'wizards' => array(
				'_PADDING' => 2,
				'link' => array(
					'type' => 'popup',
					'title' => 'LLL:EXT:cms/locallang_ttc.xml:header_link_formlabel',
					'icon' => 'link_popup.gif',
					'script' => 'browse_links.php?mode=wizard',
					'JSopenParams' => 'height=300,width=500,status=0,menubar=0,scrollbars=1',
				),
			),
			'softref' => 'typolink',
		),
	),
	'adresgegevens' => array(
		'label' => 'Adresgegevens',
		'exclude' => 1,
		'config' => array(
			'type' => 'text',
			'cols' => 40,
			'rows' => 6
		 ),
		'defaultExtras' => 'richtext[]'
	),
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', $tempColumns);

// Footer Kolom
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Footer Kolom',
		'fce_footerkolom',
		'sliders-icon'
	],
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_footerkolom'] = [
	'showitem' => '
		--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
		--palette--;' . $frontendLanguageFilePrefix . 'palette.headers;header,bodytext;Description,tx_website_vlissingen_footer_kolom',
		'columnsOverrides' => ['bodytext' => ['defaultExtras' => 'richtext:rte_transform[mode=ts_css]']]
];

$GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['fce_footerkolom'] = 'sliders-icon';

$GLOBALS['TCA']['tt_content']['columns']['tx_website_vlissingen_footer_kolom'] = [
	'label' => $extensionLanguageFilePrefix . 'Footer Kolom',
	'config' => [
		'type' => 'inline',
		'foreign_table' => 'tx_website_vlissingen_footer_kolom',
		'foreign_field' => 'tt_content',
		'appearance' => [
			'useSortable' => true,
			'showSynchronizationLink' => true,
			'showAllLocalizationLink' => true,
			'showPossibleLocalizationRecords' => true,
			'showRemovedLocalizationRecords' => false,
			'expandSingle' => true,
			'enabledControls' => array(
				'localize' => true,
			),
		],
		'behaviour' => [
			'localizationMode' => 'select',
			'mode' => 'select',
			'localizeChildrenAtParentLocalization' => true,
		],
	],
];

// Newsletter Text block (70/30 with image)
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Newsletter Text block (70/30 with image)',
		'fce_newslettertextblock7030',
		'sliders-icon'
	],
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_newslettertextblock7030'] = [
	'showitem' => '
		--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
		--palette--;' . $frontendLanguageFilePrefix . 'palette.main;;main,header;Header,bodytext;Text;;richtext:rte_transform[mode=ts_css],image;Afbeelding,
	',
];

// Newsletter Text block (70/30)
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Newsletter Text block (70/30)',
		'fce_newsletterblock7030',
		'sliders-icon'
	],
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_newsletterblock7030'] = [
	'showitem' => '
		--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
		--palette--;' . $frontendLanguageFilePrefix . 'palette.main;;main,header;Header,bodytext;Text;;richtext:rte_transform[mode=ts_css],
	',
];

// Newsletter Block List
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Newsletter Block List',
		'fce_newsletterblocklist',
		'sliders-icon'
	],
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_newsletterblocklist'] = [
	'showitem' => '
		--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
		--palette--;' . $frontendLanguageFilePrefix . 'palette.headers;header,button_title;Lijst Titel,tx_website_vlissingen_newsletter_linklist',
		'columnsOverrides' => ['bodytext' => ['defaultExtras' => 'richtext:rte_transform[mode=ts_css]']]
];

$GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['fce_newsletterblocklist'] = 'sliders-icon';

$GLOBALS['TCA']['tt_content']['columns']['tx_website_vlissingen_newsletter_linklist'] = [
	'label' => $extensionLanguageFilePrefix . 'Newsletter Block List',
	'config' => [
		'type' => 'inline',
		'foreign_table' => 'tx_website_vlissingen_newsletter_linklist',
		'foreign_field' => 'tt_content',
		'appearance' => [
			'useSortable' => true,
			'showSynchronizationLink' => true,
			'showAllLocalizationLink' => true,
			'showPossibleLocalizationRecords' => true,
			'showRemovedLocalizationRecords' => false,
			'expandSingle' => true,
			'enabledControls' => array(
				'localize' => true,
			),
		],
		'behaviour' => [
			'localizationMode' => 'select',
			'mode' => 'select',
			'localizeChildrenAtParentLocalization' => true,
		],
	],
];

$tempColumns = array (
	'button_title' => array(
		'label' => 'Button tekst',
		'config' => array (
			'type' => 'input',
			'size' => 30,
			'eval' => 'trim',
		)
	),
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', $tempColumns);

// Newsletter Text block (with image)
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Newsletter Text block (with image)',
		'fce_newslettertextblock'
	],
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_newslettertextblock'] = [
	'showitem' => '
		--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
		--palette--;' . $frontendLanguageFilePrefix . 'palette.main;;main,header;Header,header_link;Link,date;Date,bodytext;Text;;richtext:rte_transform[mode=ts_css],image;Afbeelding,
	',
];

// Newsletter Text block
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Newsletter Text block',
		'fce_newsletterblock'
	],
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_newsletterblock'] = [
	'showitem' => '
		--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
		--palette--;' . $frontendLanguageFilePrefix . 'palette.main;;main,header;Header,header_link;Link,date;Date,bodytext;Text;;richtext:rte_transform[mode=ts_css],
	',
];

// Header
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Header',
		'fce_header'
	],
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_header'] = [
	'showitem' => '
		--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
		--palette--;' . $frontendLanguageFilePrefix . 'palette.main;;main,header;Header,
	',
];

// Events
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Events',
		'fce_events',
		'sliders-icon'
	],
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_events'] = [
	'showitem' => '
		--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
		--palette--;' . $frontendLanguageFilePrefix . 'palette.headers;header,button_title; Titel,tx_website_vlissingen_events'
];

$GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['fce_events'] = 'sliders-icon';

$GLOBALS['TCA']['tt_content']['columns']['tx_website_vlissingen_events'] = [
	'label' => $extensionLanguageFilePrefix . 'Events',
	'config' => [
		'type' => 'inline',
		'foreign_table' => 'tx_website_vlissingen_events',
		'foreign_field' => 'tt_content',
		'appearance' => [
			'useSortable' => true,
			'showSynchronizationLink' => true,
			'showAllLocalizationLink' => true,
			'showPossibleLocalizationRecords' => true,
			'showRemovedLocalizationRecords' => false,
			'expandSingle' => true,
			'enabledControls' => array(
				'localize' => true,
			),
		],
		'behaviour' => [
			'localizationMode' => 'select',
			'mode' => 'select',
			'localizeChildrenAtParentLocalization' => true,
		],
	],
];

// 2 columns (no line)
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	array(
		'2 columns (no line)',
		'fce_twocolumnsnoline'
	),
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_twocolumnsnoline'] = array(
	'showitem' => '--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
	--palette--;' . $frontendLanguageFilePrefix .
	'palette.main;;main,field_section_left;Linkerkolom,field_section_right;Rechterkolom'
);

$tempColumns = array (
	'line_below' => array(
		'label' => 'LLL:EXT:cms/locallang_ttc.xml:records',
			'config' => array(
				'type' => 'select',
				'items' => array(
					array('Met lijn', 0),
					array('Zonder lijn', 1),
				)
		),
	),

	'field_section_left' => array(
		'label' => 'LLL:EXT:cms/locallang_ttc.xml:records',
			'config' => array(
				'type' => 'group',
				'foreign_table' => 'tt_content',
				'MM' => 'tx_website_vlissingen_section_left_mm',
				'internal_type' => 'db',
				'allowed' => 'tt_content',
				'size' => '5',
				'maxitems' => '200',
				'minitems' => '0',
				'multiple' => 0,
				'show_thumbs' => '1',
				'wizards' => array(
					'suggest' => array(
						'type' => 'suggest',
				),
			),
		),
	),
	'field_section_right' => array(
		'label' => 'LLL:EXT:cms/locallang_ttc.xml:records',
			'config' => array(
				'type' => 'group',
				'foreign_table' => 'tt_content',
				'MM' => 'tx_website_vlissingen_section_right_mm',
				'internal_type' => 'db',
				'allowed' => 'tt_content',
				'size' => '5',
				'maxitems' => '200',
				'minitems' => '0',
				'multiple' => 0,
				'show_thumbs' => '1',
				'wizards' => array(
					'suggest' => array(
						'type' => 'suggest',
				),
			),
		),
	),
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', $tempColumns);

// 2 columns (small block)
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	array(
		'2 columns (small block)',
		'fce_twocolumnssmallblock'
	),
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_twocolumnssmallblock'] = array(
	'showitem' => '--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
	--palette--;' . $frontendLanguageFilePrefix .
	'palette.main;;main,field_section_left;Linkerkolom,field_section_right;Rechterkolom,line_below;Lijn onder'
);

// 2 columns
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	array(
		'2 columns',
		'fce_twocolumns'
	),
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_twocolumns'] = array(
	'showitem' => '--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
	--palette--;' . $frontendLanguageFilePrefix .
	'palette.main;;main,field_section_left;Linkerkolom,field_section_right;Rechterkolom,line_below;Lijn onder'
);

// Tekst
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Tekst',
		'fce_tekst',
		'sliders-icon'
	],
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_tekst'] = [
	'showitem' => '
		--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
		--palette--;' . $frontendLanguageFilePrefix . 'palette.main;;main,header;Header,header_link;Link,bodytext;Text;;richtext:rte_transform[mode=ts_css],image;Afbeelding,
	',
];

// link list
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'link list',
		'fce_linklijst',
		'sliders-icon'
	],
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_linklijst'] = [
	'showitem' => '
		--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
		--palette--;' . $frontendLanguageFilePrefix . 'palette.headers;header,button_title;Container Titel,tx_website_vlissingen_linklist_item',
		'columnsOverrides' => ['bodytext' => ['defaultExtras' => 'richtext:rte_transform[mode=ts_css]']]
];

$GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['fce_linklijst'] = 'sliders-icon';

$GLOBALS['TCA']['tt_content']['columns']['tx_website_vlissingen_linklist_item'] = [
	'label' => $extensionLanguageFilePrefix . 'link list',
	'config' => [
		'type' => 'inline',
		'foreign_table' => 'tx_website_vlissingen_linklist_item',
		'foreign_field' => 'tt_content',
		'appearance' => [
			'useSortable' => true,
			'showSynchronizationLink' => true,
			'showAllLocalizationLink' => true,
			'showPossibleLocalizationRecords' => true,
			'showRemovedLocalizationRecords' => false,
			'expandSingle' => true,
			'enabledControls' => array(
				'localize' => true,
			),
		],
		'behaviour' => [
			'localizationMode' => 'select',
			'mode' => 'select',
			'localizeChildrenAtParentLocalization' => true,
		],
	],
];

// Home slide show
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Home Slide Show',
		'fce_homeslideshow',
		'sliders-icon'
	],
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_homeslideshow'] = [
	'showitem' => '
		--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
		--palette--;' . $frontendLanguageFilePrefix . 'palette.headers;header,bodytext;Text,tx_website_vlissingen_slider_item,
	',
	'columnsOverrides' => ['bodytext' => ['defaultExtras' => 'richtext:rte_transform[mode=ts_css]']]
];

$GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['fce_homeslideshow'] = 'sliders-icon';

$GLOBALS['TCA']['tt_content']['columns']['tx_website_vlissingen_slider_item'] = [
	'label' => $extensionLanguageFilePrefix . 'carousel',
	'config' => [
		'type' => 'inline',
		'foreign_table' => 'tx_website_vlissingen_slider_item',
		'foreign_field' => 'tt_content',
		'appearance' => [
			'useSortable' => true,
			'showSynchronizationLink' => true,
			'showAllLocalizationLink' => true,
			'showPossibleLocalizationRecords' => true,
			'showRemovedLocalizationRecords' => false,
			'expandSingle' => true,
			'enabledControls' => array(
				'localize' => true,
			),
		],
		'behaviour' => [
			'localizationMode' => 'select',
			'mode' => 'select',
			'localizeChildrenAtParentLocalization' => true,
		],
	],
];

// Nieuwsbrief 1 kol Datum
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Nieuwsbrief 1 kol Datum',
		'fce_nieuwsbriefkol'
	],
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_nieuwsbriefkol'] = [
	'showitem' => '--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
		--palette--;' . $frontendLanguageFilePrefix .
		'palette.main;;main,header;Datum,image;Afbeelding,subheader;Titel,bodytext;Koptekst
	',
];

// Nieuwsbrief 1 kol Orionis
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Nieuwsbrief 1 kol Orionis',
		'fce_nieuwsbriefkolorio'
	],
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_nieuwsbriefkolorio'] = [
	'showitem' => '--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
		--palette--;' . $frontendLanguageFilePrefix .
		'palette.main;;main,header;Datum,image;Afbeelding,subheader;Titel,bodytext;Inleiding
	',
];

// Video Container
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	array(
		'Video Container',
		'fce_videocontainer'
	),
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_videocontainer'] = array(
	'showitem' => '--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
	--palette--;' . $frontendLanguageFilePrefix .
	'palette.main;;main,groen_blok;Groen blok,paars_blok;Paars blok,video_blok;Video blok'
);

$tempColumns = array (
	'groen_blok' => array(
		'label' => 'LLL:EXT:cms/locallang_ttc.xml:records',
			'config' => array(
				'type' => 'group',
				'foreign_table' => 'tt_content',
				'MM' => 'tx_website_vlissingen_groen_blok_mm',
				'internal_type' => 'db',
				'allowed' => 'tt_content',
				'size' => '5',
				'maxitems' => '200',
				'minitems' => '0',
				'multiple' => 0,
				'show_thumbs' => '1',
				'wizards' => array(
					'suggest' => array(
						'type' => 'suggest',
				),
			),
		),
	),
	'paars_blok' => array(
		'label' => 'LLL:EXT:cms/locallang_ttc.xml:records',
			'config' => array(
				'type' => 'group',
				'foreign_table' => 'tt_content',
				'MM' => 'tx_website_vlissingen_paars_blok_mm',
				'internal_type' => 'db',
				'allowed' => 'tt_content',
				'size' => '5',
				'maxitems' => '200',
				'minitems' => '0',
				'multiple' => 0,
				'show_thumbs' => '1',
				'wizards' => array(
					'suggest' => array(
						'type' => 'suggest',
				),
			),
		),
	),
	'video_blok' => array(
		'label' => 'LLL:EXT:cms/locallang_ttc.xml:records',
			'config' => array(
				'type' => 'group',
				'foreign_table' => 'tt_content',
				'MM' => 'tx_website_vlissingen_video_blok_mm',
				'internal_type' => 'db',
				'allowed' => 'tt_content',
				'size' => '5',
				'maxitems' => '200',
				'minitems' => '0',
				'multiple' => 0,
				'show_thumbs' => '1',
				'wizards' => array(
					'suggest' => array(
						'type' => 'suggest',
				),
			),
		),
	),
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', $tempColumns);

// Pdc Totaaloverzicht
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	array(
		'Pdc Totaaloverzicht',
		'fce_pdctotaaloverzicht'
	),
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_pdctotaaloverzicht'] = array(
	'showitem' => '--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
	--palette--;' . $frontendLanguageFilePrefix .
	'palette.main;;headers'
);

//  Nieuwsbrief Scheidingsteken
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
	'tt_content',
	'CType',
	[
		'Nieuwsbrief Scheidingsteken',
		'fce_nieuwsbriefscheidingsteken',
		'sliders-icon'
	],
	'textmedia',
	'after'
);

$GLOBALS['TCA']['tt_content']['types']['fce_nieuwsbriefscheidingsteken'] = [
	'showitem' => '
		--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
		--palette--;' . $frontendLanguageFilePrefix . 'palette.main;;main,
	',
];
<?php

$GLOBALS['TCA']['fe_users']['ctrl']['type'] = 'tx_extbase_type';
$tmpFeUsersColumns = [
    'categories' => [
            'exclude' => true,
            'label' => 'LLL:EXT:femanagerextended/Resources/Private/Language/locallang_db.xlf:' .
            'tx_femanagerextended_domain_model_user.category',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectMultipleSideBySide',
                'foreign_table' => 'tx_companydir_domain_model_category',
                'MM' => 'tx_companydir_domain_model_category_fe_users_mm',
                'size' => 10,
                'autoSizeMax' => 30,
                'minitems' => 1,
                'maxitems' => 9999,

                'wizards' => [
                    '_PADDING' => 1,
                    '_VERTICAL' => 1,
                    'edit' => [
                        'module' => [
                            'name' => 'wizard_edit',
                        ],
                        'type' => 'popup',
                        'title' => 'Edit', // todo define label: LLL:EXT:.../Resources/Private/Language/locallang_tca.xlf:wizard.edit
                        'icon' => 'EXT:backend/Resources/Public/Images/FormFieldWizard/wizard_edit.gif',
                        'popup_onlyOpenIfSelected' => 1,
                        'JSopenParams' => 'height=350,width=580,status=0,menubar=0,scrollbars=1',
                    ],
                    'add' => [
                        'module' => [
                            'name' => 'wizard_add',
                        ],
                        'type' => 'script',
                        'title' => 'Create new', // todo define label: LLL:EXT:.../Resources/Private/Language/locallang_tca.xlf:wizard.add
                        'icon' => 'EXT:backend/Resources/Public/Images/FormFieldWizard/wizard_add.gif',
                        'params' => [
                            'table' => 'tx_companydir_domain_model_category',
                            'pid' => '###CURRENT_PID###',
                            'setValue' => 'prepend'
                        ],
                    ],
                ],
            ],
        ],
    'subtitle' => [
        'exclude' => 1,
        'label' => 'LLL:EXT:femanagerextended/Resources/Private/Language/locallang_db.xlf:' .
            'tx_femanagerextended_domain_model_user.subtitle',
        'config' => [
            'type' => 'input',
            'size' => 30,
            'eval' => 'trim'
        ],
    ],
    'county' => [
        'exclude' => 1,
        'label' => 'LLL:EXT:femanagerextended/Resources/Private/Language/locallang_db.xlf:' .
            'tx_femanagerextended_domain_model_user.county',
        'config' => [
            'type' => 'select',
            'renderType' => 'selectSingle',
            'items' => [
                [ 'Select', 0 ],

            ],
            'foreign_table' => 'tx_companydir_domain_model_county',
        ],
    ],
    'tx_extbase_type' => [
        'config' => [
            'type' => 'input',
            'default' => '0'
        ]
    ]
];

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('fe_users', $tmpFeUsersColumns, true);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('fe_users', 'categories, subtitle, county');

<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function()
    {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'GRCR.Companydir',
            'Companydir',
            'Company Dir'
        );

        $pluginSignature = str_replace('_', '', 'companydir') . '_companydir';
        $GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist'][$pluginSignature] = 'pi_flexform';
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue($pluginSignature, 'FILE:EXT:companydir/Configuration/FlexForms/flexform_companydir.xml');

        if (TYPO3_MODE === 'BE') {

            \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerModule(
            'GRCR.Companydir',
            'web', // Make module a submodule of 'web'
            'ImportExport', // Submodule key
            '', // Position
            [
                'Category' => 'list,importexport',

            ],
            [
                'access' => 'user,group',
                'icon'   => 'EXT:companydir/Resources/Public/Icons/user_mod_import.svg',
                'labels' => 'LLL:EXT:companydir/Resources/Private/Language/locallang.xlf',
            ]
            );

        }

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('companydir', 'Configuration/TypoScript', 'Company Dir');

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr('tx_companydir_domain_model_category', 'EXT:companydir/Resources/Private/Language/locallang_csh_tx_companydir_domain_model_category.xlf');
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages('tx_companydir_domain_model_category');

    }
);

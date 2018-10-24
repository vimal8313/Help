<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function()
    {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'GRCR.Companydir',
            'Companydir',
            [
                'Category' => 'categorylist, companylist, show, search, searchlist'
            ],
            // non-cacheable actions
            [
                'Category' => 'categorylist, companylist, show, search, searchlist'
            ]
        );

    // wizards
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
        'mod {
            wizards.newContentElement.wizardItems.plugins {
                elements {
                    companydir {
                        iconIdentifier = companydir-plugin-companydir
                        title = LLL:EXT:companydir/Resources/Private/Language/locallang_db.xlf:tx_companydir_companydir.name
                        description = LLL:EXT:companydir/Resources/Private/Language/locallang_db.xlf:tx_companydir_companydir.description
                        tt_content_defValues {
                            CType = list
                            list_type = companydir_companydir
                        }
                    }
                }
                show = *
            }
       }'
    );
		$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);

			$iconRegistry->registerIcon(
				'companydir-plugin-companydir',
				\TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
				['source' => 'EXT:companydir/Resources/Public/Icons/user_plugin_companydir.svg']
			);

    }
);

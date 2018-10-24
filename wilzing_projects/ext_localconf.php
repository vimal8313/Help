<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function()
    {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'Wilzingprojects.WilzingProjects',
            'Projectlist',
            [
                'Projects' => 'list,show'
            ],
            // non-cacheable actions
            [
                'Projects' => 'list,show'
            ]
        );
        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'Wilzingprojects.WilzingProjects',
            'Projectslider',
            [
                'Projects' => 'slider'
            ],
            // non-cacheable actions
            [
                'Projects' => 'slider'
            ]
        );

    // wizards
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
        'mod {
            wizards.newContentElement.wizardItems.plugins {
                elements {
                    projectlist {
                        iconIdentifier = wilzing_projects-plugin-projectlist
                        title = LLL:EXT:wilzing_projects/Resources/Private/Language/locallang_db.xlf:tx_wilzing_projects_projectlist.name
                        description = LLL:EXT:wilzing_projects/Resources/Private/Language/locallang_db.xlf:tx_wilzing_projects_projectlist.description
                        tt_content_defValues {
                            CType = list
                            list_type = wilzingprojects_projectlist
                        }
                    }
                }
                show = *
            }
       }'
    );
		$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);

			$iconRegistry->registerIcon(
				'wilzing_projects-plugin-projectlist',
				\TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
				['source' => 'EXT:wilzing_projects/Resources/Public/Icons/user_plugin_projectlist.svg']
			);

    }
);

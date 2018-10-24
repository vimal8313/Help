<?php
namespace TYPO3\SiteGoldner\ViewHelpers;

/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Fluid\Core\Rendering\RenderingContextInterface;
use TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper;
use TYPO3\CMS\Fluid\Core\ViewHelper\Facets\CompilableInterface;

/**
 * @author Benjamin Kott <info@bk2k.info>
 */
class DataRelationViewHelper extends AbstractViewHelper implements CompilableInterface {

    /**
     * NOTE: This property has been introduced via code migration to ensure backwards-compatibility.
     * @see AbstractViewHelper::isOutputEscapingEnabled()
     * @var boolean
     */
    protected $escapeOutput = FALSE;

    /**
     * Render
     *
     * @param int $uid
     * @param string $table
     * @param string $foreignField
     * @param string $selectFields
     * @param string $as
     * @param string $sortby
     * @param string $additionalWhere
     * @return string
     */
    public function render($uid, $table, $foreignField = 'tt_content', $selectFields = '*', $as = 'items', $sortby = 'sorting ASC', $additionalWhere = '') {

        return self::renderStatic(
            array(
                'uid' => $uid,
                'table' => $table,
                'foreignField' => $foreignField,
                'selectFields' => $selectFields,
                'as' => $as,
                'sortby' => $sortby,
                'additionalWhere' => $additionalWhere
            ),
            $this->buildRenderChildrenClosure(),
            $this->renderingContext
        );
    }

    /**
     * @param array $arguments
     * @param \Closure $renderChildrenClosure
     * @param RenderingContextInterface $renderingContext
     * @return string
     */
    public static function renderStatic(array $arguments,\Closure $renderChildrenClosure,RenderingContextInterface $renderingContext) {
        $templateVariableContainer = $renderingContext->getTemplateVariableContainer();
        if ($arguments['uid'] !== null && $arguments['table'] !== null) {
            $cObj = GeneralUtility::makeInstance('TYPO3\\CMS\\Frontend\\ContentObject\\ContentObjectRenderer');
            $whereClause = '1 AND `' . $arguments['foreignField'] . '` = \'' . $arguments['uid'] . '\' ' . $arguments['additionalWhere'] . $cObj->enableFields($arguments['table']);
            $groupBy = '';
            $limit = '';
            $GLOBALS['TYPO3_DB']->store_lastBuiltQuery = 1;
            $data = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows(
                $arguments['selectFields'],
                $arguments['table'],
                $whereClause,
                $groupBy,
                $arguments['sortby'],
                $limit
            );
            $items = array();
            foreach ($data as $record) {
                $GLOBALS['TSFE']->sys_page->versionOL($arguments['table'], $record);
                if (is_array($record)) {
                    $items[] = $GLOBALS['TSFE']->sys_page->getRecordOverlay(
                        $arguments['table'],
                        $record,
                        $GLOBALS['TSFE']->sys_language_uid
                    );
                }
            }
            usort($items, array(self, 'orderBySorting'));
        } else {
            $items = null;
        }
        $templateVariableContainer->add($arguments['as'], $items);
        $content = $renderChildrenClosure();
        $templateVariableContainer->remove($arguments['as']);
        return $content;
    }

    /**
     * @param array $a
     * @param array $b
     * @return string
     */
    public static function orderBySorting($a, $b) {
        return $a['sorting'] > $b['sorting'];
    }
}

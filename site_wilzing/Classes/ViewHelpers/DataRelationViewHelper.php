<?php
namespace TYPO3\SiteWilzing\ViewHelpers;

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
use TYPO3\CMS\Extbase\Service\FlexFormService;

/**
 * @author Benjamin Kott <info@bk2k.info>
 */
class DataRelationViewHelper extends AbstractViewHelper implements CompilableInterface
{


    /**
     * @param array $row
     * @return array
     */
    protected function render(array $row)
    {
        $options = [];
        $flexFormService = GeneralUtility::makeInstance(FlexFormService::class);
        $flexFormAsArray = $flexFormService->convertFlexFormContentToArray($row['pi_flexform']);
        return $flexFormAsArray;
    }
}

<?php
namespace TYPO3\SiteConfig\ViewHelpers;

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

class FalViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {

	/**
	 * @var \TYPO3\CMS\Core\Resource\FileRepository
	 * @inject
	 */
	protected $fileRepository;

	/**
	 * Find FileReference objects by relation to other records
	 *
	 * @param int $uid The UID of the related record (needs to be the localized uid, as translated IRRE elements relate to them)
	 * @param string $as The alias to use for the found files
	 * @param string $tableName Table name of the related record
	 * @param string $fieldName Field name of the related record
	 *
	 * @return string The render template
	 */
	public function render($uid, $as = 'objects', $tableName = 'tt_content', $fieldName = 'image') {
		$filesFromRepository = $this->fileRepository->findByRelation($tableName, $fieldName, $uid);
		$this->templateVariableContainer->add($as, $filesFromRepository);
		$content = $this->renderChildren();
		$this->templateVariableContainer->remove($as);

		return $content;
	}
}
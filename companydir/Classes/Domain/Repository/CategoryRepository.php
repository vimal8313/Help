<?php
namespace GRCR\Companydir\Domain\Repository;

/***
 *
 * This file is part of the "Company Dir" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *  (c) 2018
 *
 ***/

/**
 * The repository for Categories
 */
class CategoryRepository extends \TYPO3\CMS\Extbase\Persistence\Repository
{
    /**
     * @var array
     */
    protected $defaultOrderings = [
        'name' => \TYPO3\CMS\Extbase\Persistence\QueryInterface::ORDER_ASCENDING
    ];

    public function initializeObject()
    {
        $querySettings = $this->objectManager->get('TYPO3\\CMS\\Extbase\\Persistence\\Generic\\Typo3QuerySettings');
        $querySettings->setRespectStoragePage(FALSE);
        $this->setDefaultQuerySettings($querySettings);
    }

}

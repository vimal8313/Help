<?php
namespace In2code\Femanagerextended\Domain\Repository;

use In2code\Femanager\Domain\Repository;

/**
 * Class UserRepository
 */
class UserRepository extends \In2code\Femanager\Domain\Repository\UserRepository
{
	/**
     * categoryRepository
     *
     * @var \GRCR\Companydir\Domain\Repository\CategoryRepository
     * @inject
     */
    protected $categoryRepository = null;

    /**
     * countyRepository
     *
     * @var \GRCR\Companydir\Domain\Repository\CountyRepository
     * @inject
     */
    protected $countyRepository = null;

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

    public function findCompanyByCategory($categoryId)
    {
    	$query = $this->createQuery();
			$query->matching(
				$query->logicalAnd(
				  $query->equals("categories.uid", $categoryId)
				)
			);
		return $query->execute();
    }

    /**
	* @param int $limit|NULL
	*/

    public function findCompanyByLimit($limit = NULL)
    {
    	$query = $this->createQuery();

    	if ($limit!= NULL && $limit!= 0) {
    		$query->setLimit((int) $limit);
		}
		return $query->execute();
    }

    /**
	* @param string $zip|NULL
	* @param int $categorie|NULL
	* @param int $county|NULL
	* @param int $limit|NULL
	*/
	public function searchCompany($zip = NULL,$categorie = NULL,$county = NULL,$limit = NULL) {

		$query = $this->createQuery();
		$constraints = array();
		if ($categorie!= NULL) {
			$constraints[] = $query->equals('categories.uid', $categorie);
		}

		if ($zip!= NULL) {
			$constraints[] = $query->equals('zip', $zip);
		}
		if ($county!= NULL) {
			$constraints[] = $query->equals('county.uid', $county);
		}

		if ($limit!= NULL && $limit!= 0) {
			$query->setLimit((int) $limit);
		}
		if(count($constraints)>0)
		{
			$query->matching(
				$query->logicalAnd(
						 $constraints
				)
			);
		}

		return $query->execute();
	}
}

<?php
declare(strict_types=1);
namespace In2code\Femanagerextended\ViewHelpers\Form;

use TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper;

/**
 * Class GetCountriesViewHelper
 */
class GetCategoriesViewHelper extends AbstractViewHelper
{

    /**
     * Build an country array
     *
     * @return array
     */
    public function render(): array
    {
        $this->objectManager =\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Extbase\\Object\\ObjectManager');

        $this->categoryRepository =$this->objectManager->get('GRCR\\Companydir\\Domain\\Repository\\CategoryRepository');
        $categories = $this->categoryRepository->findAll();

        $category=array();
        foreach ($categories as $key => $value) {

            $category[$value->getUid()]=$value->getName();
        }
        return $category;
    }
}

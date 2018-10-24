<?php
declare(strict_types=1);
namespace In2code\Femanagerextended\ViewHelpers\Form;

use TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper;

/**
 * Class GetCountriesViewHelper
 */
class GetCountyViewHelper extends AbstractViewHelper
{

    /**
     * Build an country array
     *
     * @return array
     */
    public function render(): array
    {
        $this->objectManager =\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Extbase\\Object\\ObjectManager');

        $this->countyRepository =$this->objectManager->get('GRCR\\Companydir\\Domain\\Repository\\CountyRepository');
        $counties = $this->countyRepository->findAll();

        $county=array();
        foreach ($counties as $key => $value) {

            $county[$value->getUid()]=$value->getName();
        }
        return $county;
    }
}

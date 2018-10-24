<?php
namespace Wilzingprojects\WilzingProjects\Domain\Model;

/***
 *
 * This file is part of the "Wilzing_projects" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *  (c) 2018
 *
 ***/

/**
 * Projects
 */
class Projects extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity
{
    /**
     * projecttitle
     *
     * @var string
     */
    protected $projecttitle = '';

     /**
     * Returns the projecttitle
     *
     * @return string $projecttitle
     */
    public function getProjecttitle()
    {
        return $this->projecttitle;
    }

    /**
     * Sets the projecttitle
     *
     * @param string $projecttitle
     * @return void
     */
    public function setProjecttitle($projecttitle)
    {
        $this->projecttitle = $projecttitle;
    }


     /**
     * projectimages
     *
     * @var \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\TYPO3\CMS\Extbase\Domain\Model\FileReference>
     * @cascade remove
     */
    protected $projectimages = NULL;

    /**
     * Returns the projectimages
     *
     * @return \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\TYPO3\CMS\Extbase\Domain\Model\FileReference> $projectimages
     */
    public function getProjectimages() {
        return $this->projectimages;
    }

    /**
     * Sets the projectimages
     *
     * @param \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\TYPO3\CMS\Extbase\Domain\Model\FileReference> $projectimages
     * @return void
     */
    public function setProjectimages(\TYPO3\CMS\Extbase\Persistence\ObjectStorage $projectimages) {
        $this->projectimages = $projectimages;
    }

}

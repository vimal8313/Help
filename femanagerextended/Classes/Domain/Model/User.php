<?php
namespace In2code\Femanagerextended\Domain\Model;

use In2code\Femanager\Domain\Model\User as UserFemanager;

class User extends UserFemanager
{


    /**
     * categories
     *
     * @var \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\GRCR\Companydir\Domain\Model\Category>
     *
     */
    protected $categories;

    /**
     * subtitle
     *
     * @var string
     */
    protected $subtitle;

    /**
     * county
     *
     * @var \GRCR\Companydir\Domain\Model\County
     */
    protected $county;

    /**
     * __construct
     */
    public function __construct()
    {
        //Do not remove the next line: It would break the functionality
        $this->initStorageObjects();
    }

    /**
     * Initializes all ObjectStorage properties
     * Do not modify this method!
     * It will be rewritten on each save in the extension builder
     * You may modify the constructor of this class instead
     *
     * @return void
     */
    protected function initStorageObjects()
    {
        $this->categories = new \TYPO3\CMS\Extbase\Persistence\ObjectStorage();
        //$this->county = new \TYPO3\CMS\Extbase\Persistence\ObjectStorage();
    }

    /**
     * Adds a categories
     *
     * @param \GRCR\Companydir\Domain\Model\Category $categories
     * @return void
     */
    public function addCategories(\GRCR\Companydir\Domain\Model\Category $categories)
    {
        $this->categories->attach($categories);
    }

    /**
     * Removes a categories
     *
     * @param \GRCR\Companydir\Domain\Model\Category $categories The Category to be removed
     * @return void
     */
    public function removeCategories(\GRCR\Companydir\Domain\Model\Category $categories)
    {
        $this->categories->detach($categories);
    }

    /**
     * Returns the categories
     *
     * @return \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\GRCR\Companydir\Domain\Model\Category> $categories
     */
     public function getCategories()
    {
        return $this->categories;
    }

    /**
     * Sets the categories
     *
     * @param \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\GRCR\Companydir\Domain\Model\Category> $categories
     * @return void
     */
     public function setCategories(\TYPO3\CMS\Extbase\Persistence\ObjectStorage $categories)
    {
        $this->categories = $categories;
    }

    /**
     * Returns the subtitle
     *
     * @return string $subtitle
     */
    public function getSubtitle()
    {
        return $this->subtitle;
    }

    /**
     * Sets the subtitle
     *
     * @param string $subtitle
     * @return void
     */
    public function setSubtitle($subtitle)
    {
        $this->subtitle = $subtitle;
    }

    // /**
    //  * Adds a county
    //  *
    //  * @param \GRCR\Companydir\Domain\Model\County $county
    //  * @return void
    //  */
    // public function addCounty(\GRCR\Companydir\Domain\Model\County $county)
    // {
    //     $this->county->attach($county);
    // }

    // *
    //  * Removes a county
    //  *
    //  * @param \GRCR\Companydir\Domain\Model\County $county The Category to be removed
    //  * @return void

    // public function removeCounty(\GRCR\Companydir\Domain\Model\County $county)
    // {
    //     $this->county->detach($county);
    // }

    /**
     * Returns the county
     *
     * @return \GRCR\Companydir\Domain\Model\County $county
     */
     public function getCounty()
    {
        return $this->county;
    }

    /**
     * Sets the county
     *
     * @param \GRCR\Companydir\Domain\Model\County|NULL $county
     * @return void
     */
     public function setCounty(\GRCR\Companydir\Domain\Model\County $county=NULL)
    {
        $this->county = $county;
    }

    /**
     * @param string $username
     */
    public function setUsername($username)
    {
        $this->username = $username;
    }
}

<?php
namespace TYPO3\SiteConfig\Domain\Model;

/**
 * News model (extended)
 */
class News extends \GeorgRinger\News\Domain\Model\News
{

	/**
	 * @var string
	 */
	protected $notes;


    /**
     * @return string
     */
    public function getNotes() {
        return $this->notes;
    }


}

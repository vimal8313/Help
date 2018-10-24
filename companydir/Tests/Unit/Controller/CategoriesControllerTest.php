<?php
namespace GRCR\Companydir\Tests\Unit\Controller;

/**
 * Test case.
 */
class CategoriesControllerTest extends \TYPO3\CMS\Core\Tests\UnitTestCase
{
    /**
     * @var \GRCR\Companydir\Controller\CategoriesController
     */
    protected $subject = null;

    protected function setUp()
    {
        parent::setUp();
        $this->subject = $this->getMockBuilder(\GRCR\Companydir\Controller\CategoriesController::class)
            ->setMethods(['redirect', 'forward', 'addFlashMessage'])
            ->disableOriginalConstructor()
            ->getMock();
    }

    protected function tearDown()
    {
        parent::tearDown();
    }

    /**
     * @test
     */
    public function listActionFetchesAllCategoriessFromRepositoryAndAssignsThemToView()
    {

        $allCategoriess = $this->getMockBuilder(\TYPO3\CMS\Extbase\Persistence\ObjectStorage::class)
            ->disableOriginalConstructor()
            ->getMock();

        $categoriesRepository = $this->getMockBuilder(\GRCR\Companydir\Domain\Repository\CategoriesRepository::class)
            ->setMethods(['findAll'])
            ->disableOriginalConstructor()
            ->getMock();
        $categoriesRepository->expects(self::once())->method('findAll')->will(self::returnValue($allCategoriess));
        $this->inject($this->subject, 'categoriesRepository', $categoriesRepository);

        $view = $this->getMockBuilder(\TYPO3\CMS\Extbase\Mvc\View\ViewInterface::class)->getMock();
        $view->expects(self::once())->method('assign')->with('categoriess', $allCategoriess);
        $this->inject($this->subject, 'view', $view);

        $this->subject->listAction();
    }

    /**
     * @test
     */
    public function showActionAssignsTheGivenCategoriesToView()
    {
        $categories = new \GRCR\Companydir\Domain\Model\Categories();

        $view = $this->getMockBuilder(\TYPO3\CMS\Extbase\Mvc\View\ViewInterface::class)->getMock();
        $this->inject($this->subject, 'view', $view);
        $view->expects(self::once())->method('assign')->with('categories', $categories);

        $this->subject->showAction($categories);
    }
}

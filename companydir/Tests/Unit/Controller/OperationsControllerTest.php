<?php
namespace GRCR\Companydir\Tests\Unit\Controller;

/**
 * Test case.
 */
class OperationsControllerTest extends \TYPO3\CMS\Core\Tests\UnitTestCase
{
    /**
     * @var \GRCR\Companydir\Controller\OperationsController
     */
    protected $subject = null;

    protected function setUp()
    {
        parent::setUp();
        $this->subject = $this->getMockBuilder(\GRCR\Companydir\Controller\OperationsController::class)
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
    public function listActionFetchesAllOperationssFromRepositoryAndAssignsThemToView()
    {

        $allOperationss = $this->getMockBuilder(\TYPO3\CMS\Extbase\Persistence\ObjectStorage::class)
            ->disableOriginalConstructor()
            ->getMock();

        $operationsRepository = $this->getMockBuilder(\GRCR\Companydir\Domain\Repository\OperationsRepository::class)
            ->setMethods(['findAll'])
            ->disableOriginalConstructor()
            ->getMock();
        $operationsRepository->expects(self::once())->method('findAll')->will(self::returnValue($allOperationss));
        $this->inject($this->subject, 'operationsRepository', $operationsRepository);

        $view = $this->getMockBuilder(\TYPO3\CMS\Extbase\Mvc\View\ViewInterface::class)->getMock();
        $view->expects(self::once())->method('assign')->with('operationss', $allOperationss);
        $this->inject($this->subject, 'view', $view);

        $this->subject->listAction();
    }

    /**
     * @test
     */
    public function showActionAssignsTheGivenOperationsToView()
    {
        $operations = new \GRCR\Companydir\Domain\Model\Operations();

        $view = $this->getMockBuilder(\TYPO3\CMS\Extbase\Mvc\View\ViewInterface::class)->getMock();
        $this->inject($this->subject, 'view', $view);
        $view->expects(self::once())->method('assign')->with('operations', $operations);

        $this->subject->showAction($operations);
    }
}

<?php
namespace Wilzingprojects\WilzingProjects\Tests\Unit\Controller;

/**
 * Test case.
 */
class ProjectsControllerTest extends \TYPO3\CMS\Core\Tests\UnitTestCase
{
    /**
     * @var \Wilzingprojects\WilzingProjects\Controller\ProjectsController
     */
    protected $subject = null;

    protected function setUp()
    {
        parent::setUp();
        $this->subject = $this->getMockBuilder(\Wilzingprojects\WilzingProjects\Controller\ProjectsController::class)
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
    public function listActionFetchesAllProjectssFromRepositoryAndAssignsThemToView()
    {

        $allProjectss = $this->getMockBuilder(\TYPO3\CMS\Extbase\Persistence\ObjectStorage::class)
            ->disableOriginalConstructor()
            ->getMock();

        $projectsRepository = $this->getMockBuilder(\Wilzingprojects\WilzingProjects\Domain\Repository\ProjectsRepository::class)
            ->setMethods(['findAll'])
            ->disableOriginalConstructor()
            ->getMock();
        $projectsRepository->expects(self::once())->method('findAll')->will(self::returnValue($allProjectss));
        $this->inject($this->subject, 'projectsRepository', $projectsRepository);

        $view = $this->getMockBuilder(\TYPO3\CMS\Extbase\Mvc\View\ViewInterface::class)->getMock();
        $view->expects(self::once())->method('assign')->with('projectss', $allProjectss);
        $this->inject($this->subject, 'view', $view);

        $this->subject->listAction();
    }

    /**
     * @test
     */
    public function showActionAssignsTheGivenProjectsToView()
    {
        $projects = new \Wilzingprojects\WilzingProjects\Domain\Model\Projects();

        $view = $this->getMockBuilder(\TYPO3\CMS\Extbase\Mvc\View\ViewInterface::class)->getMock();
        $this->inject($this->subject, 'view', $view);
        $view->expects(self::once())->method('assign')->with('projects', $projects);

        $this->subject->showAction($projects);
    }

    /**
     * @test
     */
    public function createActionAddsTheGivenProjectsToProjectsRepository()
    {
        $projects = new \Wilzingprojects\WilzingProjects\Domain\Model\Projects();

        $projectsRepository = $this->getMockBuilder(\Wilzingprojects\WilzingProjects\Domain\Repository\ProjectsRepository::class)
            ->setMethods(['add'])
            ->disableOriginalConstructor()
            ->getMock();

        $projectsRepository->expects(self::once())->method('add')->with($projects);
        $this->inject($this->subject, 'projectsRepository', $projectsRepository);

        $this->subject->createAction($projects);
    }

    /**
     * @test
     */
    public function editActionAssignsTheGivenProjectsToView()
    {
        $projects = new \Wilzingprojects\WilzingProjects\Domain\Model\Projects();

        $view = $this->getMockBuilder(\TYPO3\CMS\Extbase\Mvc\View\ViewInterface::class)->getMock();
        $this->inject($this->subject, 'view', $view);
        $view->expects(self::once())->method('assign')->with('projects', $projects);

        $this->subject->editAction($projects);
    }

    /**
     * @test
     */
    public function updateActionUpdatesTheGivenProjectsInProjectsRepository()
    {
        $projects = new \Wilzingprojects\WilzingProjects\Domain\Model\Projects();

        $projectsRepository = $this->getMockBuilder(\Wilzingprojects\WilzingProjects\Domain\Repository\ProjectsRepository::class)
            ->setMethods(['update'])
            ->disableOriginalConstructor()
            ->getMock();

        $projectsRepository->expects(self::once())->method('update')->with($projects);
        $this->inject($this->subject, 'projectsRepository', $projectsRepository);

        $this->subject->updateAction($projects);
    }
}

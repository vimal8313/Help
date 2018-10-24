<?php
namespace Wilzingprojects\WilzingProjects\Controller;

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
 * ProjectsController
 */
class ProjectsController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
{
    /**
     * projectsRepository
     *
     * @var \Wilzingprojects\WilzingProjects\Domain\Repository\ProjectsRepository
     * @inject
     */
    protected $projectsRepository = null;

    /**
     * action list
     *
     * @return void
     */
    public function listAction()
    {
        $projectids = $this->settings['projects'];
        $projectidarray = explode(',',$projectids);

        $projects = new \TYPO3\CMS\Extbase\Persistence\ObjectStorage();
        foreach($projectidarray as $projectid)
        {
            $projects->attach($this->projectsRepository->findByUid($projectid));
        }
        $this->view->assign('projectss', $projects);
    }

    /**
     * action slider
     *
     * @return void
     */
    public function sliderAction()
    {
        $projectId = $this->settings['projectid'];
        $projects = $this->projectsRepository->findByUid($projectId);
        // \TYPO3\CMS\Extbase\Utility\DebuggerUtility::var_dump($projects);
        $this->view->assign('projects', $projects);
    }

    /**
     * action show
     *
     * @param \Wilzingprojects\WilzingProjects\Domain\Model\Projects $projects
     * @return void
     */
    public function showAction(\Wilzingprojects\WilzingProjects\Domain\Model\Projects $projects)
    {
        $this->view->assign('projects', $projects);
    }

    /**
     * action new
     *
     * @return void
     */
    public function newAction()
    {

    }

    /**
     * action create
     *
     * @param \Wilzingprojects\WilzingProjects\Domain\Model\Projects $newProjects
     * @return void
     */
    public function createAction(\Wilzingprojects\WilzingProjects\Domain\Model\Projects $newProjects)
    {
        $this->addFlashMessage('The object was created. Please be aware that this action is publicly accessible unless you implement an access check. See https://docs.typo3.org/typo3cms/extensions/extension_builder/User/Index.html', '', \TYPO3\CMS\Core\Messaging\AbstractMessage::WARNING);
        $this->projectsRepository->add($newProjects);
        $this->redirect('list');
    }

    /**
     * action edit
     *
     * @param \Wilzingprojects\WilzingProjects\Domain\Model\Projects $projects
     * @ignorevalidation $projects
     * @return void
     */
    public function editAction(\Wilzingprojects\WilzingProjects\Domain\Model\Projects $projects)
    {
        $this->view->assign('projects', $projects);
    }

    /**
     * action update
     *
     * @param \Wilzingprojects\WilzingProjects\Domain\Model\Projects $projects
     * @return void
     */
    public function updateAction(\Wilzingprojects\WilzingProjects\Domain\Model\Projects $projects)
    {
        $this->addFlashMessage('The object was updated. Please be aware that this action is publicly accessible unless you implement an access check. See https://docs.typo3.org/typo3cms/extensions/extension_builder/User/Index.html', '', \TYPO3\CMS\Core\Messaging\AbstractMessage::WARNING);
        $this->projectsRepository->update($projects);
        $this->redirect('list');
    }
}

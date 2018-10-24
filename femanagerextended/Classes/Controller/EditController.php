<?php
namespace In2code\Femanagerextended\Controller;

use In2code\Femanager\Controller\EditController as EditControllerFemanager;
use In2code\Femanagerextended\Domain\Model\User;

/**
 * Class EditController
 *
 * @package In2code\Femanagerextended\Controller
 */
class EditController extends EditControllerFemanager
{


    /**
     * userRepository
     *
     * @var \In2code\Femanagerextended\Domain\Repository\UserRepository
     * @inject
     */
    protected $userRepository = null;

    public function initializeUpdateAction()
    {
        if ($this->arguments->hasArgument('user')) {
            // Workaround to avoid php7 warnings of wrong type hint.
            /** @var \In2code\Femanagerextended\Xclass\Extbase\Mvc\Controller\Argument $user */
            $user = $this->arguments['user'];
            $user->setDataType(\In2code\Femanagerextended\Domain\Model\User::class);
        }
    }

    /**
     * action update
     *
     * @param User $user
     * @validate $user In2code\Femanager\Domain\Validator\ServersideValidator
     * @validate $user In2code\Femanager\Domain\Validator\PasswordValidator
     * @return void
     */
    public function updateAction(\In2code\Femanager\Domain\Model\User $user)
    {
        // $req = $this->request->getArguments();

        // $this->objectManager =\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance('TYPO3\\CMS\\Extbase\\Object\ObjectManager');
        // $mappingConfiguration = $this->objectManager->get('TYPO3\CMS\Extbase\Property\PropertyMappingConfigurationBuilder')
        //     ->build();

        // $mappingConfiguration->forProperty('usergroup')->allowAllProperties();
        // $mappingConfiguration->forProperty('categories')->allowAllProperties();
        // $mappingConfiguration->forProperty('county')->allowAllProperties();
        // //$mappingConfiguration->forProperty('subtitle')->allowAllProperties();

        // $output = $this->objectManager->get('TYPO3\CMS\Extbase\Property\PropertyMapper')->convert($req['user'],'In2code\Femanagerextended\Domain\Model\User',$mappingConfiguration);
        //\TYPO3\CMS\Extbase\Utility\DebuggerUtility::var_dump($output); die;
        parent::updateAction($user);
    }
}

<?php
namespace GRCR\Companydir\Controller;

/***
 *
 * This file is part of the "Company Dir" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 *  (c) 2018
 *
 ***/

use TYPO3\CMS\Extbase\Persistence\Generic\PersistenceManager;

/**
 * CategoryController
 */
class CategoryController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
{
    /**
     * categoryRepository
     *
     * @var \GRCR\Companydir\Domain\Repository\CategoryRepository
     * @inject
     */
    protected $categoryRepository = null;

    /**
     * countyRepository
     *
     * @var \GRCR\Companydir\Domain\Repository\CountyRepository
     * @inject
     */
    protected $countyRepository = null;

    /**
     * userRepository
     *
     * @var \In2code\Femanagerextended\Domain\Repository\UserRepository
     * @inject
     */
    protected $userRepository = null;

    /**
     * userGroupRepository
     *
     * @var \TYPO3\CMS\Extbase\Domain\Repository\FrontendUserGroupRepository
     * @inject
     */
    protected $userGroupRepository = null;

    /**
     * persistenceManager
     *
     * @var \TYPO3\CMS\Extbase\Persistence\Generic\PersistenceManager
     * @inject
     */
    protected $persistenceManager = NULL;

    /**
     * action categorylist
     *
     * @param GRCR\Companydir\Domain\Model\Category
     * @return void
     */
    public function categorylistAction()
    {
        $pageid = $GLOBALS['TSFE']->id;
        $companies = $this->userRepository->findAll();
        $categories = $this->categoryRepository->findAll();
        $count = 0;
        foreach ($categories as $key => $category) {
            $category->setCount(count($this->userRepository->findCompanyByCategory($category->getUid())));
            if ($category->getCount() > 0) {
                $items[substr($category->getName(), 0, 1)][] = $category;
                $count++;
            }
        }

        $this->view->assign('pageid', $pageid);
        $this->view->assign('items', $items);
        $this->view->assign('count', $count);
        $this->view->assign('companies', $companies);
    }

    /**
     * action companylist
     *
     * @param GRCR\Companydir\Domain\Model\Category|NULL
     * @return void
     */
    public function companylistAction(\GRCR\Companydir\Domain\Model\Category $category=NULL)
    {
        $limit = $this->settings['limit'];
        if (isset($category)) {
            $categoryId = $category->getUid();
            $companies = $this->userRepository->findCompanyByCategory($category->getUid());
        }
        else{
            $companies = $this->userRepository->findCompanyByLimit($limit);
        }
        $this->view->assign('settings', $this->settings);
        $this->view->assign('companies', $companies);
        $this->view->assign('categoryid', $categoryId);
    }

    /**
     * action show
     *
     * @param string $company|NULL
     * @return void
     */
    public function showAction($company=NULL)
    {
        if (empty($company)) {
            $company = $this->settings['company'];
        }
        $company = $this->userRepository->findByUid($company);

        $address = $company->getAddress()?$company->getAddress():'';
        $zip = $company->getZip()?$company->getZip():'';
        $city = $company->getCity()?$company->getCity():'';
        $country = $company->getCountry()?$company->getCountry():'Germany';

        $mapAddress = $address.'+'.$zip.'+'.$city.'+'.$country;
        $this->view->assign('company', $company);
        $this->view->assign('mapAddress', $mapAddress);
    }

    /**
     * action search
     *
     *
     * @return void
     */
    public function searchAction()
    {
        session_start();
        if (empty(array_filter($this->request->getArguments()))) {
            unset($_SESSION["zip"]);
            unset($_SESSION["category"]);
            unset($_SESSION["county"]);
        }

        $selectedcategory = $this->request->hasArgument('category')?$this->request->getArgument('category'):$_SESSION["category"];
        $selectedcounty = $this->request->hasArgument('county')?$this->request->getArgument('county'):$_SESSION["county"];
        $selectedzip = $this->request->hasArgument('zip')?$this->request->getArgument('zip'):$_SESSION["zip"];

        $detailpageid = $this->settings['detailPid'];
        $categories = $this->categoryRepository->findAll();
        $county = $this->countyRepository->findAll();
        foreach ($categories as $key => $category) {
            $category->setCount(count($this->userRepository->findCompanyByCategory($category->getUid())));
            if ($category->getCount() > 0) {
                $catarray[$category->getUid()] = $category->getName();
            }
        }
        foreach ($county as $key => $county) {
            $countyarray[$county->getUid()] = $county->getName();
        }

        $this->view->assign('selectedzip', $selectedzip);
        $this->view->assign('selectedcategory', $selectedcategory);
        $this->view->assign('selectedcounty', $selectedcounty);
        $this->view->assign('detailpageid', $detailpageid);
        $this->view->assign('catarray', $catarray);
        $this->view->assign('countyarray', $countyarray);
    }

    /**
     * action searchlist
     *
     * @return void
     */
    public function searchlistAction()
    {
        session_start();
        $limit = $this->settings['limit'];
        $session_category = $_SESSION["category"];
        $session_county = $_SESSION["county"];
        $session_zip = $_SESSION["zip"];
        $temp = array();

        if($this->request->hasArgument('category')){
            $category = $this->request->getArgument('category');
            $temp['category']=$category;
        }
        if($this->request->hasArgument('county')){
            $county = $this->request->getArgument('county');
            $temp['county']=$county;
        }
        if($this->request->hasArgument('zip')){
            $zip = $this->request->getArgument('zip');
            $temp['zip']=$zip;
        }

        if (!empty($temp)) {
            if($session_category != $category || $session_county != $county || $session_zip != $zip){
                if($this->request->hasArgument('category')){
                    $_SESSION["category"] = $this->request->getArgument('category');
                }
                if($this->request->hasArgument('county')){
                    $_SESSION["county"] = $this->request->getArgument('county');
                }
                if($this->request->hasArgument('zip')){
                    $_SESSION["zip"] = $this->request->getArgument('zip');
                }
                $this->redirect('searchlist', NULL, NULL, $temp);
            }
        }



        $zip = $this->request->hasArgument('zip')?$this->request->getArgument('zip'):$_SESSION["zip"];
        $category = $this->request->hasArgument('category')?$this->request->getArgument('category'):$_SESSION["category"];
        $county = $this->request->hasArgument('county')?$this->request->getArgument('county'):$_SESSION["county"];

        if (!empty($category)) {
            $selectedcategory = $this->categoryRepository->findByUid($category);
        }
        if (!empty($county)) {
            $selectedcounty = $this->countyRepository->findByUid($county);
        }
        if (!empty($zip)) {
            $selectedzip = $zip;
        }
        $companies = $this->userRepository->searchCompany($zip,$category,$county,$limit);
        $_SESSION["zip"] = $zip;
        $_SESSION["category"] = $category;
        $_SESSION["county"] = $county;

        $this->view->assign('selectedzip', $selectedzip);
        $this->view->assign('selectedcategory', $selectedcategory);
        $this->view->assign('selectedcounty', $selectedcounty);
        $this->view->assign('companies', $companies);
    }

    /**
     * action list
     *
     * @return void
     */
    public function listAction()
    {
        $pageId = $GLOBALS['_GET']['id'];
        if(empty($pageId))
        {
            $nopageselecterror = "Please select storage page first.";
            $this->view->assign('nopageselecterror', $nopageselecterror);
        }
    }

    /**
     * action importexport
     *
     * @return void
     */
    public function importexportAction()
    {
        $process = $this->request->getArgument('process');

        if ($process == 'export') {
            $users = $this->userRepository->findAll();
            $filename = date("Y_m_d_h_i_s");

            header('Content-Type: text/csv; charset=utf-8');
            header('Content-Disposition: attachment; filename=fe_user"'.$filename.'".csv');

            $output = fopen("php://output", "w");
            fputcsv($output, array('ID', 'Title', 'Username', 'Password', 'Name', 'First Name', 'Middle Name', 'Last Name', 'Gender', 'DOB', 'Address', 'Zip', 'City', 'Country', 'Telephone', 'Fax', 'Email', 'Website', 'Category'));

            foreach ($users as $key => $value) {
                $categoryarray = array();
                $user['uid'] = $value->getUid();
                $user['title'] = $value->getTitle();
                $user['username'] = $value->getUsername();
                $user['password'] = $value->getPassword();
                $user['name'] = $value->getName();
                $user['firstname'] = $value->getFirstName();
                $user['middlename'] = $value->getMiddleName();
                $user['lastname'] = $value->getLastName();
                if ($value->getGender() == 0) {
                   $user['gender'] = 'Male';
                }
                else{
                   $user['gender'] = 'Female';
                }
                $user['dateOfBirth'] = $value->getDateOfBirth()?$value->getDateOfBirth()->format('Y-m-d'):'';
                $user['address'] = $value->getAddress();
                $user['zip'] = $value->getZip();
                $user['city'] = $value->getCity();
                $user['country'] = $value->getcountry();
                $user['telephone'] = $value->getTelephone();
                $user['fax'] = $value->getFax();
                $user['email'] = $value->getEmail();
                $user['www'] = $value->getWww();
                foreach ($value->getCategories() as $key => $category) {
                    $categoryarray[] = $category->getName();
                }
                $user['category'] = implode(',', $categoryarray);

                fputcsv($output, $user);
            }
            fclose($output);
            exit;
        }
        else{
            $file = $this->request->getArgument('file');
            $pageId = $GLOBALS['_GET']['id'];
            $filename = $file["tmp_name"];
            $filesize = $file["size"];
            if($filesize > 0)
             {
                $rowheader = $this->request->getArgument('rowheader');

                $file = fopen($filename, "r");
                $rowcount = 0;
                $count = count(file($filename, FILE_SKIP_EMPTY_LINES));
                for ($i=0; $i < $count; $i++) {
                    if ($rowheader == 1 && $i == 0) {
                        $getData = fgetcsv($file, 10000, ",");
                        continue;
                    } else {
                        $getData = fgetcsv($file, 10000, ",");

                        $importObject = $this->objectManager->get('In2code\Femanagerextended\Domain\Model\User');
                        $usergroup[] = $this->userGroupRepository->findByUid('1');

                        $userobj = new \TYPO3\CMS\Extbase\Persistence\ObjectStorage();
                        foreach($usergroup as $group)
                        {
                            $userobj->attach($group);
                        }
                        $importObject->setUsergroup($userobj);
                        $importObject->setUserName($getData['0']);
                        $objSalt = \TYPO3\CMS\Saltedpasswords\Salt\SaltFactory::getSaltingInstance(NULL);
                        if (is_object($objSalt)) {
                                $saltedPassword = $objSalt->getHashedPassword($getData['1']);
                        }
                        $importObject->setPassword($saltedPassword);
                        $importObject->setPid($pageId);
                        $importObject->setTitle($getData['3']);
                        $importObject->setCompany($getData['4']);
                        $importObject->setSubtitle($getData['5']);
                        $importObject->setAddress($getData['6']);
                        $importObject->setZip($getData['7']);
                        $importObject->setCity($getData['8']);
                        $importObject->setCountry('Deutschland');
                        $importObject->setTelephone($getData['9']);
                        $importObject->setFax($getData['10']);
                        $importObject->setEmail($getData['11']);
                        $importObject->setWww($getData['12']);

                        $landkreis = $getData['13'];
                        if ($landkreis) {
                            $landobj = $this->countyRepository->findByName($landkreis)->getFirst();

                            if (empty($landobj)) {
                                $importCounty = $this->objectManager->get('GRCR\Companydir\Domain\Model\County');
                                $importCounty->setName($landkreis);
                                $importCounty->setPid($pageId);
                                $this->countyRepository->add($importCounty);
                                $this->persistenceManager->persistAll();
                                $importObject->setCounty($importCounty);
                            } else {
                                $importObject->setCounty($landobj);
                            }
                        }

                        $fabrikate = $getData['14'];
                        $categories = explode(',', $fabrikate);
                        $catobj = array();

                        foreach ($categories as $key => $category) {
                            $test = $this->categoryRepository->findByName(trim($category))->getFirst();
                            if (empty($test)) {
                                $importCategory = $this->objectManager->get('GRCR\Companydir\Domain\Model\Category');
                                $importCategory->setName(trim($category));
                                $importCategory->setPid($pageId);
                                $this->categoryRepository->add($importCategory);
                                $this->persistenceManager->persistAll();
                                $catobj[$key] = $importCategory;
                            } else {
                                $catobj[] = $test;
                            }
                        }
                    }
                    $objectcat = new \TYPO3\CMS\Extbase\Persistence\ObjectStorage();
                    foreach ($catobj as $category) {
                        $objectcat->attach($category);
                    }
                    $importObject->setCategories($objectcat);
                    $this->userRepository->add($importObject);
                    $this->persistenceManager->persistAll();
                    $rowcount++;
                }
                //die;
                fclose($file);
                $this->view->assign('rowcount', $rowcount);
            }
        }
    }
}

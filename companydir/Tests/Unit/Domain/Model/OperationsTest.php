<?php
namespace GRCR\Companydir\Tests\Unit\Domain\Model;

/**
 * Test case.
 */
class OperationsTest extends \TYPO3\CMS\Core\Tests\UnitTestCase
{
    /**
     * @var \GRCR\Companydir\Domain\Model\Operations
     */
    protected $subject = null;

    protected function setUp()
    {
        parent::setUp();
        $this->subject = new \GRCR\Companydir\Domain\Model\Operations();
    }

    protected function tearDown()
    {
        parent::tearDown();
    }

    /**
     * @test
     */
    public function getImageReturnsInitialValueForFileReference()
    {
        self::assertEquals(
            null,
            $this->subject->getImage()
        );
    }

    /**
     * @test
     */
    public function setImageForFileReferenceSetsImage()
    {
        $fileReferenceFixture = new \TYPO3\CMS\Extbase\Domain\Model\FileReference();
        $this->subject->setImage($fileReferenceFixture);

        self::assertAttributeEquals(
            $fileReferenceFixture,
            'image',
            $this->subject
        );
    }

    /**
     * @test
     */
    public function getCompanyNameReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getCompanyName()
        );
    }

    /**
     * @test
     */
    public function setCompanyNameForStringSetsCompanyName()
    {
        $this->subject->setCompanyName('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'companyName',
            $this->subject
        );
    }

    /**
     * @test
     */
    public function getCompanySubtitleReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getCompanySubtitle()
        );
    }

    /**
     * @test
     */
    public function setCompanySubtitleForStringSetsCompanySubtitle()
    {
        $this->subject->setCompanySubtitle('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'companySubtitle',
            $this->subject
        );
    }

    /**
     * @test
     */
    public function getAdressReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getAdress()
        );
    }

    /**
     * @test
     */
    public function setAdressForStringSetsAdress()
    {
        $this->subject->setAdress('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'adress',
            $this->subject
        );
    }

    /**
     * @test
     */
    public function getAdditionalAdressReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getAdditionalAdress()
        );
    }

    /**
     * @test
     */
    public function setAdditionalAdressForStringSetsAdditionalAdress()
    {
        $this->subject->setAdditionalAdress('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'additionalAdress',
            $this->subject
        );
    }

    /**
     * @test
     */
    public function getZipReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getZip()
        );
    }

    /**
     * @test
     */
    public function setZipForStringSetsZip()
    {
        $this->subject->setZip('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'zip',
            $this->subject
        );
    }

    /**
     * @test
     */
    public function getCityReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getCity()
        );
    }

    /**
     * @test
     */
    public function setCityForStringSetsCity()
    {
        $this->subject->setCity('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'city',
            $this->subject
        );
    }

    /**
     * @test
     */
    public function getWebsiteReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getWebsite()
        );
    }

    /**
     * @test
     */
    public function setWebsiteForStringSetsWebsite()
    {
        $this->subject->setWebsite('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'website',
            $this->subject
        );
    }

    /**
     * @test
     */
    public function getEmailReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getEmail()
        );
    }

    /**
     * @test
     */
    public function setEmailForStringSetsEmail()
    {
        $this->subject->setEmail('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'email',
            $this->subject
        );
    }

    /**
     * @test
     */
    public function getTelefoneReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getTelefone()
        );
    }

    /**
     * @test
     */
    public function setTelefoneForStringSetsTelefone()
    {
        $this->subject->setTelefone('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'telefone',
            $this->subject
        );
    }

    /**
     * @test
     */
    public function getFaxReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getFax()
        );
    }

    /**
     * @test
     */
    public function setFaxForStringSetsFax()
    {
        $this->subject->setFax('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'fax',
            $this->subject
        );
    }

    /**
     * @test
     */
    public function getBadgeReturnsInitialValueForInt()
    {
        self::assertSame(
            0,
            $this->subject->getBadge()
        );
    }

    /**
     * @test
     */
    public function setBadgeForIntSetsBadge()
    {
        $this->subject->setBadge(12);

        self::assertAttributeEquals(
            12,
            'badge',
            $this->subject
        );
    }

    /**
     * @test
     */
    public function getCategorieReturnsInitialValueForCategories()
    {
        $newObjectStorage = new \TYPO3\CMS\Extbase\Persistence\ObjectStorage();
        self::assertEquals(
            $newObjectStorage,
            $this->subject->getCategorie()
        );
    }

    /**
     * @test
     */
    public function setCategorieForObjectStorageContainingCategoriesSetsCategorie()
    {
        $categorie = new \GRCR\Companydir\Domain\Model\Categories();
        $objectStorageHoldingExactlyOneCategorie = new \TYPO3\CMS\Extbase\Persistence\ObjectStorage();
        $objectStorageHoldingExactlyOneCategorie->attach($categorie);
        $this->subject->setCategorie($objectStorageHoldingExactlyOneCategorie);

        self::assertAttributeEquals(
            $objectStorageHoldingExactlyOneCategorie,
            'categorie',
            $this->subject
        );
    }

    /**
     * @test
     */
    public function addCategorieToObjectStorageHoldingCategorie()
    {
        $categorie = new \GRCR\Companydir\Domain\Model\Categories();
        $categorieObjectStorageMock = $this->getMockBuilder(\TYPO3\CMS\Extbase\Persistence\ObjectStorage::class)
            ->setMethods(['attach'])
            ->disableOriginalConstructor()
            ->getMock();

        $categorieObjectStorageMock->expects(self::once())->method('attach')->with(self::equalTo($categorie));
        $this->inject($this->subject, 'categorie', $categorieObjectStorageMock);

        $this->subject->addCategorie($categorie);
    }

    /**
     * @test
     */
    public function removeCategorieFromObjectStorageHoldingCategorie()
    {
        $categorie = new \GRCR\Companydir\Domain\Model\Categories();
        $categorieObjectStorageMock = $this->getMockBuilder(\TYPO3\CMS\Extbase\Persistence\ObjectStorage::class)
            ->setMethods(['detach'])
            ->disableOriginalConstructor()
            ->getMock();

        $categorieObjectStorageMock->expects(self::once())->method('detach')->with(self::equalTo($categorie));
        $this->inject($this->subject, 'categorie', $categorieObjectStorageMock);

        $this->subject->removeCategorie($categorie);
    }
}

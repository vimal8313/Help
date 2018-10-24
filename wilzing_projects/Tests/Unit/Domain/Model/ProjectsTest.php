<?php
namespace Wilzingprojects\WilzingProjects\Tests\Unit\Domain\Model;

/**
 * Test case.
 */
class ProjectsTest extends \TYPO3\CMS\Core\Tests\UnitTestCase
{
    /**
     * @var \Wilzingprojects\WilzingProjects\Domain\Model\Projects
     */
    protected $subject = null;

    protected function setUp()
    {
        parent::setUp();
        $this->subject = new \Wilzingprojects\WilzingProjects\Domain\Model\Projects();
    }

    protected function tearDown()
    {
        parent::tearDown();
    }

    /**
     * @test
     */
    public function getProjecttitleReturnsInitialValueForString()
    {
        self::assertSame(
            '',
            $this->subject->getProjecttitle()
        );
    }

    /**
     * @test
     */
    public function setProjecttitleForStringSetsProjecttitle()
    {
        $this->subject->setProjecttitle('Conceived at T3CON10');

        self::assertAttributeEquals(
            'Conceived at T3CON10',
            'projecttitle',
            $this->subject
        );
    }

    /**
     * @test
     */
    public function getProjectimagesReturnsInitialValueForFileReference()
    {
        self::assertEquals(
            null,
            $this->subject->getProjectimages()
        );
    }

    /**
     * @test
     */
    public function setProjectimagesForFileReferenceSetsProjectimages()
    {
        $fileReferenceFixture = new \TYPO3\CMS\Extbase\Domain\Model\FileReference();
        $this->subject->setProjectimages($fileReferenceFixture);

        self::assertAttributeEquals(
            $fileReferenceFixture,
            'projectimages',
            $this->subject
        );
    }
}

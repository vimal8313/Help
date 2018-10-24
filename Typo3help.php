
\TYPO3\CMS\Extbase\Utility\DebuggerUtility::var_dump($projects);

----------------------------------------------------------------------------------------------------
Call to undefined method TYPO3\CMS\Core\Utility\GeneralUtility::readLLfile()

-->  $languageFactory = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Localization\LocalizationFactory::class);
		$LOCAL_LANG = $languageFactory->getParsedData(\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath('simple_slider') . 'locallang.xml', $GLOBALS['LANG']->lang);

----------------------------------------------------------------------------------------------------

 $GLOBALS['TYPO3_DB']->sql_fetch_assoc($res) --> $res->fetch()

----------------------------------------------------------------------------------------------------
Remove extension name from realurl
 https://stmllr.net/blog/hiding-repeated-segments-with-realurl/

 ---------------------------------------------------------------------------------------------------

 https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
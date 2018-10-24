#CSS-Dateien
page.includeCSS {
   file1 = EXT:site_goldner/Resources/Public/css/standard.css
   file2 = EXT:site_goldner/Resources/Public/scripts/jMenu/jquery/jMenu.jquery.css
   file3 = EXT:site_goldner/Resources/Public/css/flick/jquery-ui-1.8.20.custom.css
   lightbox = EXT:site_goldner/Resources/Public/css/jquery.lightbox-0.5.css
   powermail = EXT:site_goldner/Resources/Public/css/powermail_frontend_fancy.css
   goldneranker = EXT:site_goldner/Resources/Public/css/f4n_goldneranker.css
   validationEngine = EXT:site_goldner/Resources/Public/css/validationEngine.jquery.css
   JQueryAccordeon = EXT:site_goldner/Resources/Public/css/f4n_JQueryAccordeon.css

   #jQueryValEngine = EXT:site_goldner/Resources/Public/css/validationEngine.jquery.css
}

[globalVar = TSFE:id = {$GoldnerAnkerIDs.SuchePID}]
   page.includeCSS.indexedSearchStyle = EXT:site_goldner/Resources/Public/css/indexedSearch.css
[end]
[globalVar = TSFE:id = {$GoldnerAnkerIDs.FERoomAdmin}]
   page.includeCSS.BelKalender = typo3conf/ext/f4n_goldneranker/pi1/F4NBelegungKalender/kalender2.css
[end]

page.headerData.20 = TEXT
page.headerData.20.value (
<!--[if IE]>
 <link href="EXT:site_goldner/Resources/Public/css/scripts/jMenu/jquery/jMenu.jqueryIE.css" rel="stylesheet" type="text/css" media="all" />
<![endif]-->
)

[userFunc = user_powermailOnCurrentPage] OR [globalVar = TSFE:id = {$GoldnerAnkerIDs.AnfragePID}]
    page.includeCSS.powermail_frontend_fancy = EXT:site_goldner/Resources/Public/css/powermail_frontend_fancy.css
[end]

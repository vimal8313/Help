<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/tt_news/pi/static/ts_new/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_lib/static/General/setup.txt">

includeLibs.userPageBrowserFunc = EXT:wind_lib/res/user_ttnewsPageBrowser.php
includeLibs.newsAmenuUserFunc = fileadmin/sites/vlissingen/scripts/amenuUserFunc.php
includeLibs.bekendmakingenFunc = fileadmin/sites/vlissingen/scripts/bekendmakingenUserFunc.php
includeLibs.newsMarkerFunc = fileadmin/sites/vlissingen/scripts/markerArrayFunc.php

plugin.tt_news {
	pid_list = {$uids.pages.newsFolder}
	singlePid = {$uids.pages.newsSingle}
	backPid = {$uids.pages.newsList}
	archiveTypoLink.parameter = {$uids.pages.newsList}

	templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/tt_news/tt_news.html

	limit = 10
	latestLimit = 5

	datetimeDaysToArchive = 0
	enableArchiveDate = 0
	useHRDates = 1
	useHRDatesSingle = 1
	useHRDatesSingleWithoutDay = 1
	excludeAlreadyDisplayedNews = 1
	archiveMenuNoEmpty = 1

	usePiBasePagebrowser = 0
	userPageBrowserFunc = user_ttnewsPageBrowser
	pageBrowser < plugin.tx_windlib_pi1.pageBrowser
	pageBrowser{
		labelPageAsRecords = 1
		allwaysShow = 0
		showFirstLast = 0
		showPreviousNext = 1
		showInactive = 1
		showPageSetLinks = 1
		addNumFirstLastToPageSets = 1
		maxPageLinks = 7
		centerCurrentPage = 0
		labelPrevious = vorige
		labelNext = volgende
		labelFirst = vorige
		labelLast = volgende
	}

	newsFiles_stdWrap.wrap = <table class="csc-uploads"><tbody>|</tbody></table>
	newsFilesHeader_stdWrap.wrap = <caption>|</caption>
	newsFiles {
		path = uploads/media/
		icon = 0
		jumpurl = 0
		size = 0
		stdWrap.wrap = <tr><td class="description">|</td></tr>
	}

	displayList {
		date_stdWrap.strftime =  %d %B %Y
		subheader_stdWrap {
			stripHtml = 1
			ifEmpty.field = bodytext
			outerWrap = <p>|</p>
			crop = 400|...| 1

			append = TEXT
			append.data = register:newsMoreLink
			append.wrap = <span class="news-list-morelink">|</span>
			append.if.isTrue.field = bodytext
		}
		image {
			file.maxW = 145c
			file.maxH = 95c
		}
		imageWrapIfAny = <div class="news-list-image"> | </div>
	}

	displayLatest {
		date_stdWrap.strftime = %d %B %Y
		subheader_stdWrap {
			stripHtml = 1
			ifEmpty.field = bodytext
			outerWrap = <p>|</p>
			crop = 400|...| 1

			append = TEXT
			append.data = register:newsMoreLink
			append.wrap = <span class="news-list-morelink">|</span>
			append.if.isTrue.field = bodytext
		}

		linkTitleField =
		linkTitleField.wrap = Deze link opent een pagina binnen deze website
	}

	displaySingle {
		date_stdWrap.strftime = %d %B %Y
		subheader_stdWrap.wrap = <p>|</p>

		image {
			file.maxW = 275
			file.maxH >
			title.field = imagealttext
			imageLinkWrap = 1
			imageLinkWrap {
				enable = 1
				typolink {
					parameter.cObject = IMG_RESOURCE
					parameter.cObject.file.import.data = TSFE:lastImageInfo|origFile
					parameter.cObject.file.maxW = 800
					parameter.cObject.file.maxH = 600
					ATagParams = class="lightbox-inline"
					wrap = <span class="enlarge"><span class="image">|</span> </span>
				}
			}
		}
	}

	archiveTypoLink.parameter = {$uids.pages.newsList}
	archiveMode = month

	_LOCAL_LANG {
		nl {
			archiveHeader = Archief
			goToArchive = meer nieuws
			noNewsToListMsg = Er zijn geen berichten gevonden.
			noNewsIdMsg = Pagina niet gevonden<br/><br/>De pagina waar u naar op zoek was, kan helaas niet gevonden worden. Dit kan meerdere redenen hebben, bijvoorbeeld een typefout in de adresbalk, een verkeerde link vanaf een andere website of een gedateerd zoekmachineresultaat.
			more = lees verder
			backToList = terug naar overzicht
			textRelated =
			preAuthor =
			textFiles = Downloads
		}
	}
}

[PIDinRootline = {$uids.pages.blogList}]
plugin.tt_news {
	pid_list = {$uids.pages.blogFolder}
	singlePid = {$uids.pages.blogSingle}
	backPid = {$uids.pages.blogList}
	templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/tt_news/tt_news_blog.html

	_LOCAL_LANG {
		nl {
			goToArchive = meer blogs
			noNewsToListMsg = Er zijn geen berichten gevonden.
			backToList = terug naar overzicht
		}
	}
}
[global]

[PIDinRootline = {$pdc.id.totaaloverzicht}]
lib.news_notices = RECORDS
lib.news_notices {
	tables = tt_content
	source = {$content.news.latestnotices}
	wrap = |
}

plugin.tt_news {
	templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/tt_news/tt_news_notices.html
}
[global]


[PIDinRootline = {$pages.uid.newsletter}]
plugin.tt_news {
	templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/tt_news/tt_news_newsletter.html
	displayList {
		subheader_stdWrap.append >
		imageWrapIfAny = <td valign="top" rowspan="3" style="padding:0 0 18px;line-height:18px;width:145px;">|</td><td valign="top" width="10" rowspan="3"><f:image src="EXT:website_vlissingen/Resources/Public/Images/spacer.gif" alt="spacer" width="10" /></td>
	}
}
[global]

[PIDinRootline = {$pages.uid.newsletterschelde}, {$pages.uid.newslettersportraad}]
plugin.tt_news {
	displayList {
		subheader_stdWrap {
			append = TEXT
			append.data = register:newsMoreLink
			append.wrap = ...|
			append.if.isTrue.field = bodytext
		}
	}
	_LOCAL_LANG {
		nl {
			more = Lees verder
		}
	}
}
[global]

[PIDinRootline = {$uids.pages.bekendmakingenList}]
plugin.tt_news {
	templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_bekendmakingen/wind_bekendmakingen.html
	archiveTypoLink.parameter = {$uids.pages.bekendmakingenList}
	singlePid = {$uids.pages.bekendmakingenSingle}
	pid_list = {$uids.pages.bekendmakingenFolder}
	backPid = {$uids.pages.bekendmakingenList}
	searchPid = {$uids.pages.bekendmakingenSearch}

	emptySearchAtStart = 0

	limit = 10
	displayList.subheader_stdWrap.append.wrap = <span class="publications-list-morelink">|</span>

	newsAmenuUserFunc = user_processAmenu
	newsAmenuUserFunc {
		mode = year
		maxYears = 5
		template = <li class="<!-- ###FIRST### begin -->first<!-- ###FIRST### end--><!-- ###CURRENT### begin --> current<!-- ###CURRENT### end-->"><a href="###URL###"><span class="date">###DATE###</span> </a></li>
	}
	archiveMode = month
	itemMarkerArrayFunc = user_processMarkerArray
	archiveHeader_stdWrap.postUserFunc = user_setCategoryTitle

	publications {
		startdate_stdWrap {
			strftime = %e %B %Y
		}

		enddate_stdWrap {
			strftime = %e %B %Y
			noTrimWrap = |<span class="end-date">Einddatum: |</span>|
			required = 1
		}
	}

	_LOCAL_LANG {
		nl {
			noNewsToListMsg = Er zijn geen bekendmakingen gevonden (in deze categorie).
			backToList = Terug naar het overzicht
			archiveHeader = Bekendmakingen
		}
	}
}
[global]
##################################################
# Set archive to month when month is set
##################################################
[globalVar = GP:tx_ttnews|year > 0]
plugin.tt_news.archiveMode = year
[global]

[globalVar = GP:tx_ttnews|month > 0]
plugin.tt_news.archiveMode = month
[global]

##################################################
# News title
##################################################
[globalVar = GP:tx_ttnews|year > 0]
lib.newstitle.year = TEXT
lib.newstitle.year {
	data = GPvar:tx_ttnews|year
	intval = 1
}
[global]

[globalVar = GP:tx_ttnews|month > 0]
lib.newstitle.month = CASE
lib.newstitle.month.key.data = GPvar:tx_ttnews|month
lib.newstitle.month.1 = TEXT
lib.newstitle.month.1.value = Januari
lib.newstitle.month.2 = TEXT
lib.newstitle.month.2.value = Februari
lib.newstitle.month.3 = TEXT
lib.newstitle.month.3.value = Maart
lib.newstitle.month.4 = TEXT
lib.newstitle.month.4.value = April
lib.newstitle.month.5 = TEXT
lib.newstitle.month.5.value = Mei
lib.newstitle.month.6 = TEXT
lib.newstitle.month.6.value = Juni
lib.newstitle.month.7 = TEXT
lib.newstitle.month.7.value = Juli
lib.newstitle.month.8 = TEXT
lib.newstitle.month.8.value = Augustus
lib.newstitle.month.9 = TEXT
lib.newstitle.month.9.value = September
lib.newstitle.month.10 = TEXT
lib.newstitle.month.10.value = Oktober
lib.newstitle.month.11 = TEXT
lib.newstitle.month.11.value = November
lib.newstitle.month.12 = TEXT
lib.newstitle.month.12.value = December
[global]

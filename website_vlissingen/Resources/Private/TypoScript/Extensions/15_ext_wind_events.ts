<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_events/static/General/setup.txt">

plugin.tx_windevents_pi1 {
	templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_events/wind_events.html
	displayArchived = 1
	displayPageBrowser = 1
	hideEndedEvents = 0
	categories = 0
	pid = {$uids.pages.eventsFolder}

	list {
		showFirstAndLastInPageBrowser = 0
		showYearIfMonthIsEmpty = 1
		showSelectedMonth = 0
		singleUid = {$uids.pages.eventsSingle}
		limit = 10

		#title
		titleStdWrap {
			htmlSpecialChars = 1
		}

		#time
		timeStdWrap {
			htmlSpecialChars = 1
		}
		timeSeparator = /
		timeSeparator.addSpaces = 1

		#date
		dateStdWrap {
			strftime = %e %B %Y
			htmlSpecialChars = 1
		}
		monthStdWrap {
			strftime = %B
			htmlSpecialChars = 1
		}
		dayStdWrap {
			strftime = %e
			hmtlSpecialChars = 1
		}

		dateSeparator = t/m
		dateSeparator.addSpaces = 1

		daySeparator = t/m
		daySeparator.addSpaces = 1

		#time
		timeStdWrap {
			htmlSpecialChars = 1
		}

		#location short
		locationShortStdWrap {
			htmlSpecialChars = 1
		}

		#location
		locationStdWrap {
			htmlSpecialChars = 1
			br = 1
		}

		#region
		regionStdWrap {
			htmlSpecialChars = 1
		}

		#description
		descriptionStdWrap {

		}
		#contact
		contactStdWrap {
			htmlSpecialChars = 1
			br = 1
		}
		#next url
		nextUrlStdWrap {
			htmlSpecialChars = 1
		}

		#previous url
		previousUrlStdWrap {
			htmlSpecialChars = 1
		}

		#single url
		singleUrlStdWrap {
			htmlSpecialChars = 1
		}

		#image
		image {
			file.maxW = 120
			file.maxH = 90
		}
		imageStdWrap {
		}
	}
	latest {
		displayLimit = 2
		singleUid = {$uids.pages.eventsSingle}
		#title
		titleStdWrap {
			htmlSpecialChars = 1
			crop = 60 | | 1
		}
		singleUrl {
			parameter = {$uids.pages.eventsSingle}
			returnLast = url
		}

		#time
		timeStdWrap {
			htmlSpecialChars = 1
		}
		timeSeparator = /
		timeSeparator.addSpaces = 1

		#date
		dateStdWrap {
			strftime = %e %B %Y
			htmlSpecialChars = 1
		}
		monthStdWrap {
			strftime = %b
			htmlSpecialChars = 1
		}
		dayStdWrap {
			strftime = %e
			hmtlSpecialChars = 1
		}
		daySeparator = -
		daySeparator.addSpaces = 0

		#location short
		locationShortStdWrap {
			htmlSpecialChars = 1
		}

		#location
		locationStdWrap {
			htmlSpecialChars = 1
			br = 1
		}

		#description
		descriptionStdWrap {
			htmlSpecialChars = 1
			crop = 60 | | 1
		}

		#next url
		nextUrlStdWrap {
			htmlSpecialChars = 1
		}

		#previous url
		previousUrlStdWrap {
			htmlSpecialChars = 1
		}

		#single url
		singleUrlStdWrap {
		 		htmlSpecialChars = 1
			returnLast = url
		}

		#image
		image {
			file.maxW = 145
			file.maxH = 1000
		}
		imageStdWrap {
		}
	}
	cal {
		singleUid = {$uids.pages.eventsSingle}

		#title
		titleStdWrap {
			htmlSpecialChars = 1
			crop = 20 | ...
		}

		#next url
		nextUrlStdWrap {
			htmlSpecialChars = 1
		}

		#previous url
		previousUrlStdWrap {
			htmlSpecialChars = 1
		}

		#single url
		singleUrlStdWrap {
			htmlSpecialChars = 1
		}
		}
		search {
		listUid = {$uids.pages.eventsList}

		#search url
		searchUrlStdWrap {
			htmlSpecialChars = 1
		}

		#region
		regionStdWrap {
			htmlSpecialChars = 1
		}
	}
	single {
		listUid = {$uids.pages.eventsList}

		#title
		titleStdWrap {
			htmlSpecialChars = 1
		}

		#date
		dateStdWrap {
			strftime = %A %e-%m-%Y
			htmlSpecialChars = 1
		}
		dateSeparator = t/m
		dateSeparator.addSpaces = 1

		#time
		timeStdWrap {
			noTrimWrap = | | uur|
			htmlSpecialChars = 1
		}
		timeSeparator = tot
		timeSeparator.addSpaces = 1

		#location short
		locationShortStdWrap {
			htmlSpecialChars = 1
		}

		#location
		locationStdWrap {
			htmlSpecialChars = 1
			br = 1
		}

		#organizer
		organizerStdWrap {
			htmlSpecialChars = 1
		}

		#description
		descriptionStdWrap {
			br = 1
			parseFunc < tt_content.text.20.parseFunc
		}

		#website
		websiteStdWrap {
			htmlSpecialChars = 1
		}

		#contact
		contactStdWrap {
			htmlSpecialChars = 1
			br = 1
		}

		#image
		image {
			file.width = 274
			file.height = 206
			imageLinkWrap = 1
			imageLinkWrap {
			enable = 1
			typolink {
				parameter.cObject = IMG_RESOURCE
				parameter.cObject.file.import.data = TSFE:lastImageInfo|origFile
				parameter.cObject.file.maxW = 800
				parameter.cObject.file.maxH = 600
				ATagParams = class="lightbox-eventsSingle"
				wrap = <span class="image">|</span>
				ATagBeforeWrap = 1
			}
			}
		}
		imageStdWrap {
		}
	}
}

[PIDinRootline = {$pages.uid.newsletterschelde}]
plugin.tx_windevents_pi1 {
	templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_events/wind_events_schelde.html
	displayPageBrowser = 0
		list {
			limit = 4
		dateStdWrap {
				strftime = %A %e %B
		}
	}
}
[global]

[PIDinRootline = {$pages.uid.newslettersportraad}]
plugin.tx_windevents_pi1 {
	templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_events/wind_events_sportraad.html
	displayPageBrowser = 0
		list {
			limit = 4
		dateStdWrap {
				strftime = %A %e %B
		}
	}
}
[global]
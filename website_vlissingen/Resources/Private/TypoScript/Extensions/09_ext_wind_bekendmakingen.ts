<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_bekendmakingen/static/bekendmakingen/setup.txt">

plugin.tx_windbekendmakingen_pi1 {
	templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_bekendmakingen/wind_bekendmakingen-pdf.html
	pid = {$uids.pages.bekendmakingenFolder}
	formPid = {$uids.pages.bekendmakingenPdfForm}
	pdfPid = {$uids.pages.bekendmakingenPdf}

	wkhtmltopdfPath = {$config.wkHtmlToPdf}

	form {
		date {
			offset = -1
			stdWrap.strftime = %e-%m-%Y
		}
	}
	pdf {
		date.stdWrap.strftime = %e %B %Y
		description.stdWrap.htmlSpecialChars = 0
		margin-top = 32mm
		margin-left = 12mm
		margin-right = 12mm
		margin-bottom = 12mm
		header {
			preMake = 1
			startDate.stdWrap.strftime = %e %b
			endDate.stdWrap.strftime = %e %b
		}
	}
	footer {
		preMake = 1
		startDate.stdWrap.strftime = %e %B
		endDate.stdWrap.strftime = %e %B %Y
	}
}

############################################################
# tt_news catmenu
############################################################
#[PIDinRootline = {$uids.pages.bekendmakingenList}]
#includeLibs.user_newsCatMenuSubmenu = fileadmin/sites/vlissingen/scripts/class.user_newsCatMenuSubmenu.php

#lib.sidebar.25 = HMENU
#lib.sidebar.25.special = userfunction
#lib.sidebar.25.special.userFunc = user_newsCatMenuSubmenu->getCatMenuSubmenu
#lib.sidebar.25.special.pid = {$uids.pages.bekendmakingenFolder}
#lib.sidebar.25.special.listUid = {$uids.pages.bekendmakingenList}
#lib.sidebar.25.special.parent = {$uids.tt_news_categories.bekendmakingen}
#lib.sidebar.25.wrap = <div class="news-latest-container"><h2>Categorie&euml;n</h2><ul>|<li><a href="{$uids.pages.bekendmakingenLocation}">Alle</a></li></ul></div>
#lib.sidebar.25.1 = TMENU
#lib.sidebar.25.1.noBlur = 1

#lib.sidebar.25.1.NO {
#	wrapItemAndSub = <li>|</li>
#}
#lib.sidebar.25.1.ACT = 1
#lib.sidebar.25.1.ACT {
#	wrapItemAndSub = <li class="current">|</li>
#}

#lib.sidebar.25.1.CUR = 1
#lib.sidebar.25.1.CUR {
#	wrapItemAndSub = <li class="current">|</li>
#}

#lib.sidebar.25.2 < lib.sidebar.25.1
#lib.sidebar.25.2.wrap = <ul>|</ul>
#lib.sidebar.25.3 < lib.sidebar.25.2
#[global]

lib.rootline = COA
lib.rootline.stdWrap.wrap = <!-- RSPEAK_STOP --><ul class="breadcrumbs"><li class="first"><a href="./">Home</a></li>|</ul><!-- RSPEAK_START -->
lib.rootline.stdWrap.required = 1
lib.rootline.10 = HMENU
lib.rootline.10.includeNotInMenu = 0
lib.rootline.10.excludeUidList = 98
lib.rootline.10.special = rootline
lib.rootline.10.special.range = 1
lib.rootline.10.1 = TMENU
lib.rootline.10.1.noBlur = 1
lib.rootline.10.1.NO {
	wrapItemAndSub = <li>|</li> |*| <li>|</li> |*| <li>|</li>
	stdWrap.htmlSpecialChars = 1
}

[PIDinRootline = {$pages.uid.deutsch}]
lib.rootline.stdWrap.wrap = <!-- RSPEAK_STOP --><ul class="breadcrumbs" lang="de"><li class="first"><a href="./">Home</a></li>|</ul><!-- RSPEAK_START -->
[global]

[PIDinRootline = {$pages.uid.english}]
lib.rootline.stdWrap.wrap = <!-- RSPEAK_STOP --><ul class="breadcrumbs" lang="en"><li class="first"><a href="./">Home</a></li>|</ul><!-- RSPEAK_START -->
[global]

[PIDinRootline = {$pages.uid.francais}]
lib.rootline.stdWrap.wrap = <!-- RSPEAK_STOP --><ul class="breadcrumbs" lang="fr"><li class="first"><a href="./">Home</a></li>|</ul><!-- RSPEAK_START -->
[global]

##################################################
# tt_news article in rootline
##################################################
[globalVar = GP:tx_ttnews|tt_news > 0]
	lib.rootline.10.special.range = 1|-2
	lib.rootline.10.1.NO {
		wrapItemAndSub = <li>|</li> |*| <li>|</li> |*| <li>|</li>
		stdWrap.htmlSpecialChars = 1
	}
	lib.rootline.20 = TEXT
	lib.rootline.20.data = page:title
	lib.rootline.20.typolink {
		parameter = {page:uid}
		parameter.insertData = 1
		useCacheHash = 1
		addQueryString = 1
		addQueryString.method = GET
		addQueryString.exclude = id
		wrap = <li class="last">|</li>
	}
[global]

##################################################
# wind_productcatalog
##################################################
[globalVar = GP:tx_windproductcatalog_pi1|category > 0] || [globalVar = GP:tx_windproductcatalog_pi1|product > 0]
includeLibs.tx_windproductcatalog_rootline = fileadmin/sites/vlissingen/scripts/class.user_tx_windproductcatalog_rootline.php

lib.rootline.20 = COA_INT
lib.rootline.20.10 = HMENU
lib.rootline.20.10 < lib.rootline.10
lib.rootline.20.10.special = userfunction
lib.rootline.20.10.special.userFunc = user_tx_windproductcatalog_rootline->getMenuArray
lib.rootline.20.10.range = 1|-1
lib.rootline.20.10.1.NO {
	wrapItemAndSub = <li>|</li> |*| <li>|</li> |*| <li class="last">|</li>
}
lib.rootline.20.10.typolink {
	parameter = {page:uid}
	parameter.insertData = 1
	useCacheHash = 1
	addQueryString = 1
	addQueryString.method = GET
	addQueryString.exclude = id
}
[global]
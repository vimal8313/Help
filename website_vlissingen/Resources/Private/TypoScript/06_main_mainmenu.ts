lib.mainmenu = HMENU
lib.mainmenu.entryLevel = 1
lib.mainmenu.1 = TMENU
lib.mainmenu.1.expAll = 1
lib.mainmenu.1.noBlur = 1
lib.mainmenu.1.wrap = <div id="skipnav" tabindex="-1"></div><ul id="nav">|</ul>

lib.mainmenu.1.NO {
	wrapItemAndSub = <li class="first">|</li> |*| <li>|</li> |*| <li class="last">|</li>
}

lib.mainmenu.1.ACT = 1
lib.mainmenu.1.ACT < lib.mainmenu.1.NO
lib.mainmenu.1.ACT {
	wrapItemAndSub = <li class="active first">|</li> |*| <li class="active">|</li> |*| <li class="last active">|</li>
}

lib.mainmenu.1.CUR = 1
lib.mainmenu.1.CUR < lib.mainmenu.1.NO
lib.mainmenu.1.CUR {
	wrapItemAndSub = <li class="current first">|</li> |*| <li class="current">|</li> |*| <li class="last current">|</li>
}

lib.mainmenu.2 < lib.mainmenu.1
lib.mainmenu.2.wrap = <div class="drop"><ul>|</ul></div>
lib.mainmenu.2.NO.wrapItemAndSub = <li>|</li>

[PIDinRootline = {$pages.uid.deutsch}]
lib.mainmenu.1.wrap = <div id="skipnav" tabindex="-1"></div><ul id="nav" lang="de">|</ul>
[global]

[PIDinRootline = {$pages.uid.english}]
lib.mainmenu.1.wrap = <div id="skipnav" tabindex="-1"></div><ul id="nav" lang="en">|</ul>
[global]

[PIDinRootline = {$pages.uid.francais}]
lib.mainmenu.1.wrap = <div id="skipnav" tabindex="-1"></div><ul id="nav" lang="fr">|</ul>
[global]

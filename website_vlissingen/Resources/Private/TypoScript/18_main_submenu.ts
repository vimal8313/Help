lib.submenu = HMENU
lib.submenu.entryLevel = 3
lib.submenu.1 = TMENU
lib.submenu.1.expAll = 1
lib.submenu.1.noBlur = 1
lib.submenu.1.wrap = <ul class="add-navigation">|</ul>

lib.submenu.1.NO {
	wrapItemAndSub = <li class="first">|</li> |*| <li>|</li> |*| <li class="last">|</li>
}


lib.submenu.1.ACT = 1
lib.submenu.1.ACT < lib.submenu.1.NO
lib.submenu.1.ACT {
	wrapItemAndSub = <li class="active first">|</li> || <li class="active">|</li> || <li class="last active">|</li> || <li class="counter">|</li>
}

lib.submenu.1.CUR = 1
lib.submenu.1.CUR < lib.submenu.1.NO
lib.submenu.1.CUR {
	wrapItemAndSub = <li class="current first">|</li> || <li class="current">|</li> || <li class="last current">|</li> || <li class="counter">|</li>
}

lib.submenu.2 < lib.submenu.1
lib.submenu.2.wrap = <div class="drop"><ul>|</ul></div>
lib.submenu.2.NO.wrapItemAndSub = <li>|</li>

[PIDinRootline = {$pages.uid.kcc}]
lib.submenu.entryLevel = 2
[global]

[PIDinRootline = {$pages.uid.deutsch}]
lib.submenu.1.wrap = <ul class="add-navigation" lang="de">|</ul>
[global]

[PIDinRootline = {$pages.uid.english}]
lib.submenu.1.wrap = <ul class="add-navigation" lang="en">|</ul>
[global]

[PIDinRootline = {$pages.uid.francais}]
lib.submenu.1.wrap = <ul class="add-navigation" lang="fr">|</ul>
[global]

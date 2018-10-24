lib.contentmenu = HMENU
lib.contentmenu.entryLevel = 0
lib.contentmenu.1 = TMENU
lib.contentmenu.1.noBlur = 1
lib.contentmenu.1.wrap = <ul class="tabs">|</ul>
lib.contentmenu.1.NO {
	wrapItemAndSub = <li class="first">|</li> |*| <li>|</li> |*| <li class="last">|</li>
	stdWrap.htmlSpecialChars = 1
}


lib.contentmenu.1.CUR = 1
lib.contentmenu.1.CUR < lib.contentmenu.1.NO
lib.contentmenu.1.CUR {
	wrapItemAndSub = <li class="first">|</li> |*| <li>|</li> |*| <li class="last">|</li>
	ATagParams = class="current"
}

lib.contentmenu.1.ACT = 1
lib.contentmenu.1.ACT < lib.contentmenu.1.NO
lib.contentmenu.1.ACT {
	wrapItemAndSub = <li class="first">|</li> |*| <li>|</li> |*| <li class="last">|</li>
}
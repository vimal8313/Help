lib.topmenu = HMENU
lib.topmenu.special = directory
lib.topmenu.special.value = {$pages.uid.topmenu}
lib.topmenu.maxItems = 5
lib.topmenu.1 = TMENU
lib.topmenu.1.noBlur = 1
lib.topmenu.1.wrap = <ul class="navigation">|</ul>

lib.topmenu.1.NO {
	wrapItemAndSub = <li class="first">|</li> |*| <li>|</li> |*| <li class="last">|</li>
}
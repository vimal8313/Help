lib.orionisrootline = COA
lib.orionisrootline {
	wrap = <ul>|</ul>
	10 = TEXT
	10 {
		wrap = <li>|</li>
		value = Home
		typolink.parameter = 1
	}
	20 = TEXT
	20 {
		wrap = <li>|</li>
		value = Aanmelden nieuwsbrief
		typolink.parameter = {$pages.uid.orionis}
	}
}

lib.orionisprint = TEXT
lib.orionisprint {
	typolink.parameter = {$pages.uid.print}
	typolink.returnLast = url
}
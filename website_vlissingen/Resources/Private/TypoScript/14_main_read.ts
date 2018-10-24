lib.functionmenu = COA
lib.functionmenu.wrap = <ul class="add-nav">|</ul>

lib.read = COA
lib.read.wrap = <li class="readspeaker">|</li>
lib.read.10 = TEXT
lib.read.10.value = <div id="readspeaker_button1" class="rs_skip rsbtn rs_preserve"><a class="rsbtn_play" accesskey="L" title="Laat de tekst voorlezen met ReadSpeaker" href="https://app.readspeaker.com/cgi-bin/rsent?customerid=5805&amp;lang=nl_nl&amp;readid=content&amp;url=
lib.read.20 = TEXT
lib.read.20.data = TSFE:baseUrl
lib.read.30 = COA
lib.read.30.stdWrap.rawUrlEncode = 1
lib.read.30.1 = TEXT
lib.read.30.1 {
	typolink.parameter.data = page:uid
	typolink.returnLast = url
	typolink.addQueryString = 1
	typolink.addQueryString.exclude = id,no_cache,L
}
lib.read.40 = TEXT
lib.read.40.value = "><span class="rsbtn_left rsimg rspart"><span class="rsbtn_text"><span>Lees voor</span></span></span><span class="rsbtn_right rsimg rsplay rspart"></span></a></div>

[globalVar = _COOKIE | cookielaw_vlissingen=1]
lib.functionmenu.10 < lib.read

lib.functionmenu.20 = USER
lib.functionmenu.20 {
	userFunc = tx_extbase_core_bootstrap->run
	extensionName = WindFontsize
	pluginName = Fontsize
}
[global]

lib.functionmenu.30 = TEXT
lib.functionmenu.30.value = Print
lib.functionmenu.30.typolink.parameter = {$pages.uid.print}
lib.functionmenu.30.wrap = <li class="print">|</li>
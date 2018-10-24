lib.sidebar = COA
[PIDinRootline = {$uids.pages.eventsList}]
lib.sidebar.10 = RECORDS
lib.sidebar.10 {
	source = {$events.plugin.monthmenu}
	tables = tt_content
}
[end]

[PIDinRootline = {$uids.pages.newsList}]
lib.sidebar.10 = RECORDS
lib.sidebar.10 {
	source = {$news.plugin.monthmenu}
	tables = tt_content
}
[end]

[PIDinRootline = {$uids.pages.eventsList}]
lib.sidebar.15 = RECORDS
lib.sidebar.15 {
	source = {$events.plugin.calendar}
	tables = tt_content
}
[end]

[PIDinRootline = {$uids.pages.smoelOverview}]
lib.sidebar.25 = RECORDS
lib.sidebar.25 {
	source = {$smoel.plugin.partijlijst}
	tables = tt_content
}
[end]

lib.sidebar_address = RECORDS
lib.sidebar_address {
	source = {$fce.address}
	tables = tt_content
}

lib.sidebar_appointment = COA
lib.sidebar_appointment.10 = TEXT
lib.sidebar_appointment.10 {
	wrap = <div class="appointment-button">|</div>
	value = Afspraak maken
	typolink.parameter = {$pages.uid.appointment}
	typolink.ATagParams = class="registration"
}
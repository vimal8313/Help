lib.logo = TEXT
lib.logo.value (
    <a href="/" title="Rave On Snow">
    	<img src="typo3conf/ext/site_config/Resources/Public/assets/logos/logo_small.svg" alt="RaveOnSnow">
    </a>
)

lib.logo_tag = TEXT
lib.logo_tag.value (
    <span class="l_year">25YRS</span>
    <span class="l_date">13-16 12 18</span>
)

lib.logo_right = TEXT
lib.logo_right.value (
    <a href="{$website.saalbach_link}" class="" title="">
    	<img src="typo3conf/ext/site_config/Resources/Public/assets/logos/logo_saalbach.svg" alt="saalbach">
    </a>
)

lib.get_tickets = TEXT
lib.get_tickets.value (
    <a href="#" class="trans green_btn" title="GET YOUR TICKETS">GET YOUR TICKETS</a>
)

lib.logo_footer = TEXT
lib.logo_footer.value (
    <a href="/" class="trans" title="Rave On Snow"><img src="typo3conf/ext/site_config/Resources/Public/assets/logos/logo_small.svg" alt="Rave On Snow"></a>
)

lib.sponsor = CONTENT
lib.sponsor{
    table = tt_content
    select.pidInList = 8
    select.orderBy = sorting
    select.where = colPos = 1
}
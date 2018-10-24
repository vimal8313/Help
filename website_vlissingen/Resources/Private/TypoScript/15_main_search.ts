lib.search = TEXT
lib.search.value (
	<div id="skipsearch" tabindex="-1"></div>
	<form class="search-form tx-solr" id="tx-solr-search-form-pi-searchform" action="zoeken.html" method="get" accept-charset="utf-8">
		<fieldset>
			<legend>search-form</legend>
			<input type="text" title="zoeken" id="tx_solr_search" class="tx-solr-q" name="q" value="Typ hier uw zoekopdracht" placeholder="Typ hier uw zoekopdracht" />
			<div class="searchfield">
				<input type="hidden" name="id" value="{$pages.uid.search}" />
				<input type="hidden" name="L" value="0" />
			</div>
			<input type="submit" value="zoeken" />
		</fieldset>
	</form>
)
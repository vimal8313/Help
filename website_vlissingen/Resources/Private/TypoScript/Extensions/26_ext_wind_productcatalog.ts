plugin.tx_windproductcatalog_pi1 {
	templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_productcatalog/wind_productcatalog.html
	pid = {$pdc.id.pid}
	name = Gemeente Vlissingen
	catalog_uid = {$pdc.id.catalog_uid}
	digid_login =
	showCustomTitle = 1
	autoLogin = 1
	autoLogin {
		page = {$pdc.id.login}
	}
	baseUrl <= config.baseURL
	catImage {
		file.width= 230c
		file.height= 102c
	}
	alt_search (
<div class="search">
	<form action="inwoner/digitaal-loket/zoeken.html" method="post" class="form-holder">
		<div class="pair search-form">
			<input type="text" name="tx_windscsearch_pi1[keywords]" value="Zoeken" placeholder="Zoeken" id="tx_windscsearch_keywords" />
			<input type="submit"/>
		</div>
		<div class="pair">
			<label for="tx_windscsearch_keywords">Zoeken binnen organisatie</label>
			<div class="field">
				<div class="pair">
					<div class="field">
						<input type="checkbox" name="tx_windscsearch_pi1[gemeente]" value="1" checked="checked" id="tx_windscsearch_gemeente" />
						<label for="tx_windscsearch_gemeente">Gemeente</label>
					</div>
				</div>
				<div class="pair">
					<div class="field">
						<input type="checkbox" name="tx_windscsearch_pi1[waterschap]" value="1" id="tx_windscsearch_waterschap" />
						<label for="tx_windscsearch_waterschap"> Waterschap</label>
					</div>
				</div>
				<div class="pair">
					<div class="field">
						<input type="checkbox" name="tx_windscsearch_pi1[ministeries]" value="1" id="tx_windscsearch_ministeries" />
						<label for="tx_windscsearch_ministeries">Ministeries</label>
					</div>
				</div>
				<div class="pair">
					<div class="field">
						<input type="checkbox" name="tx_windscsearch_pi1[provincie]" value="1" id="tx_windscsearch_provincie" />
						<label for="tx_windscsearch_provincie">Provincie</label>
					</div>
				</div>
			</div>
		</div>
	</form>
</div>
	)
	overview {
		search = 1
		alphabet = 0
		popular = 0
		popular_max = 5
		extra = 0
		columns = 3
		subcategory_max = 3
		display_products = 1
	}
	category {
		search = 0
		alphabet = 0
	}
	search {
		search = 1
		alphabet = 0
	}
	product {
		search = 0
		alphabet = 0
		sections = 1
		forms = 1
		categories = 0
		related = 1
		content_stdWrap.parseFunc < tt_content.text.20.parseFunc
		form_data < tt_content.mailform.20
		form_data.LABEL.layout = <div class="csc-mailform-field"><label>###LABEL###</label> <span class="csc-mailform-label">###FIELD###</span></div>
	}
	payment = 0
	samenwerkendecatalogi {
		gemeente = Vlissingen
		baseurl = http://www.vlissingen.nl/
	}
	_LOCAL_LANG {
		nl {
			overview_more = meer
			search_label = Zoeken op trefwoord
			search_default =
			search_button = Zoek
			overview_popular_title = Top 5 producten
			search_products_title =
			search_products_title_none = <p>Geen resultaten</p>
			productTitle = ###TITLE###
		}
	}
}

lib.pdc_search = COA
lib.pdc_search {
	10 < plugin.tx_windproductcatalog_pi1
	10 {
		templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_productcatalog/wind_productcatalog_search.html
		overview >
		overview {
			search = 1
			columns = 0
		}
		search {
			search = 1
		}
	}
}

lib.pdc_themes = COA
lib.pdc_themes {
	10 = TEXT
	10 {
		value =  Thema's
		wrap = <h2 class="themes"> | </h2>
	}
	20 < plugin.tx_windproductcatalog_pi1
	20 {
		templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_productcatalog/wind_productcatalog_category.html
		overview {
			search = 0
		}
		search {
			search = 0
		}
	}
}

lib.pdc_lifeevents = COA
lib.pdc_lifeevents {
	10 = TEXT
	10 {
		value =  Levensgebeurtenissen
		wrap = <h2 class="themes"> | </h2>
	}
	20 < plugin.tx_windproductcatalog_pi1
	20 {
		templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_productcatalog/wind_productcatalog_category.html
		overview {
			search = 0
			display_event = 1
		}
		search {
			search = 0
		}
	}
}

[PIDinRootline = {$pdc.id.theme}]
plugin.tx_windproductcatalog_pi1 {
	overview {
		display_events = 0
		display_products = 1
		columns = 4
		popular = 1
		popular_max = 5
		search = 0
		subcategory_max = 4
	}
	search {
		search = 0
	}
}
[global]

[PIDinRootline = {$pdc.id.levensgebeurtenis}]
plugin.tx_windproductcatalog_pi1 {
	overview {
		display_event = 1
		search = 0
	}
	search {
		search = 0
	}
}
[global]

[PIDinRootline = {$pdc.id.product}]
plugin.tx_windproductcatalog_pi1 {
	overview {
		display_all = 1
	}
}
[global]

[PIDinRootline = {$pdc.id.alfabet}, {$pages.uid.kcc-alfabet}]
plugin.tx_windproductcatalog_pi1 {
	overview {
		search = 0
		alphabet = 1
		columns = 0
		display_all = 0
	}
	search {
		search = 0
		alphabet = 1
	}
	category {
		search = 0
		alphabet = 1
	}
}
[global]

[globalVar = GP:tx_windproductcatalog_pi1|category > 0]
plugin.tx_windproductcatalog_pi1 {
	overview {
		display_products = 1
	}
}
[global]

[PIDinRootline = {$pages.uid.kcc-search}]
plugin.tx_windproductcatalog_pi1 {
	alt_search (
<div class="search">
	<form action="kcc/zoeken-in-digitaal-loket.html" method="post" class="form-holder">
		<div class="pair search-form">
			<input type="text" name="tx_windscsearch_pi1[keywords]" value="Zoeken" placeholder="Zoeken" id="tx_windscsearch_keywords" />
			<input type="submit"/>
		</div>
		<div class="pair">
			<label for="tx_windscsearch_keywords">Zoeken binnen organisatie</label>
			<div class="field">
				<div class="pair">
					<div class="field">
						<input type="checkbox" name="tx_windscsearch_pi1[gemeente]" value="1" checked="checked" id="tx_windscsearch_gemeente" />
						<label for="tx_windscsearch_gemeente">Gemeente</label>
					</div>
				</div>
				<div class="pair">
					<div class="field">
						<input type="checkbox" name="tx_windscsearch_pi1[waterschap]" value="1" id="tx_windscsearch_waterschap" />
						<label for="tx_windscsearch_waterschap"> Waterschap</label>
					</div>
				</div>
				<div class="pair">
					<div class="field">
						<input type="checkbox" name="tx_windscsearch_pi1[ministeries]" value="1" id="tx_windscsearch_ministeries" />
						<label for="tx_windscsearch_ministeries">Ministeries</label>
					</div>
				</div>
				<div class="pair">
					<div class="field">
						<input type="checkbox" name="tx_windscsearch_pi1[provincie]" value="1" id="tx_windscsearch_provincie" />
						<label for="tx_windscsearch_provincie">Provincie</label>
					</div>
				</div>
			</div>
		</div>
	</form>
</div>
	)
[global]

##################################################
# Samenwerkende Catalogi Index Feed
##################################################
[globalVar = TSFE:id = {$pdc.id.indexfeed}]
config.disableAllHeaderCode = 1
config.additionalHeaders = Content-type:text/xml; charset=utf-8
config.no_cache = 1
config.xhtml_cleaning = 0
config.disablePrefixComment = 1

tt_content {
	default.prefixComment =
	stdWrap.innerWrap >
	stdWrap.dataWrap = |
	stdWrap.prefixComment =
	text.20.prefixComment =
	header.20.prefixComment =
	html.prefixComment =
	bullets.20.stdWrap.prefixComment =
	table.20.stdWrap.prefixComment =
	image.20.stdWrap.prefixComment =
	textpic.20.stdWrap.prefixComment =
	uploads.20.stdWrap.prefixComment =
}
[global]

#####################################################
# Als er een product is gekozen, andere titel tonen.
#####################################################
[globalVar = GP:tx_windproductcatalog_pi1|product > 0]
	config.noPageTitle = 2
	plugin.tx_windproductcatalog_pi1.showCustomTitle = 1
	lib.pdc_lifeevents >
	lib.pdc_themes >
	lib.news_notices >
[global]

[globalVar = GP:tx_windproductcatalog_pi1|category > 0]
	lib.pdc_themes.10 >
	lib.pdc_lifeevents.20.templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_productcatalog/wind_productcatalog.html
	lib.pdc_search < lib.pdc_themes
	lib.pdc_themes >
	lib.pdc_lifeevents >
	lib.news_notices >
[global]

[globalVar = GP:tx_windproductcatalog_pi1|event > 0]
	lib.pdc_lifeevents.10 >
	lib.pdc_themes.20.templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_productcatalog/wind_productcatalog.html
	lib.pdc_search < lib.pdc_lifeevents
	lib.pdc_themes >
	lib.pdc_lifeevents >
	lib.news_notices >
[global]

lib.pdcpopularmore = TEXT
lib.pdcpopularmore {
	value = Meer loketten
	typolink.parameter = {$pdc.id.theme}
	typolink.additionalParams.insertData = 1
	typolink.ATagParams = class="more"
}
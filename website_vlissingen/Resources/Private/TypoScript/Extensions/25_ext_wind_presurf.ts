<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_presurf/Configuration/TypoScript/setup.txt">

plugin.tx_windpresurf {
	settings {
		wsdl = {$plugin.tx_windpresurf.settings.wsdl}
		elements {
			tt_news {
				settings {
					singleView = {$uids.pages.newsSingle}
					bekendmakingenStorage = {$uids.pages.bekendmakingenFolder}
					bekendmakingenView = {$uids.pages.bekendmakingenSingle}
					blogStorage = {$uids.pages.blogFolder}
					blogView = {$uids.pages.blogSingle}
				}
			}
			tx_windproductcatalog_product {
				settings {
					singleView = {$pdc.id.alfabet}
				}
			}
			tx_windproductcatalog_product_section {
				settings {
					singleView = {$pdc.id.alfabet}
				}
			}
			tx_windevents_event {
				settings {
					singleView = {$uids.pages.eventsSingle}
				}
			}
			tx_windfaq_questions {
				settings {
					singleView = {$uids.pages.faq}
				}
			}
			tx_jkpoll_poll {
				settings {
					singleView = {$page.poll.uid}
				}
			}
		}
	}
}
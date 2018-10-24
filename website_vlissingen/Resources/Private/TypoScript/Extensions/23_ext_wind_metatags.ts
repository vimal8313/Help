plugin.tx_windmetatags_pi1 = USER_INT
plugin.tx_windmetatags_pi1 {
	templateFile = EXT:wind_metatags/templates/index.html

	keywords_stdWrap {
		htmlSpecialChars = 1
	}
	description_stdWrap {
		htmlSpecialChars = 1
		crop = 200 | ... | 1
	}

	config {
		# default page
		default {
			table = pages
			description = description
			keywords = keywords
		}
		# wind_productcatalog single view
		tx_windproductcatalog_product {
			table = tx_windproductcatalog_product
			description = description
			description.stripHtml = 1
			keywords = tx_windmetatags_keywords
			gpvar = tx_windproductcatalog_pi1|product
		}
	}
}

page.headerData.2001 < plugin.tx_windmetatags_pi1
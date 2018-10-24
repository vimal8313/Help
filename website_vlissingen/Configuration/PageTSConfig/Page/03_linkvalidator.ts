mod.linkvalidator {
	searchFields {
		pages = media,url
		tt_content = bodytext, header_link, records
		tt_news = bodytext, links
		tx_windevents_event = description

	}
	linktypes = db, file, external
	checkhidden = 0
	showCheckLinkTab = 1
	mail {
		replytoname = WIND Internet
		replytoemail = info@windinternet.nl
		subject = WIND Internet: Linkvalidator rapport
	}
}
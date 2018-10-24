<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/solr/Configuration/TypoScript/Solr/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/solr/Configuration/TypoScript/Solr/constants.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/solrfal/Configuration/TypoScript/Basic/setup.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/solrfal/Configuration/TypoScript/Basic/constants.txt">

config.index_enable = 1
plugin.tx_solr.cssFiles >
plugin.tx_solr.javascriptFiles >

plugin.tx_solr {
	solr {
		path = /solr3/core_nl/
		scheme = http
		host = localhost
		port = 8080
	}

	templateFiles {
		frequentSearches = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/solr/pi_frequentsearches/frequentsearches.htm
		pagebrowser = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/solr/pi_results/pagebrowser.htm
		results = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/solr/pi_results/results.htm
		search = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/solr/pi_search/search.htm
	}

	search {
		sorting = 1
		sorting.options {
			relevance.field = relevance
			relevance.label = Relevantie
			title.field = title
			title.label = Titel
			created.field = created
			created.defaultOrder = desc
			created.label = Datum
			author >
		}
		faceting = 1
		faceting.removeFacetLinkText = @facetText
		faceting.facets {
			agepicker >
			age {
				label = Datum
				field = created
				type = queryGroup
				queryGroup {
					week {
						query = [NOW/DAY-7DAYS TO *]
					}
					month {
						query = [NOW/DAY-1MONTH TO NOW/DAY-7DAYS]
					}
					halfYear {
						query = [NOW/DAY-6MONTHS TO NOW/DAY-1MONTH]
					}
					year {
						query = [NOW/YEAR TO NOW/YEAR+1YEARS]
					}
					yearprev {
						query = [NOW/YEAR-1YEARS TO NOW/YEAR]
					}
					yearprevprev {
						query = [NOW/YEAR-2YEARS TO NOW/YEAR-1YEARS]
					}
					older {
						query = [* TO NOW/YEAR-2YEARS]
					}
				}
				renderingInstruction = CASE
				renderingInstruction {
					key.field = optionValue
					default = TEXT
					default.field = optionValue
					week = TEXT
					week.value = De laatste week
					month = TEXT
					month.value = De laatste maand
					halfYear = TEXT
					halfYear.value = 1 tot 6 maanden
					year = TEXT
					year.value = Dit jaar
					yearprev = TEXT
					yearprev.value = Vorig jaar
					yearprevprev = TEXT
					yearprevprev.value = 2 jaar terug
					older = TEXT
					older.value = Ouder dan 2 jaar
				}
			}
			type {
				field = type
				label = Type
				renderingInstruction = CASE
				renderingInstruction {
					key.field = optionValue

					pages = TEXT
					pages.value = Pages
					pages.lang.nl = Pagina

					tt_news = TEXT
					tt_news.value = News
					tt_news.lang.nl = Nieuwsbericht

					tx_solr_file = TEXT
					tx_solr_file.value = Files
					tx_solr_file.lang.nl = Bestanden

					tx_windproductcatalog_product = TEXT
					tx_windproductcatalog_product.value = Products
					tx_windproductcatalog_product.lang.nl = Producten

					tx_windfaq_questions = TEXT
					tx_windfaq_questions.value = FAQ
					tx_windfaq_questions.lang.nl = Veel gestelde vragen

					tx_jkpoll_poll = TEXT
					tx_jkpoll_poll.value = Poll
					tx_jkpoll_poll.lang.nl = Poll

					tx_windevents_event = TEXT
					tx_windevents_event.value = Events
					tx_windevents_event.lang.nl = Evenementen

					tx_veguestbook_entries = TEXT
					tx_veguestbook_entries.value = Guestbook
					tx_veguestbook_entries.lang.nl = Gastboek

					tx_windraadsmoelenboek_leden = TEXT
					tx_windraadsmoelenboek_leden.value = Smoelenboek
					tx_windraadsmoelenboek_leden.lang.nl = Smoelenboek

				}
			}

			category {
				field = category_stringM
				label = Categorie
			}
		}

		results.resultsHighlighting = 1
		results.pagebrowser._LOCAL_LANG {
			nl {
				text_prev = Vorige
				text_next = Volgende
				text_first = Eerste
				text_last = Laatste
			}
		}

		results.fieldRenderingInstructions {
			created = TEXT
			created {
				field = created
				strftime = %d-%m-%Y
				wrap = <span class="created">Geplaatst op:&nbsp;|</span>
			}
		}

		lastSearches = 1
		lastSearches.limit = 5
		frequentSearches = 0
		frequentSearches.limit = 5
	}

	index.queue {
		faq = 1
		faq {
			table = tx_windfaq_questions
			fields {
				abstract = q
				changed = tstamp
				title = SOLR_CONTENT
				title {
					field = question
				}
				content = SOLR_CONTENT
				content {
					field = answer
				}
				category_stringM = SOLR_RELATION
				category_stringM {
					localField = categories
					multiValue = 1
				}
				created = crdate
				description = question
				url = TEXT
				url {
					typolink {
						parameter = {$faq.ids.pid}
						additionalParams = &tx_windfaq_pi1[question]={field:uid}
						additionalParams.insertData = 1
						returnLast = url
						useCacheHash = 1
					}
				}
				sortTitle_stringS  = question
			}
		}

		poll = 1
		poll {
			table = tx_jkpoll_poll
			fields {
				abstract = title
				title = SOLR_CONTENT
				title {
					field = title
				}
				content = SOLR_CONTENT
				content {
					field = question
				}
				description = question
				url = TEXT
				url {
					typolink.parameter = {$page.poll.uid}
					typolink.additionalParams = &tx_jkpoll_pi1[poll]={field:uid}
					typolink.additionalParams.insertData = 1
					typolink.returnLast = url
					typolink.useCacheHash = 1
				}
				created = crdate
				changed = tstamp
			}
		}

		evenementen = 1
		evenementen {
			table = tx_windevents_event
			fields {
				abstract = title
				description = alttags
				title = title

				content = SOLR_CONTENT
				content {
					field = description
				}

				category_stringM = SOLR_RELATION
				category_stringM {
					localField = category
					relationTableSortingField = sorting
					multiValue = 1
				}

				keywords = SOLR_MULTIVALUE
				keywords {
					field = keywords
				}

				url = TEXT
				url {
					typolink.parameter = {$uids.pages.eventsSingle}
					typolink.additionalParams = &tx_windevents_pi1[event]={field:uid}
					typolink.additionalParams.insertData = 1
					typolink.returnLast = url
					typolink.useCacheHash = 1
				}
			}

		}

		gastboek = 1
		gastboek {
			table = tx_veguestbook_entries
			fields {
				abstract = entry
				description = entry
				title = COA
				title {
					1 = TEXT
					1.field = firstname
					2 = TEXT
					2.field = lastname
				}
				content = SOLR_CONTENT
				content {
					field = entry
				}
				created = crdate
				changed = tstamp
			}
		}

		smoelenboek = 1
		smoelenboek {
			table = tx_windraadsmoelenboek_leden
			fields {
				abstract = profilering
				description = profilering
				title = COA
				title {
					1 = TEXT
					1 {
						field = voornaam
						# use noTrimWrap to add a space after the text
						noTrimWrap = || |
					}
					2 = TEXT
					2 {
						field = achternaam
					}
				}
				content = SOLR_CONTENT
				content {
					cObject = COA
					cObject {
						10 = TEXT
						10 {
							field = voornaam
							noTrimWrap = || |
						}
						20 = TEXT
						20 {
							field = achternaam
							noTrimWrap = || |
						}
						30 = TEXT
						30 {
							field = profilering
							noTrimWrap = || |
						}
					}

				}
				remark_stringS = SOLR_CONTENT
				remark_stringS {
					field = opmerkingen
				}
				function_stringS = SOLR_CONTENT
				function_stringS {
					field = functie
				}
				otherfunctions_stringS = SOLR_CONTENT
				otherfunctions_stringS {
					field = nevenfuncties
				}

				// build the URL through typolink, make sure to use returnLast = url
				url = TEXT
				url {
					typolink.parameter = {$uids.pages.smoelSingle}
					typolink.additionalParams = &tx_windraadsmoelenboek_pi1[lid]={field:uid}
					typolink.additionalParams.insertData = 1
					typolink.returnLast = url
					typolink.useCacheHash = 1
				}
			}
		}

		pdc = 1
		pdc {
			table = tx_windproductcatalog_product
			fields {
				description = description
				title = name
				keywords = tx_windmetatags_keywords
				content = SOLR_CONTENT
				content {
					field = description
				}
				// build the URL through typolink, make sure to use returnLast = url
				url = TEXT
				url {
					typolink.parameter = {$pdc.id.catalog_uid}
					typolink.additionalParams = &tx_windproductcatalog_pi1[product]={field:uid}
					typolink.additionalParams.insertData = 1
					typolink.returnLast = url
					typolink.useCacheHash = 1
				}

			}
		}

		tt_news = 1
		tt_news {
			fields {
				abstract = short
				author = author
				description = short
				title = title

				// the special SOLR_CONTENT content object cleans HTML and RTE fields
				content = SOLR_CONTENT
				content {
					field = bodytext
				}

				// the special SOLR_RELATION content object resolves relations
				category_stringM = SOLR_RELATION
				category_stringM {
					localField = category
					multiValue = 1
				}

				// the special SOLR_MULTIVALUE content object allows to index multivalue fields
				keywords = SOLR_MULTIVALUE
				keywords {
					field = keywords
				}

				// build the URL through typolink, make sure to use returnLast = url
				url = TEXT
				url {
					typolink.parameter = {$uids.pages.newsSingle}
					typolink.additionalParams = &tx_ttnews[tt_news]={field:uid}&L={field:__solr_index_language}
					typolink.additionalParams.insertData = 1
					typolink.returnLast = url
					typolink.useCacheHash = 1
				}

				sortAuthor_stringS = author
				sortTitle_stringS  = title
			}
		}
	}
}
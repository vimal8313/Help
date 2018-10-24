<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_newslettersubscription/static/newslettersubscription/setup.txt">

plugin.tx_windnewslettersubscription_pi1 {
	templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_newslettersubscription/newslettersubscription.html
	sitename = Gemeente Vlissingen
	checkEmail = 0

	notification {
		email = nieuwsbrief@vlissingen.nl
		name = Gemeente Vlissingen
	}

	pids {
		mainoverview = {$windnewslettersubscription.mainoverview}
		homepageview = {$windnewslettersubscription.homepageview}
		storageFolder = {$windnewslettersubscription.storageFolder}
	}

	tabs {
		new {
			1 = Uw gegevens
			2 = Controle
			3 = Verwerking
			4 = Afronden
		}
		change {
			1 = Uw gegevens
			2 = Controle
			3 = Afronden
		}
		change_nohash {
			1 = Wijzigen gegevens
		}
		remove {
			1 = Uw gegevens
			2 = Afronden
		}
	}

	aanhef {
		M = Dhr.
		F = Mevr.
	}
	aanhef_mail {
		M = heer
		F = mevrouw
	}
	newsletter_stdWrap {
		# De link.
		url {
			htmlSpecialChars = 1
		}

		# Date.
		date {
			strftime = %d-%m-%Y
		}
	}
}

[PIDinRootline = {$pages.uid.orionis}]
	plugin.tx_windnewslettersubscription_pi1 {
		templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_newslettersubscription/orionis.html
		sitename = Orionis Walcheren

		notification {
			email = info@orioniswalcheren.nl
			name = Orionis Walcheren
		}

		pids {
			mainoverview = {$windnewslettersubscription.orionis.mainoverview}
			homepageview = {$windnewslettersubscription.orionis.mainoverview}
			storageFolder = {$windnewslettersubscription.orionis.storageFolder}
		}
	}
[global]

[PIDinRootline = {$pages.uid.orionis-werkgevers}]
	plugin.tx_windnewslettersubscription_pi1 {
		templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_newslettersubscription/orionis-werkgevers.html
		sitename = Orionis Walcheren

		notification {
			email = info@orioniswalcheren.nl
			name = Orionis Walcheren
		}

		pids {
			mainoverview = {$windnewslettersubscription.orionis-werkgevers.mainoverview}
			homepageview = {$windnewslettersubscription.orionis-werkgevers.mainoverview}
			storageFolder = {$windnewslettersubscription.orionis-werkgevers.storageFolder}
		}
	}
[global]

[PIDinRootline = {$pages.uid.newsletter-events}]
	plugin.tx_windnewslettersubscription_pi1 {
		templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_newslettersubscription/uitagenda.html
		sitename = Uitagenda

		notification {
			name = Uitagenda Nieuwsbrief
			emailtitle = Uitagenda Nieuwsbrief
		}

		confirmation {
			registrationtitle = Uitagenda Nieuwsbrief Aanmelding
			name = Uitagenda Nieuwsbrief
		}

		pids {
			mainoverview = {$windnewslettersubscription.newsletter-events.mainoverview}
			homepageview = {$windnewslettersubscription.newsletter-events.mainoverview}
			storageFolder = {$windnewslettersubscription.newsletter-events.storageFolder}
		}
	}
[global]

lib.newsletter_settings = TEXT
lib.newsletter_settings {
	value = Wijzig uw instellingen
	typolink {
		parameter = {$windnewslettersubscription.mainoverview}
		additionalParams = &tx_windnewslettersubscription_pi1[part]=change
		ATagParams = style="text-decoration:underline;color:#292824;"
		wrap = <f:image src="EXT:website_vlissingen/Resources/Public/Images/arrow.png" alt="pijl" />&nbsp; |
	}
}

lib.newsletter_unsubscribe = TEXT
lib.newsletter_unsubscribe {
	value = Afmelden van deze nieuwsbrief
	typolink {
		parameter = {$windnewslettersubscription.mainoverview}
		additionalParams = &tx_windnewslettersubscription_pi1[part]=change
		ATagParams = style="text-decoration:underline;color:#292824;"
		wrap = <f:image src="EXT:website_vlissingen/Resources/Public/Images/arrow.png" alt="pijl" />&nbsp; |
	}
}
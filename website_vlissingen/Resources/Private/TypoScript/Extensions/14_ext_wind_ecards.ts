<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_ecards/static/e-cards/constants.txt">
<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/wind_ecards/static/e-cards/setup.txt">

plugin.tx_windecards_pi1 {
	templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_ecards/wind_ecards.html

	categoryPid = {$uids.pages.ecardsFolder}
	picturePid = {$uids.pages.ecardsFolder}
	cardPid = {$uids.pages.ecardsFolder}

	# uid of the page where the category list view is located
	categoryListViewPid = {$uids.pages.ecardsCatList}
	# uid of the page where the category view is located
	categoryViewPid = {$uids.pages.ecardsCategory}
	# uid of the page where the picture view (with form) is located
	pictureViewPid = {$uids.pages.ecardsPicture}
	# uid of the confirmation page where the user will be redirected to after submitting a card
	confirmPid = {$uids.pages.ecardsConfirm}
	# uid of the page where the card view is located (as linked to from the e-mail)
	cardViewPid = {$uids.pages.ecardsCardView}

	email {
		subject = Een e-card van de gemeente Vlissingen
		from = gemeente@vlissingen.nl
		fromName = Gemeente Vlissingen
	}

	# Image dimensions in all the views
	categoryList {
		image {
			file {
				maxW = 150c
				maxH =
			}
		}
	}
	category {
		image {
			file {
				maxW = 228
				maxH =
			}
		}
	}
	card {
		image {
			file {
				maxW = 400
				maxH =
			}
		}
	}
}
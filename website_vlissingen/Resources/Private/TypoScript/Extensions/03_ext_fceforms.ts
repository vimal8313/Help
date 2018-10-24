plugin.tx_fceforms_pi1 {
	# Template file
	templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/fceforms/index.html

	# File types that can not be uploaded
	disallowedFileTypes = php,php3,php4,php5,php6,shtml,asp

	email {
		from = noreply@vlissingen.nl
		name = Gemeente Vlissingen
	}

	# Use print view of form as source for PDF (&print=1)
	pdfAsPrint = 1

	# Extra fields from fe_users
	userFields {
		# Display logged in username in PDF/E-mail
		username = Ingelogde gebruiker
	}

	# Full path to wkhtmltopdf executable
	wkhtmltopdfPath = {$config.wkHtmlToPdf}

	# TypoScript configuration used for content in form FCE
	formTS = RECORDS
	formTS.source.current = 1
	formTS.tables = tt_content

	overviewText = <strong>Let op!</strong> Controleer onderstaande gegevens goed. Zijn alle gegevens correct, kies dan '###SUBMITTEXT###'. Zijn de gegevens onjuist of onvolledig? Wijzig dit dan in voorgaande pagina's.

	# TypoScript for activating the finalize hook.
	useFinalizeHook = 0
}

[globalVar = GP:tx_fceforms_pi1|checked > 0]
# Do not display form content when handling finalizeUserFunc
plugin.tx_fceforms_pi1.formTS >
[global]


[globalVar = TSFE:type = 70]
page.10.childTemplate = overview
plugin.tx_templavoila_pi1.childTemplate = overview
[global]

[globalVar = TSFE:type = 71]
# Set TemplaVoila child template for finalize (used for finalizeUserFunc)
page.10.childTemplate = finalize
plugin.tx_templavoila_pi1.childTemplate = finalize
[global]

# Set overview (type=70)
overview < page
overview.typeNum = 70
overview.10.childTemplate = overview

# Set finalize (type=71) (used for finalizeUserFunc)
finalize < page
finalize.typeNum = 71
finalize.10.childTemplate = finalize
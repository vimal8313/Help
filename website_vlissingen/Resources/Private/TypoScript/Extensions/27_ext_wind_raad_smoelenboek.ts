plugin.tx_windraadsmoelenboek_pi1 {
	templateFile = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/wind_raad_smoelenboek/windraadsmoelenboek.html
	pids {
		overview = {$uids.pages.smoelOverview}
		popup = {$uids.pages.smoelPopup}
		single = {$uids.pages.smoelSingle}
		plattegrond = {$uids.pages.smoelPlattegrond}
		partijlijst = {$uids.pages.smoelPartijlijst}
		partijpagina = {$uids.pages.smoelPartijpagina}
		storageFolder = {$uids.pages.smoelStorageFolder}
	}

	showWiezitwaarDynamic = 1

	stdWrap {
		url.htmlspecialchars = 1
		emailInSidebar.crop = 25 | ...
		content.parseFunc < lib.parseFunc_RTE
	}

	imagesize {
		single {
			max_width = 148
			max_height = 181
		}
		partijLijst {
			max_width = 85
			max_height = 95
			max_width_lid = 270
			max_height_lid = 500
			max_width_logo = 82
			max_height_logo = 85
		}
		partijPagina {
			max_width = 200
			max_height = 250
		}
		plattegrond {
			max_width = 100
			max_height = 150
		}
	}
	showSocialNetworks = 1
}

page.includeJS.smoelenboek = typo3conf/ext/website_vlissingen/Resources/Public/JavaScript/smoelenboek.js
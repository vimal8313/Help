<INCLUDE_TYPOSCRIPT: source="FILE:typo3conf/ext/yag/Configuration/TypoScript/setup.txt">

plugin.tx_yag {
	view.layoutRootPath = EXT:yag/Resources/Private/Layouts/
	settings.themes.lightbox >
	settings.themes.default {
		controller {
			Gallery.index.template = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/yag/GalleryIndex.html
			ItemList.list.template = typo3conf/ext/website_vlissingen/Resources/Private/Templates/Extensions/yag/LightboxList.html
		}
		includeCSS {
			yag_theme_default =
		}

		item {
			showTitle = 1
			showDescription = 1
			showItemMeta = 0
			showOriginalDownloadLink = 0
		}

		title = Gemeente Vlissingen
		description = Fotoalbum
		showBreadcrumbs = 1
		itemList {
			itemsPerPage = 100
		}
		galleryList {
			showPager = 0
		}

		resolutionConfigs {
			thumb >
			thumb {
				width = 154c
				height= 116c
			}
			medium {
				maxW = 800
				maxH = 450
			}
		}
	}

	_LOCAL_LANG {
		nl {
			pager.showing = Toon
			tx_yag_controller_gallery.listBreadcrumb = Alle gallerijen
		}
	}
}
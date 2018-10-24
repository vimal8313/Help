mod {
	wizards.newContentElement.wizardItems.common {
		elements {
			fce_slideshow {
				icon = EXT:website_vlissingen/Resources/Public/Icons/fce_columns.png
				title = Slideshow
				description = Slideshow
				tt_content_defValues {
					CType = fce_slideshow
				}
			}
		}
		show := addToList(fce_slideshow)
	}
}
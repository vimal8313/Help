mod {
	wizards.newContentElement.wizardItems.common {
		elements {
			fce_homeslideshow {
				icon = EXT:website_vlissingen/Resources/Public/Icons/fce_columns.png
				title = Home slide show
				description = Link fce voor de homepage
				tt_content_defValues {
					CType = fce_homeslideshow
				}
			}
		}
		show := addToList(fce_homeslideshow)
	}
}
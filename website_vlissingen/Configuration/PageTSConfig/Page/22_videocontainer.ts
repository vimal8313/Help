mod {
	wizards.newContentElement.wizardItems.common {
		elements {
			fce_videocontainer {
				icon = EXT:website_vlissingen/Resources/Public/Icons/fce_columns.png
				title = Video Container
				description = Video Container fce
				tt_content_defValues {
					CType = fce_videocontainer
				}
			}
		}
		show := addToList(fce_videocontainer)
	}
}
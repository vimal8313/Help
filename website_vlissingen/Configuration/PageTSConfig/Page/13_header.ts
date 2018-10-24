mod {
	wizards.newContentElement.wizardItems.common {
		elements {
			fce_header {
				icon = EXT:website_vlissingen/Resources/Public/Icons/fce_columns.png
				title = Header
				description = Header
				tt_content_defValues {
					CType = fce_header
				}
			}
		}
		show := addToList(fce_header)
	}
}
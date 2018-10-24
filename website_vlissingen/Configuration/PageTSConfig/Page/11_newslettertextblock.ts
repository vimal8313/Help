mod {
	wizards.newContentElement.wizardItems.common {
		elements {
			fce_newslettertextblock {
				icon = EXT:website_vlissingen/Resources/Public/Icons/fce_columns.png
				title = Newsletter Text block (with image)
				description = Newsletter Text block (with image)
				tt_content_defValues {
					CType = fce_newslettertextblock
				}
			}
		}
		show := addToList(fce_newslettertextblock)
	}
}
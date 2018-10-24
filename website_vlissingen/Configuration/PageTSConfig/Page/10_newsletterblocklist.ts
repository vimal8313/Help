mod {
	wizards.newContentElement.wizardItems.common {
		elements {
			fce_newsletterblocklist {
				icon = EXT:website_vlissingen/Resources/Public/Icons/fce_columns.png
				title = Newsletter Block List
				description = Newsletter Block List
				tt_content_defValues {
					CType = fce_newsletterblocklist
				}
			}
		}
		show := addToList(fce_newsletterblocklist)
	}
}
mod {
	wizards.newContentElement.wizardItems.common {
		elements {
			fce_linklijst {
				icon = EXT:website_vlissingen/Resources/Public/Icons/fce_columns.png
				title = link list
				description = link list
				tt_content_defValues {
					CType = fce_linklijst
				}
			}
		}
		show := addToList(fce_linklijst)
	}
}
mod {
	wizards.newContentElement.wizardItems.common {
		elements {
			fce_newsletterblock {
				icon = EXT:website_vlissingen/Resources/Public/Icons/fce_columns.png
				title = Newsletter Text block
				description = Newsletter Text block
				tt_content_defValues {
					CType = fce_newsletterblock
				}
			}
		}
		show := addToList(fce_newsletterblock)
	}
}
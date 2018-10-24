mod {
	wizards.newContentElement.wizardItems.common {
		elements {
			fce_tekst {
				icon = EXT:website_vlissingen/Resources/Public/Icons/fce_columns.png
				title = Tekst
				description = Tekst
				tt_content_defValues {
					CType = fce_tekst
				}
			}
		}
		show := addToList(fce_tekst)
	}
}
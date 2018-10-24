mod {
	wizards.newContentElement.wizardItems.common {
		elements {
			fce_pdctotaaloverzicht {
				icon = EXT:website_vlissingen/Resources/Public/Icons/fce_columns.png
				title = Pdc Totaaloverzicht
				description = Pdc Totaaloverzicht fce
				tt_content_defValues {
					CType = fce_pdctotaaloverzicht
				}
			}
		}
		show := addToList(fce_pdctotaaloverzicht)
	}
}
mod {
	wizards.newContentElement.wizardItems.common {
		elements {
			fce_nieuwsbriefkol {
				icon = EXT:website_vlissingen/Resources/Public/Icons/fce_columns.png
				title =Nieuwsbrief 1 kol
				description = Nieuwsbrief  kol fce voor de homepage
				tt_content_defValues {
					CType = fce_nieuwsbriefkol
				}
			}
		}
		show := addToList(fce_nieuwsbriefkol)
	}
}
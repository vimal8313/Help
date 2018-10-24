mod {
	wizards.newContentElement.wizardItems.common {
		elements {
			fce_accordion {
				icon = EXT:site_goldner/Resources/Public/Icons/fce_accordion.png
				title = Accordion
				description = Accordion fce
				tt_content_defValues {
					CType = fce_accordion
				}
			}
		}
		show := addToList(fce_accordion)
	}
}
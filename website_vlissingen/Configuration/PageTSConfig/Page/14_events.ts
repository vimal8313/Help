mod {
	wizards.newContentElement.wizardItems.common {
		elements {
			fce_events {
				icon = EXT:website_vlissingen/Resources/Public/Icons/fce_columns.png
				title = Events
				description = Events
				tt_content_defValues {
					CType = fce_events
				}
			}
		}
		show := addToList(fce_events)
	}
}
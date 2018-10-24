mod {
	wizards.newContentElement.wizardItems.common {
		elements {
			fce_sidebarwidget {
				icon = EXT:website_vlissingen/Resources/Public/Icons/fce_columns.png
				title = Sidebar Widget
				description = Sidebar Widget
				tt_content_defValues {
					CType = fce_sidebarwidget
				}
			}
		}
		show := addToList(fce_sidebarwidget)
	}
}
mod {
	wizards.newContentElement.wizardItems.common {
		elements {
			fce_footerkolom {
				icon = EXT:website_vlissingen/Resources/Public/Icons/fce_columns.png
				title = Footer Kolom
				description = Footer Kolom
				tt_content_defValues {
					CType = fce_footerkolom
				}
			}
		}
		show := addToList(fce_footerkolom)
	}
}
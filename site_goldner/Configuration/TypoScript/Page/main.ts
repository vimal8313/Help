page = PAGE
page {
	# Page template
	10 = FLUIDTEMPLATE
	10 {
		file.stdWrap.cObject = TEXT
		file.stdWrap.cObject {
			data = levelfield:-2,backend_layout_next_level,slide
			override.field = backend_layout
			split {
				token = file__
				1.current = 1
				1.wrap = |
			}
			ifEmpty = Default
			wrap = EXT:site_goldner/Resources/Private/Templates/Pages/|.html
		}
		layoutRootPath = EXT:site_goldner/Resources/Private/Layouts/
		partialRootPath = EXT:site_goldner/Resources/Private/Partials/
		variables {

		}
	}

	bodyTagCObject = COA
	bodyTagCObject   {
		stdWrap.wrap = <body>
	}
}
